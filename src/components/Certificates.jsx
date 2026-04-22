import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import backend from '../assets/php.png';
import IBM from  '../assets/IBM.jpg';
import database from '../assets/database.jpg';
import NTI from '../assets/NTI.jpg';

const certificates = [
  { id: 1, name: 'Backend php', image: backend },
  { id: 2, name: 'IBM', image: IBM },
  { id: 3, name: 'database', image: database },
  { id: 4, name: 'NTI Certificate', image: NTI },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="maxWidth px-[5%]">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          My <span className="text-blue-500">Certificates</span>
        </h2>

        {/* Swiper Carousel */}
        <div className="relative group px-4 md:px-12">
          {/* Custom Navigation Buttons */}
          <button className="certs-prev-btn swiper-button-prev !left-2 md:!left-0 !hidden md:!flex items-center justify-center">
            <HiChevronLeft className="text-2xl" />
          </button>
          <button className="certs-next-btn swiper-button-next !right-2 md:!right-0 !hidden md:!flex items-center justify-center">
            <HiChevronRight className="text-2xl" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".certs-next-btn",
              prevEl: ".certs-prev-btn",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div
                  className="mx-auto w-full max-w-[340px] h-[240px] cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 h-full overflow-hidden flex flex-col">
                    <div className="flex-1 overflow-hidden rounded-lg">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center text-sm font-semibold text-slate-700 dark:text-slate-300 py-1">
                      {cert.name}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
