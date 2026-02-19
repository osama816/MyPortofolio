import { useNavigate } from "react-router-dom";
import prfileImage from "../assets/profile.png";
import { FaToolbox } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

function Home() {
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

  const socialLinks = [
    { icon: "fa-brands fa-facebook", url: "https://www.facebook.com/share/1A3jrR5dwM/", color: "#1877F2" },
    { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/osama-elgendy-416329331/", color: "#0A66C2" },
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/201202665670", color: "#25D366" },
    { icon: "fa-brands fa-github", url: "https://github.com/osama816", color: "#333" },
  ];

  return (
    <div
      id="home"
      className="px-[5%] pt-32 pb-20 hero flex flex-col md:flex-row items-center justify-between gap-12 maxWidth bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-30">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="400" cy="200" r="200" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 200) rotate(90) scale(200)">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="flex-1 flex flex-col items-start gap-4 z-10 text-center md:text-left">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-bold tracking-wider uppercase border border-blue-100 dark:border-blue-800 self-center md:self-start mb-2">
          Hello there, 👋
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
          I'm <span className="text-blue-600 dark:text-blue-400">
            <Typewriter
              options={{
                strings: [
                  "Osama Elgendy",
                  "Full Stack Developer",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mt-2">
          Specializing in building robust and scalable web applications from architectural design to interactive user experiences. Let's build something amazing together.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
          <button
            onClick={() => navigate("#contact")}
            className="group relative flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
          >
             <FaToolbox className="text-lg group-hover:rotate-12 transition-transform" /> 
             <span>Hire Me Now</span>
          </button>
          
          <button
            className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-gray-200 font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-700 transition-all hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95"
            onClick={() => window.open("https://drive.google.com/drive/folders/1hLOcMJzoxmcPvf7v6xOgi6PnhM3NY7IU?usp=sharing")}
          >
            <i className="fa-regular fa-file-lines text-lg group-hover:bounce" />
            <span>View CV</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 w-full md:w-fit justify-center">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Connect:</span>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn !w-11 !h-11 shadow-sm"
                style={{ '--social-color': social.color }}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end z-10 relative">
        <div className="relative group">
          {/* Animated decorative ring */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-opacity animate-pulse"></div>
          
          <img
            src={prfileImage}
            alt="Osama Elgendy"
            className="relative z-10 rounded-full w-[300px] h-[300px] md:w-[380px] md:h-[380px] object-cover border-8 border-white dark:border-slate-900 shadow-2xl animate-float"
          />
          
          <div className="absolute bottom-6 -right-2 z-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce cursor-default">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold dark:text-white">Available for Work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
