import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideVendasNoPilotoAutomatico: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const steps = [
    { number: 1, text: 'Consultar o cardápio de bolos e sobremesas' },
    { number: 2, text: 'Visualizar fotos, tamanhos e preços' },
    { number: 3, text: 'Escolher sabor, massa, recheio e data de entrega' },
    { number: 4, text: 'Fazer o pedido organizado' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Automação & Vendas"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full py-3 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Image of phone with Order Confirmed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#BD5944]/20 bg-white">
              <img
                src="/assets/piloto-automatico.png"
                alt="Vendas no piloto automático 24/7 - Pedido Confirmado no Celular"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Title, Steps and Closing */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5"
          >
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-tight mb-2">
                Vendas no piloto automático — 24/7
              </h1>
              <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed">
                O aplicativo funciona 24 horas por dia. Enquanto você está confeitando ou descansando, a cliente pode:
              </p>
            </div>

            {/* 4 Steps with Chevron Style Badges */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                  className="flex items-center gap-4"
                >
                  {/* Chevron/Pentagon shaped Number Badge */}
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#FDF1EE] text-[#BD5944] border border-[#BD5944]/30 flex items-center justify-center font-bold text-sm sm:text-base font-montserrat shrink-0 shadow-xs"
                    style={{
                      clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 18% 50%)',
                      paddingLeft: '3px'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step Text */}
                  <span className="text-sm sm:text-base font-medium text-[#342825] font-montserrat">
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="pt-2 border-t border-[#BD5944]/20">
              <p className="text-xs sm:text-sm font-bold text-[#BD5944] font-montserrat leading-relaxed">
                As encomendas chegam organizadas, sem você precisar parar o forno ou a decoração toda hora para responder as mesmas perguntas.
              </p>
            </div>
          </motion.div>
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
