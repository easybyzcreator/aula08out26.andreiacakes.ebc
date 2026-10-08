import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideESeVocePudesseTerSuaPropriaEstrutura: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const patiImg = ASSETS.people?.pati || 'https://i.ibb.co/2Y8d8ZTb/d7e9473f-94dd-4623-b092-cf60413d2aed.png';

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden select-none">
      {/* Slide Header */}
      <SlideHeader
        category="Autonomia & Solução"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-4 sm:py-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-tight">
            E se você pudesse ter a sua própria estrutura?
          </h1>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Pati holding the phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-fit max-w-[280px] sm:max-w-[320px] rounded-3xl overflow-hidden shadow-xl border-2 border-[#BD5944]/25 bg-gradient-to-b from-[#FAF6F2] via-white to-[#F5ECE6] p-2 flex items-center justify-center">
              <img
                src={patiImg}
                alt="Pati com celular na mão demonstrando aplicativo"
                className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#BD5944]/20 shadow-sm text-[11px] font-bold text-[#342825] font-montserrat flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#BD5944]" />
                Tudo no seu celular
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5"
          >
            <p className="text-sm sm:text-base text-[#342825] font-montserrat leading-relaxed">
              E se, em vez de depender de anotações soltas e conversas perdidas no WhatsApp, você pudesse ter o seu próprio cardápio digital profissional?
            </p>

            <p className="text-sm sm:text-base text-[#342825] font-montserrat leading-relaxed">
              Um lugar exclusivo onde o seu cliente encontra seus bolos decorados, doces finos, preços, fotos irresistíveis e faz a encomenda completa com poucos cliques.
            </p>

            <p className="text-sm sm:text-base text-[#342825] font-montserrat leading-relaxed">
              E onde você consegue visualizar de forma clara as suas datas de entrega, detalhes de cada pedido e as finanças do seu negócio.
            </p>

            <div className="pt-2">
              <p className="text-sm sm:text-base font-bold text-[#BD5944] font-montserrat leading-relaxed">
                Uma solução prática, feita sob medida para a sua confeitaria e 100% no seu controle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} de {totalSlides} • Autonomia e Gestão Digital</span>
        <span>Andreia Cakes USA & Easy Byz Creator</span>
      </div>
    </div>
  );
};
