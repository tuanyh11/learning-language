import React, { useId, useState } from "react";
import courseList from "src/data/courses";
import langList from "src/data/lang";
import { log, textToSlug } from "src/utils";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  AiFillCaretDown,
  AiFillCloseSquare,
  AiOutlinePlayCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Modal from "src/Components/Common/Modal";
import { Link } from "react-router-dom";
import useStore, { Store } from "src/store";
import { Course, Language } from "src/Interfaces";

const Home = () => {
  const defaultLang = langList[0];
  const [opened, setOpened] = useState<boolean>(false);
  const openModal = () => {
    setOpened(!opened);
  };

  const { setLang, setCourse } = useStore((state) => state);

  const handleClick = (course: Course) => {
    setLang(langList.find((l) => l._id === course.language_id) as Language);
    setCourse(course);
  };

  return (
    <div>
      <div>
        <section className="ad"></section>
        <section className="main">
          <Modal handleOpen={() => opened}>
            <main slot="main" className="container p-16">
              <button
                onClick={openModal}
                className="absolute top-[4rem] right-[4rem] z-[51]"
              >
                <AiFillCloseSquare className="w-10 h-10" />
              </button>

              <div slot="title">
                <div className="relative">
                  <AiOutlineSearch
                    name="mdi:search"
                    className="w-10 h-10 absolute top-1/2 left-0 -translate-y-1/2"
                  />
                  <input
                    placeholder="Bạn muốn học tiếng gì ?"
                    type="text"
                    className="text-4xl text-gray-800 bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                    name=""
                  />
                </div>
              </div>

              <div className="mt-10">
                <ul className="grid grid-cols-3 gap-8">
                  {courseList.map((course) => {
                    const lang = langList.find(
                      (lang) => lang._id === course.language_id
                    );
                    return (
                      <li key={course._id}>
                        <Link
                          className=" text-3xl text-slate-700 hover:opacity-70 transition-opacity"
                          state={{ ...course }}
                          to={`/course/${textToSlug(course.name)}`}
                        >
                          {lang?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </main>
          </Modal>
          <div className="inner">
            <div className="title mt-10">
              <h1 className="text-6xl font-light capitalize">
                Học ngoại ngữ miễn phí
              </h1>
            </div>

            <div className="filter-lang mt-[3rem] grid grid-cols-1 sm:flex gap-10 items-center">
              {/* <div className="btn-lang">
                <button
                  onClick={openModal}
                  className="w-full justify-between flex items-center p-6 border rounded-md"
                >
                  {`Tôi nói tiếng ${defaultLang.name}`}
                  <AiFillCaretDown className="w-6 h-6 ml-8" />
                </button>
              </div> */}

              <div className="btn-lang">
                <button
                  onClick={openModal}
                  className="w-full justify-between flex items-center p-6 border rounded-md"
                >
                  {`Tôi nói tiếng ${defaultLang.name}`}
                  <AiFillCaretDown className="w-6 h-6 ml-8" />
                </button>
              </div>

              <div className="btn-lang">
                <button onClick={openModal} className="bg-[#00bcd4] p-6">
                  <BsArrowRight className="w-10 h-10 text-white" />
                </button>
              </div>
            </div>

            <div className="lang-list mt-20">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4">
                {courseList.map((course) => {
                  return (
                    <li
                      key={course._id}
                      className=" shadow bg-white rounded-md overflow-hidden "
                    >
                      <Link
                        className=" text-3xl text-slate-700 hover:opacity-70 transition-opacity "
                        state={{ ...course }}
                        onClick={() => handleClick(course)}
                        to={{
                          pathname: `/course/${textToSlug(course.name)}`,
                        }}
                      >
                        <div className="h-[25rem] ">
                          <img src={course.thumbnailUrl} alt={course.name} />
                        </div>

                        <div className="  flex  gap-4 p-8">
                          <AiOutlinePlayCircle className="w-10 h-10 flex-shrink-0" />

                          <h2 className=" text-2xl">{course.name}</h2>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
