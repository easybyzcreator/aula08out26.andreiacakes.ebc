import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ShieldCheck, SlidersHorizontal, ShoppingBag, TrendingUp } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideSeuCardapioDigitalInterativo: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Profissionalização imediata',
      description:
        'Transmita autoridade e credibilidade com um aplicativo exclusivo com a identidade da Andreia Cakes.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Gestão simplificada do negócio',
      description:
        'Organize pedidos, cardápio digital de sobremesas e encomendas em um só lugar, reduzindo erros e economizando tempo.',
    },
    {
      icon: ShoppingBag,
      title: 'Experiência de compra superior',
      description:
        'Ofereça aos seus clientes uma navegação prática, rápida e intuitiva para encomendarem bolos e sobremesas.',
    },
    {
      icon: TrendingUp,
      title: 'Foco em crescimento',
      description:
        'Deixe a tecnologia cuidar da rotina enquanto você foca na produção das melhores sobremesas e expansão do negócio.',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Vantagens & Benefícios"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto w-full py-4 sm:py-6">
        {/* Title & Accent Underline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-10 flex flex-col items-center"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-[#342825] font-heading tracking-tight leading-tight">
            Vantagens e Benefícios de ter o seu App Personalizado
          </h1>
          <div className="w-16 h-1 bg-[#BD5944] rounded-full mt-3" />
        </motion.div>

        {/* 2x2 Feature Grid matching uploaded reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-[#BD5944]/15 shadow-sm hover:shadow-md hover:border-[#BD5944]/40 transition-all flex items-start gap-4"
              >
                {/* Icon box with soft terracotta tint */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FDF1EE] text-[#BD5944] flex items-center justify-center shrink-0 border border-[#BD5944]/20">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#342825] font-montserrat tracking-tight mb-1">
                    {benefit.title}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#342825]/80 font-montserrat leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer subtle brand mark */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Andreia Cakes USA • Brazilian Desserts</span>
        <span>Tecnologia Easy Byz Creator</span>
      </div>
    </div>
  );
};
