import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkMode";

function Header() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About Me", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Certificates", href: "#certificates" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'header-glass shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <header className="px-[5%] flex justify-between items-center maxWidth">
        <a
          href="#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400 dark:from-white dark:to-gray-400 hover:scale-105 transition-transform"
          style={{ fontFamily: "Jost" }}
        >
          Osama<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="items-center hidden sm:flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="nav-link text-[15px] font-semibold text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 sm:hidden ${nav ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <button
            onClick={() => setNav(false)}
            className="absolute top-6 right-[5%] w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          
          {navLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => setNav(false)}
              href={link.href}
              className="text-2xl font-bold text-slate-800 dark:text-white hover:text-blue-500 transition-colors"
            >
              {link.title}
            </a>
          ))}
          
          <a href="#contact" onClick={() => setNav(false)} className="btn px-8 py-3 !rounded-full text-lg">
            Contact Me
          </a>
        </div>

        <div className="flex gap-3 items-center">
          <a href="#contact" className="hidden xs:block">
            <button className="btn !py-[8px] !px-5 !rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow">
              Contact Me
            </button>
          </a>

          <DarkModeToggle />
          
          <button 
            onClick={() => setNav(true)} 
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
