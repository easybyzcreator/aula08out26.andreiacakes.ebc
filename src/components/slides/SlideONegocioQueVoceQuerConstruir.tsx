import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideONegocioQueVoceQuerConstruir: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const cards = [
    {
      title: 'Cardápio sem WhatsApp',
      description:
        'Clientes consultando suas opções de bolos, massas e recheios sem precisar perguntar tudo no WhatsApp',
    },
    {
      title: 'Encomendas organizadas',
      description: 'Pedidos e datas de entrega chegando de forma organizada, sem confusão de horários',
    },
    {
      title: 'Tudo em um só lugar',
      description: 'Fotos dos bolos decorados, preços e detalhes das sobremesas centralizados',
    },
    {
      title: 'Preparada para crescer',
      description: 'Uma estrutura que acompanha o crescimento e a demanda da sua confeitaria',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Visão & Estrutura"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto w-full py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#342825] font-aleo tracking-tight">
            O negócio que você quer construir
          </h1>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#BD5944]/15 shadow-sm flex flex-col justify-center hover:border-[#BD5944]/40 transition-colors"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#342825] font-aleo mb-2">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="pt-1"
        >
          <p className="text-sm sm:text-base font-bold text-[#BD5944] font-montserrat">
            Você não precisa apenas vender mais bolos. Precisa estar preparada para crescer.
          </p>
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
