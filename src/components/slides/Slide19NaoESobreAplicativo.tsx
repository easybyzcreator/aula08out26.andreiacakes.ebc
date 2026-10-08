import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Check } from 'lucide-react';
import { ASSETS } from '../../slidesData';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide19NaoESobreAplicativo: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const points = [
    'É sobre sair do caderninho e das anotações soltas.',
    'É sobre parar de interromper sua produção o tempo inteiro.',
    'É sobre entender com clareza o lucro de cada receita.',
    'É sobre profissionalizar sua confeitaria.',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Visão de Negócio"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-14 py-3 sm:py-5 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Inspiring Photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[430px] aspect-[4/4.3] rounded-3xl overflow-hidden shadow-lg border border-[#BD5944]/20 bg-white">
              <img
                src={ASSETS.people.andreiaPhoto2}
                alt="Profissionalização da sua confeitaria - Andreia Cakes"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E8BA9A]">Andreia Cakes USA</p>
                  <p className="text-sm font-semibold">Transformando paixão por doces em um negócio sólido</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title & 4 Points + Conclusion (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4"
          >
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-[1.15]">
                Não é simplesmente sobre ter um aplicativo.
              </h1>
            </div>

            {/* 4 Points with soft square boxes */}
            <div className="space-y-3 pt-2">
              {points.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + idx * 0.08 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#BD5944]/30 shrink-0 flex items-center justify-center shadow-xs">
                    <Check className="w-4 h-4 text-[#BD5944] stroke-[3]" />
                  </div>
                  <p className="text-base sm:text-lg font-medium text-[#342825] font-montserrat leading-snug">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Strong Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pt-3 border-t border-[#BD5944]/15"
            >
              <p className="text-sm sm:text-base font-bold text-[#BD5944] font-montserrat leading-relaxed">
                É sobre deixar de ser apenas uma confeiteira sobrecarregada e começar a construir um negócio estruturado, lucrativo e preparado para crescer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Mais que um app: um negócio estruturado</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
