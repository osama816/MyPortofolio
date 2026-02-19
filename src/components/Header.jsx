import { useState } from "react";
// import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkMode";

function Header() {
  const [nav, setNav] = useState(false);

  return (
  <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md dark:bg-slate-900 dark:text-white">
      <header className="px-[5%] py-4 flex justify-between items-center maxWidth">
        <a
          href="#home"
          className="text-[22px] sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-sky-400 dark:from-gray-200 dark:to-gray-400 hover:scale-105 transition-transform"
          style={{ fontFamily: "Jost" }}
        >
          Osama Elgendy
        </a>

        <ul className=" items-center hidden sm:flex gap-4">
          <li>
            <a
              href="#about"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-gray-300 dark:hover:text-white hover:text-slate-900"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-gray-300 dark:hover:text-white hover:text-slate-900"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-gray-300 dark:hover:text-white hover:text-slate-900"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className="px-2 py-[6px] text-gray-700 font-medium dark:text-gray-300 dark:hover:text-white hover:text-slate-900"
            >
              Certificates
            </a>
          </li>
        </ul>

        {nav && (
          <ul className="flex flex-col justify-center items-center gap-8 bg-white dark:bg-gradient-to-bl  dark:to-slate-800 overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-10 sm:hidden">
            <button
              onClick={() => setNav(false)}
              className="sm:hidden absolute top-[10px] right-[5%] btn-auto"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <li>
              <a
                onClick={() => setNav(false)}
                href="#about"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={() => setNav(false)}
                href="#skills"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => setNav(false)}
                href="#projects"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => setNav(false)}
                href="#certificates"
                className="px-2 py-[6px] text-xl text-left hover:text-slate-700 dark:text-gray-200 font-medium dark:hover:text-slate-300"
              >
                Certificates
              </a>
            </li>
          </ul>
        )}

        <div className="flex gap-2 sm:gap-3 items-center">
          <a href="#contact">
            <button className="btn !py-[6px]">Contact Me</button>
          </a>

          <DarkModeToggle />
          <button onClick={() => setNav(true)} className="btn-auto">
            <i className="mx-auto fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
