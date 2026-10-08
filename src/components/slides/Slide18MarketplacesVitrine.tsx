import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide18MarketplacesVitrine: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Visão Estratégica"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-12 lg:px-20 py-6 flex flex-col justify-center max-w-5xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#342825] font-aleo tracking-tight leading-[1.2]">
            Você não precisa simplesmente abandonar outras vitrines
          </h1>
        </motion.div>

        {/* Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-6 text-base sm:text-lg lg:text-[19px] text-[#342825]/90 font-montserrat leading-relaxed"
        >
          <p>
            O Instagram e as redes sociais funcionam muito bem como vitrines para apresentar o visual irresistível dos seus bolos e doces.
          </p>

          <p>
            Mas o objetivo é conduzir sua cliente para uma estrutura própria que dê agilidade no pedido, elimine dúvidas e construa a sustentabilidade do seu negócio.
          </p>
        </motion.div>

        {/* Highlight Quote with Left Terracotta Accent Line */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-8 sm:mt-10 pl-5 sm:pl-6 border-l-4 border-[#BD5944] py-3 bg-white rounded-r-2xl shadow-xs"
        >
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#342825] font-aleo tracking-tight leading-snug">
            Use a vitrine para ser encontrada. Construa sua própria estrutura para encantar e crescer.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • A função estratégica das vitrines</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
