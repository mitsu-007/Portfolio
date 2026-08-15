import React from 'react';
import { motion } from 'motion/react';
import { CertificateItem } from '../types';
import { CertificateArt } from './CertificateArt';
import { Calendar, ArrowRight, ShieldCheck, Tag, FileText } from 'lucide-react';

interface CertificateCardProps {
  certificate: CertificateItem;
  onView: (cert: CertificateItem) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onView }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#07323D] text-[#F7F8F7] rounded-3xl border border-[#527779] hover:border-[#88B8B3] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 shadow-xs hover:shadow-md h-full relative"
    >
      <div>
        {/* Certificate Preview Frame with Image Container */}
        <div
          onClick={() => onView(certificate)}
          className="relative rounded-2xl overflow-hidden border border-[#527779] bg-[#061925] p-2 cursor-pointer group/preview mb-4"
        >
          <div className="overflow-hidden rounded-xl">
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.3 }}
            >
              <CertificateArt certificate={certificate} />
            </motion.div>
          </div>

          {/* Hover Overlay with "View Certificate →" */}
          <div className="absolute inset-0 bg-[#061925]/75 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center p-4 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#07323D] border border-[#88B8B3]/60 shadow-md">
              <span>View Certificate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#88B8B3]" />
            </span>
          </div>
        </div>

        {/* Card Metadata */}
        <div className="space-y-2.5">
          {/* Category Badge & Date */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#061925] text-[#88B8B3] border border-[#527779]">
              {certificate.category}
            </span>

            <span className="text-[11px] font-semibold text-[#88B8B3] flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#88B8B3]" />
              <span>{certificate.date || 'Official Credential'}</span>
            </span>
          </div>

          {/* Certificate Title */}
          <h3
            onClick={() => onView(certificate)}
            className="text-base sm:text-lg font-extrabold text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors cursor-pointer line-clamp-2"
          >
            {certificate.title}
          </h3>

          {/* Issuing Organization */}
          <p className="text-xs font-bold text-[#88B8B3] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2F8D46]" />
            <span>{certificate.issuer}</span>
          </p>

          {/* Short Description */}
          <p className="text-xs text-[#D2D7D8] line-clamp-2 leading-relaxed pt-1">
            {certificate.description}
          </p>
        </div>
      </div>

      {/* Card Action Button & Accent Line */}
      <div className="pt-5 mt-5 border-t border-[#527779] space-y-3">
        {/* Soft Aqua Accent Expanding Line */}
        <div className="w-0 group-hover:w-full h-0.5 bg-[#88B8B3] rounded-full transition-all duration-300" />

        <div className="flex items-center justify-between gap-2">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onView(certificate)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#527779] transition-colors shadow-2xs group/btn"
          >
            <span>View Certificate</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#88B8B3] transition-transform duration-200 group-hover/btn:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
