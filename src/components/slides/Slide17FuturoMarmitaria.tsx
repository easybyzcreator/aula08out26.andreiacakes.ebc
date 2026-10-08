import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Store, Smartphone } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide17FuturoMarmitaria: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const marketplacePoints = [
    'Pode funcionar como vitrine temporária para a primeira venda',
    'Taxas pesadas de 12% a mais de 30% sobre cada bolo ou doce vendido',
    'Sua confeitaria fica refém das regras e algoritmos da plataforma',
    'Concorrência agressiva disputando atenção na mesma tela',
  ];

  const appProprioPoints = [
    'Estrutura personalizada e exclusiva com a sua identidade',
    'Cardápio digital, encomendas e finanças em um só lugar',
    'Sem percentual ou comissão cobrada sobre as suas vendas',
    'Fidelização direta da sua clientela com atendimento VIP',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Estratégia de Crescimento"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-14 py-4 flex flex-col justify-center max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-tight">
            Onde você quer construir o futuro da sua confeitaria?
          </h1>
        </motion.div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
          {/* Marketplace Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-[#342825]/15 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#342825]/10">
                <Store className="w-5 h-5 text-stone-600" />
                <h2 className="text-sm sm:text-base font-bold text-stone-600 uppercase tracking-wider font-montserrat">
                  MARKETPLACE / DELIVERY
                </h2>
              </div>

              <ul className="space-y-3.5">
                {marketplacePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#342825]/85 font-montserrat leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Aplicativo Próprio Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#BD5944] shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#BD5944]/20">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#342825]" />
                  <h2 className="text-sm sm:text-base font-bold text-[#342825] uppercase tracking-wider font-montserrat flex items-center gap-1.5">
                    APLICATIVO PRÓPRIO <span className="text-[#BD5944]">✓</span>
                  </h2>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#BD5944] text-white font-montserrat">
                  Recomendado
                </span>
              </div>

              <ul className="space-y-3.5">
                {appProprioPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#BD5944] mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#342825] font-montserrat leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Estrutura Própria vs. Dependência</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
