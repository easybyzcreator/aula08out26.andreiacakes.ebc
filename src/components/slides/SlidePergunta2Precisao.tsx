import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { FileWarning, AlertTriangle } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlidePergunta2Precisao: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Pergunta 2 – Precisão e Detalhes do Pedido"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto w-full py-6">
        {/* Badge Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BD5944]/15 border border-[#BD5944]/30 text-[#BD5944] text-xs font-bold uppercase tracking-wider mb-4 font-montserrat w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-[#BD5944]" />
          Pergunta 02 • Precisão e Detalhes do Pedido
        </motion.div>

        {/* Main Question Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-4 mb-6"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo tracking-tight leading-[1.2]">
            Você já entregou um pedido com o recheio, tema ou tamanho errado porque a anotação ficou confusa?
          </h1>

          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#BD5944]/20 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF1EE] text-[#BD5944] flex items-center justify-center shrink-0 border border-[#BD5944]/20">
              <FileWarning className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD5944] font-montserrat block mb-1">
                O custo do retrabalho
              </span>
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#342825] font-montserrat leading-relaxed">
                Pequenos erros de comunicação geram estresse, retrabalho e prejuízo direto no seu bolso.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Takeaway / Impact Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="p-4 rounded-2xl bg-[#FDF1EE] border border-[#BD5944]/30 flex items-center gap-3 text-xs sm:text-sm font-medium text-[#342825] font-montserrat"
        >
          <AlertTriangle className="w-5 h-5 text-[#BD5944] shrink-0" />
          <span>
            Quando a cliente escolhe pelo cardápio digital, todas as especificações de sabor, massa e tamanho ficam registradas sem margem para dúvidas.
          </span>
        </motion.div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Diagnóstico da Rotina</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
