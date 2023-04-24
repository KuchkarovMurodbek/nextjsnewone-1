import Image from "next/image";
import Link from "next/link";
import TwoPart from "../components/home/TwoPart";
import ThreePart from "../components/home/ThreePart";
import FourPart from "../components/home/FourPart";
import FivePart from "../components/home/FivePart";
import SixPart from "../components/home/SixPart";
import SevenPart from "../components/home/SevenPart";
import Footer from "../components/home/Footer";

export default function Home() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <style jsx>{`
        #menu-toggle:checked + #menu {
          display: block;
        }

        .dropdown:hover .dropdown-menu,
        .dropdown:active .dropdown-menu {
          display: block;
        }
      `}</style>
      <header className="lg:px-16 px-8 text-gray-700 body-font border-b border-gray-200 shadow-md py-4 md:py-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex-1 flex justify-between items-center">
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              href="https://tailblocks.cc"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">TAILBLOCKS</span>
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
              <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-gray-700  "
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-gray-700  "
                    href=""
                  >
                    Treatments
                  </a>
                </li>
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-gray-700  "
                    href=""
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-gray-700  "
                    href=""
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <Link href={"/login"}>
                    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg> */}
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
          <path
            
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </button>
    </>
  );
}
