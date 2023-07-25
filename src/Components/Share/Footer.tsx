import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-primary text-white">
      <div className=" container">
        <div className="pt-16 pb-20">
          <div className="logo mb-8">
            <Link to="/" className=" text-5xl font-semibold">
              LingoHut
            </Link>
          </div>

          <div className="py-10 grid grid-cols-2  lg:grid-cols-4">
            <ul className=" col-span-3 grid sm:grid-cols-2 gap-8">
              <li>
                <Link
                  className="text-2xl hover:opacity-70 transition-all"
                  to={"/"}
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl hover:opacity-70 transition-all"
                  to={"/"}
                >
                  Giới thiệu về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl hover:opacity-70 transition-all"
                  to={"/"}
                >
                  Liên kết với chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  className="text-2xl hover:opacity-70 transition-all"
                  to={"/"}
                >
                  Những câu hỏi thường gặp
                </Link>
              </li>
            </ul>

            <ul className=" col-span-1l mt-10 lg:mt-0">
              <li className="flex lg:justify-center items-center h-full">
                <a
                  target="_blank"
                  href=""
                  className="flex items-center gap-4 py-4 px-14 rounded-md transition hover:opacity-80 border border-white"
                >
                  Facebook
                  <AiFillFacebook className="w-10 h-10 text-white " />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
