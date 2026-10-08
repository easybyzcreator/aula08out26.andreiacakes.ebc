import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface PhoneMockupProps {
  imageSrc: string;
  altText: string;
  caption?: string;
  badge?: string;
  className?: string;
  accentColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageSrc,
  altText,
  caption,
  badge,
  className = '',
  accentColor = '#BD5944',
  size = 'md',
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Sizing variants that guarantee realistic smartphone dimensions with ample width so zero text is cropped
  const sizeClasses = {
    sm: 'w-[170px] sm:w-[185px]',
    md: 'w-[215px] sm:w-[235px]',
    lg: 'w-[245px] sm:w-[270px]',
  };

  return (
    <>
      <div className={`relative flex flex-col items-center group ${className}`}>
        {/* Badge on top if provided */}
        {badge && (
          <div 
            className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white rounded-full shadow-md z-10 font-montserrat whitespace-nowrap"
            style={{ backgroundColor: accentColor }}
          >
            {badge}
          </div>
        )}

        {/* Realistic Smartphone Frame with True Mobile Aspect Ratio */}
        <div 
          className={`relative ${sizeClasses[size]} bg-[#151811] p-1.5 sm:p-2 rounded-[36px] sm:rounded-[40px] shadow-[0_18px_40px_-10px_rgba(0,0,0,0.45)] border-[3px] border-[#363C2A] overflow-hidden transition-all duration-300 group-hover:shadow-[0_22px_45px_-8px_rgba(189,89,68,0.4)] group-hover:border-[#BD5944] cursor-pointer shrink-0 flex flex-col`}
          onClick={() => setIsZoomed(true)}
          title="Clique para ampliar a tela"
        >
          {/* Subtle Side Button Details */}
          <div className="absolute -left-[3px] top-14 w-[3px] h-5 bg-[#2B2F23] rounded-l" />
          <div className="absolute -left-[3px] top-22 w-[3px] h-8 bg-[#2B2F23] rounded-l" />
          <div className="absolute -right-[3px] top-18 w-[3px] h-9 bg-[#2B2F23] rounded-r" />

          {/* Dynamic Island Pill at top center */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-2.5 sm:h-3 bg-black/90 rounded-full z-20 flex items-center justify-end px-1 shadow-inner pointer-events-none">
            <div className="w-1 h-1 rounded-full bg-[#1C1C1E] border border-white/10" />
          </div>

          {/* Screen Display Container - Fits 100% of screenshot with zero horizontal cut */}
          <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#FAF7F2] flex flex-col items-center justify-start">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            
            {/* Glossy Reflection Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" />

            {/* Hover Zoom Overlay */}
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <span className="bg-white/95 text-[#424733] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl font-montserrat">
                <ZoomIn className="w-3.5 h-3.5 text-[#859159]" /> Ampliar
              </span>
            </div>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-black/30 rounded-full z-20 pointer-events-none" />
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-2 text-xs font-medium text-[#424733]/85 text-center max-w-[230px] font-montserrat leading-tight">
            {caption}
          </p>
        )}
      </div>

      {/* Lightbox / Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative max-w-lg max-h-[90vh] bg-[#1F2218] p-3 rounded-3xl border border-[#859159]/40 shadow-2xl overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 bg-black/60 text-white rounded-full hover:bg-black transition-colors z-30"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={imageSrc}
              alt={altText}
              className="max-h-[80vh] w-auto object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
            {caption && (
              <p className="mt-3 text-sm font-semibold text-[#F0F0F0] text-center px-4 font-montserrat">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};


