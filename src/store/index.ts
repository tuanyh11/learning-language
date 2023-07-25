import { Course, Language, Lesson } from "src/Interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Store {
  lang: Language | null;
  course: Course | null;
  lesson: Lesson | null;
  setLang: (lang: Language) => void;
  setLesson: (lesson: Lesson) => void;
  setCourse: (course: Course) => void;
}

const useStore = create(
  persist<Store>(
    (set) => ({
      lang: null,
      course: null,
      lesson: null,
      setLesson: (lesson: Lesson) => set((state) => ({ ...state, lesson })),
      setCourse: (course: Course) => set((state) => ({ ...state, course })),
      setLang: (lang: Language) => set((state) => ({ ...state, lang })),
    }),
    { name: "store" }
  )
);

export default useStore;
