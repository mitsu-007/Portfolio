import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { personalInfo, educationData, strengthsData } from '../data/portfolioData';
import { GraduationCap, MapPin, MessageSquare, Brain, Zap, Check, UserCheck, Award, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#88B8B3]" />;
      case 'Brain': return <Brain className="w-5 h-5 text-[#88B8B3]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#88B8B3]" />;
      default: return <UserCheck className="w-5 h-5 text-[#88B8B3]" />;
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        
        {/* Section Header */}
        <SectionHeading
          badge="About Nidhi Kumari"
          title="About Me"
          subtitle="Computer Science & Data Science student at GL Bajaj Institute of Technology and Management."
        />

        {/* ==========================================
            ABOUT ME DETAILED CARD
            ========================================== */}
        <ScrollReveal>
          <section className="bg-[#07323D] text-[#F7F8F7] rounded-3xl p-6 sm:p-10 border border-[#527779] shadow-xs relative overflow-hidden group hover:border-[#88B8B3]/50 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              <div className="md:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#88B8B3] bg-[#061925] px-3 py-1 rounded-full border border-[#527779]">
                  <span className="w-2 h-2 rounded-full bg-[#88B8B3]" />
                  <span>3rd Year Engineering Student</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F7F8F7]">
                    About Me
                  </h3>
                  <div className="w-16 h-1 bg-[#88B8B3] rounded-full mt-2" />
                </div>

                <p className="text-[#D2D7D8] text-base leading-relaxed">
                  I am a 3rd-year Computer Science & Data Science (CSDS) student at GL Bajaj Institute of Technology and Management, Greater Noida. My academic focus centers on combining strong computer science foundations with modern web development practices.
                </p>

                <p className="text-[#D2D7D8] text-base leading-relaxed">
                  I am passionate about web development, problem solving, and building practical digital experiences. I enjoy translating complex requirements into clean, structured software solutions and continuously expanding my technical knowledge.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F7F8F7]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#061925] border border-[#527779]"
                  >
                    <GraduationCap className="w-4 h-4 text-[#88B8B3] flex-shrink-0" />
                    <span><strong>College:</strong> {personalInfo.college}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#061925] border border-[#527779]"
                  >
                    <MapPin className="w-4 h-4 text-[#88B8B3] flex-shrink-0" />
                    <span><strong>Location:</strong> {personalInfo.location}</span>
                  </motion.div>
                </div>
              </div>

              {/* Quick Info Sidebar */}
              <div className="bg-[#061925] text-[#F7F8F7] rounded-2xl p-6 space-y-4 shadow-sm border border-[#527779]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3] border-b border-[#527779] pb-2">
                  Quick Info
                </h4>

                <div className="space-y-3 text-xs text-[#D2D7D8]">
                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Stream</span>
                    <span className="font-semibold text-[#F7F8F7]">CSDS (Computer Science & Data Science)</span>
                  </div>

                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Academic Year</span>
                    <span className="font-semibold text-[#F7F8F7]">3rd Year</span>
                  </div>

                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Phone Contact</span>
                    <span className="font-semibold text-[#88B8B3]">+91 {personalInfo.phone}</span>
                  </div>

                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Core Skills</span>
                    <span className="font-semibold text-[#F7F8F7]">Web Dev, C++, Java OOPs, Python</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* ==========================================
            EDUCATION CARD & ANIMATED TIMELINE
            ========================================== */}
        <section className="space-y-8">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#88B8B3] bg-[#07323D] px-3 py-1 rounded-full border border-[#527779] uppercase tracking-wider">
                Academic Qualifications
              </span>
              <h3 className="text-2xl font-bold text-[#061925]">Education Details</h3>
              <div className="w-12 h-0.5 bg-[#061925] mx-auto mt-1" />
            </div>
          </ScrollReveal>

          <div className="relative ml-4 md:ml-24 pl-6 space-y-8">
            
            {/* Animated Growing Vertical Timeline Bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute left-0 top-3 bottom-3 w-0.5 bg-[#061925] origin-top"
            />

            {educationData.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2}>
                <div className="relative group">
                  {/* Animated Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.2 + 0.1 }}
                    className="absolute -left-[31px] top-4 w-4 h-4 rounded-full bg-[#061925] border-2 border-[#88B8B3] shadow-2xs group-hover:scale-125 group-hover:bg-[#88B8B3] transition-all duration-300"
                  />

                  {/* Education Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#07323D] text-[#F7F8F7] rounded-2xl p-6 border border-[#527779] hover:border-[#88B8B3] shadow-xs space-y-3 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#527779] pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-[#F7F8F7]">
                          {item.institution}
                        </h4>
                        <p className="text-xs font-semibold text-[#D2D7D8] flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#88B8B3]" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold bg-[#061925] text-[#88B8B3] px-3 py-1 rounded-full border border-[#527779]">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#F7F8F7]">{item.degree}</p>
                      <p className="text-xs font-semibold text-[#88B8B3]">{item.field}</p>
                    </div>

                    <ul className="space-y-1.5 pt-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#D2D7D8] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#88B8B3] flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            LEARNING & CERTIFICATIONS PROMO CARD
            ========================================== */}
        <ScrollReveal>
          <section className="bg-[#07323D] text-[#F7F8F7] rounded-3xl p-6 sm:p-8 border border-[#527779] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#061925] border border-[#527779] text-[#88B8B3] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-[#F7F8F7]">
                  Learning & Certifications
                </h3>
                <p className="text-xs sm:text-sm text-[#D2D7D8] leading-relaxed max-w-xl">
                  Alongside my academic journey, I continuously build my technical knowledge through courses, workshops, and practical learning programs.
                </p>
              </div>
            </div>

            <NavLink
              to="/certifications"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#527779] transition-colors shadow-2xs group flex-shrink-0"
            >
              <span>Explore Certifications</span>
              <ArrowRight className="w-4 h-4 text-[#88B8B3] group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </section>
        </ScrollReveal>

        {/* ==========================================
            PERSONAL STRENGTHS
            ========================================== */}
        <section className="space-y-8">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#88B8B3] bg-[#07323D] px-3 py-1 rounded-full border border-[#527779] uppercase tracking-wider">
                Core Capabilities
              </span>
              <h3 className="text-2xl font-bold text-[#061925]">Personal Strengths</h3>
              <p className="text-xs text-[#061925]/90 font-medium">Interpersonal and problem solving qualities</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengthsData.map((strength, index) => (
              <ScrollReveal key={strength.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#07323D] text-[#F7F8F7] rounded-2xl p-6 border border-[#527779] shadow-2xs hover:border-[#88B8B3] transition-colors space-y-3 h-full group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#061925] border border-[#527779] flex items-center justify-center group-hover:bg-[#527779]/40 transition-colors">
                    {getIcon(strength.iconName)}
                  </div>

                  <h4 className="text-base font-bold text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors">{strength.title}</h4>
                  <p className="text-xs text-[#D2D7D8] leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
