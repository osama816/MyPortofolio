import React, { useState } from 'react';
import backend from '../assets/php.png';

const certificates = [
  { id: 1, name: 'Backend php', image: backend },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="maxWidth px-[5%]">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          My <span className="text-blue-500">Certificates</span>
        </h2>

        {/* Scrolling Strip Container */}
        <div className={`relative flex ${certificates.length > 1 ? 'overflow-x-hidden' : 'justify-center'} group`}>
          <div className={`flex ${certificates.length > 1 ? 'animate-marquee whitespace-nowrap' : ''} py-12`}>
            {(certificates.length > 1 ? [...certificates, ...certificates] : certificates).map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="mx-4 w-[300px] h-[200px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 h-full overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="mt-2 text-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {cert.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animation CSS is added to App.css or a global file */}
      </div>

      {/* Modal for enlarged view */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              onClick={() => setSelectedCert(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full h-auto"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedCert.name}</h3>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}} />
    </section>
  );
};

export default Certificates;
