export interface Course {
  _id: string;
  name: string;
  description: string;
  language_id: number;
}

export interface Language {
  _id: number;
  name: string;
  code: string;
}

export interface Lesson {
  _id: string;
  name: string;
  content: string;
  order: number;
  course_id: string;
}
