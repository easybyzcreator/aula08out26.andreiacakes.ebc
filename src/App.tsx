import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SLIDES_DATA, ASSETS } from './slidesData';

// Slide Components from GitHub repository
import { Slide1CardapioCover } from './components/slides/Slide1CardapioCover';
import { SlideQuestion1Organizacao } from './components/slides/SlideQuestion1Organizacao';
import { SlideQuestion2Precisao } from './components/slides/SlideQuestion2Precisao';
import { SlideQuestion3Financeiro } from './components/slides/SlideQuestion3Financeiro';
import { SlideQuestion4TicketMedio } from './components/slides/SlideQuestion4TicketMedio';
import { SlideQuestion5TempoCozinha } from './components/slides/SlideQuestion5TempoCozinha';
import { SlideQuestion6Atendimento24h } from './components/slides/SlideQuestion6Atendimento24h';
import { SlideESeVocePudesseTerSuaPropriaEstrutura } from './components/slides/SlideESeVocePudesseTerSuaPropriaEstrutura';
import { Slide1Cover } from './components/slides/Slide1Cover';
import { Slide19NaoESobreAplicativo } from './components/slides/Slide19NaoESobreAplicativo';
import { SlideLancamentoOficial } from './components/slides/SlideLancamentoOficial';
import { Slide8LiveAppDemo } from './components/slides/Slide8LiveAppDemo';
import { Slide8HowToGet } from './components/slides/Slide8HowToGet';
import { Slide9NextSteps } from './components/slides/Slide9NextSteps';

// Modals
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';

// Icons
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  Printer,
  ListOrdered,
  Play,
  Pause
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Presentation Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Auto-play state
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Timer Tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Auto-play advances slide every 8 seconds
  useEffect(() => {
    let autoPlayInterval: NodeJS.Timeout | null = null;
    if (isAutoPlay) {
      autoPlayInterval = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev < SLIDES_DATA.length - 1) {
            setDirection(1);
            return prev + 1;
          } else {
            setIsAutoPlay(false);
            return prev;
          }
        });
      }, 8000);
    }
    return () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    };
  }, [isAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES_DATA.length) {
      setDirection(index > currentSlideIndex ? 1 : -1);
      setCurrentSlideIndex(index);
    }
  }, [currentSlideIndex]);

  const handleNext = useCallback(() => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  // Toggle Fullscreen
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES_DATA.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setShowGrid((prev) => !prev);
          break;
        case 'Escape':
          setShowGrid(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goToSlide]);

  const handlePrint = () => {
    window.print();
  };

  // Render Slide by Index
  const renderSlideContent = (index: number) => {
    const total = SLIDES_DATA.length;
    const slideNumber = index + 1;

    switch (index) {
      case 0:
        return <Slide1CardapioCover onNext={handleNext} />;
      case 1:
        return <SlideQuestion1Organizacao slideNumber={slideNumber} totalSlides={total} />;
      case 2:
        return <SlideQuestion2Precisao slideNumber={slideNumber} totalSlides={total} />;
      case 3:
        return <SlideQuestion3Financeiro slideNumber={slideNumber} totalSlides={total} />;
      case 4:
        return <SlideQuestion4TicketMedio slideNumber={slideNumber} totalSlides={total} />;
      case 5:
        return <SlideQuestion5TempoCozinha slideNumber={slideNumber} totalSlides={total} />;
      case 6:
        return <SlideQuestion6Atendimento24h slideNumber={slideNumber} totalSlides={total} />;
      case 7:
        return <SlideESeVocePudesseTerSuaPropriaEstrutura slideNumber={slideNumber} totalSlides={total} />;
      case 8:
        return <Slide1Cover onNext={handleNext} slideNumber={slideNumber} totalSlides={total} />;
      case 9:
        return <Slide19NaoESobreAplicativo slideNumber={slideNumber} totalSlides={total} />;
      case 10:
        return <SlideLancamentoOficial slideNumber={slideNumber} totalSlides={total} />;
      case 11:
        return <Slide8LiveAppDemo slideNumber={slideNumber} totalSlides={total} />;
      case 12:
        return <Slide8HowToGet slideNumber={slideNumber} totalSlides={total} />;
      case 13:
        return <Slide9NextSteps slideNumber={slideNumber} totalSlides={total} />;
      default:
        return <Slide1CardapioCover onNext={handleNext} />;
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.22 },
        scale: { duration: 0.22 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.985,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.18 },
      },
    }),
  };

  const totalSlides = SLIDES_DATA.length;
  const currentFormattedNumber = String(currentSlideIndex + 1).padStart(2, '0');
  const totalFormattedNumber = String(totalSlides).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#F5EFEB] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF6F2] via-[#F5EFEB] to-[#EAE0D9] text-[#342825] flex flex-col justify-between p-3 sm:p-5 lg:p-6 select-none font-sans overflow-x-hidden">
      {/* 1. TOP NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-1.5 sm:py-2 px-1 sm:px-3 no-print">
        {/* Left: Brand Badge + Course Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Oval Brand Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#BD5944]/60 shadow-xs">
            <img
              src={ASSETS.logos.andreiaCakes}
              alt="Andreia Cakes USA"
              className="h-6 sm:h-7 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="h-4 w-px bg-stone-300" />
            <img
              src={ASSETS.logos.easyByz}
              alt="Easy Byz Creator"
              className="h-5 sm:h-6 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="flex flex-col text-left">
            <h1 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#342825] font-heading leading-tight">
              Andreia Cakes USA
            </h1>
            <span className="text-[11px] sm:text-xs text-[#BD5944] font-semibold font-montserrat">
              Cardápio Digital na Confeitaria · 2026
            </span>
          </div>
        </div>

        {/* Right: Pill Actions (Índice, Imprimir, Fullscreen) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Índice Button */}
          <button
            onClick={() => setShowGrid(true)}
            className="px-3.5 sm:px-4 py-1.5 rounded-full border border-stone-300/80 bg-white/85 hover:bg-white text-[#342825] text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            title="Ver Índice Completo de Slides (G)"
          >
            <ListOrdered className="w-3.5 h-3.5 text-[#BD5944]" />
            <span>Índice</span>
          </button>

          {/* Imprimir Button */}
          <button
            onClick={handlePrint}
            className="px-3.5 sm:px-4 py-1.5 rounded-full border border-stone-300/80 bg-white/85 hover:bg-white text-[#342825] text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            title="Imprimir / Salvar PDF"
          >
            <Printer className="w-3.5 h-3.5 text-[#342825]/70" />
            <span className="hidden sm:inline">Imprimir</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={handleToggleFullscreen}
            className="w-9 h-9 rounded-full border border-stone-300/80 bg-white/85 hover:bg-white text-[#342825] flex items-center justify-center shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            title={isFullscreen ? 'Sair da Tela Cheia (F)' : 'Tela Cheia (F)'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* 2. MAIN PRESENTATION SLIDE CARD */}
      <main
        ref={containerRef}
        className="w-full flex-1 flex items-center justify-center my-2 sm:my-3 no-print"
      >
        <div className="w-full max-w-7xl aspect-[16/9] min-h-[460px] max-h-[81vh] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_20px_50px_rgba(52,40,37,0.12)] border border-[#BD5944]/15 bg-[#FAF6F2] relative flex flex-col">
          {/* Animated Slide Switcher */}
          <div className="w-full h-full relative overflow-hidden flex-1">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlideIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full absolute inset-0"
              >
                {renderSlideContent(currentSlideIndex)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* 3. BOTTOM CONTROLS & PAGINATION */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-1 sm:pt-2 px-2 sm:px-4 no-print select-none">
        {/* Left: Button Anterior */}
        <button
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className="px-5 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-2xs bg-stone-200 hover:bg-stone-300 text-[#342825] disabled:opacity-30 disabled:pointer-events-none cursor-pointer active:scale-95 font-montserrat"
          title="Slide Anterior (←)"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Anterior</span>
        </button>

        {/* Center: Interactive Slide Dots Indicator + Counter */}
        <div className="flex flex-col items-center justify-center">
          {/* Dots row */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {SLIDES_DATA.map((_, idx) => {
              const isCurrent = idx === currentSlideIndex;
              return isCurrent ? (
                <div
                  key={idx}
                  className="w-6 sm:w-7 h-2 bg-[#BD5944] rounded-full transition-all duration-300 shadow-2xs"
                  title={`Slide ${idx + 1} (atual)`}
                />
              ) : (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="w-2 h-2 bg-stone-300 rounded-full hover:bg-[#BD5944]/60 transition cursor-pointer"
                  title={`Ir para Slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Slide number counter */}
          <span className="text-[11px] sm:text-xs font-semibold text-[#342825]/70 font-montserrat tracking-wide mt-1.5">
            {currentFormattedNumber} / {totalFormattedNumber}
          </span>
        </div>

        {/* Right: Button Próxima */}
        <button
          onClick={handleNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="px-6 sm:px-7 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-sm bg-[#BD5944] hover:bg-[#a64835] text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer active:scale-95 font-montserrat"
          title="Próximo Slide (→ / Espaço)"
        >
          <span>Próxima</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4. SUB-FOOTER LINE */}
      <footer className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs text-[#342825]/60 px-3 sm:px-4 mt-2 no-print font-montserrat">
        <span className="font-medium text-[11px] sm:text-xs">
          Andreia Cakes USA · Brazilian Desserts & Easy Byz Creator
        </span>

        <span className="text-[11px] sm:text-xs text-[#342825]/50">
          Tecnologia Easy Byz Creator
        </span>
      </footer>

      {/* 5. MODALS */}
      {/* Slide Thumbnail Grid Modal (Índice) */}
      {showGrid && (
        <SlideThumbnailGrid
          currentSlideIndex={currentSlideIndex}
          onSelectSlide={goToSlide}
          onClose={() => setShowGrid(false)}
        />
      )}

      {/* 6. PRINT VIEW (Each slide on its own 16:9 page for crisp PDF export) */}
      <div className="hidden print-only w-full">
        {SLIDES_DATA.map((_, idx) => (
          <div
            key={idx}
            className="slide-stage-print w-screen h-screen bg-[#F8F8F5] overflow-hidden flex flex-col justify-between"
          >
            {renderSlideContent(idx)}
          </div>
        ))}
      </div>
    </div>
  );
}
