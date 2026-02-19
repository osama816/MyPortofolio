import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/share/1A3jrR5dwM/", color: "#1877F2" },
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/osama-elgendy-416329331/", color: "#0A66C2" },
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/201202665670", color: "#25D366" },
    { icon: "fa-brands fa-github", url: "https://github.com/osama816", color: "#333" },
  ];

  return (
    <footer className="pt-20 pb-10 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="maxWidth px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand/Description */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500 w-fit">
              Osama<span className="text-blue-500">.</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              A passionate Software Engineer dedicated to crafting modern web solutions with precision and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Contact Information</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <i className="fa-solid fa-envelope text-blue-500"></i>
                <span>elgendyo240@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <i className="fa-solid fa-phone text-blue-500"></i>
                <span>+20 120 266 5670</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <i className="fa-solid fa-location-dot text-blue-500"></i>
                <span>Elbehira, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Follow The Journey</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:-translate-y-1 transition-all duration-300"
                  style={{ '--hover-color': social.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <i className={`${social.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
            &copy; {currentYear} All Rights Reserved • Osama Elgendy
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400 dark:text-slate-600 italic">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;