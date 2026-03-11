import React from 'react';
import { ArrowRight } from 'lucide-react'; 
import { NavLink } from 'react-router';

const ReadyToStart = () => {
  return (
    <section className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-[#1a1612] px-6 py-20 text-center">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px'
        }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,80,40,0.15)_0%,_transparent_70%)]"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="animate__animated animate__fadeInUp animate__slow mb-4 text-4xl font-serif font-bold tracking-tight text-white md:text-6xl">
          Ready to Start Your <br />
          <span className="text-[#e29e4b]">Learning Journey?</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
          Join thousands of learners and providers. Share your skills, 
          learn new ones, and grow together.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-xl bg-[#e9bc5a] px-8 py-4 font-semibold text-[#1a1612] transition-transform hover:scale-105 active:scale-95">
            Join SkillSwap Now
            <ArrowRight size={20} />
          </button>
          
          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10">
            Already a Member? <NavLink to="/signin" className="underline underline-offset-4">Sign In</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;