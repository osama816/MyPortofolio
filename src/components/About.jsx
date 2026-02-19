import { useNavigate } from "react-router-dom";
import prfileImage from "../assets/image.jpg";

function About() {
  const history = useNavigate();

  const navigate = (url) => {
    if (url.startsWith("#")) {
      const element = document.getElementById(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      history(url);
    }
  };

  const redirectClient = (url) => {
    window.open(url, "_blank");
  };

  const infoCards = [
    {
      icon: "fa-solid fa-code",
      title: "Backend Development",
      desc: "Specialized in building high-performance APIs and business logic using Laravel and .NET.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Frontend Experience",
      desc: "Crafting interactive user interfaces with Angular and modern JavaScript ecosystems.",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Full Stack Agility",
      desc: "Bridging the gap between design and delivery with expert-level architectural planning.",
      color: "from-blue-600 to-sky-400"
    }
  ];

  const socialLinks = [
    { icon: "fa-brands fa-facebook", url: "https://www.facebook.com/share/1A3jrR5dwM/", color: "#1877F2" },
    { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/osama-elgendy-416329331/", color: "#0A66C2" },
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/201202665670", color: "#25D366" },
    { icon: "fa-brands fa-github", url: "https://github.com/osama816", color: "#333" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-hidden relative">
      <div className="maxWidth px-[5%]">
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                About <span className="text-blue-500">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 relative group">
            <div className="">
                <img
                    src={prfileImage}
                    alt="Osama Profile"
                    className="rounded-[1.5rem] w-full max-w-[400px] h-auto object-cover"
                />
            </div>
            
            <div className="absolute -bottom-6 -left-6 z-10 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden sm:block">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                        3+
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years of</p>
                        <p className="text-sm font-bold text-slate-800 dark:text-white">Experience</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Text/Cards Side */}
          <div className="flex-[1.2] flex flex-col gap-8">
            <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    Full Stack Developer based in <span className="text-blue-500">Egypt</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    I enjoy transforming complex requirements into seamless digital experiences. My core expertise lies in developing powerful backends using **Laravel** and **.NET**, while building dynamic interfaces with **Angular**.
                </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-6">
                {infoCards.map((card, index) => (
                    <div key={index} className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center mb-4 shadow-lg`}>
                            <i className={`${card.icon} text-lg`}></i>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4">
                <div className="flex gap-4">
                    <button className="btn px-8 py-3 !rounded-xl text-sm font-bold shadow-lg" onClick={() => navigate("#projects")}>
                        VIEW PORTFOLIO
                    </button>
                    <button className="btn-outline px-8 py-3 !rounded-xl text-sm font-bold" onClick={() => navigate("#contact")}>
                        SAY HELLO
                    </button>
                </div>

                <div className="flex gap-3 items-center ml-2 border-l border-slate-100 dark:border-slate-800 pl-6 h-10 hidden sm:flex">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-blue-500 transition-colors text-lg"
                        >
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
