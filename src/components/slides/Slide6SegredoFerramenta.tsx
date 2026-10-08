import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Sparkles, Quote } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide6SegredoFerramenta: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden select-none">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BD5944]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#BD5944]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Slide Header */}
      <SlideHeader
        category="Visão & Estratégia"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content: Impact Quote */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 max-w-5xl mx-auto w-full text-center relative z-10 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="space-y-8 flex flex-col items-center"
        >
          {/* Subtle Quote Icon Badge */}
          <div className="w-14 h-14 rounded-full bg-[#BD5944]/15 border border-[#BD5944]/30 flex items-center justify-center text-[#BD5944] shadow-sm">
            <Quote className="w-7 h-7 fill-[#BD5944]/20" />
          </div>

          {/* User Requested Exact Phrase */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-[#342825] font-aleo leading-[1.25] tracking-tight max-w-4xl"
          >
            O segredo não é trabalhar mais horas...{' '}
            <span className="text-[#BD5944] block mt-3 sm:mt-4">
              é ter a ferramenta certa na sua rotina.
            </span>
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '120px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#BD5944] to-transparent rounded-full"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} de {totalSlides} • Chave de Mudança</span>
        <span>Andreia Cakes USA & Easy Byz Creator</span>
      </div>
    </div>
  );
};
