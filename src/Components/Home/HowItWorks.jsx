import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Browse Skills',
    description: 'Explore a wide range of skills offered by talented local providers in your area.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Book a Session',
    description: 'Choose a time slot that works for you and book your personalized learning session.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Learn & Grow',
    description: 'Connect with your provider, learn something new, and rate your experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  }
];

const HowItWorks = ()=> {
  return (
    <section 
      className="relative bg-[#1a1816] py-24 px-6 min-h-[80vh] font-sans overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(#4a453e 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-[#e5b64c] text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            Simple Process
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-[#a19d98] text-lg">
            Start learning in three easy steps
          </p>
        </div>


        <div className="relative">
         
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-[#e5b64c]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="bg-[#262320] rounded-[2rem] p-8 border border-white/5 transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#e5b64c] flex items-center justify-center text-[#1a1816] shadow-[0_0_20px_rgba(229,182,76,0.25)]">
                    {step.icon}
                  </div>
                  <span className="text-6xl font-bold text-white/5 -mt-2">
                    {step.id}
                  </span>
                </div>
            
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[#9ca3af] text-[17px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;