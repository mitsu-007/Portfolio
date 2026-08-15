import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CertificateItem } from '../types';
import { CertificateArt } from './CertificateArt';
import { X, ExternalLink, Calendar, Award, CheckCircle2, FileText, Download, Tag } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#061925]/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#07323D] text-[#F7F8F7] rounded-3xl border border-[#527779] shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#527779] bg-[#061925]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#07323D] border border-[#88B8B3]/50 flex items-center justify-center text-[#88B8B3]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#F7F8F7] line-clamp-1">
                  {certificate.title}
                </h3>
                <p className="text-xs text-[#88B8B3] font-semibold flex items-center gap-2">
                  <span>{certificate.issuer}</span>
                  <span>•</span>
                  <span>{certificate.date || 'Official Credential'}</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#07323D] hover:bg-[#527779] text-[#F7F8F7] border border-[#527779] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body with Scrollable Area */}
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-130px)] custom-scrollbar">
            
            {/* Certificate Display Frame */}
            <div className="bg-[#061925] p-3 sm:p-6 rounded-2xl border border-[#527779] shadow-inner max-w-3xl mx-auto">
              <CertificateArt certificate={certificate} isLarge={true} />
            </div>

            {/* Certificate Meta & Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Left Column: Description & Topics */}
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3]">
                    Certificate Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D2D7D8] leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Topics / Competencies Covered */}
                {certificate.topics && certificate.topics.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3]">
                      Key Learnings & Topics Covered
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {certificate.topics.map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-xl bg-[#061925] border border-[#527779]/60 text-xs text-[#D2D7D8]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#88B8B3] flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Metadata Sidebar */}
              <div className="bg-[#061925] p-4 rounded-2xl border border-[#527779] space-y-4 text-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#88B8B3] border-b border-[#527779] pb-2">
                  Credential Meta
                </h4>

                <div className="space-y-3">
                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Recipient</span>
                    <span className="font-bold text-[#F7F8F7]">{certificate.recipient}</span>
                  </div>

                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Issuing Organization</span>
                    <span className="font-bold text-[#F7F8F7]">{certificate.issuer}</span>
                  </div>

                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Category</span>
                    <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-[#07323D] text-[#88B8B3] font-bold border border-[#527779]">
                      {certificate.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Issue Date</span>
                    <span className="font-bold text-[#F7F8F7]">{certificate.date || 'Official Credential'}</span>
                  </div>
                </div>

                {/* PDF Action Buttons */}
                {certificate.isPdf && (
                  <div className="pt-2 border-t border-[#527779] space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#88B8B3]">Document Format</span>
                    <div className="p-2.5 rounded-xl bg-[#07323D] border border-[#527779] text-[11px] text-[#D2D7D8] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#88B8B3]" />
                      <span>Official PDF Certificate</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-[#527779] bg-[#061925] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[#D2D7D8]">
              Nidhi Kumari • Credential Verification
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-[#D2D7D8] hover:text-[#F7F8F7] bg-[#07323D] border border-[#527779] hover:bg-[#527779] transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
