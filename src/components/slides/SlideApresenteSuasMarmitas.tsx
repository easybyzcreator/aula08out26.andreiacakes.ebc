import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { PhoneMockup } from '../PhoneMockup';
import { ASSETS } from '../../slidesData';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideApresenteSuasMarmitas: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Apresentação & Cardápio"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full py-3 sm:py-5">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-2"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-tight">
            Apresente seus bolos e sobremesas de forma profissional
          </h1>
        </motion.div>

        {/* 2-Column Comparison / Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start my-auto">
          {/* Column 1: Foto + Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-start space-y-3"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#342825] font-montserrat mb-1">
                Foto + Detalhes Irresistíveis
              </h2>
              <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed">
                Apresentação organizada e profissional do bolo — sua cliente vê exatamente o acabamento impecável que vai receber.
              </p>
            </div>

            <div className="w-full flex justify-center pt-2">
              <PhoneMockup
                imageSrc={ASSETS.screens.cardapio1}
                altText="Foto e descrição do bolo no cardápio digital"
                badge="Foto & descrição"
                caption="Apresentação visual de alto padrão"
                accentColor="#BD5944"
                size="md"
              />
            </div>
          </motion.div>

          {/* Column 2: Sabores & Informações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-start space-y-3"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#342825] font-montserrat mb-1">
                Sabores, Massas e Informações
              </h2>
              <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed">
                Opções de recheios, tamanhos em fatias e orientações de conservação apresentadas de forma clara e transparente.
              </p>
            </div>

            <div className="w-full flex justify-center pt-2">
              <PhoneMockup
                imageSrc={ASSETS.screens.cardapio2}
                altText="Opções de personalização e detalhes do bolo"
                badge="Personalização & Detalhes"
                caption="Transparência total para o cliente"
                accentColor="#D4A373"
                size="md"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Headline / Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-2 border-t border-[#342825]/10 text-center"
        >
          <p className="text-xs sm:text-sm font-bold text-[#BD5944] font-montserrat">
            Sua cliente encontra todas as informações que precisa para decidir a encomenda com rapidez e sem atrito.
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
