import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Sparkles, Cake } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideImagineMarmitaria: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Visão & Propósito"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-5xl py-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BD5944]/10 border border-[#BD5944]/20 rounded-full text-xs font-bold text-[#BD5944] uppercase tracking-wider font-montserrat w-fit">
            <Cake className="w-3.5 h-3.5 text-[#BD5944]" />
            Um novo patamar para seu negócio
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#342825] font-aleo leading-[1.25] tracking-tight">
            Imagine sua confeitaria funcionando <br className="hidden sm:inline" />
            de forma profissional
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#342825]/85 font-montserrat font-normal leading-relaxed pt-2 max-w-3xl"
          >
            Mais organização. Mais autonomia. Mais tempo para criar, assar e lucrar.
          </motion.p>
        </motion.div>
      </div>

      {/* Footer subtle brand mark */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Andreia Cakes USA • Brazilian Desserts</span>
        <span>Tecnologia Easy Byz Creator</span>
      </div>
    </div>
  );
};
