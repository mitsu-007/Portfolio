import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { GraduationCap, Phone, Mail, Linkedin, MapPin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#527779] bg-[#061925] text-[#F7F8F7] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-[#07323D] border border-[#88B8B3]/40 flex items-center justify-center text-[#88B8B3] font-black text-sm"
              >
                NK
              </motion.div>
              <div>
                <h3 className="font-extrabold text-[#F7F8F7] text-lg tracking-wide">{personalInfo.name}</h3>
                <p className="text-xs text-[#88B8B3] font-semibold">{personalInfo.title}</p>
              </div>
            </div>
            
            <p className="text-xs text-[#D2D7D8] max-w-md leading-relaxed">
              3rd-year Computer Science & Data Science student at GL Bajaj Institute of Technology and Management, Greater Noida. Focused on web development, problem solving, and practical software engineering.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#D2D7D8]">
              <span className="flex items-center gap-1.5 bg-[#07323D] px-3 py-1 rounded-full border border-[#527779]/50">
                <GraduationCap className="w-3.5 h-3.5 text-[#88B8B3]" />
                {personalInfo.college}
              </span>
              <span className="flex items-center gap-1.5 bg-[#07323D] px-3 py-1 rounded-full border border-[#527779]/50">
                <MapPin className="w-3.5 h-3.5 text-[#88B8B3]" />
                Greater Noida
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3]">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/skills', label: 'Skills' },
                { to: '/projects', label: 'Projects' },
                { to: '/certifications', label: 'Certifications' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="inline-block text-[#D2D7D8] hover:text-[#88B8B3] transition-colors duration-200"
                  >
                    <motion.span whileHover={{ x: 2 }} className="inline-block">
                      {link.label}
                    </motion.span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3]">Direct Contact</h4>
            <div className="space-y-2 text-xs text-[#D2D7D8]">
              <a 
                href="tel:9955862892" 
                aria-label="Call Nidhi Kumari"
                className="flex items-center gap-2 hover:text-[#88B8B3] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#88B8B3] flex-shrink-0" />
                <span className="font-bold text-[#F7F8F7]">9955862892</span>
              </a>

              <a 
                href="mailto:nidhikumari62014@gmail.com" 
                aria-label="Send email to Nidhi Kumari"
                className="flex items-center gap-2 hover:text-[#88B8B3] transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#88B8B3] flex-shrink-0" />
                <span className="font-semibold text-[#F7F8F7] truncate">{personalInfo.email}</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/nidhi-kumari1512/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Open Nidhi Kumari's LinkedIn profile"
                className="flex items-center gap-2 hover:text-[#88B8B3] transition-colors truncate"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#88B8B3] flex-shrink-0" />
                <span className="font-semibold text-[#F7F8F7] truncate">linkedin.com/in/nidhi-kumari1512</span>
              </a>
              
              <motion.button
                whileHover={{ y: -2 }}
                onClick={scrollToTop}
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#88B8B3] hover:text-white transition-colors group cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#07323D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D2D7D8]">
          <p>© {new Date().getFullYear()} Nidhi Kumari. All rights reserved.</p>
          <p className="text-[11px] text-[#D2D7D8]">
            GL Bajaj Institute of Technology and Management • CSDS
          </p>
        </div>
      </div>
    </footer>
  );
};
