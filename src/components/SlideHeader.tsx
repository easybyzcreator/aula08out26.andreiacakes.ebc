import React from 'react';
import { ASSETS } from '../slidesData';

interface SlideHeaderProps {
  category?: string;
  slideNumber: number;
  totalSlides: number;
  lightTheme?: boolean;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  category,
  slideNumber,
  totalSlides,
  lightTheme = false,
}) => {
  return (
    <div className="w-full flex items-center justify-between px-6 sm:px-10 pt-4 pb-2 border-b border-[#342825]/10">
      {/* Logos group */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Andreia Cakes Logo */}
        <div className="flex items-center gap-2">
          <img
            src={ASSETS.logos.andreiaCakes}
            alt="Logo Andreia Cakes USA"
            className="h-8 sm:h-9 object-contain filter drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="hidden md:flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-tight text-[#342825] leading-tight font-montserrat">
              ANDREIA CAKES USA
            </span>
            <span className="text-[9px] font-semibold text-[#BD5944] tracking-wider uppercase font-montserrat">
              BRAZILIAN DESSERTS
            </span>
          </div>
        </div>

        <span className="text-[#BD5944]/50 text-sm font-light">✕</span>

        {/* Easy Byz Logo */}
        <div className="flex items-center gap-2">
          <img
            src={ASSETS.logos.easyByz}
            alt="Logo Easy Byz Creator"
            className="h-7 sm:h-8 object-contain filter drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-tight text-[#342825] leading-tight font-montserrat">
              EASY BYZ
            </span>
            <span className="text-[9px] font-semibold text-[#BD5944] tracking-wider uppercase font-montserrat">
              CREATOR APPS
            </span>
          </div>
        </div>
      </div>

      {/* Category Pill and Slide Number */}
      <div className="flex items-center gap-2 sm:gap-3">
        {category && (
          <span 
            className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border border-[#BD5944]/30 uppercase tracking-wider text-[#342825] bg-[#BD5944]/10"
          >
            {category}
          </span>
        )}
        <div className="text-xs font-bold text-[#342825]/75 px-2.5 py-0.5 bg-[#342825]/5 rounded-md font-montserrat">
          {slideNumber} <span className="font-normal text-[#342825]/45">/ {totalSlides}</span>
        </div>
      </div>
    </div>
  );
};
