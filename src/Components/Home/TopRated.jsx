import React, { use } from "react";


const TopRatedPromise = fetch("/TopProvider.json").then(res=> res.json())
const TopRated = () => {
    const TopRated = use(TopRatedPromise)
  return (
    <section className="bg-[#f7f7f5] py-24 px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">

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
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871l-1.092-1.092a2.08 2.08 0 00-2.924 0L10.395 13.15H9.525c-.622 0-1.125.504-1.125 1.125v3.375m9 0h-9"
              />
            </svg>
            Community Stars
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1e1e1e] tracking-tight">
            Top Rated Providers
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TopRated.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-[2.5rem] p-10 flex flex-col items-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >

              <div className="relative mb-6">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-[120px] h-[120px] rounded-full object-cover border-[6px] border-white shadow-md bg-gray-200"
                />

                <div className="absolute bottom-1 right-1 bg-[#eab308] text-gray-900 p-2 rounded-full border-4 border-white">
                  <svg
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
                </div>
              </div>


              <h3 className="text-xl font-bold text-[#1e1e1e] mb-1">
                {provider.name}
              </h3>
              <p className="text-[#6b7280] text-[15px] mb-5">{provider.role}</p>

         
              <div className="flex items-center gap-1.5 bg-[#fbf5e9] px-4 py-1.5 rounded-full mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#eab308]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold text-[#1e1e1e]">
                  {provider.rating}
                </span>
              </div>
              <p className="text-[#8c93a1] text-sm">
                {provider.sessions} sessions completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
