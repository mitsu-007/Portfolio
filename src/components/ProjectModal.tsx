import React from 'react';
import { ProjectItem } from '../types';
import { X, Github, Check, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061925]/85 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      {/* Changed bg-[#FFFFFF] to bg-[#07323D] */}
      <div className="bg-[#07323D] text-[#F7F8F7] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#527779] shadow-2xl relative my-8">
        
        {/* Top Header Banner in #061925 */}
        <div className="p-6 sm:p-8 bg-[#061925] text-[#F7F8F7] relative rounded-t-3xl border-b border-[#527779]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#07323D] hover:bg-[#527779] text-[#F7F8F7] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-[#88B8B3]" />
          </button>

          <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-[#527779] text-[#F7F8F7] mb-3">
            {project.category}
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F7F8F7]">{project.title}</h3>
          {project.subtitle && <p className="text-[#88B8B3] text-xs font-semibold mt-1">{project.subtitle}</p>}

          {project.role && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold bg-[#07323D] text-[#88B8B3] px-3 py-1 rounded-md border border-[#527779]">
              <Sparkles className="w-3.5 h-3.5 text-[#88B8B3]" />
              <span>Role: {project.role}</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3]">Project Overview</h4>
            <p className="text-[#D2D7D8] text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features & Contributions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3]">Key Features & Highlights</h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F7F8F7] bg-[#061925] p-3 rounded-xl border border-[#527779]">
                  <Check className="w-4 h-4 text-[#88B8B3] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2 border-t border-[#527779]">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#88B8B3]">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md text-xs font-bold bg-[#527779] text-[#F7F8F7]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-[#527779] flex flex-col sm:flex-row items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#527779] border border-[#527779] transition-colors"
              >
                <Github className="w-4 h-4 text-[#88B8B3]" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-[#061925] bg-[#88B8B3] hover:bg-[#061925] hover:text-[#F7F8F7] transition-colors"
            >
              Done Viewing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
