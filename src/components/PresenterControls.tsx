import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  MessageSquareText,
  MousePointer,
  Edit3,
  LayoutGrid,
  Play,
  Pause,
  RotateCcw,
  Printer,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { DrawingTool } from '../types';

interface PresenterControlsProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleNotes: () => void;
  onToggleGrid: () => void;
  activeDrawingTool: DrawingTool;
  onSelectDrawingTool: (tool: DrawingTool) => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
  onPrint: () => void;
  onToggleShortcutsHelp: () => void;
}

export const PresenterControls: React.FC<PresenterControlsProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  isFullscreen,
  onToggleFullscreen,
  onToggleNotes,
  onToggleGrid,
  activeDrawingTool,
  onSelectDrawingTool,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  isAutoPlay,
  onToggleAutoPlay,
  onPrint,
  onToggleShortcutsHelp,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full bg-[#261C1A]/95 backdrop-blur-md border-t border-[#BD5944]/30 text-[#FAF6F2] px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl z-40 select-none no-print">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black/40">
        <div
          className="h-full bg-gradient-to-r from-[#BD5944] to-[#D4A373] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Left: Navigation & Slide Counter */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95 text-white"
          title="Slide Anterior (Seta Esquerda / PageUp)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 rounded-xl border border-white/10 text-xs font-bold">
          <span className="text-[#BD5944]">{currentSlideIndex + 1}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-300">{totalSlides}</span>
        </div>

        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="p-2 rounded-xl bg-[#BD5944] hover:bg-[#a64835] disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95 text-white font-bold"
          title="Próximo Slide (Seta Direita / Espaço / PageDown)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Thumbnail Grid Button */}
        <button
          onClick={onToggleGrid}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 transition-all text-gray-300 hover:text-white"
          title="Visão Geral de Todos os Slides (G)"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
      </div>

      {/* Center: Teaching Tools (Pointer, Pen, Notes, Timer) */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Drawing & Pointer Tool Switcher */}
        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => onSelectDrawingTool('pointer')}
            className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
              activeDrawingTool === 'pointer'
                ? 'bg-[#BD5944] text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Apontador Laser"
          >
            <MousePointer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Laser</span>
          </button>

          <button
            onClick={() => onSelectDrawingTool(activeDrawingTool === 'pen' ? 'pointer' : 'pen')}
            className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
              activeDrawingTool === 'pen' || activeDrawingTool === 'highlighter'
                ? 'bg-[#D4A373] text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Anotar no Slide (P)"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Caneta</span>
          </button>
        </div>

        {/* Presenter Notes Button */}
        <button
          onClick={onToggleNotes}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 transition-all text-xs font-bold text-gray-200 hover:text-white border border-white/10"
          title="Notas do Apresentador (N)"
        >
          <MessageSquareText className="w-4 h-4 text-[#BD5944]" />
          <span className="hidden sm:inline">Roteiro / Notas</span>
        </button>

        {/* Stopwatch Timer */}
        <div className="flex items-center bg-black/40 px-2.5 py-1 rounded-xl border border-white/10 gap-1.5 text-xs font-mono font-bold">
          <span className="text-[#BD5944]">{formatTime(timerSeconds)}</span>
          <button
            onClick={onToggleTimer}
            className="text-gray-400 hover:text-white transition-colors"
            title={isTimerRunning ? 'Pausar Cronômetro' : 'Iniciar Cronômetro'}
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onResetTimer}
            className="text-gray-500 hover:text-gray-300 transition-colors"
            title="Zerar Cronômetro"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Right: Actions & Modes */}
      <div className="flex items-center gap-2">
        {/* Auto-play */}
        <button
          onClick={onToggleAutoPlay}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all ${
            isAutoPlay
              ? 'bg-[#BD5944] text-white border-[#BD5944]'
              : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
          }`}
          title="Reprodução Automática a cada 8s"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">{isAutoPlay ? 'Auto: ON' : 'Auto: OFF'}</span>
        </button>

        {/* Print / Export to PDF */}
        <button
          onClick={onPrint}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all border border-white/10"
          title="Imprimir / Salvar Slides em PDF (Ctrl+P)"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all border border-white/10"
          title="Tela Cheia (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Help */}
        <button
          onClick={onToggleShortcutsHelp}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all"
          title="Atalhos de Teclado"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
