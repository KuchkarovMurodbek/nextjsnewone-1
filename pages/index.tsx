import Link from "next/link";
import TwoPart from "../components/home/TwoPart";
import ThreePart from "../components/home/ThreePart";
import FourPart from "../components/home/FourPart";
import FivePart from "../components/home/FivePart";
import SixPart from "../components/home/SixPart";
import SevenPart from "../components/home/SevenPart";
import Footer from "../components/home/Footer";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiAlarmWarningFill } from "react-icons/ri";
import { Bounce } from "react-awesome-reveal";
import { useEffect, useState } from "react";
export default function Home() {
  const [navbar, setNavbar] = useState(false);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 466) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const [state, setState] = useState(true);
  return (
    <>
      {state ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setState(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <Bounce duration={4000}>
                    <RiAlarmWarningFill className="w-6 h-6 text-red-600" />
                  </Bounce>
                </div>

                <div className="mt-2 text-center">
                  <h4 className="text-lg font-medium text-gray-800">
                    Please read{" "}
                    <span className="bg-gray-100 p-1 text-red-700">Doc</span>{" "}
                    page above before seeing others pages
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc eget lorem dolor sed viverra ipsum nunc.
                    Consequat id porta nibh venenatis.
                  </p>
                </div>
              </div>
              <div className="items-center gap-2 mt-3 sm:flex">
                <Link
                  href="/doc"
                  className="text-center w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                >
                  Documentation
                </Link>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={() => setState(false)}
                >
                  Undo
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <style jsx>{`
        #menu-toggle:checked + #menu {
          display: block;
        }

        .dropdown:hover .dropdown-menu,
        .dropdown:active .dropdown-menu {
          display: block;
        }
      `}</style>
      <header
        className={` ${
          navbar ? "bg-indigo-500" : "bg-white border-0 shadow-none"
        }  fixed w-full   z-1 lg:px-16 px-8 text-gray-700 body-font border-b border-gray-200  py-4 md:py-0`}
      >
        <div className=" container mx-auto flex flex-wrap items-center">
          <div className="flex-1 flex justify-between items-center">
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              href="/"
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "22px",
                }}
                className="w-10 h-10 text-white p-1 bg-indigo-500 rounded-full"
              >
                <BsFillRocketTakeoffFill />
              </span>

              <span className="ml-3 text-xl">EASY PORTFOLIO</span>
            </a>
          </div>

          <label
            htmlFor="menu-toggle"
            className="pointer-cursor md:hidden block"
          >
            <svg
              className="fill-current text-gray-300 hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base pt-3 md:pt-0">
                <li >
                  <Link
                    className={`${
                      navbar ? "text-white" : ""
                    } md:px-4 py-2 md:py-4 px-0 block text-gray-700 hover:font-medium`}
                    href="/doc"
                  >
                    Doc
                  </Link>
                </li>
                <li>
                  <a
                    className={`${
                      navbar ? "text-white" : ""
                    } md:px-4 py-2 md:py-4 px-0 block text-gray-700 hover:font-medium`}
                    href=""
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      navbar ? "text-white" : ""
                    } md:px-4 py-2 md:py-4 px-0 block text-gray-700 hover:font-medium`}
                    href=""
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      navbar ? "text-white" : ""
                    } md:px-4 py-2 md:py-4 px-0 block text-gray-700 hover:font-medium`}
                    href=""
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <Link href={"/login"}>
                    <button
                      className={`${
                        navbar ? "bg-white" : "bg-gray-200"
                      } inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0`}
                    >
                      Sign In
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <TwoPart />

      <ThreePart />

      <FourPart />

      <FivePart />

      <SixPart />
      <SevenPart />

      <Footer />

      <button
        onClick={scrollToTop}
        className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
      >
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          stroke="#6366f1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
        </svg>
      </button>
    </>
  );
}
