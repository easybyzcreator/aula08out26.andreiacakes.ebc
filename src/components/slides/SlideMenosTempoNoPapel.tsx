import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideMenosTempoNoPapel: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Produtividade & Escala"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full py-3 sm:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Title & 3 Content Boxes (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4"
          >
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-[1.15] mb-2">
                Menos tempo no papel. Mais tempo confeitando e lucrando.
              </h1>
            </div>

            {/* Content Cards */}
            <div className="space-y-3 pt-1">
              {/* Box 1 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="p-4 rounded-2xl bg-white border border-[#BD5944]/15 shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#342825] font-montserrat">
                  <span>⏱️</span>
                  <span>Organização em menos de 5 minutos</span>
                </div>
                <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed pl-6">
                  Lançamentos rápidos que cabem nos intervalos entre fornadas e montagens de bolos
                </p>
              </motion.div>

              {/* Box 2 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="p-4 rounded-2xl bg-white border border-[#BD5944]/15 shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#342825] font-montserrat">
                  <span>💬</span>
                  <span>Respostas mais rápidas e padronizadas</span>
                </div>
                <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed pl-6">
                  Em vez de digitar textos longos repetidamente, envie o link do seu cardápio com fotos, massas, recheios e preços
                </p>
              </motion.div>

              {/* Box 3 - Accent Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="p-4 rounded-2xl bg-[#FDF1EE] border border-[#BD5944]/30 shadow-xs flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#BD5944] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-[#342825] font-montserrat leading-relaxed">
                  <strong className="font-bold text-[#BD5944]">Resultado:</strong> Mais clareza sobre o lucro de cada receita, menos estresse e mais profissionalismo diante do cliente.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/4.2] rounded-2xl overflow-hidden shadow-lg border border-[#BD5944]/20 bg-white">
              <img
                src="/assets/menos-tempo.png"
                alt="Menos tempo no papel. Mais tempo produzindo e vendendo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Mais tempo para o que realmente importa</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
