import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface CardMockupProps {
  imageSrc: string;
  altText: string;
  title?: string;
  caption?: string;
  badge?: string;
  badgeColor?: string;
  aspectRatio?: string;
  className?: string;
  accentColor?: string;
}

export const CardMockup: React.FC<CardMockupProps> = ({
  imageSrc,
  altText,
  title,
  caption,
  badge,
  badgeColor,
  aspectRatio,
  className = '',
  accentColor = '#BD5944',
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const effectiveAccent = badgeColor || accentColor;

  return (
    <>
      <div className={`relative flex flex-col items-center group ${className}`}>
        {/* Badge on top if provided */}
        {badge && (
          <div 
            className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white rounded-full shadow-md z-10 font-montserrat whitespace-nowrap"
            style={{ backgroundColor: effectiveAccent }}
          >
            {badge}
          </div>
        )}

        {/* Square / Rounded Card Container */}
        <div 
          className="relative w-full max-w-[240px] sm:max-w-[260px] bg-white p-2 rounded-2xl shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] border border-[#342825]/15 overflow-hidden transition-all duration-300 group-hover:shadow-[0_18px_36px_-6px_rgba(189,89,68,0.25)] group-hover:border-[#BD5944]/60 cursor-pointer flex flex-col"
          onClick={() => setIsZoomed(true)}
          title="Clique para ampliar a imagem"
        >
          <div className="relative w-full rounded-xl overflow-hidden bg-[#FAF7F2] flex items-center justify-center">
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
              loading="eager"
            />

            {/* Hover Zoom Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <span className="bg-white/95 text-[#424733] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl font-montserrat">
                <ZoomIn className="w-3.5 h-3.5 text-[#859159]" /> Ampliar
              </span>
            </div>
          </div>
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
            className="relative max-w-2xl max-h-[90vh] bg-white p-3.5 rounded-3xl border border-[#859159]/40 shadow-2xl overflow-hidden flex flex-col items-center"
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
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-md"
              referrerPolicy="no-referrer"
            />
            {caption && (
              <p className="mt-3 text-sm font-semibold text-[#424733] text-center px-4 font-montserrat">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
