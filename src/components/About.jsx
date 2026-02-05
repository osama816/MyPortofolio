import { useNavigate } from "react-router-dom";
import prfileImage from "../assets/image.jpg";
function About() {
  const history = useNavigate();

  const navigate = (url) => {
    history(url);
  };

  const redirectClient = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div id="about" className="px-[5%] maxWidth py-4 hero !h-full grid lg:grid-cols-2 items-start justify-center bg-white text-slate-900 dark:bg-black dark:text-white">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText ">About Me</span>
        </h1>
      </div>
      <div className="flex col-span-2 lg:col-span-1 sm:w-[600px] lg:max-w-full sm:mx-auto mt-8 lg:mt-0 justify-start !items-start flex-col order-1 ">
        <h1 className="text-xl leading-12 mt-1 ">
          <span className="text-[22px] font-medium textGradient">
            I&apos;m Osama Elgendy
          </span>
        </h1>
        <p className="text-[17px] text-slate-800 dark:text-gray-200 mt-1">
          I am a Full Stack Developer based in Egypt with a passion for building robust and scalable web applications. With a strong engineering background, I specialize in creating comprehensive solutions from backend architecture to frontend delivery.
        </p>
        <span className="text-[22px] font-medium textGradient mt-3">
          What I Do
        </span>
        <p className="text-[17px] text-slate-800 dark:text-gray-200 mt-1">
          I enjoy transforming complex requirements into seamless digital experiences. My core expertise lies in developing powerful backends using <b>Laravel</b> and <b>.NET</b>, while building dynamic, interactive user interfaces with <b>Angular</b>.
        </p>

        <span className="text-[22px] font-medium textGradient mt-3">
          Why Choose Me?
        </span>
        <p className="text-[17px] text-slate-800 dark:text-gray-200 mt-1">
          <b>Full Stack Proficiency:</b> I bridge the gap between frontend and backend, ensuring high performance, security, and a great user experience across the entire stack. <br />
          <b>Versatile & Adaptable:</b> Whether it's the elegance of Laravel, the power of .NET, or the dynamic nature of Angular, I adapt to the best tools for the job to deliver high-quality results.
        </p>

        {/* <span className="px-2 py-[6px] text-[14px] rounded-sm mt-3 text-blue-900 bg-blue-100 border border-sky-400">
          <i className="fa-solid fa-triangle-exclamation text-blue-600 mr-1"></i>
          I&apos;m facing financial challenges, I&apos;m a dedicated Laravel
          developer delivering efficient code. Hiring me brings technical
          proficiency and a committed partner invested in your project&apos;s
          success. Let&apos;s connect and achieve your goals together. <br />{" "}
          I&apos;m busy now to escape from the toxic society and toxic peoples
        </span> */}

        <div className="flex-center mt-5 mx-auto !gap-3">
          <button className="btn mr-3" onClick={() => navigate("#projects")}>
            MY PROJECTS
          </button>
          <button className="btn-outline " onClick={() => navigate("#contact")}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="grid col-span-2 lg:col-span-1 justify-center relative order-0 ">
        <img
          src={prfileImage}
          alt="Profile"
          className="rounded-lg w-full max-w-[320px] h-auto object-cover shadow-lg mx-auto" style={{ transform: 'translateY(-100px)' }}
        />
        <div className="flex justify-center gap-4 mt-5 md:mt-7 lg:mt-10">
          <button
            onClick={() =>
              redirectClient("https://www.facebook.com/share/1A3jrR5dwM/")
            }
            className="social-btn bg-blue-500 border hover:bg-white hover:text-blue-500 borderN"
          >
            <i className="fa-brands fa-facebook text-xl"></i>
          </button>
          <button
            onClick={() =>
              redirectClient("https://www.linkedin.com/in/osama-elgendy-416329331/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apps ")
            }
            className="social-btn bg-sky-500 border hover:bg-white hover:text-sky-500 borderN"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </button>
          <button
            onClick={() => redirectClient("https://wa.me/201202665670")}
            className="social-btn bg-green-600 border hover:bg-white hover:text-green-500 borderN"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </button>
          <button
            onClick={() => redirectClient("https://github.com/osama816")}
            className="social-btn bg-slate-700 border hover:bg-white hover:text-slate-500 borderN"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
