import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`space-y-3 mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#07323D] text-[#88B8B3] border border-[#527779] tracking-wider uppercase shadow-2xs">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061925] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#061925]/90 font-medium text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 bg-[#061925] rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
