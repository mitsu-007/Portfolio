import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { ScrollReveal } from '../components/ScrollReveal';
import { personalInfo, projectsData, certificatesData } from '../data/portfolioData';
import { CertificateArt } from '../components/CertificateArt';
import { ArrowRight, Code2, GraduationCap, FolderGit2, CheckCircle2, PhoneCall, ChevronRight, Sparkles, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="space-y-16 py-4 sm:py-8">
        
        {/* ==========================================
            HERO SECTION
            Sequence:
            0ms: Navbar (in Header)
            150ms: Profile
            250ms: NIDHI (from left)
            350ms: KUMARI (from right)
            500ms: Hero Subtitle
            650ms: CTA Buttons
            ========================================== */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Student Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#07323D] border border-[#527779] text-[#F7F8F7] shadow-2xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#88B8B3] animate-pulse" />
            <span>3rd Year Computer Science & Data Science</span>
            <span className="text-[#88B8B3]">•</span>
            <span className="text-[#88B8B3]">GL Bajaj ITM</span>
          </motion.div>

          {/* Core Visual Layout Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14 my-4">
            
            {/* LEFT SIDE: "NIDHI" (250ms delay, translateX(-40px) -> 0) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center md:items-end text-center md:text-right order-1 md:order-1 flex-1 group cursor-default"
            >
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#061925] leading-none transition-colors duration-300 group-hover:text-[#07323D]">
                  NIDHI
                </h1>
                
                {/* Name Hover Underline Expansion Effect */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-[#07323D] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                />
              </div>
              
              <div className="w-28 sm:w-36 h-1 bg-[#061925] rounded-full mt-3 mb-2" />
              
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#07323D]">
                Computer Science
              </p>
              <div className="hidden md:flex items-center gap-2 mt-2 text-xs text-[#061925] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#061925]" />
                <span>Web Architecture</span>
              </div>
            </motion.div>

            {/* CENTER: PROFILE PHOTO (150ms delay) */}
            <div className="order-2 md:order-2 my-4 md:my-0 flex-shrink-0">
              <ProfilePhoto size="large" delay={0.15} />
            </div>

            {/* RIGHT SIDE: "KUMARI" (350ms delay, translateX(40px) -> 0) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center md:items-start text-center md:text-left order-3 md:order-3 flex-1 group cursor-default"
            >
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#061925] leading-none transition-colors duration-300 group-hover:text-[#07323D]">
                  KUMARI
                </h1>

                {/* Name Hover Underline Expansion Effect */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-[#07323D] rounded-full origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                />
              </div>
              
              <div className="w-28 sm:w-36 h-1 bg-[#061925] rounded-full mt-3 mb-2" />
              
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#07323D]">
                Data Science
              </p>
              <div className="hidden md:flex items-center gap-2 mt-2 text-xs text-[#061925] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#061925]" />
                <span>Problem Solving</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Introduction (500ms delay) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#061925] tracking-tight">
              Computer Science & Data Science Student
            </h2>
            <p className="text-[#061925] text-base sm:text-lg leading-relaxed font-semibold">
              "{personalInfo.tagline}"
            </p>

            {/* Call To Action Buttons (650ms delay) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="w-full sm:w-auto"
              >
                <NavLink
                  to="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#07323D] transition-colors shadow-sm group"
                >
                  <FolderGit2 className="w-4 h-4 text-[#88B8B3]" />
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#88B8B3] transition-transform duration-200 group-hover:translate-x-1" />
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="w-full sm:w-auto"
              >
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-[#F7F8F7] bg-[#07323D] hover:bg-[#061925] border border-[#527779] transition-colors shadow-2xs group"
                >
                  <PhoneCall className="w-4 h-4 text-[#88B8B3]" />
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 text-[#88B8B3] transition-transform duration-200 group-hover:translate-x-1" />
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ==========================================
            INTRO CARD / ABOUT SUMMARY
            ========================================== */}
        <ScrollReveal delay={0.1}>
          <section className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-[#07323D] text-[#F7F8F7] rounded-3xl p-6 sm:p-8 border border-[#527779] shadow-xs relative overflow-hidden group hover:border-[#88B8B3]/50 transition-colors duration-300">
              
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#061925]" />

              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-2xl bg-[#061925] border border-[#527779] flex items-center justify-center text-[#88B8B3] flex-shrink-0 shadow-xs"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>

                <div className="space-y-3 text-center md:text-left flex-1">
                  <h3 className="text-lg font-bold text-[#F7F8F7]">
                    Welcome to My Portfolio
                  </h3>
                  <p className="text-[#D2D7D8] text-sm sm:text-base leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <NavLink
                      to="/about"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#88B8B3] hover:text-white transition-colors group"
                    >
                      <span>Explore My Academic Journey</span>
                      <ArrowRight className="w-4 h-4 text-[#88B8B3] group-hover:translate-x-1 transition-transform duration-200" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ==========================================
            KEY ACADEMIC STATS & HIGHLIGHTS
            ========================================== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#07323D] text-[#F7F8F7] rounded-2xl p-5 border border-[#527779] shadow-2xs hover:border-[#88B8B3] transition-all h-full"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#061925] text-[#88B8B3]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#88B8B3] uppercase tracking-wider">Institution</p>
                    <p className="text-sm font-extrabold text-[#F7F8F7] mt-0.5">GL Bajaj ITM</p>
                    <p className="text-xs text-[#D2D7D8]">Greater Noida</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#07323D] text-[#F7F8F7] rounded-2xl p-5 border border-[#527779] shadow-2xs hover:border-[#88B8B3] transition-all h-full"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#061925] text-[#88B8B3]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#88B8B3] uppercase tracking-wider">Stream & Year</p>
                    <p className="text-sm font-extrabold text-[#F7F8F7] mt-0.5">CSDS • 3rd Year</p>
                    <p className="text-xs text-[#D2D7D8]">Computer Science & Data Science</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#07323D] text-[#F7F8F7] rounded-2xl p-5 border border-[#527779] shadow-2xs hover:border-[#88B8B3] transition-all h-full"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#061925] text-[#88B8B3]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#88B8B3] uppercase tracking-wider">Status</p>
                    <p className="text-sm font-extrabold text-[#F7F8F7] mt-0.5">Open for Opportunities</p>
                    <p className="text-xs text-[#D2D7D8]">Internships & Placements</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

          </div>
        </section>

        {/* ==========================================
            FEATURED PROJECTS TEASER
            ========================================== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#061925] tracking-tight">Featured Projects</h3>
                <p className="text-xs text-[#061925]/90 font-medium mt-0.5">Practical web applications and hackathon contributions</p>
              </div>
              <NavLink 
                to="/projects"
                className="text-xs font-bold text-[#061925] hover:text-[#07323D] flex items-center gap-1 group"
              >
                <span>View All Projects</span>
                <ChevronRight className="w-4 h-4 text-[#061925] group-hover:translate-x-0.5 transition-transform" />
              </NavLink>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#07323D] text-[#F7F8F7] rounded-2xl border border-[#527779] hover:border-[#88B8B3] p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-[#061925] shadow-sm h-full group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7F8F7] bg-[#527779] px-2.5 py-1 rounded-md">
                        {project.category}
                      </span>
                      {project.role && (
                        <span className="text-xs font-semibold text-[#88B8B3]">
                          {project.role}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors">{project.title}</h4>
                    <p className="text-xs text-[#D2D7D8] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[11px] font-semibold bg-[#527779] text-[#F7F8F7] px-2.5 py-0.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#527779] flex items-center justify-between">
                    <NavLink
                      to="/projects"
                      className="text-xs font-bold text-[#88B8B3] hover:text-white flex items-center gap-1.5 group/link"
                    >
                      <span>Read Details & Features</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </NavLink>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            CERTIFICATIONS PREVIEW SECTION
            ========================================== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6 border-b border-[#07323D] pb-3">
              <div>
                <h3 className="text-2xl font-bold text-[#061925] tracking-tight">Certifications</h3>
                <p className="text-xs text-[#061925]/80 font-medium mt-0.5">A few milestones from my learning journey.</p>
              </div>
              <NavLink 
                to="/certifications"
                className="text-xs font-bold text-[#F7F8F7] hover:text-[#88B8B3] flex items-center gap-1 group bg-[#07323D] hover:bg-[#061925] px-3.5 py-2 rounded-xl border border-[#527779] shadow-2xs transition-colors"
              >
                <span>View All Certifications</span>
                <ArrowRight className="w-4 h-4 text-[#88B8B3] group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificatesData.slice(0, 3).map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#07323D] text-[#F7F8F7] rounded-2xl border border-[#527779] hover:border-[#88B8B3] p-5 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all h-full group"
                >
                  <div className="space-y-3">
                    <div className="overflow-hidden rounded-xl border border-[#527779] bg-[#061925] p-1">
                      <CertificateArt certificate={cert} />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#061925] text-[#88B8B3] border border-[#527779]">
                        {cert.category}
                      </span>
                      <h4 className="text-base font-extrabold text-[#F7F8F7] mt-1 line-clamp-1 group-hover:text-[#88B8B3] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-bold text-[#88B8B3]">{cert.issuer}</p>
                      {cert.date && (
                        <p className="text-[11px] text-[#D2D7D8] mt-0.5">{cert.date}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#527779]">
                    <NavLink
                      to="/certifications"
                      className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#527779] transition-colors group/btn"
                    >
                      <span>View Certificate</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#88B8B3] group-hover/btn:translate-x-1 transition-transform" />
                    </NavLink>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
