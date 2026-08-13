import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, Palette, FileCode2, Atom, FileCheck2, Server, 
  Terminal, Cpu, Binary, Coffee, Layers, Compass, 
  MessageCircle, Lightbulb, TrendingUp, CheckCircle2, Sparkles 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'web', label: 'Web Development' },
    { id: 'programming', label: 'Programming' },
    { id: 'core', label: 'Core Concepts' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#88B8B3]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#88B8B3]" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-[#88B8B3]" />;
      case 'Atom': return <Atom className="w-5 h-5 text-[#88B8B3]" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-[#88B8B3]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#88B8B3]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#88B8B3]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#88B8B3]" />;
      case 'Binary': return <Binary className="w-5 h-5 text-[#88B8B3]" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-[#88B8B3]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#88B8B3]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#88B8B3]" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-[#88B8B3]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#88B8B3]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#88B8B3]" />;
      default: return <Sparkles className="w-5 h-5 text-[#88B8B3]" />;
    }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        
        <SectionHeading
          badge="Technical Expertise"
          title="Skill Dashboard"
          subtitle="Structured overview of web engineering technologies, programming languages, core computer science concepts, and soft skills."
        />

        {/* Filter Navigation Tabs */}
        <ScrollReveal>
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#07323D] rounded-2xl border border-[#527779]">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-200 ${
                    activeCategory === cat.id
                      ? 'text-[#88B8B3]'
                      : 'text-[#D2D7D8] hover:text-[#F7F8F7]'
                  }`}
                >
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="activeSkillCategoryPill"
                      className="absolute inset-0 bg-[#061925] rounded-xl border border-[#527779] -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skill Cards Grid with Staggered Cascading Reveal */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="bg-[#07323D] text-[#F7F8F7] rounded-2xl p-5 border border-[#527779] hover:border-[#88B8B3] transition-colors duration-300 flex flex-col justify-between space-y-3 group shadow-2xs h-full"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#061925] border border-[#527779] group-hover:bg-[#527779]/40 transition-colors">
                      {getSkillIcon(skill.icon)}
                    </div>
                    
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-[#061925] text-[#88B8B3] border-[#527779]">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-[#D2D7D8] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#527779] flex items-center justify-between text-[11px] text-[#D2D7D8]">
                  <span className="uppercase font-bold tracking-wider text-[10px] text-[#88B8B3]">
                    {skill.category === 'web' && 'Web Development'}
                    {skill.category === 'programming' && 'Programming'}
                    {skill.category === 'core' && 'Core Concept'}
                    {skill.category === 'soft' && 'Soft Skill'}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#88B8B3]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Badges Showcase (Item 12: Interactive Badges) */}
        {activeCategory === 'all' && (
          <ScrollReveal delay={0.2}>
            <div className="pt-8 space-y-10 border-t border-[#527779]">
              
              {/* WEB DEVELOPMENT BADGES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#527779] pb-2">
                  <Code2 className="w-5 h-5 text-[#061925]" />
                  <h3 className="text-lg font-bold text-[#061925]">Web Development Badges</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js'].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -2, backgroundColor: '#88B8B3', color: '#061925', borderColor: '#88B8B3' }}
                      transition={{ duration: 0.25 }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#07323D] text-[#F7F8F7] border border-[#527779] shadow-2xs cursor-default transition-colors duration-250"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* PROGRAMMING LANGUAGE BADGES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#527779] pb-2">
                  <Terminal className="w-5 h-5 text-[#061925]" />
                  <h3 className="text-lg font-bold text-[#061925]">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['C', 'C++', 'Python', 'Java'].map((lang) => (
                    <motion.span
                      key={lang}
                      whileHover={{ y: -2, backgroundColor: '#88B8B3', color: '#061925', borderColor: '#88B8B3' }}
                      transition={{ duration: 0.25 }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#07323D] text-[#F7F8F7] border border-[#527779] shadow-2xs cursor-default transition-colors duration-250"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CORE CONCEPTS BADGES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#527779] pb-2">
                  <Layers className="w-5 h-5 text-[#061925]" />
                  <h3 className="text-lg font-bold text-[#061925]">Core Concepts</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Object-Oriented Programming', 'Problem Solving'].map((core) => (
                    <motion.span
                      key={core}
                      whileHover={{ y: -2, backgroundColor: '#88B8B3', color: '#061925', borderColor: '#88B8B3' }}
                      transition={{ duration: 0.25 }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#07323D] text-[#F7F8F7] border border-[#527779] shadow-2xs cursor-default transition-colors duration-250"
                    >
                      {core}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* SOFT SKILLS BADGES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#527779] pb-2">
                  <MessageCircle className="w-5 h-5 text-[#061925]" />
                  <h3 className="text-lg font-bold text-[#061925]">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Communication', 'Quick Learner', 'Problem Solving'].map((soft) => (
                    <motion.span
                      key={soft}
                      whileHover={{ y: -2, backgroundColor: '#88B8B3', color: '#061925', borderColor: '#88B8B3' }}
                      transition={{ duration: 0.25 }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#07323D] text-[#F7F8F7] border border-[#527779] shadow-2xs cursor-default transition-colors duration-250"
                    >
                      {soft}
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        )}

      </div>
    </PageTransition>
  );
};
