let currentMode = "selected";
let selectedTests = [0];
let currentQuestions = [];
let userAnswers = {};
let showAnswerMode = false;
let currentIndex = 0;
let questionFilter = "all";
let lastSubmitted = false;

const $ = (id) => document.getElementById(id);

function allQuestions(){
  return EXAM_DATA.flatMap(t => t.questions);
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}


function normalizeQuestion(q){
  return {
    ...q,
    _originalAnswer: q._originalAnswer || q.answer
  };
}

function shuffleQuestionOptions(question){
  const labels = ["A","B","C","D"];
  const q = normalizeQuestion(question);
  const correctIndex = labels.indexOf(q.answer);

  if(correctIndex < 0 || !Array.isArray(q.options)){
    return q;
  }

  const correctText = q.options[correctIndex];
  const mixed = shuffle(q.options.map((text, idx)=>({ text, oldLabel: labels[idx] })));
  const newAnswer = labels[mixed.findIndex(item => item.text === correctText)];

  return {
    ...q,
    options: mixed.map(item => item.text),
    answer: newAnswer,
    _originalAnswer: q._originalAnswer || q.answer
  };
}

function prepareQuestions(base){
  let list = base.map(q => normalizeQuestion(q));

  if($("shuffleToggle") && $("shuffleToggle").checked){
    list = shuffle(list);
  }

  if($("shuffleAnswerToggle") && $("shuffleAnswerToggle").checked){
    list = list.map(q => shuffleQuestionOptions(q));
  }

  return list;
}

function init(){
  const list = $("testList");

  EXAM_DATA.forEach((t, idx)=>{
    const label = document.createElement("label");
    label.className = "test-check";
    label.innerHTML = `<input type="checkbox" value="${idx}" ${idx===0 ? "checked" : ""}> <span>${t.title}</span>`;
    const input = label.querySelector("input");
    input.onchange = ()=>{
      selectedTests = [...document.querySelectorAll("#testList input:checked")].map(x=>Number(x.value));
      renderSelectedStyle();
      updateModeLabel();
    };
    list.appendChild(label);
  });

  $("fullBtn").onclick = loadFull;
  $("pinnedBtn").onclick = loadPinned;
  $("startSelectedBtn").onclick = loadSelected;
  $("selectAllBtn").onclick = ()=>{
    document.querySelectorAll("#testList input").forEach(x=>x.checked=true);
    selectedTests = EXAM_DATA.map((_,i)=>i);
    renderSelectedStyle();
    updateModeLabel();
  };
  $("clearAllBtn").onclick = ()=>{
    document.querySelectorAll("#testList input").forEach(x=>x.checked=false);
    selectedTests = [];
    renderSelectedStyle();
    updateModeLabel();
  };

  $("submitBtn").onclick = submitExam;
  $("showAnswerBtn").onclick = ()=>{showAnswerMode = !showAnswerMode; renderCurrentQuestion(); renderNavigator();};
  $("resetBtn").onclick = ()=> currentMode === "full" ? loadFull() : loadSelected();
  $("shuffleToggle").onchange = ()=> currentMode === "full" ? loadFull() : loadSelected();
  if($("shuffleAnswerToggle")) $("shuffleAnswerToggle").onchange = ()=> currentMode === "full" ? loadFull() : loadSelected();
  $("clearHistoryBtn").onclick = clearHistory;
  $("prevBtn").onclick = prevQuestion;
  $("nextBtn").onclick = nextQuestion;
  $("pinBtn").onclick = togglePinCurrent;
  $("firstUnansweredBtn").onclick = goFirstUnanswered;
  $("filterAllBtn").onclick = ()=>setQuestionFilter("all");
  $("filterCorrectBtn").onclick = ()=>setQuestionFilter("correct");
  $("filterWrongBtn").onclick = ()=>setQuestionFilter("wrong");
  $("filterPinnedBtn").onclick = ()=>setQuestionFilter("pinned");

  renderSelectedStyle();
  renderHistory();
  loadSelected();
}

function renderSelectedStyle(){
  document.querySelectorAll(".test-check").forEach(label=>{
    const input = label.querySelector("input");
    label.classList.toggle("selected", input.checked);
  });
}

function updateModeLabel(){
  const count = selectedTests.length;
  if(count === 0) $("modeLabel").textContent = "Chưa chọn";
  else $("modeLabel").textContent = `${count} đề`;
}

function loadFull(){
  currentMode = "full";
  userAnswers = {};
  showAnswerMode = false;
  lastSubmitted = false;
  questionFilter = "all";
  currentIndex = 0;
  const base = allQuestions();
  currentQuestions = prepareQuestions(base);
  $("fullBtn").classList.add("active");
  $("modeLabel").textContent = "Full";
  $("examTitle").textContent = "Full 400 câu - Kiến trúc máy tính";
  $("totalCount").textContent = currentQuestions.length;
  $("scoreCount").textContent = "-";
  $("resultBox").classList.add("hidden");
  renderAll();
}


function loadPinned(){
  const pinnedIds = getPinnedIds();

  if(!pinnedIds.length){
    alert("Bạn chưa ghim câu nào. Khi làm bài, bấm ☆ Ghim câu này để lưu câu phân vân.");
    return;
  }

  currentMode = "pinned";
  $("fullBtn").classList.remove("active");
  userAnswers = {};
  showAnswerMode = false;
  lastSubmitted = false;
  questionFilter = "all";
  currentIndex = 0;

  const base = allQuestions().filter(q => pinnedIds.includes(String(q.sourceId || q.id)));
  currentQuestions = prepareQuestions(base);

  $("modeLabel").textContent = "Câu ghim";
  $("examTitle").textContent = `Học lại ${currentQuestions.length} câu đã ghim`;
  $("totalCount").textContent = currentQuestions.length;
  $("scoreCount").textContent = "-";
  $("resultBox").classList.add("hidden");
  renderAll();
}

function loadSelected(){
  if(selectedTests.length === 0){
    alert("Bạn hãy tick ít nhất 1 đề.");
    return;
  }

  currentMode = "selected";
  $("fullBtn").classList.remove("active");
  userAnswers = {};
  showAnswerMode = false;
  lastSubmitted = false;
  questionFilter = "all";
  currentIndex = 0;

  const base = selectedTests.flatMap(i => EXAM_DATA[i].questions);
  currentQuestions = prepareQuestions(base);

  const title = selectedTests.length === 1
    ? `${EXAM_DATA[selectedTests[0]].title} - Kiến trúc máy tính`
    : `Gộp ${selectedTests.length} đề - ${currentQuestions.length} câu`;

  $("modeLabel").textContent = selectedTests.length === 1 ? EXAM_DATA[selectedTests[0]].title : `${selectedTests.length} đề`;
  $("examTitle").textContent = title;
  $("totalCount").textContent = currentQuestions.length;
  $("scoreCount").textContent = "-";
  $("resultBox").classList.add("hidden");
  renderAll();
}

function renderAll(){
  renderCurrentQuestion();
  renderNavigator();
  updateStats();
  updateFilterButtons();
}

function renderCurrentQuestion(){
  const wrap = $("questionSingle");
  const q = currentQuestions[currentIndex];

  if(!q){
    wrap.innerHTML = `<p>Chưa có câu hỏi.</p>`;
    return;
  }

  const selected = userAnswers[getKey(q, currentIndex)];

  wrap.innerHTML = `
    <div class="q-head">
      <div class="q-no">Câu ${currentIndex + 1}</div>
      <div class="q-source">Mã gốc: ${q.sourceId || q.id}</div>
    </div>
    <p class="q-text">${escapeHtml(q.question)}</p>
    <div class="options"></div>
  `;

  const opts = wrap.querySelector(".options");
  ["A","B","C","D"].forEach((label, optIdx)=>{
    const div = document.createElement("label");
    div.className = "option";
    if(selected === label) div.classList.add("selected");
    if(showAnswerMode && q.answer === label) div.classList.add("correct");
    if(showAnswerMode && selected === label && q.answer !== label) div.classList.add("wrong");

    div.innerHTML = `
      <input type="radio" name="q-current" value="${label}" ${selected===label?"checked":""}>
      <div><b>${label}.</b> ${escapeHtml(q.options[optIdx] || "")}</div>
    `;

    div.querySelector("input").onchange = ()=>{
      chooseAnswer(label);
    };

    opts.appendChild(div);
  });

  $("currentText").textContent = `Câu ${currentIndex + 1}/${currentQuestions.length}`;
  updatePinButton();
}

function renderNavigator(){
  const nav = $("questionNavigator");
  nav.innerHTML = "";

  const visibleIndexes = getVisibleIndexes();

  visibleIndexes.forEach((idx)=>{
    const q = currentQuestions[idx];
    const key = getKey(q, idx);
    const selected = userAnswers[key];
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.textContent = idx + 1;

    if(idx === currentIndex) btn.classList.add("current");
    if(selected) btn.classList.add("answered");
    if(isPinned(q)) btn.classList.add("pinned");

    if(lastSubmitted || showAnswerMode){
      if(selected === q.answer) btn.classList.add("correct");
      else btn.classList.add("wrong");
    }

    btn.onclick = ()=>{
      currentIndex = idx;
      renderCurrentQuestion();
      renderNavigator();
      scrollMainTop();
    };

    nav.appendChild(btn);
  });

  if(!visibleIndexes.length){
    nav.innerHTML = `<div class="empty-nav">Không có câu phù hợp bộ lọc.</div>`;
  }

  $("prevBtn").disabled = currentIndex === 0;
  $("nextBtn").disabled = currentIndex === currentQuestions.length - 1;
}

function getPinnedIds(){
  try{
    return JSON.parse(localStorage.getItem("pinnedQuestionIds") || "[]").map(String);
  }catch(e){
    return [];
  }
}

function savePinnedIds(ids){
  localStorage.setItem("pinnedQuestionIds", JSON.stringify([...new Set(ids.map(String))]));
}

function isPinned(q){
  return getPinnedIds().includes(String(q.sourceId || q.id));
}

function togglePinCurrent(){
  const q = currentQuestions[currentIndex];
  if(!q) return;

  const id = String(q.sourceId || q.id);
  const ids = getPinnedIds();
  const nextIds = ids.includes(id) ? ids.filter(x=>x !== id) : [id, ...ids];

  savePinnedIds(nextIds);
  updatePinButton();
  renderNavigator();
}

function updatePinButton(){
  const btn = $("pinBtn");
  const q = currentQuestions[currentIndex];
  if(!btn || !q) return;

  if(isPinned(q)){
    btn.textContent = "★ Đã ghim";
    btn.classList.add("active-pin");
  }else{
    btn.textContent = "☆ Ghim câu này";
    btn.classList.remove("active-pin");
  }
}

function getQuestionResult(q, idx){
  const selected = userAnswers[getKey(q, idx)];
  return selected === q.answer ? "correct" : "wrong";
}

function getVisibleIndexes(){
  return currentQuestions
    .map((q, idx)=>({q, idx}))
    .filter(({q, idx})=>{
      if(questionFilter === "all") return true;
      if(questionFilter === "pinned") return isPinned(q);
      if(!lastSubmitted && !showAnswerMode) return true;
      return getQuestionResult(q, idx) === questionFilter;
    })
    .map(x=>x.idx);
}

function setQuestionFilter(filter){
  questionFilter = filter;
  const visible = getVisibleIndexes();

  if(visible.length && !visible.includes(currentIndex)){
    currentIndex = visible[0];
  }

  renderCurrentQuestion();
  renderNavigator();
  updateFilterButtons();
}

function updateFilterButtons(){
  const map = {
    all: "filterAllBtn",
    correct: "filterCorrectBtn",
    wrong: "filterWrongBtn",
    pinned: "filterPinnedBtn"
  };

  Object.entries(map).forEach(([key, id])=>{
    const btn = $(id);
    if(btn) btn.classList.toggle("active-filter", questionFilter === key);
  });
}

function chooseAnswer(answer){
  const q = currentQuestions[currentIndex];
  if(!q) return;

  userAnswers[getKey(q, currentIndex)] = answer;

  if($("instantToggle").checked) showAnswerMode = true;

  updateStats();
  renderCurrentQuestion();
  renderNavigator();

  if($("autoNextToggle").checked && currentIndex < currentQuestions.length - 1){
    setTimeout(()=>nextQuestion(), 80);
  }
}

function prevQuestion(){
  if(currentIndex > 0){
    currentIndex--;
    renderCurrentQuestion();
    renderNavigator();
    scrollMainTop();
  }
}

function nextQuestion(){
  if(currentIndex < currentQuestions.length - 1){
    currentIndex++;
    renderCurrentQuestion();
    renderNavigator();
    scrollMainTop();
  }
}

function goFirstUnanswered(){
  const idx = currentQuestions.findIndex((q, i)=>!userAnswers[getKey(q, i)]);
  if(idx >= 0){
    currentIndex = idx;
    renderCurrentQuestion();
    renderNavigator();
    scrollMainTop();
  }else{
    alert("Bạn đã làm hết các câu trong bộ này.");
  }
}

function scrollMainTop(){
  const top = document.querySelector(".progress-card").getBoundingClientRect().top + window.pageYOffset - 10;
  window.scrollTo({top, behavior:"auto"});
}

function getKey(q, idx){
  return `${q.sourceId || q.id}_${idx}`;
}

function updateStats(){
  const answered = Object.keys(userAnswers).length;
  $("answeredCount").textContent = answered;
  const total = currentQuestions.length || 1;
  const percent = Math.round(answered/total*100);
  $("progressBar").style.width = `${percent}%`;
  $("progressText").textContent = `${percent}%`;
}

function submitExam(){
  let correct = 0;
  currentQuestions.forEach((q, idx)=>{
    if(userAnswers[getKey(q, idx)] && userAnswers[getKey(q, idx)] === q.answer) correct++;
  });
  const total = currentQuestions.length;
  const score10 = total ? (correct*10/total).toFixed(2) : "0.00";
  $("scoreCount").textContent = score10;
  saveHistory(correct, total, score10);

  const box = $("resultBox");
  box.classList.remove("hidden");
  box.innerHTML = `<h3>Kết quả: ${correct}/${total} câu đúng</h3>
    <p>Điểm quy đổi: <b>${score10}/10</b>. Câu đúng/sai sẽ hiện trên danh sách câu và đáp án.</p>`;

  lastSubmitted = true;
  showAnswerMode = true;
  updateFilterButtons();
  renderCurrentQuestion();
  renderNavigator();
  window.scrollTo({top:0,behavior:"smooth"});
}

function getHistory(){
  try{
    return JSON.parse(localStorage.getItem("examHistory") || "[]");
  }catch(e){
    return [];
  }
}

function saveHistory(correct, total, score){
  const history = getHistory();
  const title = $("examTitle").textContent;
  const answered = Object.keys(userAnswers).length;
  history.unshift({
    time: new Date().toLocaleString("vi-VN"),
    title,
    correct,
    total,
    score: Number(score),
    answered
  });
  localStorage.setItem("examHistory", JSON.stringify(history.slice(0, 50)));
  renderHistory();
}

function renderHistory(){
  const history = getHistory();
  const list = $("historyList");
  if(!list) return;

  $("historyCount").textContent = history.length;
  if(history.length){
    const best = Math.max(...history.map(x=>Number(x.score)||0));
    const avg = history.reduce((s,x)=>s+(Number(x.score)||0),0) / history.length;
    $("historyBest").textContent = best.toFixed(2);
    $("historyAvg").textContent = avg.toFixed(2);
  }else{
    $("historyBest").textContent = "-";
    $("historyAvg").textContent = "-";
  }

  list.innerHTML = "";
  if(!history.length){
    list.innerHTML = `<div class="history-item"><p>Chưa có lịch sử. Nộp bài xong kết quả sẽ lưu ở đây.</p></div>`;
    return;
  }

  history.slice(0, 12).forEach(item=>{
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <div class="h-top">
        <b>${escapeHtml(item.title)}</b>
        <span class="score-pill">${Number(item.score).toFixed(2)}</span>
      </div>
      <p>${escapeHtml(item.time)} · Đúng ${item.correct}/${item.total} · Đã làm ${item.answered}/${item.total}</p>
    `;
    list.appendChild(div);
  });
}

function clearHistory(){
  if(confirm("Xóa toàn bộ lịch sử làm bài?")){
    localStorage.removeItem("examHistory");
    renderHistory();
  }
}

document.addEventListener("keydown", (e)=>{
  const keyMap = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D"
  };

  const active = document.activeElement;
  const tag = active ? active.tagName.toLowerCase() : "";
  if(tag === "input" || tag === "textarea" || tag === "select") return;

  if(keyMap[e.key]){
    e.preventDefault();
    chooseAnswer(keyMap[e.key]);
  }

  if(e.key === "ArrowLeft"){
    e.preventDefault();
    prevQuestion();
  }

  if(e.key === "ArrowRight"){
    e.preventDefault();
    nextQuestion();
  }

  if(e.key.toLowerCase() === "p"){
    e.preventDefault();
    togglePinCurrent();
  }
});

function escapeHtml(str){
  return String(str || "").replace(/[&<>"']/g, m=>({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
}

init();
