const EXAM_DATA = [
  {
    "id": 1,
    "title": "Đề 1",
    "questions": [
      {
        "id": 1,
        "sourceId": 1,
        "question": "Trình tự xử lý thông tin của máy tính là",
        "options": [
          "CPU → Đĩa cứng → Màn hình",
          "Nhận thông tin → Xử lý thông tin → Xuất thông tin",
          "CPU → Màn hình → Máy in",
          "Bàn phím → CPU → Màn hình"
        ],
        "answer": "B"
      },
      {
        "id": 2,
        "sourceId": 2,
        "question": "Các chức năng cơ bản của máy tính",
        "options": [
          "Lưu trữ dữ liệu, Chạy chương trình, Nối ghép với thiết bị ngoại vi, Truy nhập bộ nhớ",
          "Trao đổi dữ liệu, Điều khiển, Thực hiện lệnh, Xử lý dữ liệu",
          "Lưu trữ dữ liệu, Xử lý dữ liệu, Trao đổi dữ liệu, Điều khiển",
          "Điều khiển, Lưu trữ dữ liệu, Thực hiện phép toán, Kết nối Internet"
        ],
        "answer": "C"
      },
      {
        "id": 3,
        "sourceId": 3,
        "question": "Các thành phần cơ bản của máy tính",
        "options": [
          "RAM, CPU, ổ đĩa cứng, Bus liên kết",
          "Hệ thống nhớ, Bus liên kết, ROM, Bàn phím",
          "Hệ thống nhớ, Bộ xử lý, Màn hình, Chuột",
          "Hệ thống nhớ, Bộ xử lý, Hệ thống vào ra, Bus liên kết"
        ],
        "answer": "D"
      },
      {
        "id": 4,
        "sourceId": 4,
        "question": "Hệ thống vào/ra của máy tính không bao gồm đồng thời các thiết bị sau",
        "options": [
          "Đĩa từ, Loa, Đĩa CD-ROM",
          "Màn hình, RAM, Máy in",
          "CPU, Chuột, Máy Scan",
          "ROM, RAM, Các thanh ghi"
        ],
        "answer": "D"
      },
      {
        "id": 5,
        "sourceId": 5,
        "question": "Máy tính ENIAC là máy tính",
        "options": [
          "Do Bộ giáo dục Mỹ đặt hàng",
          "Là máy tính ra đời vào những năm 1970",
          "Dùng vi mạch cỡ nhỏ và cỡ vừa",
          "Là máy tính điện tử đầu tiên trên thế giới"
        ],
        "answer": "D"
      },
      {
        "id": 6,
        "sourceId": 6,
        "question": "Một trong các đặc điểm của máy tính John Von Newmann là",
        "options": [
          "Máy tính có thể hoạt động theo một chương trình đã được lưu trữ",
          "Máy tính có thể điều khiển mọi hoạt động bằng một chương trình duy nhất",
          "Bộ nhớ máy tính không thể địa chỉ hóa được",
          "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"
        ],
        "answer": "A"
      },
      {
        "id": 7,
        "sourceId": 7,
        "question": "Hai dạng thông tin cơ bản mà bộ nhớ chính (RAM) nạp vào là gì?",
        "options": [
          "Chỉ thị và dữ liệu của chương trình",
          "Chỉ thị và các giá trị số học của chương trình",
          "Các giá trị thập phân, nhị phân, hexa",
          "Các văn bản và hình ảnh"
        ],
        "answer": "A"
      },
      {
        "id": 8,
        "sourceId": 8,
        "question": "Phát biểu nào sau đây là đúng cho trường hợp Little Endian",
        "options": [
          "Địa chỉ cao chứa byte có trọng số cao",
          "Địa chỉ cao chứa byte có trọng số thấp",
          "Địa chỉ cao chứa chỉ thị đứng sau",
          "Địa chỉ cao chứa chỉ thị đứng trước"
        ],
        "answer": "A"
      },
      {
        "id": 9,
        "sourceId": 9,
        "question": "Phát biểu nào sau đây là đúng cho trường hợp Big Endian",
        "options": [
          "Địa chỉ cao chứa byte có trọng số thấp",
          "Địa chỉ cao chứa dữ liệu lớn",
          "Địa chỉ cao chứa chỉ thị đứng sau",
          "Địa chỉ cao chứa chỉ thị đứng trước"
        ],
        "answer": "A"
      },
      {
        "id": 10,
        "sourceId": 10,
        "question": "Chỉ thị của máy tính IAS của John Von Newmann có bao nhiêu bit",
        "options": [
          "20 bit",
          "40 bit",
          "16 bit",
          "32 bit"
        ],
        "answer": "A"
      },
      {
        "id": 11,
        "sourceId": 11,
        "question": "Số lượng chỉ thị có thể trên máy tính của John Von Neumann là bao nhiêu",
        "options": [
          "256",
          "64",
          "21",
          "128"
        ],
        "answer": "A"
      },
      {
        "id": 12,
        "sourceId": 12,
        "question": "Số thanh ghi trong máy tính của John Von Neumann là bao nhiêu",
        "options": [
          "7",
          "8",
          "5",
          "6"
        ],
        "answer": "A"
      },
      {
        "id": 13,
        "sourceId": 13,
        "question": "Máy tính John Von Newmann là máy tính",
        "options": [
          "Chỉ có 01 bộ xử lý, thực hiện các lệnh tuần tự",
          "Có thể thực hiện nhiều lệnh cùng một lúc (song song)",
          "Thực hiện theo chương trình nằm sẵn bên trong bộ nhớ",
          "Cả ##A và ##C"
        ],
        "answer": "D"
      },
      {
        "id": 14,
        "sourceId": 14,
        "question": "Các loại ngắt trong hệ thống máy tính bao gồm",
        "options": [
          "Ngắt cứng, ngắt mềm, ngắt trung gian",
          "Ngắt cứng, ngắt mềm, ngắt ngoại lệ",
          "Ngắt cứng, ngắt ngoại lệ, ngắt INTR",
          "Ngắt mềm, ngắt NMI, ngắt cứng"
        ],
        "answer": "B"
      },
      {
        "id": 15,
        "sourceId": 15,
        "question": "Trong hệ thống máy tính, bộ đếm chương trình là",
        "options": [
          "Thanh ghi chứa lệnh sắp thực hiện",
          "Thanh ghi đa năng",
          "Thanh ghi chứa địa chỉ lệnh",
          "Thanh ghi chứa địa chỉ lệnh sắp thực hiện"
        ],
        "answer": "D"
      },
      {
        "id": 16,
        "sourceId": 16,
        "question": "Thông tin được lưu trữ và truyền bên trong máy tính dưới dạng",
        "options": [
          "Mã ASCII",
          "Thập phân",
          "Nhị phân",
          "Kết hợp chữ cái và chữ số"
        ],
        "answer": "C"
      },
      {
        "id": 17,
        "sourceId": 17,
        "question": "Địa chỉ quay về chương trình chính từ chương trình con phục vụ ngắt được lưu vào đâu trước khi chương trình con phục vụ ngắt được thực hiện",
        "options": [
          "Bảng vectơ ngắt",
          "Vùng nhớ ngăn xếp",
          "Cặp thanh ghi CS:IP",
          "Vùng nhớ dành riêng cho chương trình"
        ],
        "answer": "B"
      },
      {
        "id": 18,
        "sourceId": 18,
        "question": "Người ta đánh giá sự phát triển của máy tính qua các giai đoạn dựa vào tiêu chí nào trong các tiêu chí sau đây",
        "options": [
          "Mức độ tích hợp của các vi mạch điện tử trong máy tính",
          "Sự phát triển của các thiết bị ngoại vi",
          "Tốc độ tính toán của máy tính",
          "Cả ##A và ##C đúng"
        ],
        "answer": "D"
      },
      {
        "id": 19,
        "sourceId": 19,
        "question": "Kiến trúc của máy tính là đề cập đến những điều gì?",
        "options": [
          "Các thuộc tính logic và cách xây dựng các thuộc tính logic dựa trên tổ chức vật lý",
          "Hình dáng bên ngoài của máy tính bao gồm các thiết bị ngoại vi",
          "Chi tiết các cấu kiện mạch điện tử và nguyên lý hoạt động xử lý tạo thành máy tính",
          "Chi tiết các thành phần phần mềm thực hiện các khả năng computing"
        ],
        "answer": "A"
      },
      {
        "id": 20,
        "sourceId": 20,
        "question": "Máy tính GPC (general purpose computer) là như thế nào",
        "options": [
          "Máy tính có thể thay đổi chức năng tùy vào chương trình",
          "Máy tính được thiết kế để chạy các ứng dụng phổ biến",
          "Máy tính chỉ để cho cá nhân sử dụng",
          "Máy tính chuyên xử lý dữ liệu"
        ],
        "answer": "A"
      },
      {
        "id": 21,
        "sourceId": 21,
        "question": "Trong mô hình máy tính John Von Neumann mỗi lần nạp chỉ thị từ bộ nhớ, chỉ thị bên phải được đặt vào đâu?",
        "options": [
          "IBR",
          "IR",
          "MAR",
          "PC"
        ],
        "answer": "A"
      },
      {
        "id": 22,
        "sourceId": 22,
        "question": "Phát biểu nào sau đây đúng?",
        "options": [
          "Máy tính được thiết kế theo kiến trúc Harvard vì mục đích chạy nhanh",
          "Máy tính được thiết kế theo kiến trúc John Von Neumann vì mục đích chạy nhanh",
          "Máy tính được thiết kế theo kiến trúc Harvard vì mục đích giảm giá thành",
          "Máy tính được thiết kế theo kiến trúc John Von Neumann vì mục đích giảm giá thành"
        ],
        "answer": "A"
      },
      {
        "id": 23,
        "sourceId": 23,
        "question": "Thanh ghi nào sau đây có chức năng chứa operation code của chỉ thị trong máy tính John Von Neumann?",
        "options": [
          "IR",
          "MAR",
          "MBR",
          "MQ"
        ],
        "answer": "A"
      },
      {
        "id": 24,
        "sourceId": 24,
        "question": "Thanh ghi nào sau đây có chức năng lưu tạm chỉ thị trong máy tính của John Von Neumann",
        "options": [
          "IBR",
          "IR",
          "MBR",
          "AC"
        ],
        "answer": "A"
      },
      {
        "id": 25,
        "sourceId": 25,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Máy tính theo mô hình Harvard không sử dụng khái niệm stored program",
          "Máy tính theo mô hình Harvard có bộ nhớ chương trình và bộ nhớ dữ liệu tách biệt",
          "Máy tính theo mô hình Harvard có thể thực hiện truyền dữ liệu",
          "Máy tính theo mô hình Harvard không có tính năng self modifying code"
        ],
        "answer": "A"
      },
      {
        "id": 26,
        "sourceId": 26,
        "question": "Các ký hiệu sau đây là các thanh ghi trong máy tính IAS",
        "options": [
          "IBR, MAR, MBR, AC, PC",
          "AC, MBR, BCR, IQ, VBR",
          "AC, MBR, IR, MQR, MAR",
          "MAR, MBR, CQR, AX, EAX"
        ],
        "answer": "A"
      },
      {
        "id": 27,
        "sourceId": 27,
        "question": "Đâu là đặc trưng của kiến trúc John Von Neumann",
        "options": [
          "Chỉ thị và dữ liệu dùng chung bộ nhớ",
          "Có bốn thành phần chính là CPU, I/O, BUS, Memory",
          "Dùng stored-program",
          "Dùng general-purpose hardware"
        ],
        "answer": "A"
      },
      {
        "id": 28,
        "sourceId": 28,
        "question": "Phát biểu nào sau đây là đúng khi nói về đặc trưng của kiến trúc máy tính Harvard",
        "options": [
          "Chỉ thị và dữ liệu không dùng chung bus",
          "Data bus là chung cho cả chỉ thị và dữ liệu",
          "Không có thành phần I/O",
          "Chỉ có thành phần bộ nhớ thứ cấp"
        ],
        "answer": "A"
      },
      {
        "id": 29,
        "sourceId": 29,
        "question": "Với máy tính theo kiến trúc John Von Neumann, trong quá trình nạp chương trình từ bộ nhớ, thanh ghi MBR sẽ chứa gì bên trong",
        "options": [
          "Chỉ thị ở dạng mã máy",
          "Mã lệnh của chỉ thị",
          "Địa chỉ của chỉ thị",
          "Mã nhị phân của chỉ thị ở dạng hợp ngữ"
        ],
        "answer": "A"
      },
      {
        "id": 30,
        "sourceId": 30,
        "question": "Trong trường hợp biểu diễn số nguyên theo số bù hai thì số nhị phân 11101110 là biểu diễn cho số nào?",
        "options": [
          "-18",
          "-19",
          "-238",
          "-110"
        ],
        "answer": "A"
      },
      {
        "id": 31,
        "sourceId": 31,
        "question": "Trong trường hợp biểu diễn số nguyên theo số bù hai thì số nhị phân 10001111 là biểu diễn cho số nào?",
        "options": [
          "-113",
          "-15",
          "-143",
          "-16"
        ],
        "answer": "A"
      },
      {
        "id": 32,
        "sourceId": 32,
        "question": "Big endian và little endian là đề cập đến điều gì?",
        "options": [
          "Thứ tự địa chỉ lưu trữ các byte của một từ nhớ gồm nhiều byte",
          "Quan hệ giữa các byte trong từ nhớ gồm nhiều byte",
          "Qui tắc đánh địa chỉ trong bộ nhớ chính",
          "Giá trị lớn hay nhỏ của địa chỉ lưu trữ dữ liệu trong bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 33,
        "sourceId": 33,
        "question": "Phát biểu nào sau đây là ĐÚNG",
        "options": [
          "Biên dịch là quá trình chuyển 1 chương trình được viết từ ngôn ngữ mức cao sang ngôn ngữ mà máy tính có thể hiểu được",
          "Biên dịch là quá trình vừa chuyển 1 chương trình được viết từ ngôn ngữ mức cao sang ngôn ngữ mà máy tính có thể hiểu được và thực hiện luôn từng lệnh",
          "Biên dịch và thông dịch là quá trình tạo ra ngôn ngữ máy",
          "Biên dịch và thông dịch là quá trình tạo ra một chương trình được viết bằng ngôn ngữ mà máy có thể hiểu được"
        ],
        "answer": "A"
      },
      {
        "id": 34,
        "sourceId": 34,
        "question": "Chương trình chính Main và chương trình con Proc1 và Proc2 nằm trong bộ nhớ như sau, thứ tự thực thi chương trình lần lượt tại các địa chỉ là",
        "options": [
          "4000→ 4100→ 4101→ 4600→ 4800→ 4601→ 4650→ 4800→ 4651→ 4101",
          "4000→ 4100→ 4500→ 4600→ 4800→ 4601→ 4650→ 4800→ 4651→ 4101",
          "4000→ 4100→ 4500→ 4600→ 4800→ 4601→ 4650→ 4800→ 4651→ 4800",
          "4000→ 4100→ 4500→ 4600→ 4601→ 4601→ 4650→ 4800→ 4651→ 4101"
        ],
        "answer": "B"
      },
      {
        "id": 35,
        "sourceId": 35,
        "question": "Khái niệm computing là bao gồm những gì?",
        "options": [
          "Xử lý tính toán, điều khiển, lưu trữ và truyền tin",
          "Điều khiển, xử lý tính toán, truyền thông tin và lập trình",
          "Lưu trữ, điều khiển, xử lý tính toán và thiết kế",
          "Điều khiển, lưu trữ, xử lý tính toán và quản lý"
        ],
        "answer": "A"
      },
      {
        "id": 36,
        "sourceId": 36,
        "question": "Khái niệm stored-program không đề cập đến điều gì?",
        "options": [
          "Chu kỳ chỉ thị",
          "Xử lý tuần tự chỉ thị",
          "Đặt chương trình vào bộ nhớ thực thi",
          "Tham chiếu nội dung trong bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 37,
        "sourceId": 37,
        "question": "Khái niệm stored-program đề cập đến điều gì?",
        "options": [
          "Nguyên lý thực thi chương trình tự động",
          "Các tác vụ chủ yếu của một CPU",
          "Các trạng thái hoạt động trong chu kỳ chỉ thị",
          "Nguyên lý truy xuất nội dung trong bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 38,
        "sourceId": 38,
        "question": "Trình biên dịch có nhiệm vụ gì?",
        "options": [
          "Chuyển chỉ thị thành tín hiệu điều khiển",
          "Thực thi chương trình máy tính",
          "Qui định lên tập tín hiệu điều khiển",
          "Nạp chỉ thị cho máy tính"
        ],
        "answer": "A"
      },
      {
        "id": 39,
        "sourceId": 39,
        "question": "Máy tính theo mô hình Harvard sử dụng cho các ứng dụng có yêu cầu như thế nào?",
        "options": [
          "Yêu cầu nghiêm ngặt về độ trễ",
          "Yêu cầu nghiêm ngặt về công suất",
          "Yêu cầu nghiêm ngặt về độ chính xác",
          "Yêu cầu nghiêm ngặt về kích thước"
        ],
        "answer": "A"
      },
      {
        "id": 40,
        "sourceId": 40,
        "question": "Đâu không là thành phần cơ bản bên trong bộ vi xử lý",
        "options": [
          "ALU (Arithmetic and Logic Unit)",
          "Control Unit",
          "DRAM",
          "Các thanh ghi"
        ],
        "answer": "C"
      }
    ]
  },
  {
    "id": 2,
    "title": "Đề 2",
    "questions": [
      {
        "id": 41,
        "sourceId": 41,
        "question": "Trong các bộ phận sau, bộ phận nào thuộc bộ xử lý trung tâm",
        "options": [
          "Bộ nhớ chính",
          "Đơn vị phối ghép vào ra",
          "Tập các thanh ghi đa năng",
          "Bus hệ thống"
        ],
        "answer": "C"
      },
      {
        "id": 42,
        "sourceId": 42,
        "question": "Trong các bộ phận sau, bộ phận nào không thuộc bộ xử lý trung tâm:",
        "options": [
          "Đơn vị phối ghép vào ra",
          "Khối xử lý số học và logic",
          "Tập các thanh ghi đa năng",
          "Khối điều khiển"
        ],
        "answer": "A"
      },
      {
        "id": 43,
        "sourceId": 43,
        "question": "CPU nhận chỉ thị từ",
        "options": [
          "Bộ nhớ hoặc thiết bị ngoại vi",
          "Bộ nhớ",
          "Thiết bị ngoại vi",
          "BUS"
        ],
        "answer": "B"
      },
      {
        "id": 44,
        "sourceId": 44,
        "question": "CPU nhận dữ liệu từ",
        "options": [
          "Bộ nhớ hoặc thiết bị ngoại vi",
          "Bộ nhớ",
          "Thiết bị ngoại vi",
          "BUS"
        ],
        "answer": "A"
      },
      {
        "id": 45,
        "sourceId": 45,
        "question": "Kết quả sau mỗi bước tính của ALU thường được lưu ở đâu",
        "options": [
          "Vùng nhớ Heap",
          "Accumulators",
          "Registers",
          "Vùng nhớ Stack"
        ],
        "answer": "B"
      },
      {
        "id": 46,
        "sourceId": 46,
        "question": "Số bước cơ bản khi thực hiện 1 lệnh không bao gồm ngắt trong bộ xử lý 8086 là",
        "options": [
          "6 bước",
          "3 bước",
          "5 bước",
          "4 bước"
        ],
        "answer": "C"
      },
      {
        "id": 47,
        "sourceId": 47,
        "question": "Đối với cờ Carry (CF), phát biểu nào sau đây là đúng",
        "options": [
          "Được thiết lập khi phép toán có nhớ ra khỏi bit cao nhất",
          "Được thiết lập khi phép toán không có nhớ ra khỏi bit cao nhất",
          "Đây là cờ báo tràn đối với số có dấu",
          "Đây là cờ thể hiện dấu khi biểu diễn số có dấu"
        ],
        "answer": "A"
      },
      {
        "id": 48,
        "sourceId": 48,
        "question": "Đối với cờ Overflow (OF), phát biểu nào sau đây là đúng",
        "options": [
          "Được thiết lập khi cộng hai số cùng dấu cho kết quả khác dấu",
          "Được thiết lập khi cộng hai số khác dấu cho kết quả âm",
          "Được thiết lập khi cộng hai số cùng dấu cho kết quả cùng dấu",
          "Đây là cờ báo tràn đối với số không dấu"
        ],
        "answer": "A"
      },
      {
        "id": 49,
        "sourceId": 49,
        "question": "Thanh ghi nào được dùng để lưu trữ địa chỉ cổng vào ra khi bộ vi xử lý thao tác với các thiết bị ngoại vi",
        "options": [
          "AX",
          "BX",
          "CX",
          "DX"
        ],
        "answer": "D"
      },
      {
        "id": 50,
        "sourceId": 50,
        "question": "Thanh ghi nào được khởi tạo đầu tiên khi thực hiện một chương trình",
        "options": [
          "MDR",
          "PC",
          "IR",
          "MAR"
        ],
        "answer": "B"
      },
      {
        "id": 51,
        "sourceId": 51,
        "question": "CPU là viết tắt của các từ nào?",
        "options": [
          "Central Processing Unit",
          "Control Processing Unit",
          "Command Program Unit",
          "Counting Program Unit"
        ],
        "answer": "A"
      },
      {
        "id": 52,
        "sourceId": 52,
        "question": "ALU là viết tắt của các từ nào?",
        "options": [
          "Arithmetic Logic Unit",
          "Arithmetic Logical Unit",
          "Algorithm Logic Unit",
          "Algorithm Logical Unit"
        ],
        "answer": "A"
      },
      {
        "id": 53,
        "sourceId": 53,
        "question": "Trong chu kỳ chỉ thị của máy tính cơ bản ban đầu có bao nhiêu trạng thái khác biệt?",
        "options": [
          "Có 7 trạng thái khác biệt",
          "Có 5 trạng thái khác biệt",
          "Có 6 trạng thái khác biệt",
          "Có 8 trạng thái khác biệt"
        ],
        "answer": "A"
      },
      {
        "id": 54,
        "sourceId": 54,
        "question": "Trong chu kỳ chỉ thị của máy tính cơ bản ban đầu có bao nhiêu trạng thái không diễn ra bên trong CPU?",
        "options": [
          "Có 3 trạng thái hoạt động không diễn ra trong CPU",
          "Có 4 trạng thái hoạt động không diễn ra trong CPU",
          "Có 5 trạng thái hoạt động không diễn ra trong CPU",
          "Có 2 trạng thái hoạt động không diễn ra trong CPU"
        ],
        "answer": "A"
      },
      {
        "id": 55,
        "sourceId": 55,
        "question": "Trong chu kỳ chỉ thị của máy tính cơ bản ban đầu có bao nhiêu trạng thái diễn ra bên trong CPU?",
        "options": [
          "Có 5 trạng thái hoạt động diễn ra trong CPU",
          "Có 3 trạng thái hoạt động diễn ra trong CPU",
          "Có 4 trạng thái hoạt động diễn ra trong CPU",
          "Có 2 trạng thái hoạt động diễn ra trong CPU"
        ],
        "answer": "A"
      },
      {
        "id": 56,
        "sourceId": 56,
        "question": "00021Trong chu kỳ chỉ thị không ngắt có bao nhiêu trạng thái?",
        "options": [
          "7 trạng thái",
          "8 trạng thái",
          "6 trạng thái",
          "9 trạng thái"
        ],
        "answer": "A"
      },
      {
        "id": 57,
        "sourceId": 57,
        "question": "Có bao nhiêu nhóm thanh ghi trong máy tính?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "A"
      },
      {
        "id": 58,
        "sourceId": 58,
        "question": "PSW là thành phần gì?",
        "options": [
          "Thanh ghi giữ mã điều kiện và trạng thái",
          "Thanh ghi giữ trạng thái và điều khiển",
          "Thành phần giải mã địa chỉ trong máy tính John Von Neumann",
          "Thành phần hỗ trợ ánh xạ cache"
        ],
        "answer": "A"
      },
      {
        "id": 59,
        "sourceId": 59,
        "question": "MIPS là đơn vị đo lường gì bên trong máy tính?",
        "options": [
          "Số triệu chỉ thị được thực thi trong một giây",
          "Số triệu bit được truyền trong một giây",
          "Số triệu byte được xử lý trong một giây",
          "Số triệu xung đồng hồ trong một giây"
        ],
        "answer": "A"
      },
      {
        "id": 60,
        "sourceId": 60,
        "question": "Khi gọi máy tính 32 bit hay 64 bit có nghĩa là gì?",
        "options": [
          "Kích thước thanh ghi bên trong CPU là 32 hay 64 bit",
          "Kích thước bus dữ liệu của CPU là 32 hay 64 bit",
          "Kích thước bus địa chỉ của CPU là 32 hay 64 bit",
          "Kích thước bus điều khiển của CPU là 32 hay 64 bit"
        ],
        "answer": "A"
      },
      {
        "id": 61,
        "sourceId": 61,
        "question": "Đối với ALU, phát biểu nào sau đây là đúng",
        "options": [
          "Thực thi phép toán số học",
          "Thực thi phép toán logic",
          "Cả ##A và ##B",
          "Điều khiển quá trình thực thi"
        ],
        "answer": "C"
      },
      {
        "id": 62,
        "sourceId": 62,
        "question": "Đối với ALU, phát biểu nào sau đây là sai",
        "options": [
          "Thực hiện phép cộng trừ",
          "Thực hiện phép tính căn bậc hai",
          "Thực hiện phép dịch bit",
          "Thực hiện phép so sánh"
        ],
        "answer": "B"
      },
      {
        "id": 63,
        "sourceId": 63,
        "question": "Đối với các thanh ghi trong CPU, phát biểu nào sau đây là sai",
        "options": [
          "Người lập trình có thể thay đổi nội dung mọi thanh ghi",
          "Nằm trong CPU",
          "Chứa các thông tin tạm thời",
          "Là mức đầu tiên trong hệ thống nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 64,
        "sourceId": 64,
        "question": "Đối với các thanh ghi trong CPU, phát biểu nào sau đây là đúng",
        "options": [
          "Đều là các thanh ghi dữ liệu",
          "Chứa trạng thái của các thiết bị ngoại vi",
          "Có loại thanh ghi không lập trình được",
          "Mọi thanh ghi đều có thể lập trình được"
        ],
        "answer": "C"
      },
      {
        "id": 65,
        "sourceId": 65,
        "question": "Đối với các thanh ghi địa chỉ trong CPU, phát biểu nào sau đây là sai",
        "options": [
          "Bộ đếm chương trình (PC) quản lý địa chỉ vùng lệnh",
          "Thanh ghi lệnh (IR) quản lý địa chỉ vùng lệnh",
          "Thanh ghi con trỏ dữ liệu (DP) quản lý địa chỉ vùng dữ liệu",
          "Thanh ghi con trỏ ngăn xếp (SP) quản lý địa chỉ vùng ngăn xếp"
        ],
        "answer": "B"
      },
      {
        "id": 66,
        "sourceId": 66,
        "question": "Đối với vùng nhớ ngăn xếp, phát biểu nào sau đây là sai",
        "options": [
          "Là vùng nhớ có cấu trúc LIFO",
          "Là vùng nhớ có cấu trúc FIFO",
          "Con trỏ ngăn xếp luôn trỏ vào đỉnh ngăn xếp",
          "Khi cất thêm thông tin vào ngăn xếp, con trỏ ngăn xếp giảm"
        ],
        "answer": "B"
      },
      {
        "id": 67,
        "sourceId": 67,
        "question": "Đối với thanh ghi trạng thái trong CPU, phát biểu nào sau đây là sai",
        "options": [
          "Thanh ghi trạng thái còn gọi là thanh ghi cờ",
          "Thanh ghi trạng thái chứa các trạng thái xử lý",
          "Chỉ có 1 loại cờ trong thanh ghi trạng thái",
          "Có nhiều cờ trạng thái trong thanh ghi trạng thái"
        ],
        "answer": "C"
      },
      {
        "id": 68,
        "sourceId": 68,
        "question": "Đối với thanh ghi trạng thái trong CPU, phát biểu nào sau đây là đúng",
        "options": [
          "Không chứa các cờ phép toán",
          "Chỉ chứa các cờ phép toán",
          "Không chứa các cờ điều khiển",
          "Chứa các cờ điều khiển"
        ],
        "answer": "D"
      },
      {
        "id": 69,
        "sourceId": 69,
        "question": "Đối với khối điều khiển (CU) bên trong CPU, phát biểu nào sau đây là đúng",
        "options": [
          "Nhận tín hiệu từ CPU gửi đến",
          "Không nhận tín hiệu từ thiết bị ngoại vi",
          "Giải mã lệnh được chuyển đến từ thanh ghi lệnh",
          "Thực hiện phép toán số học và logic"
        ],
        "answer": "C"
      },
      {
        "id": 70,
        "sourceId": 70,
        "question": "Khi bộ xử lý đang thực hiện chương trình và ở chế độ cho phép ngắt, nếu có ngắt từ thiết bị ngoại vi gửi đến, bộ xử lý sẽ",
        "options": [
          "Từ chối ngắt, không phục vụ",
          "Phục vụ ngắt ngay, sau đó thực hiện chương trình",
          "Thực hiện xong lệnh hiện tại, rồi phục vụ ngắt, cuối cùng quay lại thực hiện tiếp chương trình",
          "Thực hiện xong chương trình rồi thực hiện ngắt"
        ],
        "answer": "C"
      },
      {
        "id": 71,
        "sourceId": 71,
        "question": "Nếu giá trị thanh ghi CS=2D45H và IP=0108H thì lệnh kế tiếp được đặt ở địa chỉ nào trong bộ nhớ",
        "options": [
          "2D358H",
          "3D458H",
          "3D358H",
          "2D558H"
        ],
        "answer": "D"
      },
      {
        "id": 72,
        "sourceId": 72,
        "question": "Chọn phát biểu đúng?",
        "options": [
          "Khả năng tự động thực thi chương trình có từ máy tính thế hệ thứ hai",
          "Khả năng tự động thực thi chương trình chỉ có trong máy tính của John Von Neumann",
          "Khả năng tự động thực thi chương trình không có trong máy tính dùng kiến trúc  Harvard",
          "Khả năng tự động thực thi chương trình có từ máy tính thế thứ nhất"
        ],
        "answer": "A"
      },
      {
        "id": 73,
        "sourceId": 73,
        "question": "Bộ biên dịch mức thấp thuộc về thành phần nào trong máy tính?",
        "options": [
          "CPU",
          "Bộ nhớ chính",
          "Hệ thống bus",
          "Hệ thống I/O"
        ],
        "answer": "A"
      },
      {
        "id": 74,
        "sourceId": 74,
        "question": "Trong chỉ thị cộng của máy tính IAS yếu tố ngầm là gì?",
        "options": [
          "Toán hạng nguồn và toán hạng đích",
          "Mã lệnh của chỉ thị",
          "Tất cả các toán hạng",
          "Địa chỉ của chỉ thị"
        ],
        "answer": "A"
      },
      {
        "id": 75,
        "sourceId": 75,
        "question": "Chương trình chạy theo tuần tự chỉ thị từ trên xuống dưới là do yếu tố nào quyết định?",
        "options": [
          "Nạp chỉ thị dựa theo PC",
          "Sắp xếp bộ nhớ",
          "Sự điều khiển của CPU",
          "Kết quả tự nhiên"
        ],
        "answer": "A"
      },
      {
        "id": 76,
        "sourceId": 76,
        "question": "Yếu tố nào giúp thực thi chương trình một cách tự động?",
        "options": [
          "Truy xuất vị trí bộ nhớ dựa theo nội dung thanh ghi PC",
          "Cơ chế tính toán và thực thi trong chu kỳ chỉ thị",
          "Tác động liên hoàn của ngắt lên chương trình",
          "Ghi địa chỉ tức thời của chỉ thị lên thanh ghi"
        ],
        "answer": "A"
      },
      {
        "id": 77,
        "sourceId": 77,
        "question": "Trong một chu kỳ chỉ thị, chu kỳ nạp chỉ thị kết thúc tại trạng thái nào?",
        "options": [
          "Giải mã chỉ thị",
          "Tính toán địa chỉ của toán hạng (operands)",
          "Xử  lý chỉ thị",
          "Ghi bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 78,
        "sourceId": 78,
        "question": "Trạng thái nào sau đây không thuộc về chu kỳ thực thi chỉ thị?",
        "options": [
          "Tính toán địa chỉ chỉ thị",
          "Tính toán địa toán hạng",
          "Giải mã chỉ thị",
          "Lưu kết quả"
        ],
        "answer": "A"
      },
      {
        "id": 79,
        "sourceId": 79,
        "question": "Điều gì diễn ra trong máy tính khi hệ điều hành bắt đầu cho chạy một chương trình đang được lưu trong bộ nhớ chính (RAM) ?",
        "options": [
          "Địa chỉ đầu của chương trình được nạp vào thanh ghi PC",
          "Chương trình được nạp từ đĩa cứng vào bộ nhớ RAM",
          "Chỉ thị được nạp từ bộ nhớ vào thanh ghi MAR",
          "Chỉ thị được nạp từ bộ nhớ vào thanh ghi MBR"
        ],
        "answer": "A"
      },
      {
        "id": 80,
        "sourceId": 80,
        "question": "Thanh ghi nào sau đây là tương đương với PC?",
        "options": [
          "Instruction pointer",
          "Stack pointer",
          "Index register",
          "Program status"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": 3,
    "title": "Đề 3",
    "questions": [
      {
        "id": 81,
        "sourceId": 81,
        "question": "Tính tự động trong  thực thi chương trình có được nhờ vào điều gì?",
        "options": [
          "Tính năng của bộ đếm số PC",
          "Tính năng của thành phần strored program",
          "Tính năng tự động hóa của CPU",
          "Tính năng đặc biệt được thiết kế trong tập chỉ thị"
        ],
        "answer": "A"
      },
      {
        "id": 82,
        "sourceId": 82,
        "question": "Phát biểu nào sau đây là đúng nhất?",
        "options": [
          "Khi dùng ngôn ngữ mức cao để viết chương trình, máy tính chạy chương trình chậm là do quá trình biên dịch",
          "Khi dùng hợp ngữ để viết chương trình, máy tính chạy chương trình chậm là do quá trình biên dịch",
          "Khi dùng ngôn ngữ mức cao để viết chương trình, máy tính chạy chương trình nhanh là nhờ trình biên dịch hỗ trợ",
          "Khi dùng hợp ngữ để viết chương trình, máy tính chạy chương trình nhanh là nhờ trình biên dịch hỗ trợ."
        ],
        "answer": "A"
      },
      {
        "id": 83,
        "sourceId": 83,
        "question": "Thanh ghi nào thường đóng vai trò toán hạng ngầm trong chỉ thị?",
        "options": [
          "AC",
          "IBR",
          "MAR",
          "MBR"
        ],
        "answer": "A"
      },
      {
        "id": 84,
        "sourceId": 84,
        "question": "Thanh ghi nào được dùng điều khiển truy xuất bộ nhớ chính?",
        "options": [
          "MAR",
          "IR",
          "IBR",
          "MQ"
        ],
        "answer": "A"
      },
      {
        "id": 85,
        "sourceId": 85,
        "question": "Thanh ghi nào có chức năng đệm dữ liệu vào ra CPU?",
        "options": [
          "MBR",
          "MAR",
          "IBR",
          "AC"
        ],
        "answer": "A"
      },
      {
        "id": 86,
        "sourceId": 86,
        "question": "Chu kỳ chỉ thị là gì?",
        "options": [
          "là khoảng thời gian hoàn thành một chỉ thị",
          "là khoảng thời gian nạp một chỉ thị",
          "là khoảng thời gian xử lý một chỉ thị",
          "là khoảng thời gian lặp lại một chỉ thị"
        ],
        "answer": "A"
      },
      {
        "id": 87,
        "sourceId": 87,
        "question": "Thực thi chương trình tự động có nghĩa là gì?",
        "options": [
          "Máy tính tự động nạp chỉ thị để thực thi",
          "Máy tính tự động nạp chương trình từ đĩa cứng để thực thi",
          "Máy tính tự động kết thúc chương trình",
          "Máy tính tự động phân biệt giữa các chương trình"
        ],
        "answer": "A"
      },
      {
        "id": 88,
        "sourceId": 88,
        "question": "Cơ chế nào sau đây giúp tăng cường cả về tính năng và hiệu năng của máy tính?",
        "options": [
          "Interrupt",
          "DMA",
          "Cache",
          "RAID"
        ],
        "answer": "A"
      },
      {
        "id": 89,
        "sourceId": 89,
        "question": "Loại ngắt nào sau đây giúp rút ngắn thời gian chạy xong chương trình?",
        "options": [
          "I/O",
          "Timer",
          "Error",
          "Program"
        ],
        "answer": "A"
      },
      {
        "id": 90,
        "sourceId": 90,
        "question": "Thời điểm nào cho phép dừng CPU để chuyển phục vụ?",
        "options": [
          "Kết thúc lưu kết quả",
          "Kết  thúc giải mã lệnh",
          "Kết thúc lấy toán hạng",
          "Kết thúc lấy lệnh"
        ],
        "answer": "A"
      },
      {
        "id": 91,
        "sourceId": 91,
        "question": "Mặt tiêu cực khi áp dụng cơ chế ngắt là gì?",
        "options": [
          "Xuất hiện thêm trạng thái trong chu kỳ chỉ thị và xử lý đa ngắt",
          "Trong máy tính xuất hiện tình huống đa chương phức tạp",
          "CPU bị tranh chấp bus liên tục khiến cho hiệu suất máy tính giảm",
          "Làm cho việc thực thi chương trình bị gián đoạn liên tục"
        ],
        "answer": "A"
      },
      {
        "id": 92,
        "sourceId": 92,
        "question": "Xét các công đoạn thực thi của bộ xử lý, thứ tự nào là đúng",
        "options": [
          "Giải mã lệnh → nhận dữ liệu → xử lý dữ liệu → ghi dữ liệu → nhận lệnh",
          "Nhận lệnh → Giải mã lệnh → nhận dữ liệu → xử lý dữ liệu → ghi dữ liệu",
          "Nhận lệnh → nhận dữ liệu → Giải mã lệnh → xử lý dữ liệu → ghi dữ liệu",
          "Nhận dữ liệu → xử lý dữ liệu → nhận lệnh → Giải mã lệnh → ghi dữ liệu."
        ],
        "answer": "B"
      },
      {
        "id": 93,
        "sourceId": 93,
        "question": "Với công đoạn nhận lệnh của CPU, thứ tự thực hiện là",
        "options": [
          "Bộ đếm chương trình (PC) → bộ nhớ → thanh ghi lệnh",
          "Bộ nhớ → bộ đếm chương trình (PC) → thanh ghi lệnh",
          "Bộ nhớ → thanh ghi lệnh → bộ đếm chương trình (PC)",
          "Bộ đếm chương trình (PC) → thanh ghi lệnh→ bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 94,
        "sourceId": 94,
        "question": "Với công đoạn giải mã lệnh của CPU, thứ tự thực hiện là",
        "options": [
          "Thanh ghi lệnh → giải mã → khối điều khiển → tín hiệu điều khiển",
          "Thanh ghi lệnh → khối điều khiển → tín hiệu điều khiển→ giải mã",
          "Khối điều khiển → Thanh ghi lệnh → giải mã → tín hiệu điều khiển",
          "Thanh ghi lệnh → khối điều khiển → giải mã → tín hiệu điều khiển"
        ],
        "answer": "D"
      },
      {
        "id": 95,
        "sourceId": 95,
        "question": "Với công đoạn nhận dữ liệu của CPU, thứ tự thực hiện là:",
        "options": [
          "Địa chỉ → tập thanh ghi (CPU) → ngăn nhớ",
          "Địa chỉ → ngăn nhớ → tập thanh ghi (CPU)",
          "Tập thanh ghi (CPU) → địa chỉ → ngăn nhớ",
          "Ngăn nhớ → tập thanh ghi (CPU) → địa chỉ"
        ],
        "answer": "B"
      },
      {
        "id": 96,
        "sourceId": 96,
        "question": "Với công đoạn ghi dữ liệu/cất toán hạng của CPU, thứ tự thực hiện là:",
        "options": [
          "Địa chỉ → tập thanh ghi (CPU) → ngăn nhớ",
          "Địa chỉ → ngăn nhớ → tập thanh ghi (CPU)",
          "Tập thanh ghi (CPU) → địa chỉ → ngăn nhớ",
          "Ngăn nhớ → tập thanh ghi (CPU) → địa chỉ"
        ],
        "answer": "A"
      },
      {
        "id": 97,
        "sourceId": 97,
        "question": "Cơ chế ngắt được đưa vào máy tính xuất phát từ nhu cầu nào ?",
        "options": [
          "Nhu cầu điều chuyển sự phục vụ của CPU",
          "Nhu cầu tăng tốc độ bus",
          "Nhu cầu cải thiện khả năng lưu trữ",
          "Nhu cầu xử lý của I/O"
        ],
        "answer": "A"
      },
      {
        "id": 98,
        "sourceId": 98,
        "question": "Điều gì xảy ra trong máy tính khi chương trình yêu cầu truy xuất dữ liệu trên đĩa cứng và quá trình đọc đĩa đã kết thúc?",
        "options": [
          "Có yêu cầu ngắt gửi đến CPU",
          "Có khởi động DMA để truyền dữ liệu cho cache",
          "Có sự cấp bus cho đĩa",
          "Có thay đổi không gian bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 99,
        "sourceId": 99,
        "question": "Đâu là mặt tiêu cực khi sử dụng cơ chế ngắt?",
        "options": [
          "Kéo dài thời gian trong mỗi chu kỳ chỉ thị",
          "ranh chấp Bus với CPU",
          "Mất thời gian xử lý làm tươi trong chu kỳ có ngắt",
          "Chương trình không chủ động điều khiển hoạt động xử lý ngắt"
        ],
        "answer": "A"
      },
      {
        "id": 100,
        "sourceId": 100,
        "question": "Khi CPU đáp ứng một yêu cầu ngắt thì sự kiện nào xảy ra tương ứng?",
        "options": [
          "Nạp địa chỉ chương trình phục vụ ngắt vào PC",
          "CPU dừng ngay, không thực hiện chỉ thị hiện hành",
          "CPU nạp ngữ cảnh vào thanh ghi AC",
          "Nạp nội dung đáp ứng phục vụ ngắt vào PC"
        ],
        "answer": "A"
      },
      {
        "id": 101,
        "sourceId": 101,
        "question": "Loại ngắt (interrupt type) đề cập đến điều gì?",
        "options": [
          "Trường hợp cụ thể sử dụng cơ chế ngắt",
          "Bản chất của ngắt được dùng trong chương trình",
          "Số lượng ngắt được dùng trong chương trình",
          "Cường độ của quá trình ngắt"
        ],
        "answer": "A"
      },
      {
        "id": 102,
        "sourceId": 102,
        "question": "Ngữ cảnh cần phải lưu mỗi khi CPU bị ngắt là gì?",
        "options": [
          "Nội dung bộ nhớ và thanh ghi tương ứng của chương trình đang thực thi hiện hành",
          "Hình ảnh của bộ nhớ chính vào thời điểm xảy ra ngắt",
          "Toàn cảnh của các chương trình đang chạy bên trong máy tính vào thời điểm xảy ra ngắt",
          "Ngôn ngữ phản ánh hoàn cảnh hay trạng thái hiện hành của máy tính"
        ],
        "answer": "A"
      },
      {
        "id": 103,
        "sourceId": 103,
        "question": "Khi có nhiều yêu cầu phục vụ gửi đến CPU thì đó là tình huống gì?",
        "options": [
          "Tình huống đa ngắt",
          "Tình huống đa bộ xử lý",
          "Tình huống tranh chấp bus",
          "Tình huống tranh chấp bộ nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 104,
        "sourceId": 104,
        "question": "Đâu là giải pháp xử lý nhiều ngắt?",
        "options": [
          "Sắp xếp ưu tiên theo tính chất của yêu cầu",
          "Theo thứ tự đến trước phục vụ trước",
          "Theo qui tắc yêu cầu nào cần thời gian ít hơn được phục vụ trước",
          "Theo qui tắc yêu cầu nào cần thời gian nhiều hơn được phục vụ trước"
        ],
        "answer": "A"
      },
      {
        "id": 105,
        "sourceId": 105,
        "question": "Một lệnh tối thiểu của hợp ngữ bao gồm",
        "options": [
          "Nhãn + Lệnh + Các toán hạng + Lời chú giải",
          "Lệnh + Lời chú giải",
          "Lệnh + Các toán hạng",
          "Nhãn + Lệnh + Các toán hạng"
        ],
        "answer": "C"
      },
      {
        "id": 106,
        "sourceId": 106,
        "question": "Kết quả của quá trình biên dịch sẽ tạo ra file thực hiện, file này được lưu trữ ở đâu",
        "options": [
          "Main memory",
          "Cache",
          "RAM",
          "HDD (Hard disk drive)"
        ],
        "answer": "D"
      },
      {
        "id": 107,
        "sourceId": 107,
        "question": "Các đặc trưng của quá trình biên dịch là",
        "options": [
          "Các chế độ địa chỉ, cấu trúc thực hiện phép toán, phương pháp trao đổi dữ liệu",
          "Kiểu dữ liệu, các chế độ địa chỉ, cấu trúc thực hiện phép toán và phương pháp trao đổi dữ liệu",
          "Đặc trưng của kiểu dữ liệu",
          "Là các đặc trưng của máy tính cấp thấp sử dụng chương trình"
        ],
        "answer": "B"
      },
      {
        "id": 108,
        "sourceId": 108,
        "question": "Lệnh nào sau đây dùng để hoán đổi nội dung hai toán hạng",
        "options": [
          "MOV",
          "SWAP",
          "ADD",
          "XCHG"
        ],
        "answer": "D"
      },
      {
        "id": 109,
        "sourceId": 109,
        "question": "Lệnh nào sau đây dùng nạp địa chỉ hiệu quả (effective address) vào thanh ghi",
        "options": [
          "LDS",
          "MOV",
          "LES",
          "LEA"
        ],
        "answer": "D"
      },
      {
        "id": 110,
        "sourceId": 110,
        "question": "Lệnh nào sau đây dùng để lấy dữ liệu từ ngăn xếp",
        "options": [
          "OUT",
          "MOV",
          "POP",
          "IN"
        ],
        "answer": "C"
      },
      {
        "id": 111,
        "sourceId": 111,
        "question": "Lệnh nào sau đây dùng để cất một byte dữ liệu vào ngăn xếp",
        "options": [
          "MOV",
          "POP",
          "OUT",
          "PUSH"
        ],
        "answer": "D"
      },
      {
        "id": 112,
        "sourceId": 112,
        "question": "Lệnh nào sau đây dùng để xuất dữ liệu ra cổng",
        "options": [
          "MOV",
          "IN",
          "POP",
          "OUT"
        ],
        "answer": "D"
      },
      {
        "id": 113,
        "sourceId": 113,
        "question": "Lệnh nào sau đây thực hiện cộng 2 toán hạng không có nhớ",
        "options": [
          "ADC",
          "SUB",
          "ADD",
          "INC"
        ],
        "answer": "C"
      },
      {
        "id": 114,
        "sourceId": 114,
        "question": "Lệnh nào sau đây thực hiện cộng 2 toán hạng có nhớ",
        "options": [
          "ADC",
          "SUB",
          "ADD",
          "INC"
        ],
        "answer": "A"
      },
      {
        "id": 115,
        "sourceId": 115,
        "question": "Lệnh nào sau đây thực hiện tăng toán hạng đích lên 1 đơn vị",
        "options": [
          "ADC",
          "SUB",
          "ADD",
          "INC"
        ],
        "answer": "D"
      },
      {
        "id": 116,
        "sourceId": 116,
        "question": "Lệnh nào sau đây thực hiện phép toán nhân",
        "options": [
          "ADD",
          "SUB",
          "MUL",
          "DIV"
        ],
        "answer": "C"
      },
      {
        "id": 117,
        "sourceId": 117,
        "question": "Lệnh nào sau đây thực hiện phép toán chia",
        "options": [
          "ADD",
          "SUB",
          "MUL",
          "DIV"
        ],
        "answer": "D"
      },
      {
        "id": 118,
        "sourceId": 118,
        "question": "Lệnh nào sau đây so sánh 2 toán hạng",
        "options": [
          "DEC",
          "JMP",
          "CMP",
          "INC"
        ],
        "answer": "C"
      },
      {
        "id": 119,
        "sourceId": 119,
        "question": "Lệnh nào sau đây là lệnh nhảy không điều kiện",
        "options": [
          "JMP",
          "JL",
          "LOOP",
          "SHL"
        ],
        "answer": "A"
      },
      {
        "id": 120,
        "sourceId": 120,
        "question": "Thành phần bộ nhớ nào đóng vai trò toán hạng trong chỉ thị?",
        "options": [
          "Thanh ghi",
          "HDD",
          "SSD",
          "CD ROM"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": 4,
    "title": "Đề 4",
    "questions": [
      {
        "id": 121,
        "sourceId": 121,
        "question": "RISC là viết tắt của",
        "options": [
          "Reduced Instruction Set Computer",
          "Reverse Instruction Set Computer",
          "Reduced Implied Set Computer",
          "Reverse Implied Set Computer"
        ],
        "answer": "A"
      },
      {
        "id": 122,
        "sourceId": 122,
        "question": "Toán tử xóa trên stack là",
        "options": [
          "POP",
          "PUSH",
          "FRONT",
          "REAR"
        ],
        "answer": "A"
      },
      {
        "id": 123,
        "sourceId": 123,
        "question": "SISD là viết tắt của",
        "options": [
          "Single Instruction stream, Single Data stream.",
          "Simple Instruction stream, Simple Data stream.",
          "Stack Instruction stream, Stack Data stream.",
          "Storage Instruction stream, Storage Data stream."
        ],
        "answer": "A"
      },
      {
        "id": 124,
        "sourceId": 124,
        "question": "Pipelining làm gia tăng __của bộ xử lý.",
        "options": [
          "Thông lượng (thoughput)",
          "Dung lượng lưu trữ",
          "Khả năng dự đoán",
          "Độ trễ"
        ],
        "answer": "A"
      },
      {
        "id": 125,
        "sourceId": 125,
        "question": "Có bao nhiêu loại harzard?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "A"
      },
      {
        "id": 126,
        "sourceId": 126,
        "question": "Kết quả phép nhân 2 số 16 bit chứa trong",
        "options": [
          "AX",
          "DX",
          "AX và DX",
          "AX và BX"
        ],
        "answer": "C"
      },
      {
        "id": 127,
        "sourceId": 127,
        "question": "Kết quả phép chia 2 số 8 bit chứa trong",
        "options": [
          "AX",
          "DX",
          "AH và AL",
          "DH và DL"
        ],
        "answer": "C"
      },
      {
        "id": 128,
        "sourceId": 128,
        "question": "Trong chế độ địa chỉ tương đối chỉ số, dữ liệu sử dụng trong lệnh nằm trong một ô nhớ có địa chỉ bằng",
        "options": [
          "Giá trị chứa trong thanh ghi DI hoặc SI cộng với một số độ dời",
          "Giá trị chứa trong thanh ghi DI hoặc SI",
          "Giá trị chứa trong thanh ghi BX hoặc BP",
          "Giá trị chứa trong BX hoặc BP cộng với giá trị chứa trong DI hoặc SI"
        ],
        "answer": "A"
      },
      {
        "id": 129,
        "sourceId": 129,
        "question": "Lệnh assembly:  MOV DX, [BP] sử dụng chế độ địa chỉ",
        "options": [
          "Gián tiếp",
          "Thanh ghi",
          "Trực tiếp",
          "Gián tiếp qua thanh ghi"
        ],
        "answer": "D"
      },
      {
        "id": 130,
        "sourceId": 130,
        "question": "Lệnh Assembly:  MOV DL, [01AF] sử dụng chế độ địa chỉ",
        "options": [
          "Không tồn tại lệnh",
          "Chế độ địa chỉ gián tiếp",
          "Chế độ địa chỉ tức thì",
          "Chế độ địa chỉ trực tiếp"
        ],
        "answer": "D"
      },
      {
        "id": 131,
        "sourceId": 131,
        "question": "Lệnh MOV AX, BX  là một ví dụ của chế độ định địa chỉ nào",
        "options": [
          "Trực tiếp",
          "Tức thì",
          "Thanh ghi",
          "Gián tiếp thanh ghi"
        ],
        "answer": "C"
      },
      {
        "id": 132,
        "sourceId": 132,
        "question": "Hãy chỉ ra chế độ địa chỉ tức thì",
        "options": [
          "MOV AL, [0243H]",
          "MOV AL, [BX]",
          "MOV CL, 10",
          "MOV BX, DX"
        ],
        "answer": "C"
      },
      {
        "id": 133,
        "sourceId": 133,
        "question": "Trong các lệnh sau đây, lệnh nào thuộc chế độ định địa chỉ gián tiếp thanh ghi",
        "options": [
          "MOV AX, [BX]",
          "MOV AX, [0B800H]",
          "MOV AX, BX",
          "MOV AX, [BX] + 5"
        ],
        "answer": "A"
      },
      {
        "id": 134,
        "sourceId": 134,
        "question": "Hãy chỉ ra đâu là chế độ địa chỉ thanh ghi",
        "options": [
          "MOV AL, [BX]",
          "MOV CL, 10",
          "MOV BX, DX",
          "MOV AL, [0243H]"
        ],
        "answer": "C"
      },
      {
        "id": 135,
        "sourceId": 135,
        "question": "Hãy chỉ ra đâu là chế độ địa chỉ trực tiếp",
        "options": [
          "MOV AX, DX",
          "MOV CL, 10h",
          "MOV AH, [2243H]",
          "MOV AH, [AX]"
        ],
        "answer": "C"
      },
      {
        "id": 136,
        "sourceId": 136,
        "question": "Trong chế độ địa chỉ gián tiếp thanh ghi, dữ liệu là",
        "options": [
          "Giá trị trong một ô nhớ có địa chỉ mã hoá trong lệnh",
          "Giá trị nằm trong một ô nhớ có địa chỉ giữ trong một thanh ghi",
          "Giá trị trong một thanh ghi",
          "Một số được mã hoá trong lệnh"
        ],
        "answer": "B"
      },
      {
        "id": 137,
        "sourceId": 137,
        "question": "Hãy chỉ ra chế độ địa chỉ gián tiếp thanh ghi",
        "options": [
          "MOV AH, BL",
          "MOV DH, [0]",
          "MOV AL, [BX]",
          "MOV BX, 0"
        ],
        "answer": "C"
      },
      {
        "id": 138,
        "sourceId": 138,
        "question": "Hãy cho biết đâu là chế độ định địa chỉ tương đối cơ sở cho toán hạng nguồn",
        "options": [
          "MOV BX, [DX]+[SI]+10",
          "MOV CX, [SI+10]",
          "MOV CX, [BX+10]",
          "MOV AL, [0243H]"
        ],
        "answer": "C"
      },
      {
        "id": 139,
        "sourceId": 139,
        "question": "Hãy cho biết đâu là chế độ định địa chỉ tương đối chỉ số cho toán hạng nguồn",
        "options": [
          "MOV CX, 10+[BX]",
          "MOV BX, [BX]+[DI]+10",
          "MOV CX, [DI]+5",
          "OUT DX, BX"
        ],
        "answer": "C"
      },
      {
        "id": 140,
        "sourceId": 140,
        "question": "Hãy cho biết đâu là chế độ định địa chỉ tương đối cơ sở chỉ số cho toán hạng nguồn",
        "options": [
          "MOV CX, 10+[BX]",
          "MOV BX, [BX]+[DI]+10",
          "MOV CX, [DI]+5",
          "OUT DX, BX"
        ],
        "answer": "B"
      },
      {
        "id": 141,
        "sourceId": 141,
        "question": "Để dịch trái thanh ghi AL đi 1 bit, ta dùng lệnh nào",
        "options": [
          "SHR AL,1",
          "SHL AL,1",
          "ROR AL,1",
          "ROL AL,1"
        ],
        "answer": "B"
      },
      {
        "id": 142,
        "sourceId": 142,
        "question": "Để quay phải thanh ghi AL đi 1 bit, ta dùng lệnh nào",
        "options": [
          "SHR AL,1",
          "SHL AL,1",
          "ROR AL,1",
          "ROL AL,1"
        ],
        "answer": "C"
      },
      {
        "id": 143,
        "sourceId": 143,
        "question": "Lệnh nhảy nếu kết quả phép so sánh 2 số không dấu là lớn hơn",
        "options": [
          "JG",
          "JL",
          "JA",
          "JB"
        ],
        "answer": "C"
      },
      {
        "id": 144,
        "sourceId": 144,
        "question": "Lệnh nhảy nếu kết quả phép so sánh 2 số không dấu là nhỏ hơn",
        "options": [
          "JG",
          "JL",
          "JA",
          "JB"
        ],
        "answer": "D"
      },
      {
        "id": 145,
        "sourceId": 145,
        "question": "Lệnh nhảy nếu kết quả phép so sánh 2 số có dấu là lớn hơn hoặc bằng",
        "options": [
          "JGE",
          "JLE",
          "JAE",
          "JBE"
        ],
        "answer": "A"
      },
      {
        "id": 146,
        "sourceId": 146,
        "question": "Lệnh nhảy nếu kết quả phép so sánh 2 số có dấu là nhỏ hơn hoặc bằng",
        "options": [
          "JGE",
          "JLE",
          "JAE",
          "JBE"
        ],
        "answer": "B"
      },
      {
        "id": 147,
        "sourceId": 147,
        "question": "Những biến nào mang tính chất bền vững trong ngôn ngữ cấp cao",
        "options": [
          "Biến toàn cục và biến địa phương",
          "Những biến được quản lý trong bộ nhớ",
          "Biến địa phương",
          "Biến toàn cục"
        ],
        "answer": "D"
      },
      {
        "id": 148,
        "sourceId": 148,
        "question": "Trong chế độ địa chỉ gián tiếp, chỉ thị phép tính công add 50CE có nghĩa là gì?",
        "options": [
          "Cộng nội dung tại con trỏ được chứa trong 50CE với nội dung của thanh ghi AC",
          "Cộng nội dung của thanh ghi AC với con trỏ 50CE",
          "Cộng nội dung của thanh ghi AC với 50CE",
          "Cộng 50CE với nội dung con trỏ AC"
        ],
        "answer": "A"
      },
      {
        "id": 149,
        "sourceId": 149,
        "question": "Địa chỉ hiệu quả (effective address) là gì?",
        "options": [
          "Địa chỉ chứa dữ liệu cần sử dụng",
          "Địa chỉ chứa con trỏ chỉ đến dữ liệu",
          "Địa chỉ ghi trên chỉ thị",
          "Không câu nào đúng"
        ],
        "answer": "A"
      },
      {
        "id": 150,
        "sourceId": 150,
        "question": "Tập chỉ thị có bao nhiêu chỉ thị là tùy thuộc vào điều gì?",
        "options": [
          "Số tập tín hiệu điều khiển mà general-purpose hardware có thể xử lý",
          "Số lượng mã lệnh (opcode)",
          "Khả năng đáp ứng của trình biên dịch (compiler)",
          "Số đường địa chỉ"
        ],
        "answer": "A"
      },
      {
        "id": 151,
        "sourceId": 151,
        "question": "Chế độ địa chỉ (addressing mode) đề cập đến điều gì?",
        "options": [
          "Qui tắc xác định vị trí mà chỉ thị tham chiếu đến",
          "Nơi chứa dữ liệu và chỉ thị hiệu quả",
          "Qui tắc tính toán địa chỉ của thanh ghi chỉ thị",
          "Qui tắc tính toán nội dung trong chỉ thị"
        ],
        "answer": "A"
      },
      {
        "id": 152,
        "sourceId": 152,
        "question": "Phát biểu sau đây là đúng cho chế độ địa chỉ nào: \" Địa chỉ hiệu quả (effective address) là nội dung của địa chỉ được chỉ ra trong chỉ thị\"?",
        "options": [
          "Gián tiếp",
          "Trực tiếp",
          "Thanh ghi nền",
          "Tức thời"
        ],
        "answer": "A"
      },
      {
        "id": 153,
        "sourceId": 153,
        "question": "Phát biểu sau đây là phù hợp với chế độ địa chỉ nào: \"Thanh ghi chứa địa chỉ hiệu quả (effective address)\"?",
        "options": [
          "Gián tiếp thanh ghi",
          "Trực tiếp thanh ghi",
          "Thanh ghi chỉ số",
          "Độ dời"
        ],
        "answer": "A"
      },
      {
        "id": 154,
        "sourceId": 154,
        "question": "Chế độ địa chỉ (addressing mode) được dùng trong máy tính IAS của John Von Neumann là gì?",
        "options": [
          "Trực tiếp",
          "Gián tiếp",
          "Tức thời",
          "Thanh ghi nền"
        ],
        "answer": "A"
      },
      {
        "id": 155,
        "sourceId": 155,
        "question": "Trong chỉ thị của máy tính IAS của John Von Neumann có thiết kế như thế nào?",
        "options": [
          "Một toán hạng là địa chỉ",
          "Hai toán hạng là địa chỉ",
          "Một toán hạng là địa chỉ và một là thanh ghi",
          "Hai toán hạng là thanh ghi"
        ],
        "answer": "A"
      },
      {
        "id": 156,
        "sourceId": 156,
        "question": "Hợp ngữ (assembly language) là gì?",
        "options": [
          "Ngôn ngữ lập trình được hình thành nhờ trình biên dịch mức thấp",
          "Ngôn ngữ lập trình được hình thành nhờ trình biên dịch mức cao",
          "Ngôn ngữ lập trình mức thấp riêng cho máy tính John Von Neumann",
          "Ngôn ngữ lập trình đầu vào của trình biên dịch mức cao"
        ],
        "answer": "A"
      },
      {
        "id": 157,
        "sourceId": 157,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Tất cả các loại máy tính khác nhau đều có chung hợp ngữ",
          "Hợp ngữ có thể được dịch ra từ ngôn ngữ cấp cao hơn",
          "Hợp ngữ được xây dựng để dùng thay cho mã máy trong lập trình",
          "Hợp ngữ là ngôn ngữ lập trình mức thấp"
        ],
        "answer": "A"
      },
      {
        "id": 158,
        "sourceId": 158,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Trong một máy tính số lượng chỉ thị luôn nhiều hơn số lệnh có thể thực hiện",
          "Trong một máy tính có nhiều nhóm chỉ thị thực hiện các chức năng computing",
          "Chỉ thị trong một máy tính có thể bao gồm nhiều toán hạng",
          "Địa chỉ chứa chỉ thị như là định danh của chỉ thị để máy tính gọi"
        ],
        "answer": "A"
      },
      {
        "id": 159,
        "sourceId": 159,
        "question": "Phát biểu nào sau đây là đúng đối với pipeline chỉ thị có k đoạn?",
        "options": [
          "Cơ chế pipeline làm tăng thông lượng (throughput) của hệ thống.",
          "Pipeline giảm độ trễ của mỗi chỉ thị.",
          "Độ tăng tốc tối thiểu có thể đạt được với pipeline k tầng là k.",
          "Các giai đoạn pipeline không đồng nhất làm giảm tốc độ tổng thể."
        ],
        "answer": "A"
      },
      {
        "id": 160,
        "sourceId": 160,
        "question": "Đối với pipeline, phát biểu nào sau đây là sai?",
        "options": [
          "Pipeline là kỹ thuật truyền dữ liệu trong máy tính",
          "Pipeline là kỹ thuật thực thi chương trình trong máy tính",
          "Pipeline giống như dây chuyền lắp ráp trong nhà máy",
          "Trong pipeline các chỉ thị như được xếp chồng lên nhau"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": 5,
    "title": "Đề 5",
    "questions": [
      {
        "id": 161,
        "sourceId": 161,
        "question": "Phát biểu nào sau đây là sai đối với pipeline?",
        "options": [
          "Giảm thời gian thực thi của mỗi chỉ thị",
          "Gia tăng thông lượng (throughput) của CPU",
          "Tăng tốc độ chạy chương trình",
          "Pipeline giống như dây chuyền lắp ráp"
        ],
        "answer": "A"
      },
      {
        "id": 162,
        "sourceId": 162,
        "question": "Cho đoạn khai báo dữ liệu như dưới đây, dữ liệu này chiếm dung lượng trong bộ nhớ là: .DATA mem1 dw 500, -20, -100 mem2 dd -50,70 msg db  'Kien truc may tinh !' vec db 10, 20, -10, -20, -30, -40",
        "options": [
          "38 bytes",
          "41 bytes",
          "40 bytes",
          "42 bytes"
        ],
        "answer": "C"
      },
      {
        "id": 163,
        "sourceId": 163,
        "question": "Để xoá thanh ghi CX về 0, lệnh nào sau đây là đúng",
        "options": [
          "OR CX,0",
          "CMP CX,0",
          "MOV CX,[0]",
          "XOR CX,CX"
        ],
        "answer": "D"
      },
      {
        "id": 164,
        "sourceId": 164,
        "question": "Giả sử AL=35H,CL=4, sau lệnh  SHR AL,CL ta được",
        "options": [
          "AL=5,CL=0",
          "AL=5,CL=4",
          "AL=3,CL=4",
          "AL=3,CL=0"
        ],
        "answer": "C"
      },
      {
        "id": 165,
        "sourceId": 165,
        "question": "Sau khi thực hiện các lệnh sau: MOV AH,05H MOV AL,03H XCHG AH,AL",
        "options": [
          "AH=03H,AL=05H",
          "AH=AL=03H",
          "AH=AL=05H",
          "AH=05H,AL=03H"
        ],
        "answer": "A"
      },
      {
        "id": 166,
        "sourceId": 166,
        "question": "Giả sử có AX=1000,BX=2000,CX=3000, sau khi thực hiện các lệnh PUSH AX PUSH BX PUSH CX POP AX POP BX POP CX",
        "options": [
          "AX=1000,BX=2000,CX=3000",
          "AX=3000,BX=1000,CX=2000",
          "AX=3000,BX=2000,CX=1000",
          "AX=2000,BX=1000,CX=3000"
        ],
        "answer": "C"
      },
      {
        "id": 167,
        "sourceId": 167,
        "question": "Giả sử AX=2,BX=3, CF=1 sau lệnh  ADC AX,BX  sẽ có",
        "options": [
          "AX=6, BX=3",
          "AX=6, BX=0",
          "AX=5 , BX=3",
          "AX=5 , BX=0"
        ],
        "answer": "A"
      },
      {
        "id": 168,
        "sourceId": 168,
        "question": "Giả sử AH=02, AL=03, sau lệnh  MUL AH  thì giá trị AL, AH bằng bao nhiêu",
        "options": [
          "AL=6, AH=02",
          "AL=6,AH=03",
          "AL=6,AH=0",
          "AL=6,AH=6"
        ],
        "answer": "C"
      },
      {
        "id": 169,
        "sourceId": 169,
        "question": "Giả sử AX=35F7H, BX=126EH, sau lệnh CMP AX,BX  lệnh nào sau đây chuyển điều khiển chương trình đến nhãn N",
        "options": [
          "JG N",
          "JL N",
          "JE N",
          "JB N"
        ],
        "answer": "D"
      },
      {
        "id": 170,
        "sourceId": 170,
        "question": "Giả sử AX=35F7H, BX=126EH, sau lệnh CMP AH,BL  lệnh nào sau đây chuyển điều khiển chương trình đến nhãn N",
        "options": [
          "JA N",
          "JG N",
          "JL N",
          "JE N"
        ],
        "answer": "A"
      },
      {
        "id": 171,
        "sourceId": 171,
        "question": "Các phát biểu nào sau đây đối với pipeline k đoạn là đúng: (1) Độ tăng tốc tối đa mà pipeline có thể đạt theo lý thuyết là k (2) Không thể đạt được độ tăng tốc tối đa k trong một pipeline có k đoạn (3) Tất cả các giai đoạn trong pipeline đều cần một khoảng thời gian tính toán bằng nhau",
        "options": [
          "(1) và (2)",
          "(2) và (3)",
          "(1) và (3)",
          "(1), (2) và (3)"
        ],
        "answer": "A"
      },
      {
        "id": 172,
        "sourceId": 172,
        "question": "Hazard nào sau đây xảy ra nếu việc đọc diễn ra trước khi thao tác ghi hoàn tất?",
        "options": [
          "Data hazard",
          "Structure hazard",
          "Output dependency",
          "Control hazard"
        ],
        "answer": "A"
      },
      {
        "id": 173,
        "sourceId": 173,
        "question": "Khi hai chỉ thị trong pipeline cùng yêu cầu một tài nguyên thì hazard nào xảy ra?",
        "options": [
          "Structure hazard",
          "Data hazard",
          "Control hazard",
          "Branch hazard"
        ],
        "answer": "A"
      },
      {
        "id": 174,
        "sourceId": 174,
        "question": "Một hệ thống không pipeline xử lý một tác vụ cần 50ns để hoàn thành. Tác vụ tương tự có thể được xử lý hoàn thành trong máy pipeline sáu đoạn chỉ với một chu kỳ xung nhịp 10ns. Như vậy tỉ lệ tăng tốc của pipeline cho 500 tác vụ là?",
        "options": [
          "4,95",
          "6",
          "5,7",
          "5,5"
        ],
        "answer": "A"
      },
      {
        "id": 175,
        "sourceId": 175,
        "question": "Một pipeline năm giai đoạn có độ trễ giai đoạn lần lượt là 150ns, 120ns, 150ns, 160ns, 140ns. Các thanh ghi được dùng giữa các giai đoạn có độ trễ 5ns. Giả sử không có điểm dừng (stall) trong pipeline. Tổng thời gian để thực hiện 100 chỉ thị độc lập trên hệ thống pipeline này là___nano giây?",
        "options": [
          "17160",
          "25431",
          "18400",
          "20232"
        ],
        "answer": "A"
      },
      {
        "id": 176,
        "sourceId": 176,
        "question": "Bộ vi xử lý 8086 là bộ vi xử lý có",
        "options": [
          "8 bit dữ liệu và 20 bit địa chỉ",
          "16 bit dữ liệu và 20 bit địa chỉ",
          "8 bit dữ liệu và 32 bit địa chỉ",
          "16 bit dữ liệu và 32 bit địa chỉ"
        ],
        "answer": "B"
      },
      {
        "id": 177,
        "sourceId": 177,
        "question": "Cấu trúc của bộ vi xử lý 8086 gồm bao nhiêu khối chính",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "B"
      },
      {
        "id": 178,
        "sourceId": 178,
        "question": "Cờ CF là",
        "options": [
          "Carry flag",
          "Condition flag",
          "Common flag",
          "Single flag"
        ],
        "answer": "A"
      },
      {
        "id": 179,
        "sourceId": 179,
        "question": "Cờ SF là",
        "options": [
          "Sign flag",
          "Service flag",
          "Single flag",
          "Condition flag"
        ],
        "answer": "A"
      },
      {
        "id": 180,
        "sourceId": 180,
        "question": "Cờ OF là",
        "options": [
          "Overflow flag",
          "Overdue flag",
          "One flag",
          "Over flag"
        ],
        "answer": "A"
      },
      {
        "id": 181,
        "sourceId": 181,
        "question": "Cờ IF là",
        "options": [
          "Interrupt flag",
          "Initial flag",
          "Indicate flag",
          "Inter flag"
        ],
        "answer": "A"
      },
      {
        "id": 182,
        "sourceId": 182,
        "question": "Thanh ghi AX được tạo thành từ nhóm",
        "options": [
          "AH&AL",
          "BH&BL",
          "CH&CL",
          "DH&DL"
        ],
        "answer": "A"
      },
      {
        "id": 183,
        "sourceId": 183,
        "question": "Thanh ghi SP là",
        "options": [
          "Stack pointer",
          "Single pointer",
          "Source pointer",
          "Destination pointer"
        ],
        "answer": "A"
      },
      {
        "id": 184,
        "sourceId": 184,
        "question": "Thanh ghi BP là",
        "options": [
          "Base pointer",
          "Binary pointer",
          "Bit pointer",
          "Digital pointer"
        ],
        "answer": "A"
      },
      {
        "id": 185,
        "sourceId": 185,
        "question": "Thanh ghi SS là",
        "options": [
          "Stack segment",
          "Single stack",
          "Sequence stack",
          "Service stack"
        ],
        "answer": "A"
      },
      {
        "id": 186,
        "sourceId": 186,
        "question": "Thanh ghi DS là",
        "options": [
          "Data segment",
          "Digital segment",
          "Divide segment",
          "Decode segment"
        ],
        "answer": "A"
      },
      {
        "id": 187,
        "sourceId": 187,
        "question": "Thanh ghi IP là",
        "options": [
          "Instruction pointer",
          "Index pointer",
          "Inline pointer",
          "Internet pointer"
        ],
        "answer": "A"
      },
      {
        "id": 188,
        "sourceId": 188,
        "question": "Từ nào sau đây không phải là ký hiệu một lệnh trong ngôn ngữ assembly?",
        "options": [
          "IF",
          "ADD",
          "DIV",
          "MOV"
        ],
        "answer": "A"
      },
      {
        "id": 189,
        "sourceId": 189,
        "question": "Đâu là chỉ thị được dùng để thực hiện phép tính logic?",
        "options": [
          "AND",
          "ADD",
          "MOV",
          "CMP"
        ],
        "answer": "A"
      },
      {
        "id": 190,
        "sourceId": 190,
        "question": "Đâu là lệnh rẻ nhánh có điều kiện trong ngôn ngữ assembly?",
        "options": [
          "JZ",
          "JMP",
          "MOV",
          "ADD"
        ],
        "answer": "A"
      },
      {
        "id": 191,
        "sourceId": 191,
        "question": "Đâu là ví dụ một dòng chú thích trong chương trình assembly?",
        "options": [
          "; Move the value 10 into the AX register",
          "MOV AX, 10",
          "ADD AX, BX",
          "MOV BX, [SI]"
        ],
        "answer": "A"
      },
      {
        "id": 192,
        "sourceId": 192,
        "question": "Đâu là chỉ thị được dùng để so sánh hai giá trị trong ngôn ngữ assembly?",
        "options": [
          "CMP",
          "ADD",
          "MOV",
          "JZ"
        ],
        "answer": "A"
      },
      {
        "id": 193,
        "sourceId": 193,
        "question": "Đâu là ví dụ một directive trong ngôn ngữ assembly?",
        "options": [
          "DB",
          "MOV",
          "AND",
          "CALL"
        ],
        "answer": "A"
      },
      {
        "id": 194,
        "sourceId": 194,
        "question": "Từ nào sau đây là một ví dụ về mnemonic trong ngôn ngữ assembly?",
        "options": [
          "MOV",
          "Memory",
          "Integer",
          "Input"
        ],
        "answer": "A"
      },
      {
        "id": 195,
        "sourceId": 195,
        "question": "Ký hiệu nào sau đây không phải là thanh ghi trong ngôn ngữ assembly?",
        "options": [
          "EX",
          "BX",
          "CX",
          "AX"
        ],
        "answer": "A"
      },
      {
        "id": 196,
        "sourceId": 196,
        "question": "Lệnh nào sau đây được dùng để chuyển đến phần khác của chương trình?",
        "options": [
          "JMP",
          "ADD",
          "MOV",
          "CMP"
        ],
        "answer": "A"
      },
      {
        "id": 197,
        "sourceId": 197,
        "question": "Đâu là chỉ thị được dùng để thực hiện phép tính số học trong ngôn ngữ",
        "options": [
          "ADD",
          "MOV",
          "JMP",
          "CMP"
        ],
        "answer": "A"
      },
      {
        "id": 198,
        "sourceId": 198,
        "question": "Đâu là một ví dụ về nhãn trong ngôn ngữ assembly?",
        "options": [
          "START",
          "LOOP",
          "MOV",
          "XOR"
        ],
        "answer": "A"
      },
      {
        "id": 199,
        "sourceId": 199,
        "question": "Chỉ thị nào sau đây được dùng để gọi một chương trình con (subroutine)",
        "options": [
          "CALL",
          "ADD",
          "MOV",
          "RET"
        ],
        "answer": "A"
      },
      {
        "id": 200,
        "sourceId": 200,
        "question": "Đơn vị thi hành (EU) và đơn vị giao tiếp BUS (BIU) trong 8086:",
        "options": [
          "BIU thực thi xong, EU mới thực thi",
          "Song song với nhau",
          "EU thực thi xong, BIU mới thực thi",
          "Hoạt động độc lập nhau"
        ],
        "answer": "B"
      }
    ]
  },
  {
    "id": 6,
    "title": "Đề 6",
    "questions": [
      {
        "id": 201,
        "sourceId": 201,
        "question": "Thanh ghi CS, DS, SS, ES là các thanh ghi",
        "options": [
          "Thanh ghi đa năng",
          "Thanh ghi con trỏ và chỉ số",
          "Thanh ghi đoạn",
          "Thanh ghi cờ"
        ],
        "answer": "C"
      },
      {
        "id": 202,
        "sourceId": 202,
        "question": "Thanh ghi BX có thể sử dụng để",
        "options": [
          "Chứa một dữ liệu",
          "Chứa một địa chỉ độ dời",
          "Một địa chỉ đoạn",
          "Chứa một dữ liệu và một địa chỉ độ dời"
        ],
        "answer": "D"
      },
      {
        "id": 203,
        "sourceId": 203,
        "question": "Thanh ghi quản lý đoạn bộ nhớ chứa ngăn xếp",
        "options": [
          "CS",
          "DS",
          "SS",
          "ES"
        ],
        "answer": "C"
      },
      {
        "id": 204,
        "sourceId": 204,
        "question": "Trong bộ vi xử lý 8086, bộ phận nào thực hiện giải mã lệnh",
        "options": [
          "Khối EU",
          "Khối ALU",
          "Khối điều khiển BUS",
          "Bộ đệm lệnh"
        ],
        "answer": "A"
      },
      {
        "id": 205,
        "sourceId": 205,
        "question": "Địa chỉ CS:IP chỉ địa chỉ lệnh sắp được thực hiện trong đoạn nào sau đây",
        "options": [
          "Đoạn dữ liệu",
          "Đoạn ngăn xếp",
          "Đoạn mã",
          "Đoạn dữ liệu phụ"
        ],
        "answer": "C"
      },
      {
        "id": 206,
        "sourceId": 206,
        "question": "Đoạn dữ liệu có dung lượng là bao nhiêu",
        "options": [
          "64KByte",
          "64Kbit",
          "64 Mbyte",
          "64 Mbit"
        ],
        "answer": "A"
      },
      {
        "id": 207,
        "sourceId": 207,
        "question": "Các thanh ghi nào giữ kết quả trong các lệnh nhân chia 16 bit",
        "options": [
          "AX và DX",
          "BX và CX",
          "CX và DX",
          "AX và DI"
        ],
        "answer": "A"
      },
      {
        "id": 208,
        "sourceId": 208,
        "question": "Trong lập trình hợp ngữ 8086, khai báo kích thước bộ nhớ trong trường",
        "options": [
          "Model",
          "Stack",
          "Data",
          "Code"
        ],
        "answer": "A"
      },
      {
        "id": 209,
        "sourceId": 209,
        "question": "Khai báo các biến và hằng trong trường nào",
        "options": [
          "Model",
          "Stack",
          "Data",
          "Code"
        ],
        "answer": "C"
      },
      {
        "id": 210,
        "sourceId": 210,
        "question": "Thứ tự các thành phần trong dòng lệnh trong chương trình hợp ngữ từ trái qua sẽ là",
        "options": [
          "Nhãn, chú thích, lệnh, các toán hạng",
          "Nhãn, lệnh, các toán hạng, chú thích",
          "Nhãn, lệnh, chú thích, các toán hạng",
          "Nhãn, các toán hạng, lệnh, chú thích"
        ],
        "answer": "B"
      },
      {
        "id": 211,
        "sourceId": 211,
        "question": "Đâu không phải là một loại addressing mode trong ngôn ngữ assembly?",
        "options": [
          "Parallel",
          "Indirect",
          "Immediate",
          "Direct"
        ],
        "answer": "A"
      },
      {
        "id": 212,
        "sourceId": 212,
        "question": "Các ký hiệu MOV hay ADD được gọi là",
        "options": [
          ". OP-Code",
          "Operators",
          "Commands",
          "Operands"
        ],
        "answer": "A"
      },
      {
        "id": 213,
        "sourceId": 213,
        "question": "Lệnh khai báo một biến 1 byte có tên “var” là",
        "options": [
          "var DB 1,2,3",
          "var DW ?",
          "var DD ?",
          "var DB ?"
        ],
        "answer": "D"
      },
      {
        "id": 214,
        "sourceId": 214,
        "question": "Lệnh khai báo một xâu hoàn chỉnh (có đầu xâu, kết thúc xâu) có tên S là",
        "options": [
          "S DB 13,10,65,66,67,68,’$’",
          "S db 100 dup(?)",
          "S db ‘a’",
          "S db “hello”"
        ],
        "answer": "A"
      },
      {
        "id": 215,
        "sourceId": 215,
        "question": "Đâu là lệnh khai báo một hằng số",
        "options": [
          "Z db 33h,13h",
          "T db 10 dup(50 dup(?))",
          "Y db 3",
          "X equ 2"
        ],
        "answer": "D"
      },
      {
        "id": 216,
        "sourceId": 216,
        "question": "Lệnh khai báo một mảng có 100 phần tử, tên S là",
        "options": [
          "S db ‘a’",
          "S db “hello”",
          "S db 100 dup(?)",
          "S DB 100,13,10,65,66,67,68,’$’,100"
        ],
        "answer": "C"
      },
      {
        "id": 217,
        "sourceId": 217,
        "question": "Trong ngắt 21H, hàm nào dùng để nhập 1 kí tự vào từ bàn phím",
        "options": [
          "01H",
          "02H",
          "09H",
          "4CH"
        ],
        "answer": "A"
      },
      {
        "id": 218,
        "sourceId": 218,
        "question": "Kí tự nhập vào từ bàn phím có mã ASCII nằm trong thanh ghi nào",
        "options": [
          "AL",
          "BL",
          "CL",
          "DL"
        ],
        "answer": "A"
      },
      {
        "id": 219,
        "sourceId": 219,
        "question": "Hàm kết thúc chương trình trong ngắt 21H là",
        "options": [
          "01H",
          "02H",
          "09H",
          "4CH"
        ],
        "answer": "D"
      },
      {
        "id": 220,
        "sourceId": 220,
        "question": "Một kí tự muốn in ra màn hình phải có mã ASCII nằm trong thanh ghi nào",
        "options": [
          "AL",
          "BL",
          "CL",
          "DL"
        ],
        "answer": "D"
      },
      {
        "id": 221,
        "sourceId": 221,
        "question": "Trong ngắt 21H, hàm dùng để in 1 kí tự ra màn hình là",
        "options": [
          "01H",
          "02H",
          "09H",
          "4CH"
        ],
        "answer": "B"
      },
      {
        "id": 222,
        "sourceId": 222,
        "question": "Trong ngắt 21H, hàm nào dùng để in 1 xâu kí tự ra màn hình là",
        "options": [
          "01H",
          "02H",
          "09H",
          "4CH"
        ],
        "answer": "C"
      },
      {
        "id": 223,
        "sourceId": 223,
        "question": "Đoạn chương trình dưới đây thực hiện nhiệm vụ gì? LEA DX, BUFFER MOV AH, 09H INT 21H",
        "options": [
          "In ký tự đầu tiên được trỏ bởi buffer ra màn",
          "Đọc một xâu ký tự từ bàn phím vào buffer",
          "Đọc một ký tự vào buffer từ bàn phím",
          "In xâu ký tự được trỏ bởi buffer ra màn hình"
        ],
        "answer": "D"
      },
      {
        "id": 224,
        "sourceId": 224,
        "question": "Sau đoạn chương trình bên dưới ta có MOV CX,7 MOV AX,0 TONG: ADD AX,CX LOOP TONG",
        "options": [
          "AX=7",
          "AX=28",
          "AX=21",
          "AX=25"
        ],
        "answer": "B"
      },
      {
        "id": 225,
        "sourceId": 225,
        "question": "Sau khi thực hiện đoạn chương trình bên dưới: MOV AL, 5 MOV BL, 10 ADD BL, AL SUB BL, 1 Giá trị trong thanh ghi BL bằng bao nhiêu",
        "options": [
          "5h",
          "26h",
          "0Eh",
          "0"
        ],
        "answer": "C"
      },
      {
        "id": 226,
        "sourceId": 226,
        "question": "Thanh ghi CS lưu cái gì trong code segment",
        "options": [
          "instruction codes",
          "instruction path",
          "instruction stream",
          "instruction stream line"
        ],
        "answer": "A"
      },
      {
        "id": 227,
        "sourceId": 227,
        "question": "Thanh ghi trạng thái (status register) còn được gọi là",
        "options": [
          "flags",
          "stack",
          "counter",
          "accumulator"
        ],
        "answer": "A"
      },
      {
        "id": 228,
        "sourceId": 228,
        "question": "Thanh ghi cờ 16 bit của bộ xử lý 8086 được dùng để chỉ",
        "options": [
          "Một condition từ kết quả tính toán trong ALU",
          "Một condition của bộ nhớ",
          "Kết quả của phép cộng",
          "Kết quả của phép trừ"
        ],
        "answer": "A"
      },
      {
        "id": 229,
        "sourceId": 229,
        "question": "Lệnh PUSH chép một word vào",
        "options": [
          "stack",
          "bộ nhớ",
          "thanh ghi",
          "địa chỉ đích"
        ],
        "answer": "A"
      },
      {
        "id": 230,
        "sourceId": 230,
        "question": "Lệnh POP chép một word từ",
        "options": [
          "stack",
          "bộ nhớ",
          "thanh ghi",
          "cache"
        ],
        "answer": "A"
      },
      {
        "id": 231,
        "sourceId": 231,
        "question": "LD chép các word vào thanh ghi và __",
        "options": [
          "DS",
          "ES",
          "SS",
          "CS"
        ],
        "answer": "A"
      },
      {
        "id": 232,
        "sourceId": 232,
        "question": "Bộ xứ lý 8086 nạp lần lượt các chỉ thị từ__của bộ nhớ",
        "options": [
          "Code segment",
          "IP",
          "ES",
          "SS"
        ],
        "answer": "A"
      },
      {
        "id": 233,
        "sourceId": 233,
        "question": "Mục đích chính khi tạo ra ngôn ngữ assembly là",
        "options": [
          "Để cung cấp một phương tiện tương tác với phần cứng ở mức thấp",
          "Để làm cho lập trình khó hơn",
          "Để đơn giản việc lập trình bằng cách cung cấp cáu trúc ngôn ngữ mức cao",
          "Để cung cấp một phương tiện tương tác với phần cứng ở mức cao"
        ],
        "answer": "A"
      },
      {
        "id": 234,
        "sourceId": 234,
        "question": "Phát biểu nào sau đây là đúng với các chương trình viết bằng ngôn ngữ assembly?",
        "options": [
          "Chạy nhanh hơn và hiệu quả hơn các chương trình ngôn ngữ mức cao",
          "Độc lập với máy  (machine-independent)",
          "Dễ đọc hơn các chương trình ngôn ngữ mức cao",
          "Khó debug hơn chương trình ngôn ngữ mức cao"
        ],
        "answer": "A"
      },
      {
        "id": 235,
        "sourceId": 235,
        "question": "Các chương trình ngôn ngữ assembly được viết dùng",
        "options": [
          "Mnenonics",
          "Hex code",
          "ASCII code",
          "Binary code"
        ],
        "answer": "A"
      },
      {
        "id": 236,
        "sourceId": 236,
        "question": "Đâu là mặt hạn chế khi dùng ngôn ngữ assembly?",
        "options": [
          "Không chạy trên các kiến trúc phần cứng khác.",
          "Chạy chậm và hiệu quả thấp hơn ngôn ngữ mức cao",
          "Không cho truy xuất trực tiếp đến tài nguyên phần cứng.",
          "Dễ viết và lưu giữ"
        ],
        "answer": "A"
      },
      {
        "id": 237,
        "sourceId": 237,
        "question": "Đâu là phát biểu đúng về lợi ích khi dùng ngôn ngữ assembly?",
        "options": [
          "Cung cấp khả năng điều khiển trực tiếp các tài nguyên phần cứng",
          "Dễ viết và dễ lưu giữ hơn ngôn ngữ mức cao",
          "Dễ chuyển sang các kiến trúc phần cứng khác",
          "Dễ đọc và chạy nhanh hơn ngôn ngữ mức cao"
        ],
        "answer": "A"
      },
      {
        "id": 238,
        "sourceId": 238,
        "question": "Đâu không phải là một kiểu dữ liệu trong ngôn ngữ assembly?",
        "options": [
          "Boolean",
          "String",
          "Float",
          "Integer"
        ],
        "answer": "A"
      },
      {
        "id": 239,
        "sourceId": 239,
        "question": "Nội dung được chứa trong Stack Pointer là",
        "options": [
          "Địa chỉ của phần tử trên đỉnh của stack",
          "Địa chỉ của chỉ thị kế tiếp",
          "Địa chỉ của chỉ thị hiện hành",
          "Địa chỉ của phần tử ở đáy của stack"
        ],
        "answer": "A"
      },
      {
        "id": 240,
        "sourceId": 240,
        "question": "Thanh ghi nào sau đây là trong kiến trúc x86-64 bit?",
        "options": [
          "RAX",
          "EBX",
          "EIP",
          "EDX"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": 7,
    "title": "Đề 7",
    "questions": [
      {
        "id": 241,
        "sourceId": 241,
        "question": "Sau đoạn chương trình bên dưới ta có MOV AX,0 MOV CX,7 TONG: ADD AX,CX INC CX CMP CX,10 JLE TONG",
        "options": [
          "AX=28",
          "AX=34",
          "AX=55",
          "AX=25"
        ],
        "answer": "B"
      },
      {
        "id": 242,
        "sourceId": 242,
        "question": "Sau khi thực hiện đoạn chương trình bên dưới, thanh ghi AL có giá trị bằng bao nhiêu ? XOR AX, AX XOR BX, BX MOV AX, 5857H MOV BX, 58A8H XOR AX, BX",
        "options": [
          "58h",
          "57h",
          "A8h",
          "FFh"
        ],
        "answer": "D"
      },
      {
        "id": 243,
        "sourceId": 243,
        "question": "Giá trị của các thanh ghi AX, BX, CX, DX sau khi thực hiện đoạn lệnh sau đây lần lượt là: MOV AX,100 MOV BX,71 ADD AX,BX PUSH BX PUSH AX POP CX ADD CX,2 POP DX AND DX,CX",
        "options": [
          "00ABh, 0047h, 00ADh, 0005h",
          "00ABh, 0047h, 00ADh, 0047h",
          "00ABh, 0047h, 00ABh, 0005h",
          "00ADh, 0047h, 00ADh, 0005h"
        ],
        "answer": "A"
      },
      {
        "id": 244,
        "sourceId": 244,
        "question": "Giá trị của các thanh ghi AX, BX, CX, DX sau khi thực hiện đoạn lệnh sau đây lần lượt là: MOV AX,300 MOV BX,47 MOV CX,41 MOV DX,12 SUB AX,CX ADD BX,DX",
        "options": [
          "0103h, 003Bh, 0029h, 000Ch",
          "0103h, 0029h, 003Bh, 000Ch",
          "003Bh, 0103h, 0029h, 000Ch",
          "0103h, 000Ch, 0029h, 003Bh"
        ],
        "answer": "A"
      },
      {
        "id": 245,
        "sourceId": 245,
        "question": "Giá trị của các thanh ghi AX, BX, CX, DX sau khi thực hiện đoạn lệnh sau đây lần lượt là:  MOV AX,71 MOV BX,17  AND AX,BX  MOV CX,AX  MOV DX,BX",
        "options": [
          "0063h, 0011h, 0011h, 0063h",
          "0036h, 0010h, 0010h, 0036h",
          "0001h, 0011h, 0001h, 0011h",
          "0036h, 0000h, 0011h, 0000h"
        ],
        "answer": "C"
      },
      {
        "id": 246,
        "sourceId": 246,
        "question": "Giả sử AX=10, BX=15, sau đoạn chương trình sau ta sẽ có SUB AX,BX CMP AX,0 JG Tiep NEG AX JMP Next Tiep: ADD AX,15 JMP KT Next: ADD AX,20 KT:",
        "options": [
          "AX=25",
          "AX=20",
          "AX=5",
          "Đáp án khác"
        ],
        "answer": "A"
      },
      {
        "id": 247,
        "sourceId": 247,
        "question": "Sau khi thực hiện đoạn chương trình: ORG 100H MOV AX,0 MOV BX,0 MOV AL, 5 MOV BL, 10H ADD AL, BL XOR BL, 55H Thanh ghi AX có giá trị bằng bao nhiêu",
        "options": [
          "35h",
          "25h",
          "15h",
          "45h"
        ],
        "answer": "C"
      },
      {
        "id": 248,
        "sourceId": 248,
        "question": "Sau khi thực hiện đoạn lệnh sau : MOV AL, 200  MOV BL, 4 MUL BL Thanh ghi AL có kết quả bằng bao nhiêu",
        "options": [
          "3h",
          "80h",
          "4h",
          "20h"
        ],
        "answer": "D"
      },
      {
        "id": 249,
        "sourceId": 249,
        "question": "Đoạn chương trình nào nhập 1 chữ số vào  từ bàn phím",
        "options": [
          "MOV AH,01H NHAP: INT 21H CMP AL,30H JL NHAP CMP AL39H JG NHAP",
          "MOV AH,01H NHAP: INT 21H CMP AL,41H JL NHAP CMP AL,5AH JG NHAP",
          "MOV AH,01H NHAP: INT 21H CMP AL,61H JL NHAP CMP AL,7AH JG NHAP",
          "MOV AH,01H NHAP: INT 21H CMP AL,30H JG NHAP CMP AL,39H JL NHAP"
        ],
        "answer": "A"
      },
      {
        "id": 250,
        "sourceId": 250,
        "question": "Đoạn chương trình nhập 1 chữ cái in hoa vào  từ bàn phím",
        "options": [
          "MOV AH,01H NHAP: INT 21H CMP AL,30H JL NHAP CMP AL39H JG NHAP",
          "MOV AH,01H NHAP: INT 21H CMP AL,41H JL NHAP CMP AL,5AH JG NHAP",
          "MOV AH,01H NHAP: INT 21H CMP AL,61H JL NHAP CMP AL,7AH JG NHAP",
          "MOV AH,01H NHAP: INT 21H CMP AL,30H JG NHAP CMP AL,39H JL NHAP"
        ],
        "answer": "B"
      },
      {
        "id": 251,
        "sourceId": 251,
        "question": "Ý nghĩa của đoạn chương trình sau MOV CX,8 XOR BX,BX LAP: SHL AL,1 JC TT INC BX TT: LOOP LAP",
        "options": [
          "Đếm số bit 1 trong AL lưu vào BX",
          "Đếm số bit 0 trong AL lưu vào BX",
          "Đếm số bit 1 trong AL in ra màn hình",
          "Đếm số bit 0 trong AL in ra màn hình"
        ],
        "answer": "B"
      },
      {
        "id": 252,
        "sourceId": 252,
        "question": "Xét đoạn chương trình sau: MOV CX,0 MOV AH,1 DOC: INT 21h CMP AL,0 JE thoat INC CX JMP DOC Thoat: Bộ đếm CX có giá trị là",
        "options": [
          "CX có giá trị bằng số ký tự được đọc vào",
          "CX chứa giá trị được hiển thị",
          "CX = 0",
          "CX = 1"
        ],
        "answer": "A"
      },
      {
        "id": 253,
        "sourceId": 253,
        "question": "Thanh ghi nào sau đây trong x86-64bit là tương đương với thanh ghi PC trong máy tính John Von Neumann?",
        "options": [
          "RIP",
          "ESI",
          "EDI",
          "RAX"
        ],
        "answer": "A"
      },
      {
        "id": 254,
        "sourceId": 254,
        "question": "Ba phần trong một chương trình asembly là",
        "options": [
          "data section, bss section và text section",
          "data section, stack section và text section",
          "text section, heap section và data section",
          "bss section, buffer section và text section"
        ],
        "answer": "A"
      },
      {
        "id": 255,
        "sourceId": 255,
        "question": "Kết quả của chỉ thị MOV AL, 65 là",
        "options": [
          "Lưu 0100 0001 trong AL",
          "Lưu 42H trong AL",
          "Lưu 40H trong AL",
          "Lưu 0100 0010 trong AL"
        ],
        "answer": "A"
      },
      {
        "id": 256,
        "sourceId": 256,
        "question": "Nhóm chỉ thị nào sau đây không tác động (ảnh hưởng) đến các cờ (flags)?",
        "options": [
          "Nhóm chỉ thị chuyển data",
          "Nhóm chỉ thị tính toán logic",
          "Nhóm chỉ thị tính toán số học",
          "Nhóm chỉ thị rẽ nhánh (branch operation)"
        ],
        "answer": "A"
      },
      {
        "id": 257,
        "sourceId": 257,
        "question": "Cho trích đoạn chương trình assembly như sau, chạy trên hệ điều hành linux: MOV EAX, 3 MOV EBX, 0 MOV ECX, INPUT_BUFFER MOV EDX, 256 INT 0X80 Phát biểu nào sau đây là đúng?",
        "options": [
          "Đoạn chương trình để đọc dữ liệu nhập từ bàn phím vào máy tính",
          "Đoạn chương trình để in thông báo lên màn hình máy tính",
          "Đoạn chương trình để đọc dữ liệu nhập từ bộ đệm vào máy tính",
          "Đoạn chương trình để ghi dữ liệu ra ổ đĩa cứng thứ cấp của máy tính"
        ],
        "answer": "A"
      },
      {
        "id": 258,
        "sourceId": 258,
        "question": "Các thiết lập về cấu hình phần cứng máy tính  được lưu trữ tại",
        "options": [
          "Hard Disk Drive",
          "Cache",
          "CMOS RAM",
          "RAM"
        ],
        "answer": "C"
      },
      {
        "id": 259,
        "sourceId": 259,
        "question": "Đặc điểm của bộ nhớ ROM",
        "options": [
          "Cho phép ghi dữ liệu",
          "Chỉ cho phép đọc dữ liệu",
          "Bị mất dữ liệu khi không có nguồn cấp",
          "Cho phép ghi/đọc dữ liệu đồng thời."
        ],
        "answer": "B"
      },
      {
        "id": 260,
        "sourceId": 260,
        "question": "ROM là bộ nhớ có đặc điểm",
        "options": [
          "Cho phép truy nhập nhanh hơn bộ nhớ RAM",
          "Nội dung không bị thay đổi khi mất nguồn cấp",
          "Lưu trữ được nhiều thông tin hơn bộ nhớ RAM",
          "Được sử dụng làm bộ nhớ Cache"
        ],
        "answer": "B"
      },
      {
        "id": 261,
        "sourceId": 261,
        "question": "Chương trình BIOS được lưu trữ trong bộ nhớ thuộc loại nào",
        "options": [
          "RAM",
          "ROM",
          "Ổ đĩa cứng",
          "Cache"
        ],
        "answer": "B"
      },
      {
        "id": 262,
        "sourceId": 262,
        "question": "Cấu tạo của một ô nhớ SRAM bao gồm",
        "options": [
          "Bao gồm ba tụ điện và ba Transistor",
          "Bao gồm hai tụ điện và bốn Transistor",
          "Gồm sáu Transistor",
          "Gồm sáu tụ điện"
        ],
        "answer": "C"
      },
      {
        "id": 263,
        "sourceId": 263,
        "question": "Cấu tạo của một ô nhớ DRAM bao gồm",
        "options": [
          "Gồm hai tụ điện và một Transistor istor",
          "Gồm một tụ điện và một Transistor",
          "Gồm một tụ điện và hai Transistor",
          "Gồm hai tụ điện và hai Transistor istor"
        ],
        "answer": "B"
      },
      {
        "id": 264,
        "sourceId": 264,
        "question": "Đối với RAM, phát biểu nào sau đây đúng",
        "options": [
          "Là loại bộ nhớ không khả biến",
          "RAM là viết tắt của: Read Access Memory",
          "SRAM được chế tạo từ các tụ điện",
          "Là nơi lưu giữ các thông tin mà máy tính đang xử lý"
        ],
        "answer": "D"
      },
      {
        "id": 265,
        "sourceId": 265,
        "question": "Đặc điểm của bộ nhớ RAM",
        "options": [
          "Cho phép ghi dữ liệu",
          "Chỉ cho phép đọc dữ liệu",
          "Không bị mất dữ liệu khi không có nguồn cấp",
          "Cho phép ghi/đọc dữ liệu đồng thời tại một vị trí nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 266,
        "sourceId": 266,
        "question": "Bộ nhớ nào cần được thực hiện làm tươi",
        "options": [
          "ROM",
          "SRAM",
          "RAM",
          "DRAM"
        ],
        "answer": "D"
      },
      {
        "id": 267,
        "sourceId": 267,
        "question": "Bộ nhớ Cache được cấu trúc từ loại bộ nhớ nào trong số các bộ nhớ sau đây",
        "options": [
          "ROM",
          "SRAM",
          "DRAM",
          "Flash ROM"
        ],
        "answer": "B"
      },
      {
        "id": 268,
        "sourceId": 268,
        "question": "Chức năng của bộ nhớ Cache trong máy tính là gì",
        "options": [
          "Chứa các toán hạng là hằng số",
          "Chuẩn bị trước dữ liệu mà bộ vi xử lý cần sử dụng",
          "Lưu giữ các tham số hệ thống",
          "Giúp mở rộng dung lượng bộ nhớ"
        ],
        "answer": "B"
      },
      {
        "id": 269,
        "sourceId": 269,
        "question": "Ưu điểm của bộ nhớ Cache là",
        "options": [
          "Dung lượng lớn",
          "Thời gian truy nhập lớn",
          "Thời gian truy nhập nhỏ",
          "Chi phí thấp"
        ],
        "answer": "C"
      },
      {
        "id": 270,
        "sourceId": 270,
        "question": "Thành phần cấu tạo chính trong một memory logic chip là",
        "options": [
          "Nhiều ma trận cell xếp chồng",
          "Một ma trận cell",
          "Nhiều ma trận cell xếp nối tiếp",
          "Một chuỗi cell nối tiếp"
        ],
        "answer": "A"
      },
      {
        "id": 271,
        "sourceId": 271,
        "question": "Một memory logic chip WxB có nghĩa là",
        "options": [
          "Chip có thể chứa W từ nhớ mỗi từ có B bit",
          "Chip có thể chứa B từ nhớ mỗi từ có W bit",
          "Chip có thể chứa WxB byte",
          "Chip có thể chứa W từ nhớ mỗi từ có B byte"
        ],
        "answer": "A"
      },
      {
        "id": 272,
        "sourceId": 272,
        "question": "Cấu trúc của một thanh RAM gồm",
        "options": [
          "Nhiều memory logic chip được nối theo mạch giải mã địa chỉ",
          "Nhiều memory logic chip được xếp chồng vào một chip lớn",
          "Một memory logic chip nhiều mặt",
          "Một memory logic chip một mặt"
        ],
        "answer": "A"
      },
      {
        "id": 273,
        "sourceId": 273,
        "question": "Số lượng mức cache có thể có trong máy tính?",
        "options": [
          "Nhiều",
          "Một",
          "Hai",
          "Ba"
        ],
        "answer": "A"
      },
      {
        "id": 274,
        "sourceId": 274,
        "question": "Có bao nhiêu loại cache trong máy tính?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "A"
      },
      {
        "id": 275,
        "sourceId": 275,
        "question": "Bộ nhớ chính được làm chủ yếu từ linh kiện nào?",
        "options": [
          "RAM động",
          "RAM tĩnh",
          "ROM",
          "Flash ROM"
        ],
        "answer": "A"
      },
      {
        "id": 276,
        "sourceId": 276,
        "question": "Chu kỳ làm tươi cần cho loại linh kiện nhớ nào?",
        "options": [
          "RAM động",
          "RAM tĩnh",
          "Flash ROM",
          "EPROM"
        ],
        "answer": "A"
      },
      {
        "id": 277,
        "sourceId": 277,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "RAM động được dùng phổ biến hơn RAM tĩnh vì có hiệu suất cao hơn RAM tĩnh.",
          "Một trong những nhược điểm của RAM động là phải làm tươi theo định kỳ để duy trì dữ liệu",
          "RAM tĩnh thường được dùng để làm bộ nhớ cache",
          "Cả RAM tĩnh và RAM động đều bị xóa dữ liệu khi mất nguồn điện"
        ],
        "answer": "A"
      },
      {
        "id": 278,
        "sourceId": 278,
        "question": "Đối với bộ nhớ chính trong máy tính, phát biểu nào sau đây là ĐÚNG",
        "options": [
          "Bộ nhớ chính chứa chương trình và dữ liệu dạng thư viện",
          "Bộ nhớ chính có thể mở rộng dung lượng tùy ý",
          "Bộ nhớ chính được đánh địa chỉ bởi hệ điều hành",
          "Bộ nhớ chính được đánh địa chỉ trực tiếp bởi bộ xử lý"
        ],
        "answer": "D"
      },
      {
        "id": 279,
        "sourceId": 279,
        "question": "Đối với bộ nhớ cache, có các kỹ thuật ánh xạ địa chỉ sau đây",
        "options": [
          "Trực tiếp, liên kết toàn phần, liên kết tập hợp",
          "Liên kết toàn phần, liên kết phụ thuộc, gián tiếp",
          "Liên kết tập hợp, liên kết phần tử, gián tiếp",
          "Trực tiếp, liên kết phần tử, liên kết gián đọan"
        ],
        "answer": "A"
      },
      {
        "id": 280,
        "sourceId": 280,
        "question": "Khi truy nhập cache, xét ánh xạ trực tiếp, phát biểu nào sau đây là đúng",
        "options": [
          "Mỗi block có thể ánh xạ vào một line bất kỳ",
          "Mỗi block có thể ánh xạ vào một line bất kỳ trong một tập line xác định",
          "Mỗi block chỉ được ánh xạ vào một line duy nhất",
          "Mỗi block chỉ được ánh xạ vào một trong bốn line xác định"
        ],
        "answer": "C"
      }
    ]
  },
  {
    "id": 8,
    "title": "Đề 8",
    "questions": [
      {
        "id": 281,
        "sourceId": 281,
        "question": "Thời gian truy nhập bộ nhớ được tính bằng",
        "options": [
          "Thời gian từ lúc khởi động chương trình tới khi nhận được dữ liệu từ bộ nhớ",
          "Thời gian từ khi nhận lệnh tới khi nhận được dữ liệu từ bộ nhớ",
          "Thời gian từ khi có tín hiệu Chip Enable tới khi nhận được dữ liệu",
          "Thời gian tồn tại của dữ liệu trên Bus hệ thống"
        ],
        "answer": "B"
      },
      {
        "id": 282,
        "sourceId": 282,
        "question": "Đơn vị quản lý bộ nhớ trong máy tính có thể là",
        "options": [
          "Bộ vi xử lý",
          "Bộ điều khiển truy nhập DMA",
          "Bộ điều khiển BUS",
          "Bộ vi xử lý và bộ điều khiển truy nhập DMA"
        ],
        "answer": "D"
      },
      {
        "id": 283,
        "sourceId": 283,
        "question": "Đối với bộ nhớ ROM, phát biểu nào sau đây là sai",
        "options": [
          "EPROM là loại ROM có thể xóa và ghi lại nhiều lần",
          "Là loại bộ nhớ khả biến",
          "Là nơi chứa các chương trình hệ thống (BIOS)",
          "Là nơi chứa các vi chương trình"
        ],
        "answer": "B"
      },
      {
        "id": 284,
        "sourceId": 284,
        "question": "Tại sao bộ nhớ RAM của máy tính được gọi là bộ nhớ truy cập ngẫu nhiên",
        "options": [
          "Giá trị các ô nhớ là ngẫu nhiên",
          "Truy xuất bộ nhớ theo địa chỉ được cung cấp ngẫu nhiên",
          "Bộ nhớ gồm các module có thứ tự sắp xếp ngẫu nhiên",
          "Thời gian truy cập vào một ô nhớ bất kỳ là ngẫu nhiên"
        ],
        "answer": "B"
      },
      {
        "id": 285,
        "sourceId": 285,
        "question": "Trong các phát biểu sau, phát biểu nào đúng",
        "options": [
          "Bộ nhớ ROM không phải là bộ nhớ truy nhập ngẫu nhiên",
          "Bộ nhớ trong có dung lượng lớn hơn bộ nhớ ngoài",
          "Bộ nhớ Cache có tốc độ truy xuất cao hơn bộ nhớ RAM",
          "Bộ nhớ RAM luôn có dung lượng nhỏ hơn bộ nhớ Cache"
        ],
        "answer": "C"
      },
      {
        "id": 286,
        "sourceId": 286,
        "question": "Cache có khả năng truy cập tốc độ cao vì nguyên nhân chính sau đây",
        "options": [
          "Kết nối trực tiếp với CPU",
          "Cấu tạo đơn giản",
          "Dung lượng nhỏ, giá thành cao",
          "Linh kiện có chất lượng cao"
        ],
        "answer": "A"
      },
      {
        "id": 287,
        "sourceId": 287,
        "question": "Đối với bộ nhớ cache, phát biểu nào sau đây là đúng",
        "options": [
          "Cache có thể được đặt trên cùng chip với CPU",
          "Bộ nhớ chính có tốc độ nhanh hơn cache",
          "Bộ nhớ cache được đặt giữa Bộ nhớ chính và Bộ nhớ ngoài",
          "Cache là bộ nhớ nằm tách biệt CPU"
        ],
        "answer": "A"
      },
      {
        "id": 288,
        "sourceId": 288,
        "question": "Cache là loại bộ nhớ có đặc điểm",
        "options": [
          "Có dung lượng lớn hơn bộ nhớ RAM",
          "Cho phép truy nhập nhanh hơn so với bộ nhớ DRAM",
          "Cho phép truy nhập nhanh hơn so với các thanh ghi của CPU",
          "Là bộ nhớ cố định"
        ],
        "answer": "B"
      },
      {
        "id": 289,
        "sourceId": 289,
        "question": "Địa chỉ thực tế mà trình quản lý bộ nhớ nhìn thấy và thao tác là",
        "options": [
          "Địa chỉ vật lý",
          "Không gian vật lý",
          "Địa chỉ logic",
          "Không gian địa chỉ"
        ],
        "answer": "A"
      },
      {
        "id": 290,
        "sourceId": 290,
        "question": "Trong cấu trúc bộ nhớ dạng 2N×M, phát biểu nào dưới đây đúng",
        "options": [
          "Bộ nhớ gồm 2N Byte và M module nhớ",
          "Bộ nhớ gồm 2N từ nhớ và M module nhớ",
          "Bộ nhớ gồm 2N ngăn nhớ, mỗi ngăn nhớ gồm M bit",
          "Bộ nhớ gồm 2N từ nhớ và M module nhớ"
        ],
        "answer": "C"
      },
      {
        "id": 291,
        "sourceId": 291,
        "question": "Cho chip nhớ SRAM có dung lượng 16K x 8 bit, phát biểu nào sau đây là sai",
        "options": [
          "Có 14 đường địa chỉ",
          "Có 8 đường dữ liệu",
          "Các đường địa chỉ là: A0 → A13",
          "Có 16 đường địa chỉ"
        ],
        "answer": "D"
      },
      {
        "id": 292,
        "sourceId": 292,
        "question": "Cho chip nhớ DRAM có các tín hiệu: A0 → A15, D0 → D7 , RD, WE. Phát biểu nào sau đây là đúng",
        "options": [
          "Dung lượng của chip là: 64K x 8 bit",
          "Dung lượng của chip là: 256K x 16 bit",
          "RD là tín hiệu điều khiển ghi dữ liệu",
          "WE là tín hiệu điều khiển đọc dữ liệu"
        ],
        "answer": "A"
      },
      {
        "id": 293,
        "sourceId": 293,
        "question": "Chức năng của tín hiệu Chip Enable trong IC bộ nhớ là gì",
        "options": [
          "Cho phép đọc dữ liệu trong IC bộ nhớ",
          "Cho phép ghi dữ liệu vào IC bộ nhớ",
          "Cho phép IC bộ nhớ hoạt động",
          "Cho phép đọc, ghi đồng thời đối với IC bộ nhớ"
        ],
        "answer": "C"
      },
      {
        "id": 294,
        "sourceId": 294,
        "question": "Một bộ nhớ 64 Kbit có thể được tổ chức theo kiểu nào",
        "options": [
          "64K × 1",
          "8K × 8",
          "16K × 4",
          "Tất cả đều đúng"
        ],
        "answer": "D"
      },
      {
        "id": 295,
        "sourceId": 295,
        "question": "Đâu là phát biểu đúng về bộ nhớ cache?",
        "options": [
          "Cache không phải là thành phần của main memory",
          "Cache là thành phần của main memory",
          "Mỗi vị trí của cache thuộc bản đồ địa chỉ hóa của CPU, do đó CPU có thể truy xuất cache một cách trực tiếp.",
          "Cache được làm từ RAM động"
        ],
        "answer": "A"
      },
      {
        "id": 296,
        "sourceId": 296,
        "question": "Qui định phải tuân theo khi tiến hành nạp một khối bộ nhớ vào cache thay thế khối bộ nhớ nào đó đang chiếm giữ vị trí cache thường được gọi là gì?",
        "options": [
          "Ánh xạ cache",
          "Thuật toán thay thế",
          "Đồng nhất cache",
          "Hợp nhất cache"
        ],
        "answer": "A"
      },
      {
        "id": 297,
        "sourceId": 297,
        "question": "Nạp vào bất cứ line nào trong một nhóm là qui tắc của loại ánh xạ cache nào?",
        "options": [
          "Set associative mapping",
          "Double associative mapping",
          "Full associative mapping",
          "Direct mapping"
        ],
        "answer": "A"
      },
      {
        "id": 298,
        "sourceId": 298,
        "question": "Nạp vào bất cứ line nào trong cache là qui tắc của loại ánh xạ cache nào?",
        "options": [
          "Full associative mapping",
          "Double associative mapping",
          "Set associative mapping",
          "Direct mapping"
        ],
        "answer": "A"
      },
      {
        "id": 299,
        "sourceId": 299,
        "question": "Chỉ được nạp vào một line được chỉ định duy nhất là qui tắc của loại ánh xạ cache nào?",
        "options": [
          "Direct mapping",
          "Double associative mapping",
          "Full associative mapping",
          "Set associative mapping"
        ],
        "answer": "A"
      },
      {
        "id": 300,
        "sourceId": 300,
        "question": "Write through và write back là đề cập đến điều gì?",
        "options": [
          "Biện pháp ngăn chặn sự bất đồng về nội dung giữa cache và bộ nhớ.",
          "Biện pháp ngăn chặn sự bất đồng về nội dung giữa các cache khác nhau trong hệ đa bộ xử lý",
          "Biện pháp ngăn chặn sự bất đồng về nội dung giữa nhiều cache và bộ nhớ",
          "Biện pháp cải thiện hiệu quả sử dụng cache"
        ],
        "answer": "A"
      },
      {
        "id": 301,
        "sourceId": 301,
        "question": "Mặt tiêu cực khi áp dụng cơ chế cache là gì?",
        "options": [
          "Không nhất quán",
          "Mất tham chiếu",
          "Mất thời gian tìm kiếm",
          "Cản trở xử lý song song"
        ],
        "answer": "A"
      },
      {
        "id": 302,
        "sourceId": 302,
        "question": "Cơ chế nào sau đây nhằm rút ngắn thời gian truy xuất bộ nhớ chính?",
        "options": [
          "Cache",
          "Interrupt",
          "RAID",
          "DMA"
        ],
        "answer": "A"
      },
      {
        "id": 303,
        "sourceId": 303,
        "question": "Lý do kỹ thuật cache được đưa vào máy tính?",
        "options": [
          "Rút ngắn các chu kỳ nạp chỉ thị và dữ liệu",
          "Giảm tải cho bộ nhớ chính",
          "Gia tăng kích thước cho bộ nhớ trong của máy tính",
          "Tăng tốc độ làm việc của CPU"
        ],
        "answer": "A"
      },
      {
        "id": 304,
        "sourceId": 304,
        "question": "Tham số đánh giá mức độ hiệu quả của cache là gì?",
        "options": [
          "Hit ratio",
          "Utility",
          "MHz",
          "GByte"
        ],
        "answer": "A"
      },
      {
        "id": 305,
        "sourceId": 305,
        "question": "Kỹ thuật nào sau đây nhằm rút ngắn chu kỳ chỉ thị",
        "options": [
          "Cache",
          "DMA",
          "FSB",
          "Interrupt"
        ],
        "answer": "A"
      },
      {
        "id": 306,
        "sourceId": 306,
        "question": "Kỹ thuật nào sau đây không có trong máy tính cơ bản ban đầu",
        "options": [
          "Bộ nhớ cache",
          "Thanh ghi đệm",
          "Bộ nhớ chính",
          "Bộ nhớ thứ cấp"
        ],
        "answer": "A"
      },
      {
        "id": 307,
        "sourceId": 307,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Trong máy tính chỉ có duy nhất một cache",
          "Cache có thể được tích hợp vào bên trong CPU chip (on-chip cache)",
          "Trong máy tính chỉ có duy nhất một bộ nhớ chính",
          "Bộ nhớ trong của máy tính bao gồm cả cache"
        ],
        "answer": "A"
      },
      {
        "id": 308,
        "sourceId": 308,
        "question": "Bộ nhớ RAM dung lượng 1MB có địa chỉ từ 00000H – FFFFFH, thời gian truy xuất đối với ô nhớ có địa chỉ 00000H với ô nhớ có địa chỉ 1CFFAH như thế nào",
        "options": [
          "Ô nhớ có địa chỉ 1CFFAH có thời gian nhỏ hơn",
          "Không so sánh được",
          "Ô nhớ có địa chỉ 00000H có thời gian nhỏ hơn",
          "Thời gian truy nhập giống nhau"
        ],
        "answer": "D"
      },
      {
        "id": 309,
        "sourceId": 309,
        "question": "Một phần nội dung của bộ nhớ RAM trong đoạn 0720 có nội dung như sau  Giá trị của thanh ghi AX như thế nào sau khi thực hiện lệnh: MOV BX,0Fh MOV AX,[BX]",
        "options": [
          "FFECh",
          "01F4h",
          "4B69h",
          "6569h"
        ],
        "answer": "D"
      },
      {
        "id": 310,
        "sourceId": 310,
        "question": "Trong kỹ thuật ánh xạ liên kết toàn phần, các trường địa chỉ là",
        "options": [
          "Tag + Word + Line",
          "Tag + Word",
          "Tag + Line + Word",
          "Tag + Line"
        ],
        "answer": "B"
      },
      {
        "id": 311,
        "sourceId": 311,
        "question": "Trong kỹ thuật ánh xạ trực tiếp, các trường địa chỉ là",
        "options": [
          "Tag + Word + Line",
          "Tag + Word",
          "Tag + Line + Word",
          "Tag + Line"
        ],
        "answer": "C"
      },
      {
        "id": 312,
        "sourceId": 312,
        "question": "Trong kỹ thuật ánh xạ liên kết tập hợp, các trường địa chỉ là",
        "options": [
          "Tag + Line + Word",
          "Tag + Word",
          "Tag + Set + Word",
          "Tag + Line"
        ],
        "answer": "C"
      },
      {
        "id": 313,
        "sourceId": 313,
        "question": "Đối với bộ nhớ cache, xét nguyên lý lân cận về vị trí, phát biểu nào sau đây đúng",
        "options": [
          "Từ nhớ vừa truy cập thì xác suất thấp sau đó nó sẽ được truy cập lại",
          "Từ nhớ lân cận với từ nhớ vừa được truy cập sẽ có xác xuất cao được truy cập.",
          "Từ nhớ vừa truy cập thì chắc chắn sau đó nó sẽ không được truy cập lại",
          "Từ nhớ vừa truy cập thì chắc chắn sau đó nó sẽ  được truy cập lại"
        ],
        "answer": "B"
      },
      {
        "id": 314,
        "sourceId": 314,
        "question": "Đối với bộ nhớ cache, các thuật toán thay thế dữ liệu là",
        "options": [
          "Random, FIFO, LRU, LFU",
          "Random, LIFO, LRU, LFU",
          "Random, FIFO, LFU, LTU",
          "Random, LIFO, LTU, LVU"
        ],
        "answer": "A"
      },
      {
        "id": 315,
        "sourceId": 315,
        "question": "Cần thiết kế một thanh RAM 1Gbyte, đã có 8 chip 256M x 2, cần dùng thêm bao nhiêu chip 256 M x 1?",
        "options": [
          "16",
          "12",
          "8",
          "24"
        ],
        "answer": "A"
      },
      {
        "id": 316,
        "sourceId": 316,
        "question": "Cần thiết kế một thanh RAM 1Gbyte, đã có 4 chip 256M x 4, cần dùng thêm bao nhiêu chip 256 M x 2?",
        "options": [
          "8",
          "16",
          "32",
          "12"
        ],
        "answer": "A"
      },
      {
        "id": 317,
        "sourceId": 317,
        "question": "Hợp nhất cache sẽ có hit ratio cao trong trường hợp nào?",
        "options": [
          "Data-bound",
          "CPU-bound",
          "Memory-bound",
          "I/O-bound"
        ],
        "answer": "A"
      },
      {
        "id": 318,
        "sourceId": 318,
        "question": "Tách biệt cache sẽ bất lợi trong trường hợp nào?",
        "options": [
          "Instructon-bound",
          "CPU-bound",
          "Memory-bound",
          "I/O-bound"
        ],
        "answer": "A"
      },
      {
        "id": 319,
        "sourceId": 319,
        "question": "Mục tiêu của việc tách on-chip cache thành data cache và instruction cache là",
        "options": [
          "Để hỗ trợ xử lý song song và pipeline",
          "Để đơn giản thiết kế và xử lý",
          "Để giảm kích thước vật lý của CPU",
          "Để tạo điều kiện tăng dung lượng của cache"
        ],
        "answer": "A"
      },
      {
        "id": 320,
        "sourceId": 320,
        "question": "Tốc độ chuẩn 1x của đĩa DVD tương ứng với",
        "options": [
          "13 KB/s",
          "130 KB/s",
          "13 MB/s",
          "1.3 MB/s"
        ],
        "answer": "D"
      }
    ]
  },
  {
    "id": 9,
    "title": "Đề 9",
    "questions": [
      {
        "id": 321,
        "sourceId": 321,
        "question": "Tốc độ chuẩn 1x của đĩa CDROM tương ứng với",
        "options": [
          "15 MB/s",
          "15 KB/s",
          "1.5 MB/s",
          "150 KB/s"
        ],
        "answer": "D"
      },
      {
        "id": 322,
        "sourceId": 322,
        "question": "Đặc điểm của bộ nhớ ngoài so với bộ nhớ trong của máy tính là",
        "options": [
          "Tốc độ truy cập bộ nhớ thường rất cao",
          "Dung lượng nhỏ",
          "Không mất dữ liệu khi mất nguồn",
          "Giá thành cao"
        ],
        "answer": "C"
      },
      {
        "id": 323,
        "sourceId": 323,
        "question": "Ưu điểm của bộ nhớ ngoài so với bộ nhớ trong của máy tính là",
        "options": [
          "Tốc độ truy cập nhanh",
          "Dung lượng lớn",
          "Kích thước nhỏ gọn",
          "Cấu tạo đơn giản"
        ],
        "answer": "B"
      },
      {
        "id": 324,
        "sourceId": 324,
        "question": "Thời gian cần thiết để đọc một khối dữ liệu từ đĩa SSD (solid state drive) vào bộ nhớ chính không bao gồm",
        "options": [
          "Thời gian quay",
          "Thời gian tìm kiếm",
          "Thời gian khởi động",
          "Thời gian truyền"
        ],
        "answer": "A"
      },
      {
        "id": 325,
        "sourceId": 325,
        "question": "Loại bộ nhớ thứ cấp nào sau đây không cần dùng đầu từ?",
        "options": [
          "SSD",
          "HDD",
          "FDD (đĩa mềm)",
          "Băng từ"
        ],
        "answer": "A"
      },
      {
        "id": 326,
        "sourceId": 326,
        "question": "NAND Flash là thành phần cơ bản của loại bộ nhớ thứ cấp nào?",
        "options": [
          "SSD",
          "HDD",
          "CD-ROM",
          "DVD"
        ],
        "answer": "A"
      },
      {
        "id": 327,
        "sourceId": 327,
        "question": "NAS là viết tắt của",
        "options": [
          "Network Attached Storage",
          "Network Accessible Storage",
          "Network Attached Server",
          "Network Accessible Server"
        ],
        "answer": "A"
      },
      {
        "id": 328,
        "sourceId": 328,
        "question": "SAN là viết tắt của",
        "options": [
          "Storage Area Network",
          "Server Accessible Network",
          "Storage Attached Network",
          "Server Area Network"
        ],
        "answer": "A"
      },
      {
        "id": 329,
        "sourceId": 329,
        "question": "RAID là viết tắt của",
        "options": [
          "Redundant Array of Independent Disk",
          "Redundant Area of Independent Disk",
          "Recycle Array of Independent Disk",
          "Redundant Array of Integrative Drive"
        ],
        "answer": "A"
      },
      {
        "id": 330,
        "sourceId": 330,
        "question": "Mỗi Sector trong đĩa cứng chứa dữ liệu với dung lượng tối thiểu bằng bao nhiêu",
        "options": [
          "256 Byte",
          "1024 Byte",
          "512 Byte",
          "128 Byte"
        ],
        "answer": "C"
      },
      {
        "id": 331,
        "sourceId": 331,
        "question": "Lượng thời gian cần thiết để đọc một khối dữ liệu từ đĩa cứng (HDD) vào bộ nhớ chính bao gồm__phần cộng lại.",
        "options": [
          "3",
          "4",
          "5",
          "2"
        ],
        "answer": "A"
      },
      {
        "id": 332,
        "sourceId": 332,
        "question": "Quá trình đọc thông tin trên đĩa CDROM dựa trên hiện tượng gì",
        "options": [
          "Sự khác nhau về giá trị dòng quang điện khi ánh sáng phản xạ từ lớp lưu trữ dữ liệu",
          "Sự phản chiếu của các tia laser năng lượng thấp từ lớp lưu trữ dữ liệu",
          "Sự phản chiếu của các tia laser năng lượng cao từ lớp lưu trữ dữ liệu",
          "Sự khác nhau về giá trị dòng quang điện khi ánh sáng phản xạ từ lớp bề mặt đĩa"
        ],
        "answer": "B"
      },
      {
        "id": 333,
        "sourceId": 333,
        "question": "Nguyên lý của việc ghi dữ liệu trên đĩa cứng là gì",
        "options": [
          "Các bit 1 và 0 tương ứng với tốc độ di chuyển khác nhau của các điện tử trong vật liệu từ",
          "Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ",
          "Các bit 1 và 0 tương ứng với các momen lực từ khác nhau tác động lên đầu đọc",
          "Các bit 1 và 0 tương ứng với các giá trị điện áp khác nhau trên vật liệu từ"
        ],
        "answer": "B"
      },
      {
        "id": 334,
        "sourceId": 334,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Trên đĩa SSD vị trí của từ nhớ được định vị qua sector và track",
          "Trên đĩa SSD cũng có chứa một bộ nhớ cache bên trong",
          "Đĩa SSD cũng sử dụng chuẩn SATA như đĩa HDD",
          "Đĩa SSD có kích thước nhỏ hơn HDD"
        ],
        "answer": "A"
      },
      {
        "id": 335,
        "sourceId": 335,
        "question": "Đĩa cứng thuộc thành phần nào trong máy tính?",
        "options": [
          "I/O của máy tính",
          "Memory của máy tính",
          "Bus của máy tính",
          "DMA Module của máy tính"
        ],
        "answer": "A"
      },
      {
        "id": 336,
        "sourceId": 336,
        "question": "Công đoạn nào sau đây tiêu tốn thời gian nhiều nhất khi chạy chương trình máy tính?",
        "options": [
          "Truy xuất bộ nhớ ngoài",
          "Tính toán của CPU",
          "Biên dịch chương trình",
          "Truy xuất bộ nhớ chính mà không có cache"
        ],
        "answer": "A"
      },
      {
        "id": 337,
        "sourceId": 337,
        "question": "Khi cần bộ nhớ ngoài có dung lượng lớn, giá thành rẻ và cài hệ điều hành thì đâu là lựa chọn hợp lý?",
        "options": [
          "HDD",
          "SSD",
          "Băng từ",
          "CD-ROM"
        ],
        "answer": "A"
      },
      {
        "id": 338,
        "sourceId": 338,
        "question": "Khi cần bộ nhớ ngoài chỉ để lưu trữ, dung lượng lớn giá thành rẻ thì đâu là lựa chọn hợp lý?",
        "options": [
          "Băng từ",
          "CD-ROM",
          "HDD",
          "SSD"
        ],
        "answer": "A"
      },
      {
        "id": 339,
        "sourceId": 339,
        "question": "Khi cần bộ nhớ ngoài để cài hệ điều hành có dung dung lượng vừa phải thì đâu là lựa chọn hợp lý?",
        "options": [
          "SSD",
          "HDD",
          "DVD",
          "Băng từ"
        ],
        "answer": "A"
      },
      {
        "id": 340,
        "sourceId": 340,
        "question": "Phát biểu nào sau đây là đúng?",
        "options": [
          "RAID0 không có đầy đủ tính năng của RAID",
          "RAID0 có đầy đủ tính năng của RAID",
          "RAID0 chính là RAID2 bỏ bớt các tính năng của RAID1",
          "RAID0 chỉ có thể cài trên các server"
        ],
        "answer": "A"
      },
      {
        "id": 341,
        "sourceId": 341,
        "question": "Cơ chế nào sau đây là giải pháp hỗ trợ xử lý song song và dự phòng?",
        "options": [
          "RAID",
          "DMA",
          "Interrrupt",
          "Cache"
        ],
        "answer": "A"
      },
      {
        "id": 342,
        "sourceId": 342,
        "question": "Lệnh format trong các hệ điều hành được dùng để làm gì?",
        "options": [
          "Địa chỉ hóa các vị trí trên đĩa nhớ",
          "Chỉnh hình dạng cho đĩa nhớ",
          "Sửa chữa phần logic của đĩa nhớ",
          "Sửa chữa phần vật lý của đĩa nhớ"
        ],
        "answer": "A"
      },
      {
        "id": 343,
        "sourceId": 343,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Bộ nhớ trong bao gồm ổ đĩa cứng được gắn bên trong máy tính",
          "Bộ nhớ trong không bao gồm đĩa cứng được gắn bên trong máy tính",
          "Bộ nhớ trong bao gồm bộ nhớ cache",
          "Bộ nhớ trong bao gồm các thanh ghi"
        ],
        "answer": "A"
      },
      {
        "id": 344,
        "sourceId": 344,
        "question": "Phát biểu nào sau đây là đúng?",
        "options": [
          "Ổ đĩa C là một trong các thiết bị ngoại vi của máy tính",
          "Ổ đĩa C là đĩa HDD",
          "Ổ đĩa C là đĩa SSD",
          "Ổ đĩa C chỉ để lưu trữ dữ liệu bên trong máy tính"
        ],
        "answer": "A"
      },
      {
        "id": 345,
        "sourceId": 345,
        "question": "Cylinder là",
        "options": [
          "Tập hợp các track đồng dạng trên nhiều mặt đĩa",
          "Tập hợp các sector trên nhiều mặt đĩa",
          "Tập hợp các track trên các đĩa khác nhau",
          "Tập hợp các sector trên các đĩa khác nhau"
        ],
        "answer": "A"
      },
      {
        "id": 346,
        "sourceId": 346,
        "question": "RAID có vai trò gì?",
        "options": [
          "Dự phòng và tăng tốc độ truy xuất bộ nhớ ngoài",
          "Sửa lỗi và tăng tốc độ thực thi chỉ thị cho CPU",
          "Tăng tốc độ truy xuất bộ nhớ chính và dự phòng",
          "Hỗ trợ truy xuất song song và dự phòng cho bộ nhớ cache"
        ],
        "answer": "A"
      },
      {
        "id": 347,
        "sourceId": 347,
        "question": "RAID5 có cải tiến gì so với RAID4?",
        "options": [
          "Giảm được tình trạng nghẽn khi ghi",
          "Giảm được tình trạng nghẽn khi đọc",
          "Dùng phương pháp dự phòng tiên tiến hơn",
          "Tăng dung lượng dự phòng"
        ],
        "answer": "A"
      },
      {
        "id": 348,
        "sourceId": 348,
        "question": "Trên các hệ thống RAID tình trạng xung đột truy xuất tài nguyên ảnh hưởng tiêu cực đến xử lý song song thường xảy ra trong trường hợp nào",
        "options": [
          "Cùng ghi",
          "Cùng đọc",
          "Đọc-ghi xen kẽ",
          "Ghi-đọc xen kẽ"
        ],
        "answer": "A"
      },
      {
        "id": 349,
        "sourceId": 349,
        "question": "Phát biểu nào sau đây là đúng?",
        "options": [
          "Cơ chế truy xuất trực tiếp được dùng trong đĩa cứng (HDD)",
          "Cơ chế truy xuất tuần tự được dùng trong đĩa cứng (HDD)",
          "Cơ chế truy xuất ngẫu nhiên dược dùng trong đĩa cứng (HDD)",
          "Cơ chế truy xuất liên kết được dùng trong đĩa cứng (HDD)"
        ],
        "answer": "A"
      },
      {
        "id": 350,
        "sourceId": 350,
        "question": "Phát biểu nào sau đây là đúng?",
        "options": [
          "Cơ chế truy xuất trong đĩa SSD là truy xuất ngẫu nhiên",
          "Cơ chế truy xuất trong đĩa SSD là truy xuất liên kết",
          "Cơ chế truy xuất trong đĩa SSD là truy xuất tuần tự",
          "Cơ chế truy xuất trong đĩa SSD là truy xuất trực tiếp"
        ],
        "answer": "A"
      },
      {
        "id": 351,
        "sourceId": 351,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Sử dụng công nghệ đĩa cứng (bộ nhớ ngoài) nhanh hay chậm không ảnh hưởng gì đến chu kỳ chỉ thị của chương trình.",
          "Chu kỳ chỉ thị của chương trình chịu ảnh hưởng đáng kể bởi công nghệ đĩa cứng (bộ nhớ ngoài) được dùng.",
          "Sử dụng công nghệ đĩa cứng (bộ nhớ ngoài) nhanh hay chậm không ảnh hưởng gì đến chu kỳ thực thi chỉ thị của chương trình",
          "Công nghệ đĩa SSD giảm đáng kể thời gian truy xuất bộ nhớ ngoài so với công nghệ đĩa HDD."
        ],
        "answer": "A"
      },
      {
        "id": 352,
        "sourceId": 352,
        "question": "Bus hệ thống của máy tính bao gồm",
        "options": [
          "Bus dữ liệu, bus ngoại vi, bus bên trong CPU",
          "Bus dữ liệu, Bus địa chỉ",
          "Bus dữ liệu và Bus điều khiển",
          "Bus dữ liệu, Bus địa chỉ và Bus điều khiển"
        ],
        "answer": "D"
      },
      {
        "id": 353,
        "sourceId": 353,
        "question": "Chức năng của hệ thống Bus trong máy tính là gì?",
        "options": [
          "Mở rộng chức năng giao tiếp của máy tính",
          "Liên kết các thành phần trong máy tính",
          "Điều khiển các thiết bị ngoại vi",
          "Biến đổi dạng tín hiệu trong máy tính"
        ],
        "answer": "B"
      },
      {
        "id": 354,
        "sourceId": 354,
        "question": "Bus nào trong máy tính có nhiệm vụ là đường truyền dẫn giữa các khối của bộ vi xử lý?",
        "options": [
          "Bus trong bộ vi xử lý",
          "Bus bộ vi xử lý",
          "Bus ngoại vi",
          "Bus hệ thống"
        ],
        "answer": "A"
      },
      {
        "id": 355,
        "sourceId": 355,
        "question": "Bus nào trong máy tính có nhiệm vụ kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache",
        "options": [
          "Bus trong bộ vi xử lý",
          "Bus bộ vi xử lý",
          "Bus ngoại vi",
          "Bus hệ thống"
        ],
        "answer": "D"
      },
      {
        "id": 356,
        "sourceId": 356,
        "question": "Bus nào trong máy tính có nhiệm vụ kết nối các thiết bị vào ra với bộ vi xử lý?",
        "options": [
          "Bus trong bộ vi xử lý",
          "Bus bộ vi xử lý",
          "Bus ngoại vi",
          "Bus hệ thống"
        ],
        "answer": "C"
      },
      {
        "id": 357,
        "sourceId": 357,
        "question": "Việc trao đổi dữ liệu giữa thiết bị ngoại vi và máy tính được thực hiện qua",
        "options": [
          "Thanh ghi cờ",
          "Một thanh ghi điều khiển",
          "Một cổng có địa chỉ xác định",
          "Thanh ghi AX"
        ],
        "answer": "C"
      },
      {
        "id": 358,
        "sourceId": 358,
        "question": "Các thành phần cơ bản của thiết bị ngoại vi là",
        "options": [
          "Bộ chuyển đổi tín hiệu, Logic điều khiển, Bộ đệm",
          "Bộ chuyển đổi trạng thái, Logic đọc, Bộ đếm tiến",
          "Bộ chuyển đổi hiện thời, Logic ghi, Bộ kiểm tra",
          "Bộ chuyển đổi địa chỉ, Logic nhận, Bé đếm lùi"
        ],
        "answer": "A"
      },
      {
        "id": 359,
        "sourceId": 359,
        "question": "Bus nào sau đây là một chiều?",
        "options": [
          "Address bus",
          "Control bus",
          "Data bus",
          "Tất cả các bus"
        ],
        "answer": "A"
      },
      {
        "id": 360,
        "sourceId": 360,
        "question": "Có bao nhiêu phương pháp quản lý I/O?",
        "options": [
          "3",
          "2",
          "4",
          "5"
        ],
        "answer": "A"
      }
    ]
  },
  {
    "id": 10,
    "title": "Đề 10",
    "questions": [
      {
        "id": 361,
        "sourceId": 361,
        "question": "Đơn vị tính tốc độ truyền của bus là",
        "options": [
          "Bit/giây (bps)",
          "Hertz",
          "Mili giây",
          "Byte"
        ],
        "answer": "A"
      },
      {
        "id": 362,
        "sourceId": 362,
        "question": "Bus thể hiện qua bao nhiêu đặc trưng?",
        "options": [
          "5",
          "4",
          "6",
          "3"
        ],
        "answer": "A"
      },
      {
        "id": 363,
        "sourceId": 363,
        "question": "Một trong các đặc trưng của bus là",
        "options": [
          "Ghép/không ghép",
          "Tốc độ bus",
          "Chiều dài bus",
          "Phân cấp bus"
        ],
        "answer": "A"
      },
      {
        "id": 364,
        "sourceId": 364,
        "question": "Hai hoạt động chính trên bus là",
        "options": [
          "Đọc và ghi",
          "Đọc và xóa",
          "Ghi và xóa",
          "Xóa và sửa"
        ],
        "answer": "A"
      },
      {
        "id": 365,
        "sourceId": 365,
        "question": "Giải pháp cơ bản để cải thiện hiệu năng của hệ thống bus là",
        "options": [
          "Phân cấp bus",
          "Tăng bề rộng bus",
          "Rút ngắn bus",
          "Giảm số lượng bus"
        ],
        "answer": "A"
      },
      {
        "id": 366,
        "sourceId": 366,
        "question": "Thiết bị ngoại vi được xếp vào mấy loại?",
        "options": [
          "3",
          "4",
          "6",
          "5"
        ],
        "answer": "A"
      },
      {
        "id": 367,
        "sourceId": 367,
        "question": "Đặc điểm quan trọng của Bus đồng bộ là gì",
        "options": [
          "Dữ liệu được truyền không đồng thời",
          "Có tín hiệu đồng hồ chung điều khiển hoạt động",
          "Không có tín hiệu đồng hồ chung điều khiển hoạt động",
          "Dữ liệu được truyền đồng thời"
        ],
        "answer": "B"
      },
      {
        "id": 368,
        "sourceId": 368,
        "question": "Đặc điểm quan trọng của Bus không đồng bộ là gì",
        "options": [
          "Dữ liệu được truyền không đồng thời",
          "Có tín hiệu đồng hồ chung điều khiển hoạt động",
          "Không có tín hiệu đồng hồ chung điều khiển hoạt động",
          "Dữ liệu được truyền đồng thời"
        ],
        "answer": "C"
      },
      {
        "id": 369,
        "sourceId": 369,
        "question": "Chức năng của Bus hệ thống trong máy tính là gì",
        "options": [
          "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian",
          "Là đường truyền dẫn giữa các khối của bộ vi xử lý",
          "Kết nối bộ vi xử lý với bộ nhớ chính, bộ nhớ Cache và các bộ điều khiển ghép nối vào ra",
          "Kết nối hệ thống vào ra với bộ vi xử lý"
        ],
        "answer": "C"
      },
      {
        "id": 370,
        "sourceId": 370,
        "question": "Chức năng của Bus ngoại vi trong máy tính là gì",
        "options": [
          "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian",
          "Là đường truyền dẫn giữa các khối của bộ vi xử lý",
          "Kết nối bộ vi xử lý với bộ nhớ chính, bộ nhớ Cache và các bộ điều khiển ghép nối vào ra",
          "Kết nối hệ thống vào ra với bộ vi xử lý"
        ],
        "answer": "D"
      },
      {
        "id": 371,
        "sourceId": 371,
        "question": "Trong hệ thống máy tính có các phương pháp điều khiển vào/ra như sau",
        "options": [
          "Vào/ra bằng chương trình, bằng ngắt, bằng DMA",
          "Vào ra bằng ngắt, bằng hệ điều hành, bằng DMA",
          "Vào/ra bằng chương trình, bằng hệ thống, bằng DMA",
          "Vào/ra bằng ngắt, bằng truy nhập CPU, bằng DMA"
        ],
        "answer": "A"
      },
      {
        "id": 372,
        "sourceId": 372,
        "question": "Bus địa chỉ 20 bit có thể địa chỉ hóa được số lượng ô nhớ là",
        "options": [
          "2097152 ô nhớ",
          "1048576 ô nhớ",
          "4194304 ô nhớ",
          "8388608 ô nhớ"
        ],
        "answer": "B"
      },
      {
        "id": 373,
        "sourceId": 373,
        "question": "Bus địa chỉ 32 bit có thể địa chỉ hóa được số lượng ô nhớ là",
        "options": [
          "16M ô nhớ",
          "64M ô nhớ",
          "1G ô nhớ",
          "4G ô nhớ"
        ],
        "answer": "D"
      },
      {
        "id": 374,
        "sourceId": 374,
        "question": "Trong trường hợp nào nên sử dụng Bus đồng bộ",
        "options": [
          "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn",
          "Yêu cầu chu kỳ Bus có thể thay đổi với từng cặp thiết bị trao đổi dữ liệu",
          "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus",
          "Yêu cầu tận dụng tốt thời gian xử lý của CPU"
        ],
        "answer": "C"
      },
      {
        "id": 375,
        "sourceId": 375,
        "question": "Trong trường hợp nào nên sử dụng Bus không đồng bộ",
        "options": [
          "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn",
          "Yêu cầu chu kỳ Bus có thể thay đổi với từng cặp thiết bị trao đổi dữ liệu",
          "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus",
          "Yêu cầu tận dụng tốt thời gian xử lý của CPU"
        ],
        "answer": "A"
      },
      {
        "id": 376,
        "sourceId": 376,
        "question": "Độ rộng của Bus được xác định bởi",
        "options": [
          "Số đường dây dữ liệu của Bus",
          "Số đường dây địa chỉ của Bus",
          "Số thành phần được kết nối tới Bus",
          "Số Byte dữ liệu được truyền trong một đơn vị thời gian"
        ],
        "answer": "A"
      },
      {
        "id": 377,
        "sourceId": 377,
        "question": "Tần số Bus đặc trưng cho",
        "options": [
          "Tốc độ điều khiển các thành phần của máy tính",
          "Tốc độ truyền dữ liệu trên Bus",
          "Tốc độ phân phối tài nguyên trong máy tính",
          "Tốc độ cấp phát bộ nhớ cho các thành phần trong máy tính"
        ],
        "answer": "B"
      },
      {
        "id": 378,
        "sourceId": 378,
        "question": "Không thể nối trực tiếp thiết bị ngoại vi với bus hệ thống vì",
        "options": [
          "CPU không thể điều khiển được tất cả các thiết bị ngoại vi",
          "Tốc độ trao đổi, khuôn dạng dữ liệu khác nhau",
          "Tất cả có tốc độ chậm hơn CPU và RAM",
          "Tất cả đều đúng"
        ],
        "answer": "D"
      },
      {
        "id": 379,
        "sourceId": 379,
        "question": "Các đường dây IOR, IOW trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào",
        "options": [
          "Bus địa chỉ",
          "Bus bộ vi xử lý",
          "Bus dữ liệu",
          "Bus điều khiển"
        ],
        "answer": "D"
      },
      {
        "id": 380,
        "sourceId": 380,
        "question": "Các đường dây D0-D7 trong các máy tính sử dụng bộ vi xử lý Intel 8086/8088 thuộc vào Bus nào",
        "options": [
          "Bus địa chỉ",
          "Bus bộ vi xử lý",
          "Bus dữ liệu",
          "Bus điều khiển"
        ],
        "answer": "C"
      },
      {
        "id": 381,
        "sourceId": 381,
        "question": "Các đường dây A0-A19 trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
        "options": [
          "Bus địa chỉ",
          "Bus bộ vi xử lý",
          "Bus dữ liệu",
          "Bus điều khiển"
        ],
        "answer": "A"
      },
      {
        "id": 382,
        "sourceId": 382,
        "question": "Với phương pháp kiểm tra vòng bằng phần mềm, phát biểu nào sau đây là đúng",
        "options": [
          "CPU kiểm tra một lúc nhiều modul vào/ra",
          "Tốc độ nhanh",
          "CPU thực hiện kiểm tra từng modul vào/ra",
          "CPU thực hiện phần mềm kiểm tra từng modul vào/ra"
        ],
        "answer": "D"
      },
      {
        "id": 383,
        "sourceId": 383,
        "question": "Với phương pháp vào/ra bằng DMA, phát biểu nào sau đây là đúng",
        "options": [
          "Là phương pháp do CPU điều khiển trao đổi dữ liệu",
          "Là phương pháp không do CPU điều khiển trao đổi dữ liệu",
          "Là phương pháp được thực hiện bằng phần mềm",
          "Là phương pháp trao đổi dữ liệu giữa thiết bị ngoại vi và CPU nhanh nhất"
        ],
        "answer": "B"
      },
      {
        "id": 384,
        "sourceId": 384,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "Không có hoạt động bus trực tiếp giữa I/O và main memory",
          "Có hoạt động bus trực tiếp giữa I/O và main memory",
          "Có hoạt động bus trực tiếp giữa CPU và I/O",
          "Có hoạt động bus trực tiếp giữa CPU và main memory"
        ],
        "answer": "A"
      },
      {
        "id": 385,
        "sourceId": 385,
        "question": "Bước đầu tiên khi một module muốn làm việc với module khác qua bus là",
        "options": [
          "Lấy quyền dùng bus",
          "Khởi động bus",
          "Đóng bus",
          "Cấp phát bus"
        ],
        "answer": "A"
      },
      {
        "id": 386,
        "sourceId": 386,
        "question": "Đặc trưng nào sau đây ảnh hưởng đến điều khiển bus?",
        "options": [
          "Chia sẻ luân phiên",
          "Chia sẻ đồng thời",
          "Ghép kênh",
          "Độ rộng"
        ],
        "answer": "A"
      },
      {
        "id": 387,
        "sourceId": 387,
        "question": "Điều nào sau đây là đúng liên quan đến DMA?",
        "options": [
          "CPU bị chiếm bus",
          "I/O được ủy nhiệm truyền dữ liệu cho memory",
          "Thực hiện kết nối I/O với Memory qua system bus",
          "Chuẩn đĩa DMA RAID có tốc độ cao"
        ],
        "answer": "A"
      },
      {
        "id": 388,
        "sourceId": 388,
        "question": "Phương thức nào sau đây thay mặt cho CPU điều khiển việc truyền dữ liệu?",
        "options": [
          "Direct Memory Access (DMA)",
          "Interrupt-driven I/O",
          "Polled I/O",
          "Software interrupts"
        ],
        "answer": "A"
      },
      {
        "id": 389,
        "sourceId": 389,
        "question": "Khái niệm chiếm chu kỳ bus đề cập đến điều gì?",
        "options": [
          "CPU dừng hoạt động và chờ",
          "CPU chiếm chu kỳ bus của DMA module",
          "CPU dừng hoạt động trên chương trình hiện hành và chuyển sang chương trình khác",
          "Truy xuất bộ nhớ chính"
        ],
        "answer": "A"
      },
      {
        "id": 390,
        "sourceId": 390,
        "question": "Memory-map I/O đề cập đến điều gì?",
        "options": [
          "Địa chỉ của I/O module cùng dạng với địa chỉ bộ nhớ chính",
          "Ánh xạ địa chỉ giữa I/O và bộ nhớ",
          "Bản đồ địa chỉ I/O được lưu trong bộ nhớ",
          "Bộ nhớ được đặt trên thành phần nhớ ngoài qua I/O"
        ],
        "answer": "A"
      },
      {
        "id": 391,
        "sourceId": 391,
        "question": "Isolated I/O đề cập đến điều gì?",
        "options": [
          "I/O module không chia sẻ không gian địa chỉ với bộ nhớ chính",
          "Địa chỉ của I/O đồng dạng với địa chỉ trong bộ nhớ",
          "I/O module chia sẻ không gian địa chỉ với bộ nhớ chính",
          "Bộ nhớ được đặt trên thành phần nhớ ngoài qua I/O"
        ],
        "answer": "A"
      },
      {
        "id": 392,
        "sourceId": 392,
        "question": "Mặt tích cực khi áp dụng cơ chế DMA là gì?",
        "options": [
          "Giải phóng CPU khỏi các phiên truy xuất bộ nhớ kéo dài",
          "Cho phép hoạt động truy xuất bộ nhớ song song",
          "Cho phép nhiều chương trình chạy đồng thời trên máy tính",
          "Giải phóng bộ nhớ chính khỏi các ràng buộc về kích thước lưu trữ"
        ],
        "answer": "A"
      },
      {
        "id": 393,
        "sourceId": 393,
        "question": "Phát biểu nào sau đây là sai?",
        "options": [
          "I/O module là thiết bị ngoại vi của máy tính",
          "I/O module không phải là thiết bị ngoại vi của máy tính",
          "I/O module có hai mặt giao tiếp nội và ngoại",
          "I/O module chính là thành phần Input/Output của máy tính"
        ],
        "answer": "A"
      },
      {
        "id": 394,
        "sourceId": 394,
        "question": "Phát biểu nào sau đây là đúng?",
        "options": [
          "Programmed I/O là phương thức điều khiển I/O module bằng cách cho CPU chạy một chương trình.",
          "Programmed I/O là phương thức điều khiển I/O module bằng cách sử dụng các module đã được lập trình.",
          "Programmed I/O được dùng để chỉ loại I/O module có khả năng thực thi các chương trình điều khiển.",
          "Programmed I/O là một tên gọi của một loại I/O module chuyên nạp các chương trình máy tính."
        ],
        "answer": "A"
      },
      {
        "id": 395,
        "sourceId": 395,
        "question": "Phát biểu nào sau đây là đúng?",
        "options": [
          "Cơ chế ngắt (interrupt) cũng là một phương thức hỗ trợ quản lý I/O trong máy tính.",
          "Cơ chế ngắt (interrupt) không phải là một phương thức hỗ trợ quản lý I/O trong máy tính.",
          "Hoạt động I/O của máy tính không liên quan gì đến cơ chế ngắt (interrupt).",
          "Hoạt động I/O của máy tính chỉ xuất hiện khi có cơ chế ngắt (interrupt)."
        ],
        "answer": "A"
      },
      {
        "id": 396,
        "sourceId": 396,
        "question": "Cách thức thường dùng để ghép nối các thành phần trong máy tính có kiến trúc bus đa cấp là",
        "options": [
          "Nối các thành có cùng tốc độ vào một cấp bus.",
          "Nối các thành phần có cùng chức năng vào một cấp bus.",
          "Nối các thành phần có kích thước xấp xỉ nhau vào cùng một cấp bus.",
          "Nối các thành phần có tầm quan trọng như nhau vào cùng một cấp bus"
        ],
        "answer": "A"
      },
      {
        "id": 397,
        "sourceId": 397,
        "question": "Đâu là trở ngại khi dùng DMA?",
        "options": [
          "CPU tranh chấp tài nguyên với DMA module",
          "DMA module thường xuyên vi phạm thẩm quyền của CPU",
          "CPU lấy chu kỳ bus của DMA module",
          "Nghẽn trên memory bus"
        ],
        "answer": "A"
      },
      {
        "id": 398,
        "sourceId": 398,
        "question": "Thời điểm nào cho phép treo CPU do DMA module trong chu kỳ chỉ thị?",
        "options": [
          "Kết thúc giải mã lệnh",
          "Kết thúc lấy lệnh",
          "Kết thúc lấy toán hạng",
          "Kết thúc lưu kết quả"
        ],
        "answer": "A"
      },
      {
        "id": 399,
        "sourceId": 399,
        "question": "Cơ chế điều khiển đa truy nhập (multiaccess control) được áp dụng vào công việc gì trong kiến trúc máy tính?",
        "options": [
          "Cấp quyền dùng bus",
          "Điều khiển truy xuất bộ nhớ chính",
          "Xử lý ngắt",
          "Tăng hệ số đa chương"
        ],
        "answer": "A"
      },
      {
        "id": 400,
        "sourceId": 400,
        "question": "Khi cả CPU và DMA module đều muốn dùng một bus nào đó một cách đồng thời thì giải pháp phổ biến là",
        "options": [
          "CPU phải nhường bus cho DMA module",
          "DMA module phải nhường bus cho CPU",
          "Chọn ngẫu nhiên",
          "Treo bus tạm thời"
        ],
        "answer": "A"
      }
    ]
  }
];