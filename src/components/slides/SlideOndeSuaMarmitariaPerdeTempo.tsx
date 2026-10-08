import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { AlertTriangle } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideOndeSuaMarmitariaPerdeTempo: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const cards = [
    {
      title: 'O buraco negro do Excel',
      description:
        'Aquela planilha de custos e insumos que fica esquecida porque, depois de horas na cozinha confeitando, dá cansaço de abrir e preencher.',
    },
    {
      title: 'Vendas perdidas no WhatsApp',
      description:
        'A cliente pede fotos de bolos, tabela de sabores e preços, e você precisa interromper a decoração para digitar tudo.',
    },
    {
      title: 'Caderninhos e anotações',
      description:
        'Encomendas, datas de entrega e preferências espalhadas em papéis, blocos de notas e conversas no direct.',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Diagnóstico & Desafios"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto w-full py-4 sm:py-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#342825] font-aleo tracking-tight">
            Onde sua confeitaria perde tempo — e dinheiro
          </h1>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#BD5944]/20 shadow-sm flex flex-col justify-start border-l-[6px] border-l-[#BD5944]"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#342825] font-aleo mb-3">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Warning Banner at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="p-4 sm:p-5 rounded-xl bg-[#FDF1EE] border border-[#BD5944]/30 flex items-center gap-3 text-[#342825] font-montserrat"
        >
          <AlertTriangle className="w-5 h-5 text-[#BD5944] shrink-0" />
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold text-[#BD5944]">Resultado:</strong> Cansaço, desorganização, margem de lucro incerta e clientes que desistem da encomenda no meio da conversa.
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
