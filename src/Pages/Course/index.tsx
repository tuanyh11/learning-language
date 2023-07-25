import { Link } from "react-router-dom";
import { Course as CourseIF, Language } from "src/Interfaces";
import courseList from "src/data/courses";
import langList from "src/data/lang";
import lessons from "src/data/lessons";
import useStore from "src/store";
import { textToSlug } from "src/utils";

const Course = () => {
  const { course } = useStore();

  const { _id: courseId, language_id } = courseList.find(
    (c) => c._id === course?._id
  ) as CourseIF;

  const currentLesson = lessons.filter(
    (lesson) => lesson.course_id === courseId
  );

  const { name } = langList.find(
    (lang) => lang._id === language_id
  ) as Language;

  const { setLesson } = useStore();

  return (
    <div>
      <main className="">
        <div className="title mt-10">
          <h1 className="text-6xl font-light capitalize">
            {`Các bài học ${name} miễn phí`}
          </h1>
        </div>

        <div className="text mt-12">
          <p className="text-3xl">
            {`Tự học ${name}. Học với ${currentLesson.length} bài học miễn phí. Không có rủi ro và không có hợp đồng. Học nói ${name}. Hoàn toàn miễn phí!`}
          </p>
        </div>

        <div className="lesson-list mt-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {currentLesson.map((lesson, i) => {
              // const currentCourse = courseList.find(
              //   (course) => course._id === lesson.course_id
              // );
              return (
                <li
                  key={lesson._id}
                  className="bg-white text-slate-700 shadow-lg p-8 rounded-md "
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-4xl uppercase font-medium">{`Bài học ${
                      i + 1
                    }`}</h3>
                    <p className=" mt-2 text-slate-500">{lesson.name}</p>

                    <div className="mt-4 flex-1 flex ">
                      <Link
                        to={`/course/lesson/${textToSlug(lesson.name)}`}
                        onClick={() => setLesson(lesson)}
                        className=" bg-primary w-full mt-auto inline-block text-center p-4 text-white rounded-lg hover:opacity-70 transition-opacity cursor-pointer"
                      >
                        Học Ngay
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Course;
