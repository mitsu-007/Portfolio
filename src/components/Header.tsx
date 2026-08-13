import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300"
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#061925]/90 backdrop-blur-md py-2.5 px-4 sm:px-6 text-[#F7F8F7] border border-[#527779]/60 shadow-lg'
            : 'bg-[#07323D]/80 backdrop-blur-sm py-3 px-4 sm:px-6 text-[#F7F8F7] border border-[#527779]/40 shadow-xs'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name Branding */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm tracking-tight transition-colors ${
                scrolled
                  ? 'bg-[#07323D] text-[#88B8B3] border border-[#527779]'
                  : 'bg-[#061925] text-[#88B8B3] border border-[#061925]'
              }`}
            >
              NK
            </motion.div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wide text-base leading-tight text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors">
                Nidhi Kumari
              </span>
              <span className="text-[11px] font-medium flex items-center gap-1.5 text-[#D2D7D8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#88B8B3] animate-pulse" />
                CSDS Student • 3rd Year
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-xl border border-[#527779] bg-[#07323D]/90 relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-[#88B8B3]'
                      : 'text-[#D2D7D8] hover:text-[#F7F8F7]'
                  }`}
                >
                  {/* Animated Active Tab Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#061925] rounded-lg border border-[#527779] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <motion.span
                    whileHover={{ y: -1 }}
                    className="relative z-10 block"
                  >
                    {item.label}
                  </motion.span>

                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#88B8B3] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Quick Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border border-[#88B8B3] bg-[#88B8B3] text-[#061925] hover:bg-[#061925] hover:text-[#F7F8F7] shadow-xs group"
              >
                <Phone className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                <span>Get in Touch</span>
              </NavLink>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-[#527779] text-[#F7F8F7] hover:bg-[#061925] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden pt-3 border-t border-[#527779] overflow-hidden"
            >
              <nav className="flex flex-col gap-1.5 pb-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#061925] text-[#88B8B3] border border-[#527779]'
                          : 'text-[#D2D7D8] hover:bg-[#07323D] hover:text-[#F7F8F7]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#88B8B3] translate-x-1' : 'text-[#527779]'
                        }`}
                      />
                    </NavLink>
                  );
                })}
                <div className="pt-2 mt-1 border-t border-[#527779]">
                  <NavLink
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#061925] bg-[#88B8B3] hover:bg-[#061925] hover:text-[#F7F8F7] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Contact Nidhi</span>
                  </NavLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
