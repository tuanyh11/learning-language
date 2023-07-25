import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TiSortAlphabetically } from "react-icons/ti";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import vocabulary from "src/data/vocabulary";
import "regenerator-runtime/runtime.js";

import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsFillMicFill,
  BsPlay,
} from "react-icons/bs";

import { useReactMediaRecorder } from "react-media-recorder";
import CustomTTS from "src/Components/Common/CustomTTS";
import { TTSHookResponse } from "tts-react";
import lessons from "src/data/lessons";
import { textToSlug } from "src/utils";
import useStore from "src/store";
import Message from "src/Components/Common/Message";

const defaultLang = "zh-CN";

const NextArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;

  return (
    <div
      className={`${
        className as string
      } before:!content-[""] lg:!h-[5.6rem] lg:!w-[5.6rem] !h-[4.5rem] !w-[4.5rem] !right-[-1.5rem] lg:!right-[-2.5rem]  `}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <div className="!bg-[#00bcd4] h-full flex justify-center items-center rounded-full shadow">
        <BsArrowRightShort className="text-white h-14 w-14" />
      </div>
    </div>
  );
};

const PreArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${
        className as string
      } before:!content-[""] lg:!h-[5.6rem] lg:!w-[5.6rem] !h-[4.5rem] !w-[4.5rem] !left-[-1.5rem] lg:!left-[-2.5rem] !z-[99999] `}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <div className="!bg-[#00bcd4] h-full flex justify-center items-center rounded-full shadow">
        <BsArrowLeftShort className="text-white h-14 w-14" />
      </div>
    </div>
  );
};

const Lesson = () => {
  const { lang, lesson, course } = useStore();
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    unMuteAudio,
    clearBlobUrl,
    ...rest
  } = useReactMediaRecorder({ video: false, audio: true });

  const [currentVoca, setCurrentVoca] = useState(0);

  const [play, setPlay] = useState(false);

  console.log(rest);

  const settings: Settings = {
    infinite: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    dots: false,
    arrows: play,
    autoplay: play,
    autoplaySpeed: 3000,
    afterChange: (currentSlide) => {
      setCurrentVoca(currentSlide);
    },
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  // Đoạn văn bản tiếng Trung cần phát âm.

  const handleStartListening = ({ stop }: TTSHookResponse) => {
    stop();
    startRecording();
  };

  const handleStopListening = () => {
    stopRecording();
  };

  const handlePlay = () => {
    setPlay(!play);
    unMuteAudio();
    clearBlobUrl();
  };

  const currentLesson = lessons.filter(
    (lesson) => lesson.course_id === course?._id && lesson._id !== course._id
  );

  const { setLesson } = useStore();

  useEffect(() => {
    let timer = 0;
    if (mediaBlobUrl && videoRef.current) {
      timer = setTimeout(() => {
        (videoRef.current as HTMLVideoElement).src = mediaBlobUrl;
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [mediaBlobUrl]);

  const vocabularyList = useMemo(
    () => vocabulary.filter((v) => v.lesson_id === lesson?._id),
    [lesson?._id]
  );

  return (
    <div>
      <div className="head mt-10">
        <div className="flex uppercase  transition-opacity text-slate-700 text-2xl items-center gap-4">
          <h2 className="">Học {lang?.name}</h2>
          <span>-</span>
          <div className="flex items-center">
            <span>{`bài học ${lesson?.order as number}`}</span>
          </div>
        </div>

        <h1 className=" cursor-pointer hover:opacity-80 uppercase text-4xl text-gray-700 mt-4 ">
          {lesson?.name}
        </h1>

        <div className="flex items-center gap-4 mt-4 text-3xl">
          <div className="p-2 rounded-full  border-primary border-2">
            <TiSortAlphabetically className="w-14 h-14 text-primary" />
          </div>
          Bài học từ vựng
        </div>
      </div>

      {vocabularyList.length === 0 ? (
        <div className="mt-12">
          <Message message="Xin lỗi chúng tôi sẽ sớm cập nhật từ vựng cho bài học này" />
        </div>
      ) : (
        <div className=" mt-12">
          <video
            ref={videoRef}
            className=" max-h-0"
            autoPlay={mediaBlobUrl ? true : false}
          ></video>
          <div className="grid grid-cols-2 gap-10">
            <div className=" relative col-span-2">
              <div
                className={` absolute h-full w-full after:absolute after:top-0 ${
                  !play ? "block " : "hidden"
                } after:bg-[rgba(255,255,255,.5)] after:left-0 after:h-full after:w-full z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
              >
                <div className="flex h-full  justify-center items-center">
                  <button
                    onClick={() => handlePlay()}
                    className="p-6 bg-primary text-white rounded-md relative z-20 "
                  >
                    <BsPlay className="w-16 h-16 " />
                  </button>
                </div>
              </div>

              <Slider {...settings}>
                {vocabularyList.map((v, i) => {
                  const autoPlay = i === currentVoca && play;

                  return (
                    <div key={v._id} className="p-4">
                      <div className=" shadow px-16 py-8 rounded-lg relative">
                        <div className="absolute top-8 left-16">
                          <span className=" text-xl text-gray-600 ">
                            {i + 1}/{vocabulary.length}
                          </span>
                        </div>
                        <div className="flex flex-col items-center min-h-[20rem] justify-center ">
                          <p className="text-3xl">
                            {v.meanings.map((lang) => lang.meaning).toString()}
                          </p>

                          <p className="text-3xl text-primary mt-6">{v.word}</p>
                        </div>

                        <div className="">
                          <CustomTTS
                            lang={defaultLang}
                            autoPlay={autoPlay}
                            component={({ stop, ButtonComponent, ...rest }) => {
                              return (
                                <div className="flex items-center justify-between pt-8 border-t-2 border-primary">
                                  <button
                                    onMouseLeave={handleStopListening}
                                    onTouchStart={() =>
                                      handleStartListening({ stop, ...rest })
                                    }
                                    onTouchEnd={handleStopListening}
                                    onMouseDown={() =>
                                      handleStartListening({ stop, ...rest })
                                    }
                                    onMouseUp={handleStopListening}
                                    className="p-4 hover:text-primary"
                                  >
                                    <BsFillMicFill
                                      className={`h-10 w-10  ${
                                        status === "recording"
                                          ? "text-primary"
                                          : "text-gray-500"
                                      }`}
                                    />
                                  </button>
                                  <ButtonComponent />
                                </div>
                              );
                            }}
                          >
                            <p>{v.word}</p>
                          </CustomTTS>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>

            <div className="vocabulary-list col-span-2">
              <h2 className="  cursor-pointer hover:opacity-80 uppercase text-4xl text-gray-500 mt-4 ">
                Từ vựng {lesson?.name}
              </h2>
              <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10">
                {vocabularyList.map((v, i) => {
                  return (
                    <li
                      className="border-t-2 py-6 px-4 hover:cursor-pointer last:border-b-[1px] col-span-1  "
                      key={i}
                    >
                      <CustomTTS
                        lang={defaultLang}
                        component={({ play, ButtonComponent }) => (
                          <div
                            role="button"
                            onClick={() => play()}
                            className="flex justify-between items-center"
                          >
                            <div>
                              <p className="text-3xl">
                                {v.meanings
                                  .map((lang) => lang.meaning)
                                  .toString()}
                              </p>

                              <p className="text-3xl text-primary ">{v.word}</p>
                            </div>
                            <ButtonComponent />
                          </div>
                        )}
                      >
                        <p>{v.word}</p>
                      </CustomTTS>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="others-less"></div>
          </div>
        </div>
      )}

      <div className=" mt-16">
        <div className="cursor-pointer  mb-10 hover:opacity-80 uppercase text-4xl text-gray-700 mt-4">
          <h2 className="">Các bài học khác</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {currentLesson.map((lesson) => {
            return (
              <li
                key={lesson._id}
                className="bg-white text-slate-700 shadow-lg p-8 rounded-md "
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-4xl uppercase font-medium">{`Bài học ${lesson.order}`}</h3>
                  <p className=" mt-2 text-slate-500">{lesson.name}</p>

                  <div className="mt-4 flex flex-1">
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
    </div>
  );
};

export default Lesson;
