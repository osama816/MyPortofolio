import React from "react";

function Footer() {
  return (
  <footer className="bg-white text-slate-900 dark:bg-black dark:text-white py-8 mt-10 shadow-inner">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-2 dark:text-white">MyPortfolio</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            A personal website to showcase my work, skills, and connect with others.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 dark:text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:underline text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About Me</a></li>
            <li><a href="#skills" className="hover:underline text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:underline text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:underline text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2 dark:text-white">Contact Info</h3>
          <ul className="space-y-1 text-slate-700 dark:text-slate-300">
            <li>Email: elgendyo240@email.com</li>
            <li>Phone: +20 01202665670</li>
            <li>Location: Elbehira, Egypt</li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2 dark:text-white">Follow Me</h3>
          <div className="flex flex-col space-y-2">
            <a href="https://facebook.com/share/1A3jrR5dwM/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a href="https://wa.me/201202665670" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a href="https://github.com/osama816" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/osama-elgendy-416329331/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-8 text-slate-600 dark:text-slate-400">
        &copy; {new Date().getFullYear()} All Rights Reserved | Designed by Osama Elgendy
      </div>
    </footer>
  );
}

export default Footer;