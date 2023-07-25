import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCloseSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillThunderbolt,
  AiFillYoutube,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import langList from "src/data/lang";
import Modal from "../Common/Modal";
import courseList from "src/data/courses";
import { textToSlug } from "src/utils";

const Header = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const openModal = () => {
    setOpened(!opened);
  };
  return (
    <div>
      <header className="header h-28 container ">
        <div className="inner flex items-center justify-between h-full border-b-2 border-primary">
          <div className="logo">
            <Link to={"/"}>
              <span className=" text-4xl font-semibold text-purple-700 ">
                Logo
              </span>
            </Link>
          </div>

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
                <ul className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-8">
                  {courseList.map((course) => {
                    const lang = langList.find(
                      (lang) => lang._id === course.language_id
                    );
                    return (
                      <li onClick={() => setOpened(false)} key={course._id}>
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

          <nav className="nav self-stretch">
            <ul className="flex items-center gap-8 h-full">
              <li>
                <a target="_blank" href="">
                  <AiFillFacebook className="w-10 h-10 text-blue-600 " />
                </a>
              </li>
              {/* <li>
                <a href="">
                  <AiFillYoutube className="w-8 h-8 text-red-600 " />
                </a>
              </li>
             

              <li>
                <a href="">
                  <AiFillInstagram className="w-8 h-8 text-purple-600" />
                </a>
              </li> */}

              <li className=" relative h-full flex justify-center items-center">
                <button
                  id="btn-lang"
                  onClick={openModal}
                  className=" uppercase text-2xl flex items-center gap-2"
                >
                  {langList && langList?.[0].name}
                  <AiFillCaretDown className="w-4 h-4" />
                </button>

                {/* <ul
                  id="lang-list"
                  className="lang-list hidden absolute  z-10 top-full left-0 w-full px-4 py-4 shadow rounded-md"
                >
                  {langList.map((lang) => (
                    <li key={lang._id}>
                      <a
                        className=" transition-all hover:opacity-60 text-gray-700 text-sm"
                        href="/lang"
                      >
                        <span className="  uppercase text-base font-semibold">
                          {lang.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul> */}
              </li>

              <li>
                <a className=" text-2xl uppercase" href="">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
