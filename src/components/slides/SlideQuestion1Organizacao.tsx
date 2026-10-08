import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ClipboardList, AlertTriangle, CalendarX, Clock } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideQuestion1Organizacao: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden select-none">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BD5944]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <SlideHeader
        category="Diagnóstico & Rotina"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-4 sm:py-6 relative z-10">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#BD5944]/15 border border-[#BD5944]/30 rounded-full text-xs font-bold text-[#BD5944] uppercase tracking-wider mb-4 w-fit font-montserrat shadow-xs"
        >
          <ClipboardList className="w-4 h-4 text-[#BD5944]" />
          Pergunta 1 — Organização das Encomendas
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Questions & Subtext (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[2.75rem] font-bold text-[#342825] font-aleo leading-[1.2] tracking-tight"
            >
              Você já esqueceu de anotar um pedido do WhatsApp no seu caderno ou planilha?
            </motion.h1>

            {/* Subtext Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-white border-l-4 border-l-[#BD5944] border border-[#BD5944]/20 shadow-md"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#BD5944] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#BD5944] font-aleo">
                    Ou pior: já passou pelo sufoco de esquecer a data de entrega de um bolo?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#342825]/80 mt-1 font-montserrat leading-relaxed">
                    A rotina na cozinha exige foco total na produção. Quando as mensagens chegam sem parar, anotar no papel é receita certa para esquecimentos, retrabalho e estresse extremo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Micro Points */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
            >
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#342825]/10 text-xs text-[#342825] font-montserrat">
                <CalendarX className="w-4 h-4 text-[#BD5944] shrink-0" />
                <span>Datas perdidas no histórico do chat</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-[#342825]/10 text-xs text-[#342825] font-montserrat">
                <Clock className="w-4 h-4 text-[#BD5944] shrink-0" />
                <span>Madrugadas confeitando às pressas</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Reality Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-3xl p-6 border border-[#BD5944]/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#BD5944]/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-[#342825]/10">
                <span className="text-xs font-bold text-[#BD5944] uppercase tracking-wider font-montserrat">
                  Cenário Comum no WhatsApp
                </span>
                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">
                  Risco Alto
                </span>
              </div>

              {/* Chat Simulation */}
              <div className="my-4 space-y-3 font-montserrat text-xs">
                {/* Client message */}
                <div className="bg-[#FAF6F2] p-3 rounded-2xl rounded-tl-none border border-[#BD5944]/15 max-w-[85%] text-left">
                  <p className="font-semibold text-[#342825]">Cliente:</p>
                  <p className="text-[#342825]/80 mt-0.5">
                    "Oi Andreia! Confirma aquele bolo de 2kg pro sábado às 15h? Te mandei o áudio semana passada!"
                  </p>
                </div>

                {/* Confectioner thought */}
                <div className="ml-auto bg-[#BD5944]/10 p-3 rounded-2xl rounded-tr-none border border-[#BD5944]/25 max-w-[85%] text-right">
                  <p className="font-semibold text-[#BD5944]">Você procurando:</p>
                  <p className="text-[#342825] mt-0.5 italic">
                    "Meu Deus, onde anotei? No caderno de capa preta ou no bloco de notas do celular?!"
                  </p>
                </div>
              </div>

              {/* Diagnosis Reality Card - Zero mentions of app or solution */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#FAF6F2] border border-[#BD5944]/20 text-center">
                <span className="text-xs font-bold text-[#342825] block font-aleo">
                  O impacto da desorganização:
                </span>
                <span className="text-[11px] text-[#BD5944] font-medium font-montserrat block mt-1">
                  Quando a cabeça está cheia de detalhes soltos, a ansiedade toma conta e a entrega fica em risco.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} de {totalSlides} • Pergunta 1: Organização</span>
        <span>Andreia Cakes USA & Easy Byz Creator</span>
      </div>
    </div>
  );
};
