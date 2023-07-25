const courseList = [
  {
    _id: "course1",
    name: " Tiếng Anh cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Anh trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 1,
  },
  {
    _id: "course2",
    name: " Tiếng Tây Ban Nha cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Tây Ban Nha trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 2,
  },
  {
    _id: "course3",
    name: " Tiếng Pháp cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Pháp trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 3,
  },
  {
    _id: "course4",
    name: " Tiếng Đức cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Đức trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 4,
  },
  {
    _id: "course5",
    name: " Tiếng Ý cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Ý trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 5,
  },
  {
    _id: "course6",
    name: " Tiếng Nhật cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Nhật trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 6,
  },
  {
    _id: "course7",
    name: " Tiếng Hàn Quốc cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Hàn Quốc trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 7,
  },
  {
    _id: "course8",
    name: " Tiếng Trung Quốc cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Trung Quốc trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 8,
  },
  {
    _id: "course9",
    name: " Tiếng Hà Lan cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Hà Lan trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 9,
  },
  {
    _id: "course10",
    name: " Tiếng Bồ Đào Nha cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Bồ Đào Nha trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 10,
  },
  {
    _id: "course11",
    name: " Tiếng Nga cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Nga trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 11,
  },
  {
    _id: "course12",
    name: " Tiếng Thái Lan cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Thái Lan trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 12,
  },
  {
    _id: "course13",
    name: " Tiếng Ba Lan cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Ba Lan trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 13,
  },
  {
    _id: "course14",
    name: " Tiếng Thổ Nhĩ Kỳ cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Thổ Nhĩ Kỳ trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 14,
  },
  {
    _id: "course15",
    name: " Tiếng Ả Rập cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Ả Rập trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 15,
  },
  {
    _id: "course16",
    name: " Tiếng Hebrew cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Hebrew trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 16,
  },
  {
    _id: "course17",
    name: " Tiếng Phần Lan cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Phần Lan trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 17,
  },
  {
    _id: "course18",
    name: " Tiếng Thụy Điển cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Thụy Điển trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 18,
  },
  {
    _id: "course19",
    name: " Tiếng Đan Mạch cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Đan Mạch trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 19,
  },
  {
    _id: "course20",
    name: " Tiếng Indonesia cơ bản",
    description:
      "Khóa học hướng dẫn cách sử dụng Tiếng Indonesia trong cuộc sống hàng ngày.",
    thumbnailUrl:
      "https://www.lingohut.com/html/lht-home-page/front-zh-min.jpg",
    language_id: 20,
  },
];

export default courseList;
