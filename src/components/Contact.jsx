import { useState } from "react";
import emailjs from "emailjs-com";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_gs59twz',
        'template_f30vl12',
        formData,
        'Sx4GTNhvPdROttttk'
      );
      toastr.success("Email sent successfully", {
        timeOut: 5000,
        positionClass: "toast-top-center",
      });
      setFormData({ subject: "", email: "", message: "" });
    } catch (error) {
      toastr.error("Oops! Something went wrong", {
        timeOut: 5000,
        positionClass: "toast-top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: "fa-brands fa-facebook", url: "https://www.facebook.com/share/1A3jrR5dwM/", color: "#1877F2", label: "Facebook" },
    { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/osama-elgendy-416329331/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apps", color: "#0A66C2", label: "LinkedIn" },
    { icon: "fa-brands fa-whatsapp", url: "https://wa.me/201202665670", color: "#25D366", label: "WhatsApp" },
    { icon: "fa-brands fa-github", url: "https://github.com/osama816", color: "#333", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="maxWidth px-[5%]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
            Seeking assistance with your project? As a dedicated developer, I offer comprehensive services. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Contact Info Side */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Info Cards */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</h4>
                <p className="text-slate-800 dark:text-white font-medium mt-1">elgendyo240@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</h4>
                <p className="text-slate-800 dark:text-white font-medium mt-1">+20 120 266 5670</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-slate-800 dark:text-white font-medium mt-1">Egypt</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-2">
              <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    style={{ '--social-color': social.color }}
                    title={social.label}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="flex flex-col">
                <label htmlFor="email" className="contact-label">Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="contact-label">Email Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="contact-label">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input !h-[180px] resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 animate-spin text-white/50 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-paper-plane"></i>
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
