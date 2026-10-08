import React from 'react';
import { SLIDES_DATA } from '../slidesData';
import { X, Clock, Sparkles, ChevronRight, MessageCircle } from 'lucide-react';

interface SpeakerNotesModalProps {
  currentSlideIndex: number;
  onClose: () => void;
  timerSeconds: number;
  onJumpToSlide: (idx: number) => void;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  currentSlideIndex,
  onClose,
  timerSeconds,
  onJumpToSlide,
}) => {
  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const nextSlide = currentSlideIndex < SLIDES_DATA.length - 1 ? SLIDES_DATA[currentSlideIndex + 1] : null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 select-none animate-fadeIn">
      <div className="bg-white text-slate-800 w-full max-w-3xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                Anotações & Roteiro da Aula
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Slide {currentSlide.slideNumber}: {currentSlide.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live timer badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-200/70 rounded-full border border-slate-300 text-xs font-mono font-bold text-slate-700">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{formatTime(timerSeconds)}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Main talking points / script */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Roteiro de Fala Recomendado para Este Slide:
            </h4>
            <div className="space-y-2.5">
              {currentSlide.notes && currentSlide.notes.length > 0 ? (
                currentSlide.notes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base leading-relaxed text-slate-800 flex items-start gap-3 shadow-2xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                      {idx + 1}
                    </span>
                    <span>{note}</span>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-500 italic">
                  Nenhuma anotação adicional para este slide. Apresente com base nos tópicos principais.
                </div>
              )}
            </div>
          </div>

          {/* Key Topics in current slide */}
          {currentSlide.topics && currentSlide.topics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Tópicos Exibidos na Tela:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentSlide.topics.map((t, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs">
                    <strong className="text-amber-900 block font-semibold">{t.title}</strong>
                    <span className="text-slate-600 text-[11px] leading-snug">{t.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Slide Preview */}
          {nextSlide && (
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                  Próximo Slide ({nextSlide.slideNumber} de {SLIDES_DATA.length}):
                </span>
                <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                  {nextSlide.title}
                </span>
              </div>
              <button
                onClick={() => {
                  onJumpToSlide(currentSlideIndex + 1);
                  onClose();
                }}
                className="flex items-center gap-1 px-4 py-2 bg-[#1E3A5F] hover:bg-[#152B46] text-white text-xs font-bold rounded-full transition-colors shadow-2xs cursor-pointer"
              >
                Avançar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Pressione <strong>'N'</strong> para abrir/fechar as anotações</span>
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
