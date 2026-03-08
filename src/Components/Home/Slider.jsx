import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import bg from '../../assets/1.png'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
    {
    id: 1,
    pillText: "✨ Join 2,500+ learners in your community",
    titleLine1: "Exchange Skills,",
    titleLine2: "Grow Together",
    description: "Connect with local experts and learn something extraordinary every single day",
    buttons: (
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 relative z-10">
        <button className="bg-[#facc15] hover:bg-[#eab308] text-black font-medium py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
          Explore Skills
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
        </button>
        <button className="bg-black/30 hover:bg-black/40 text-white backdrop-blur-md border border-white/10 font-medium py-3 px-8 rounded-xl transition-all">
          Get Started Free
        </button>
      </div>
    ),
    bgStyle: {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    textColor: 'text-white'
  },
  {
    id: 2,
    pillText: "⚡ 350+ skilled providers ready",
    titleLine1: "Find Local Experts",
    titleLine2: "Near You",
    description:
      "Browse hundreds of skills offered by talented people in your community",
    buttons: (
      <div className="flex justify-center mt-8 relative z-10">
        <button className="bg-[#de6e36] hover:bg-[#c65c2b] text-white font-medium py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
          Start Learning Today
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    ),
    bgStyle: {
      backgroundColor: "#1f1b16",
      backgroundImage:
        "radial-gradient(circle at center, #3d3222 0%, #1f1b16 70%), radial-gradient(#3a3225 1px, transparent 1px)",
      backgroundSize: "100% 100%, 24px 24px",
    },
    textColor: "text-white",
  },
  {
    id: 3,
    pillText: "",
    titleLine1: "Learn Anything,",
    titleLine2: "Teach Everything",
    description:
      "Share your expertise and earn while helping others grow their potential",
    buttons: (
      <div className="flex justify-center mt-8 relative z-10">
        <button className="bg-[#facc15] hover:bg-[#eab308] text-black font-medium py-3 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
          Join SkillSwap
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    ),
    bgStyle: {
      backgroundColor: "#1f1b16",
      backgroundImage:
        "radial-gradient(circle at center, #3d3222 0%, #1f1b16 70%), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)",
    },
    textColor: "text-white",
  },
];
const Slider = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] font-sans group">
 
      <style>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #525252;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          margin: 0 6px !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background-color: #facc15; /* Yellow */
          border-radius: 8px;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full flex flex-col items-center justify-center px-6 text-center"
              style={slide.bgStyle}
            >
              <div className="max-w-4xl mx-auto flex flex-col items-center">
            
                {slide.pillText && (
                  <div className="mb-8 border border-white/20 bg-black/20 backdrop-blur-sm text-white/90 text-sm font-medium py-1.5 px-5 rounded-full inline-block">
                    {slide.pillText}
                  </div>
                )}

                <h1
                  className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 ${slide.textColor}`}
                >
                  {slide.titleLine1} <br />
                  <span className="text-[#de6e36]">{slide.titleLine2}</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
                  {slide.description}
                </p>

                {slide.buttons}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 pr-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button className="custom-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-800 shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 pl-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="custom-swiper-pagination absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center h-4"></div>
    </div>
  );
};

export default Slider;
