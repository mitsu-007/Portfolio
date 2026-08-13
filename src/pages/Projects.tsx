import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { Github, Code2, Eye, Check } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        
        <SectionHeading
          badge="Featured Portfolio Works"
          title="Projects & Contributions"
          subtitle="Explore key web development projects and technical contributions built by Nidhi Kumari."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#061925] text-[#F7F8F7] rounded-3xl border border-[#07323D] hover:border-[#88B8B3]/60 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group transition-colors duration-300 hover:bg-[#07323D] shadow-md h-full"
              >
                <div>
                  {/* Project Preview Image Frame */}
                  <div className="relative h-48 bg-[#07323D] rounded-2xl border border-[#D2D7D8]/40 p-4 flex flex-col justify-between text-[#F7F8F7] overflow-hidden mb-6 group-hover:border-[#88B8B3]/80 transition-colors">
                    
                    {/* Category & Role Header */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#527779] text-[#F7F8F7] px-2.5 py-1 rounded-md">
                        {project.category}
                      </span>

                      {project.role && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#061925] text-[#88B8B3] px-2.5 py-1 rounded-md border border-[#88B8B3]/30">
                          {project.role}
                        </span>
                      )}
                    </div>

                    {/* Preview Frame with Subtle Zoom on Hover */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10 my-auto text-center p-3 rounded-xl bg-[#061925]/80 border border-[#D2D7D8]/30"
                    >
                      <Code2 className="w-6 h-6 text-[#88B8B3] mx-auto mb-1" />
                      <p className="text-xs font-semibold text-[#D2D7D8]">
                        {project.imagePlaceholderText}
                      </p>
                    </motion.div>

                    {/* Accent Footer */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] text-[#88B8B3] font-medium">
                      <span>Preview Frame</span>
                      <span className="w-2 h-2 rounded-full bg-[#88B8B3]" />
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-semibold text-[#88B8B3]">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-[#D2D7D8] text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 pt-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#88B8B3]">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-[#D2D7D8] flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#88B8B3] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Badges */}
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] font-bold bg-[#527779] text-[#F7F8F7] px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 mt-6 border-t border-[#07323D] group-hover:border-[#527779] transition-colors flex items-center justify-between gap-3">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#527779] border border-[#527779]/60 transition-colors shadow-2xs"
                  >
                    <Eye className="w-4 h-4 text-[#88B8B3]" />
                    <span>View Details</span>
                  </motion.button>

                  <motion.a
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href={project.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#07323D] hover:bg-[#527779] border border-[#527779]/60 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4 text-[#88B8B3]" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </PageTransition>
  );
};
