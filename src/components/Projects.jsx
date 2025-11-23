import { useState } from "react";
import pmsImage from "../assets/pms.png";
import blogImage from "../assets/blog.png";
import ecommersImage from "../assets/ecommers.png";
import rentsImage from "../assets/rants.png";

function Projects() {
  const projects = [
    { 
      title: "Booking Courses ",
      imageUrl: courses,
      category: "fullstack",
      tags: ["Laravel", "Livewire", "Payment","real time","HTML", "css", "Api","bootstrap", "MySQL"],
      previewLink: "",
      githubLink: "https://github.com/osama816/Courses_laravel.git",
    },
    { 
      title: "BLOg App&php native ",
      imageUrl: blogImage,
      category: "fullstack",
      tags: ["HTML", "css", "php","bootstrap", "MySQL"],
      previewLink: "https://blog0.wuaze.com",
      githubLink: "https://github.com/osama816/blog_app.git",
    },
    {
      title: "blog & ecommerce website",
      imageUrl:ecommersImage,
      category: "fullstack",
      tags: ["HTML", "opp",'php', "css", "bootstrap", "MySQL"],
      previewLink: "https://electroworld.kesug.com/index.php?page=home&i=1",
      githubLink: "https://github.com/elkhokh/E-Commerce-Electronics.git",
    },
        {
      title: "Shop stor- php native ",
      imageUrl: pmsImage,
      category: "client",
      tags: ["HTML", "css", "php","bootstrap", "file.json"],
      previewLink: "https://pmsstore.wuaze.com/index.php?i=3",
      githubLink: "https://github.com/osama816/pms_store.php.git",
    },
    {
      title: "Eladb-Rentals",
      imageUrl:rentsImage,
      category: "client",
      tags: ["HTML", "Bootstrap", "css", "opp",'php', "MySQL"],
      previewLink: "https://elabd-rentals.wuaze.com/?i=1",
      githubLink: "https://github.com/osama816/eladb-rentals.git",
    },
   
  ];

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div id="projects" className="px-[5%] maxWidth py-4 hero !h-full bg-white text-slate-900 dark:bg-black dark:text-white">
      <div className="grid col-span-2 mb-6 py-2">
        <h1 className="text-3xl leading-12 text-center">
          <span className="text-[32px] headingText ">My Projects</span>
        </h1>
      </div>
      {/* <div className="mb-5 flex justify-center flex-wrap items-center gap-3">
        <button
          className={`btn-outline transition ${
            filter === "all"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>

        <button
          className={`btn-outline transition ${
            filter === "fullstack"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("fullstack")}
        >
          FullStack
        </button>
        <button
          className={`btn-outline transition ${
            filter === "client"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("client")}
        >
          Client
        </button>
        <button
          className={`btn-outline transition ${
            filter === "ui"
              ? "bg-slate-800 !text-white dark:bg-white dark:border-white dark:!text-slate-900"
              : ""
          }`}
          onClick={() => handleFilterChange("ui")}
        >
          UI Design
        </button>
      </div> */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-5 md:gap-7 lg:gap-7">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.imageUrl}
              alt=""
              className="w-full rounded-tr-md lg:max-h-[290px]  md:max-w-[310px] lg:max-w-[330px]"
            />
            <div className="flex flex-col px-3 py-2 mb-2">
              <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
                {project.title}
              </h2>
              <div className="flex gap-2 justify-start items-center flex-wrap mt-2 mb-12">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tags bg-slate-700 text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 lg:gap-1 justify-center items-center flex-wrap absolute bottom-2 left-0 right-0 lg:relative xl:right-10">
                <button
                  className="btn !rounded-full"
                  onClick={() => window.open(project.previewLink)}
                >
                  <i className="fa-solid fa-up-right-from-square icon"></i>
                  Preview
                </button>
                <button
                  className="btn !rounded-full"
                  onClick={() => window.open(project.githubLink)}
                >
                  <i className="fa-brands fa-github icon"></i>Github
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length == 0 && (
          <div className="mx-auto mt-5 col-span-full">
            <h3 className="text-xl">No Projects Available</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
