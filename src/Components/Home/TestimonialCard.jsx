import React, { use } from "react";

const TestimonialPromise = fetch("Testimonial.json").then((res) => res.json());
const TestimonialsSection = () => {
  const Testimonialdata = use(TestimonialPromise);
  return (
    <section className="animate__animated animate__fadeInUp animate__slow bg-[#f6f6f4] py-24 px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#dfb14a] text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1e1e1e] tracking-tight">
            What Our Community Says
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Testimonialdata.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative"
            >
              {/* Profile Row */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-[#cbd5e1] object-cover"
                />
                <div>
                  <h3 className="font-bold text-[#1e1e1e] text-lg">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 mt-1 text-[#dfb14a]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Quote Icon */}
              <div className="absolute top-10 right-10 text-[#fbf1e2] pointer-events-none">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.036c0 1.028 1 2.964 3 2.964z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 1 2 2 2z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-[#6b7280] text-[17px] leading-[1.7] relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
