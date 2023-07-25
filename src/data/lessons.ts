const lessons = [
  {
    _id: "lesson1",
    course_id: "course8",
    name: "Chào hỏi",
    content: "Học cách chào hỏi và giới thiệu bản thân bằng Tiếng Trung.",
    order: 1,
  },
  {
    _id: "lesson2",
    course_id: "course8",
    name: "Số đếm",
    content: "Học cách đếm từ 1 đến 10 bằng Tiếng Trung.",
    order: 2,
  },
  {
    _id: "lesson3",
    course_id: "course8",
    name: "Câu hỏi cơ bản",
    content: "Học cách đặt câu hỏi cơ bản bằng Tiếng Trung.",
    order: 3,
  },
  {
    _id: "lesson4",
    course_id: "course8",
    name: "Màu sắc",
    content: "Học cách miêu tả các màu sắc bằng Tiếng Trung.",
    order: 4,
  },
  {
    _id: "lesson5",
    course_id: "course8",
    name: "Gia đình",
    content:
      "Học cách miêu tả gia đình và các thành viên trong gia đình bằng Tiếng Trung.",
    order: 5,
  },
  {
    _id: "lesson6",
    course_id: "course8",
    name: "Thời gian",
    content: "Học cách diễn đạt về thời gian bằng Tiếng Trung.",
    order: 6,
  },
  {
    _id: "lesson7",
    course_id: "course8",
    name: "Các động từ cơ bản",
    content: "Học cách sử dụng các động từ cơ bản bằng Tiếng Trung.",
    order: 7,
  },
  {
    _id: "lesson8",
    course_id: "course8",
    name: "Địa điểm",
    content: "Học cách miêu tả địa điểm và địa chỉ bằng Tiếng Trung.",
    order: 8,
  },
  {
    _id: "lesson9",
    course_id: "course8",
    name: "Đồ dùng hàng ngày",
    content: "Học cách miêu tả các đồ dùng hàng ngày bằng Tiếng Trung.",
    order: 9,
  },
  {
    _id: "lesson10",
    course_id: "course8",
    name: "Mô tả người",
    content:
      "Học cách mô tả các đặc điểm về ngoại hình và tính cách của người khác bằng Tiếng Trung.",
    order: 10,
  },
  {
    _id: "lesson11",
    course_id: "course8",
    name: "Các loại thức ăn",
    content:
      "Học cách miêu tả các loại thức ăn và món ăn phổ biến bằng Tiếng Trung.",
    order: 11,
  },
  {
    _id: "lesson12",
    course_id: "course8",
    name: "Đặt hàng trong nhà hàng",
    content: "Học cách đặt hàng và gọi đồ ăn trong nhà hàng bằng Tiếng Trung.",
    order: 12,
  },
  {
    _id: "lesson13",
    course_id: "course8",
    name: "Chủ đề thời tiết",
    content: "Học cách nói về các điều kiện thời tiết bằng Tiếng Trung.",
    order: 13,
  },
  {
    _id: "lesson14",
    course_id: "course8",
    name: "Đặt lịch hẹn",
    content: "Học cách đặt lịch hẹn và thời gian bằng Tiếng Trung.",
    order: 14,
  },
  {
    _id: "lesson15",
    course_id: "course8",
    name: "Phương tiện giao thông",
    content:
      "Học cách miêu tả các phương tiện giao thông và đi lại bằng Tiếng Trung.",
    order: 15,
  },
  {
    _id: "lesson16",
    course_id: "course8",
    name: "Mô tả môi trường sống",
    content: "Học cách miêu tả môi trường sống và nhà cửa bằng Tiếng Trung.",
    order: 16,
  },
  {
    _id: "lesson17",
    course_id: "course8",
    name: "Mua sắm",
    content: "Học cách mua sắm và chọn hàng hóa bằng Tiếng Trung.",
    order: 17,
  },
  {
    _id: "lesson18",
    course_id: "course8",
    name: "Hỏi đường",
    content: "Học cách hỏi đường và địa chỉ bằng Tiếng Trung.",
    order: 18,
  },
  {
    _id: "lesson19",
    course_id: "course8",
    name: "Các môn học",
    content: "Học cách nói về các môn học và chủ đề học tập bằng Tiếng Trung.",
    order: 19,
  },
  {
    _id: "lesson20",
    course_id: "course8",
    name: "Công việc và nghề nghiệp",
    content: "Học cách miêu tả các công việc và nghề nghiệp bằng Tiếng Trung.",
    order: 20,
  },
  {
    _id: "lesson21",
    course_id: "course8",
    name: "Hình dạng và kích thước",
    content: "Học cách miêu tả hình dạng và kích thước bằng Tiếng Trung.",
    order: 21,
  },
  {
    _id: "lesson22",
    course_id: "course8",
    name: "Thể thao và hoạt động giải trí",
    content:
      "Học cách nói về các hoạt động thể thao và giải trí bằng Tiếng Trung.",
    order: 22,
  },
  {
    _id: "lesson23",
    course_id: "course8",
    name: "Sự kiện và lễ hội",
    content:
      "Học cách miêu tả các sự kiện và lễ hội phổ biến bằng Tiếng Trung.",
    order: 23,
  },
  {
    _id: "lesson24",
    course_id: "course8",
    name: "Câu chuyện cơ bản",
    content: "Học cách kể câu chuyện đơn giản bằng Tiếng Trung.",
    order: 24,
  },
  {
    _id: "lesson25",
    course_id: "course8",
    name: "Y tế và sức khỏe",
    content: "Học cách nói về sức khỏe và các vấn đề y tế bằng Tiếng Trung.",
    order: 25,
  },
  {
    _id: "lesson26",
    course_id: "course8",
    name: "Các vấn đề xã hội",
    content:
      "Học cách thảo luận về các vấn đề xã hội và chính trị bằng Tiếng Trung.",
    order: 26,
  },
  {
    _id: "lesson27",
    course_id: "course8",
    name: "Kỹ năng giao tiếp",
    content:
      "Học cách phát triển kỹ năng giao tiếp và giao tiếp hiệu quả bằng Tiếng Trung.",
    order: 27,
  },
  {
    _id: "lesson28",
    course_id: "course8",
    name: "Tình huống hàng ngày",
    content: "Học cách đối phó với các tình huống hàng ngày bằng Tiếng Trung.",
    order: 28,
  },
  {
    _id: "lesson29",
    course_id: "course8",
    name: "Các vấn đề môi trường",
    content:
      "Học cách thảo luận về các vấn đề môi trường và bảo vệ môi trường bằng Tiếng Trung.",
    order: 29,
  },
  {
    _id: "lesson30",
    course_id: "course8",
    name: "Du lịch và du lịch",
    content:
      "Học cách nói về du lịch và các địa điểm du lịch bằng Tiếng Trung.",
    order: 30,
  },
  {
    _id: "lesson31",
    course_id: "course8",
    name: "Các phong tục và lễ hội truyền thống",
    content:
      "Học cách miêu tả các phong tục và lễ hội truyền thống bằng Tiếng Trung.",
    order: 31,
  },
  {
    _id: "lesson32",
    course_id: "course8",
    name: "Tâm trạng và cảm xúc",
    content: "Học cách diễn đạt về tâm trạng và cảm xúc bằng Tiếng Trung.",
    order: 32,
  },
  {
    _id: "lesson33",
    course_id: "course8",
    name: "Các chủ đề thú vị",
    content:
      "Học cách thảo luận về các chủ đề thú vị và đáng chú ý bằng Tiếng Trung.",
    order: 33,
  },
  {
    _id: "lesson34",
    course_id: "course8",
    name: "Giao tiếp qua điện thoại",
    content: "Học cách giao tiếp qua điện thoại bằng Tiếng Trung.",
    order: 34,
  },
  {
    _id: "lesson35",
    course_id: "course8",
    name: "Công việc nhóm",
    content:
      "Học cách làm việc nhóm và giao tiếp trong công việc nhóm bằng Tiếng Trung.",
    order: 35,
  },
  {
    _id: "lesson36",
    course_id: "course8",
    name: "Nhận xét và phản hồi",
    content: "Học cách đưa ra nhận xét và phản hồi bằng Tiếng Trung.",
    order: 36,
  },
  {
    _id: "lesson37",
    course_id: "course8",
    name: "Các sự kiện thể thao",
    content:
      "Học cách nói về các sự kiện thể thao và các giải đấu bằng Tiếng Trung.",
    order: 37,
  },
  {
    _id: "lesson38",
    course_id: "course8",
    name: "Gia đình và người thân",
    content:
      "Học cách miêu tả các thành viên trong gia đình và quan hệ gia đình bằng Tiếng Trung.",
    order: 38,
  },
  {
    _id: "lesson39",
    course_id: "course8",
    name: "Các chủ đề nghệ thuật",
    content:
      "Học cách thảo luận về nghệ thuật và văn hóa nghệ thuật bằng Tiếng Trung.",
    order: 39,
  },
  {
    _id: "lesson40",
    course_id: "course8",
    name: "Các bộ phận của cơ thể",
    content: "Học cách miêu tả các bộ phận của cơ thể bằng Tiếng Trung.",
    order: 40,
  },
  {
    _id: "lesson41",
    course_id: "course8",
    name: "Chủ đề thú vị",
    content:
      "Học cách thảo luận về các chủ đề thú vị và đáng chú ý bằng Tiếng Trung.",
    order: 41,
  },
  {
    _id: "lesson42",
    course_id: "course8",
    name: "Giao tiếp trong kinh doanh",
    content:
      "Học cách giao tiếp và thực hiện các cuộc gọi kinh doanh bằng Tiếng Trung.",
    order: 42,
  },
  {
    _id: "lesson43",
    course_id: "course8",
    name: "Các bài hát và nhạc phẩm",
    content:
      "Học cách nói về các bài hát và nhạc phẩm yêu thích bằng Tiếng Trung.",
    order: 43,
  },
  {
    _id: "lesson44",
    course_id: "course8",
    name: "Phương pháp học tập",
    content:
      "Học cách thảo luận về phương pháp học tập và quá trình học tập bằng Tiếng Trung.",
    order: 44,
  },
  {
    _id: "lesson45",
    course_id: "course8",
    name: "Các kỹ năng nghề nghiệp",
    content:
      "Học cách miêu tả các kỹ năng và chuyên môn nghề nghiệp bằng Tiếng Trung.",
    order: 45,
  },
  {
    _id: "lesson46",
    course_id: "course8",
    name: "Sức khỏe và thể hình",
    content: "Học cách nói về sức khỏe và thể hình bằng Tiếng Trung.",
    order: 46,
  },
  {
    _id: "lesson47",
    course_id: "course8",
    name: "Các bộ phim và phim truyền hình",
    content:
      "Học cách thảo luận về các bộ phim và chương trình truyền hình yêu thích bằng Tiếng Trung.",
    order: 47,
  },
  {
    _id: "lesson48",
    course_id: "course8",
    name: "Sự kiện và kỷ niệm",
    content:
      "Học cách miêu tả các sự kiện và kỷ niệm đặc biệt bằng Tiếng Trung.",
    order: 48,
  },
  {
    _id: "lesson49",
    course_id: "course8",
    name: "Các bài viết và sách",
    content: "Học cách nói về các bài viết và sách yêu thích bằng Tiếng Trung.",
    order: 49,
  },
  {
    _id: "lesson50",
    course_id: "course8",
    name: "Chủ đề tự do",
    content:
      "Học cách thảo luận và diễn đạt ý kiến cá nhân về các chủ đề tự do bằng Tiếng Trung.",
    order: 50,
  },
];

export default lessons;
