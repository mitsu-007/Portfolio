import React from 'react';
import { CertificateItem } from '../types';
import { Award, CheckCircle2, ShieldCheck, Sparkles, FileText } from 'lucide-react';

interface CertificateArtProps {
  certificate: CertificateItem;
  className?: string;
  isLarge?: boolean;
}

export const CertificateArt: React.FC<CertificateArtProps> = ({ certificate, className = '', isLarge = false }) => {
  const { id, title, issuer, date, recipient, isPdf } = certificate;

  // Custom styling per issuer for realistic certificate designs
  const getBranding = () => {
    switch (id) {
      case 'cisco-modern-ai':
        return {
          primaryColor: '#005073',
          accentColor: '#00BCEB',
          logoBg: '#002B49',
          badgeText: 'CISCO NETWORKING ACADEMY',
          borderStyle: 'border-[#005073]',
          bgGradient: 'from-[#002B49] via-[#005073] to-[#002B49]',
          watermark: 'CISCO AI',
        };
      case 'gfg-python-skillup':
      case 'gfg-career-boost':
        return {
          primaryColor: '#2F8D46',
          accentColor: '#00E676',
          logoBg: '#0F3818',
          badgeText: 'GEEKSFORGEEKS',
          borderStyle: 'border-[#2F8D46]',
          bgGradient: 'from-[#0F3818] via-[#1D5C2C] to-[#0F3818]',
          watermark: 'GFG PROGRAM',
        };
      case 'i2cs-update-certificate':
      default:
        return {
          primaryColor: '#07323D',
          accentColor: '#88B8B3',
          logoBg: '#061925',
          badgeText: 'I2CS CERTIFICATION',
          borderStyle: 'border-[#527779]',
          bgGradient: 'from-[#061925] via-[#07323D] to-[#061925]',
          watermark: 'OFFICIAL DOCUMENT',
        };
    }
  };

  const brand = getBranding();

  return (
    <div
      className={`relative w-full aspect-[1.414/1] bg-[#07323D] text-[#F7F8F7] rounded-xl overflow-hidden border-2 shadow-sm flex flex-col justify-between p-4 sm:p-6 select-none font-serif ${brand.borderStyle} ${className}`}
    >
      {/* Outer Certificate Frame Border Pattern */}
      <div className="absolute inset-1.5 sm:inset-2.5 border-2 border-double border-[#527779]/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#88B8B3]/40 rounded pointer-events-none" />

      {/* Decorative Corner Ornaments */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#527779]" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#527779]" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#527779]" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#527779]" />

      {/* Subtle Background Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none font-sans font-black text-4xl sm:text-6xl tracking-widest uppercase text-[#F7F8F7]">
        {brand.watermark}
      </div>

      {/* Certificate Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#527779]/40 pb-2 sm:pb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white shadow-xs font-sans font-extrabold text-xs"
            style={{ backgroundColor: brand.primaryColor }}
          >
            {id.includes('cisco') ? 'CISCO' : id.includes('gfg') ? 'GFG' : 'I2CS'}
          </div>
          <div>
            <span className="font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase block text-[#88B8B3]">
              {issuer}
            </span>
            <span className="font-sans text-[8px] sm:text-[10px] text-[#D2D7D8] block">
              Verified Learning Credential
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-[#061925] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#88B8B3]/40 font-sans text-[8px] sm:text-[10px] font-bold text-[#88B8B3]">
          <ShieldCheck className="w-3 h-3 text-[#2F8D46]" />
          <span>OFFICIAL CERTIFICATE</span>
        </div>
      </div>

      {/* Certificate Main Content */}
      <div className="relative z-10 text-center my-auto space-y-1 sm:space-y-2 py-1">
        <p className="font-sans text-[9px] sm:text-xs uppercase tracking-widest text-[#88B8B3] font-semibold">
          This is to certify that
        </p>

        <h3 className="font-serif text-base sm:text-2xl font-black text-[#F7F8F7] tracking-tight decoration-[#88B8B3] underline decoration-2 underline-offset-4">
          {recipient}
        </h3>

        <p className="font-sans text-[8px] sm:text-[11px] text-[#D2D7D8] max-w-md mx-auto leading-tight">
          has successfully completed all required coursework and demonstrated proficiency in
        </p>

        <div className="py-1">
          <h4 className="font-sans text-xs sm:text-base font-extrabold text-[#88B8B3] uppercase tracking-wide bg-[#061925] inline-block px-3 py-1 rounded-md border border-[#88B8B3]/50">
            {title}
          </h4>
        </div>
      </div>

      {/* Certificate Footer with Badge & Details */}
      <div className="relative z-10 flex items-end justify-between border-t border-[#527779]/40 pt-2 sm:pt-3 font-sans">
        <div className="text-left space-y-0.5">
          <span className="text-[8px] sm:text-[10px] text-[#88B8B3] font-medium block">Issue Date</span>
          <span className="text-[9px] sm:text-xs font-bold text-[#F7F8F7] block">
            {date || 'Official Credential'}
          </span>
          {isPdf && (
            <span className="inline-flex items-center gap-1 text-[8px] text-[#88B8B3] font-bold">
              <FileText className="w-2.5 h-2.5" /> PDF Document
            </span>
          )}
        </div>

        {/* Gold / Official Ribbon Stamp Emblem */}
        <div className="flex flex-col items-center">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-sm border-2 border-white"
            style={{ backgroundColor: brand.primaryColor }}
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
          </div>
          <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-[#88B8B3] mt-0.5">
            VERIFIED
          </span>
        </div>

        <div className="text-right space-y-0.5">
          <span className="text-[8px] sm:text-[10px] text-[#88B8B3] font-medium block">Authorized Signatory</span>
          <div className="w-16 sm:w-20 h-0.5 bg-[#88B8B3] ml-auto my-0.5" />
          <span className="text-[8px] sm:text-[10px] font-bold text-[#F7F8F7] block">
            {issuer}
          </span>
        </div>
      </div>
    </div>
  );
};
