import React from 'react';
import { SLIDES_DATA } from '../slidesData';
import { X, LayoutGrid, Check } from 'lucide-react';

interface SlideThumbnailGridProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const SlideThumbnailGrid: React.FC<SlideThumbnailGridProps> = ({
  currentSlideIndex,
  onSelectSlide,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn">
      <div className="bg-white text-slate-800 w-full max-w-5xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#342825] font-heading">
                Índice da Apresentação
              </h3>
              <p className="text-xs text-[#BD5944] font-medium">
                {SLIDES_DATA.length} slides • Andreia Cakes USA & Easy Byz
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SLIDES_DATA.map((slide, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[140px] ${
                  isCurrent
                    ? 'bg-[#BD5944]/10 border-[#BD5944] ring-2 ring-[#BD5944]/30 shadow-md'
                    : 'bg-stone-50/80 border-stone-200 hover:border-[#BD5944]/50 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isCurrent ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      Slide {String(slide.slideNumber).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider truncate max-w-[120px]">
                      {slide.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                    {slide.title}
                  </h4>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate">{slide.topics?.length || 0} tópicos</span>
                  {isCurrent ? (
                    <span className="flex items-center gap-1 text-amber-600 font-bold text-[11px]">
                      <Check className="w-3.5 h-3.5" /> Atual
                    </span>
                  ) : (
                    <span className="text-slate-400 group-hover:text-slate-700 transition-colors">
                      Ir para slide →
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Pressione <strong>'G'</strong> para abrir/fechar o índice</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full font-semibold transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
