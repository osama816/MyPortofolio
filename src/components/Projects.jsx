import { useState } from "react";
import pmsImage from "../assets/pms.png";
import blogImage from "../assets/blog.png";
import ecommersImage from "../assets/ecommers.png";
import rentsImage from "../assets/rants.png";
import courses from "../assets/courses.png";
import blog_laravel from "../assets/blog_laravel.png";
import frontend_E_commerce from "../assets/frontend_E-commerce.png";
import mealmain from "../assets/mealmain.png";

function Projects() {
  const projects = [
    {
      title: "Booking Courses",
      imageUrl: courses,
      tags: ["Laravel", "Livewire", "Payment", "Real Time", "API", "Tailwind", "MySQL"],
      previewLink: "https://courseway.wuaze.com/",
      githubLink: "https://github.com/osama816/Courses_laravel.git",
    },
    {
      title: "MealMain",
      imageUrl: mealmain,
      tags: ["Tailwind", "HTML", "CSS", "JS"],
      previewLink: "https://mealsmind.vercel.app",
      githubLink: "https://github.com/osama816/mealmain.git",
    },
    {
      title: "Blog & Ecommerce",
      imageUrl: ecommersImage,
      tags: ["HTML", "OOP", "PHP", "CSS", "Bootstrap", "MySQL"],
      previewLink: "https://electroworld.kesug.com/index.php?page=home&i=1",
      githubLink: "https://github.com/elkhokh/E-Commerce-Electronics.git",
    },
    {
      title: "Frontend E-Commerce",
      imageUrl: frontend_E_commerce,
      tags: ["HTML5", "Tailwind", "JavaScript", "CSS"],
      previewLink: "https://shopco-shop.vercel.app",
      githubLink: "https://github.com/osama816/ecommerse_frontend.git",
    },
    {
      title: "Blog Laravel",
      imageUrl: blog_laravel,
      tags: ["Laravel", "Livewire", "Tailwind", "API", "MySQL"],
      previewLink: "",
      githubLink: "https://github.com/osama816/Blog_Laravel.git",
    },
    {
      title: "Blog App (PHP Native)",
      imageUrl: blogImage,
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      previewLink: "https://blog0.wuaze.com",
      githubLink: "https://github.com/osama816/blog_app.git",
    },
    {
      title: "Shop Store (PHP Native)",
      imageUrl: pmsImage,
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "JSON"],
      previewLink: "https://pmsstore.wuaze.com/index.php?i=3",
      githubLink: "https://github.com/osama816/pms_store.php.git",
    },
    {
      title: "Elabd Rentals",
      imageUrl: rentsImage,
      tags: ["HTML", "Bootstrap", "CSS", "OOP", "PHP", "MySQL"],
      previewLink: "https://elabd-rentals.wuaze.com/?i=1",
      githubLink: "https://github.com/osama816/eladb-rentals.git",
    },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="maxWidth px-[5%]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm">
            Hover to pause • Click buttons to explore
          </p>
        </div>

        {/* Marquee Strip */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee-projects whitespace-nowrap py-6">
            {duplicatedProjects.map((project, index) => (
              <div key={index} className="project-marquee-card">
                <div className="project-card-image-wrapper">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="project-card-image-overlay"></div>
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-tags">
                    {project.tags.slice(0, 5).map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-card-tag">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="project-card-tag">+{project.tags.length - 5}</span>
                    )}
                  </div>
                  <div className="project-card-actions">
                    {project.previewLink && (
                      <button
                        className="project-card-btn preview"
                        onClick={() => window.open(project.previewLink)}
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                        Preview
                      </button>
                    )}
                    <button
                      className="project-card-btn github"
                      onClick={() => window.open(project.githubLink)}
                    >
                      <i className="fa-brands fa-github"></i>
                      Github
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
