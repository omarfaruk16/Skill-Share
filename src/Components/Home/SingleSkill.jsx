import React from "react";
import { NavLink } from "react-router";

const SingleSkill = ({ skill }) => {
  return (
    <div className="max-w-[400px] w-full bg-white rounded-[2rem] overflow-hidden border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer flex flex-col  font-sans">
      <div className="relative h-[240px] w-full overflow-hidden">
        <img
          src={skill.image}
          alt="Playing acoustic guitar"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/* Top Left Badge */}
        <div className="absolute top-5 left-5 bg-[#facc15] text-[#1a1816] text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
          {skill.category}
        </div>

        {/* Bottom Right Rating */}
        <div className="absolute bottom-5 right-5 bg-white text-[#1e1e1e] text-[15px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-[#facc15]"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          {skill.rating}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-7 md:p-8 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#1e1e1e] mb-3 leading-tight group-hover:text-[#de6e36] transition-colors">
          {skill.skillName}
        </h3>

        {/* Description */}
        <p className="text-[#6b7280] text-[16px] leading-[1.6] mb-6 line-clamp-2">
          {skill.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center text-[#8c93a1] text-[15px] font-medium gap-2.5 mb-6">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <span>{skill.slotsAvailable} slots available</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#d1d5db]"></span>
          <span>by {skill.providerName}</span>
        </div>

        {/* Divider */}
        <hr className="border-black/5 mb-6" />

        {/* Footer: Price and Button */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-[28px] font-bold text-[#1e1e1e] tracking-tight">
              ${skill.price}
            </span>
            <span className="text-[#8c93a1] text-[15px] font-medium">
              /session
            </span>
          </div>
          <NavLink to={`/category-details/${skill.skillId}`}>
            <button className="bg-[#221f1a] group-hover:bg-black text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
