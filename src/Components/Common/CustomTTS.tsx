import React, { useEffect, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { TTSHookProps, TTSHookResponse, useTts } from "tts-react";
interface CustomProps extends TTSHookProps {
  highlight?: boolean;
  lang: string;
  repeat?: number;
  autoPlay?: boolean;
  icon?: React.ReactNode;
  component?: (ob: TTSHookResponse) => React.ReactNode;
}
const CustomTTS = ({
  children,
  highlight = false,
  lang = "zh-CN",
  repeat = 2,
  autoPlay = false,
  icon,
  component,
}: CustomProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { state, play, stop, ...rest } = useTts({
    children,

    markTextAsSpoken: highlight,
    lang,
    rate: 0.5,
    // autoPlay,
  });

  const handlePlay = () => {
    play();
  };

  useEffect(() => {
    autoPlay && btnRef.current?.click();
  }, [autoPlay]);

  const ButtonComponent = () => {
    return (
      <div className="">
        {state.isPlaying ? (
          <button className="p-4 hover:text-primary">
            {" "}
            <BsPauseFill
              onClick={() => stop()}
              className="h-12 w-12 text-gray-500"
            />
          </button>
        ) : (
          <button
            ref={btnRef}
            onClick={() => handlePlay()}
            className="p-4 hover:text-primary"
          >
            <BsFillPlayFill className="h-12 w-12 text-gray-500" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={`${component ? "" : ""}`}>
      {component ? (
        component({ play, state, stop, ...rest, ButtonComponent })
      ) : (
        <ButtonComponent />
      )}
    </div>
  );
};

export default CustomTTS;
