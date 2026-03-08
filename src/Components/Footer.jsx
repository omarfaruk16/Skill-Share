import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { NavLink } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1614] text-[#d4cfcc] pt-16 pb-8 px-6 border-t border-white/5 font-dm-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌻</span>
              <h4 className="text-2xl font-bold text-white font-space-grotesk">SkillSwap</h4>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Connect, learn, and grow with your local community. Exchange skills and build meaningful connections that last.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-gray-500 font-bold uppercase tracking-wider text-sm">Quick Links</h5>
            <ul className="space-y-4">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/signin">Sign In</NavLink></li>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-gray-500 font-bold uppercase tracking-wider text-sm">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <HiOutlineMail className="text-gray-400" />
                </div>
                <span className="text-sm">ukomarkhan16800@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <HiOutlinePhone className="text-gray-400" />
                </div>
                <span className="text-sm">+8801826101160</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <HiOutlineLocationMarker className="text-gray-400" />
                </div>
                <span className="text-sm">Shahibag, Savar, Dhaka</span>
              </li>
            </ul>
          </div>

    
          <div className="space-y-6">
            <h5 className="text-gray-500 font-bold uppercase tracking-wider text-sm">Legal</h5>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} SkillSwap. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-xs">🌻</span> for learners everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;