import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ChefHat, MessageSquare, AlertTriangle, Clock, Flame, Users } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideQuestion5TempoCozinha: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden select-none">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BD5944]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <SlideHeader
        category="Diagnóstico & Rotina"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-3 sm:py-5 relative z-10">
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#BD5944]/15 border border-[#BD5944]/30 rounded-full text-xs font-bold text-[#BD5944] uppercase tracking-wider mb-3 sm:mb-4 w-fit font-montserrat shadow-xs"
        >
          <ChefHat className="w-4 h-4 text-[#BD5944]" />
          Tempo Perdido na Cozinha — Produção vs. Atendimento
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Core Question & Direct Callout (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo leading-[1.2] tracking-tight"
            >
              Quantas vezes você teve que parar de confeitar ou lavar a mão no meio da produção só para responder mensagens no WhatsApp?
            </motion.h1>

            {/* Subtext Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-l-[#BD5944] border border-[#BD5944]/20 shadow-md"
            >
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#BD5944] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#BD5944] font-aleo leading-snug">
                    E no final das contas... era só alguém "curioso" perguntando o preço e que nem acabou comprando?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#342825]/80 mt-1.5 font-montserrat leading-relaxed">
                    Tempo precioso que se perde na cozinha, o risco constante de queimar uma massa ou recheio, desandar o ponto da cobertura ou atrasar uma encomenda importante para dar atenção a quem só queria "dar uma olhada".
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3 Impact Highlight Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1"
            >
              <div className="p-3 rounded-xl bg-white/90 border border-[#BD5944]/15 shadow-xs flex flex-col gap-1">
                <span className="text-xs font-bold text-[#BD5944] font-montserrat flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Foco Quebrado
                </span>
                <span className="text-[11px] text-[#342825]/75 font-montserrat leading-tight">
                  Parar a montagem do bolo e lavar a mão dezenas de vezes ao dia.
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/90 border border-[#BD5944]/15 shadow-xs flex flex-col gap-1">
                <span className="text-xs font-bold text-[#BD5944] font-montserrat flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-600" /> Risco de Erro
                </span>
                <span className="text-[11px] text-[#342825]/75 font-montserrat leading-tight">
                  Forno esquecido, recheio passando do ponto e retrabalho na cozinha.
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/90 border border-[#BD5944]/15 shadow-xs flex flex-col gap-1">
                <span className="text-xs font-bold text-[#BD5944] font-montserrat flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-rose-600" /> Venda Vazia
                </span>
                <span className="text-[11px] text-[#342825]/75 font-montserrat leading-tight">
                  Horas digitando orçamentos para curiosos que nunca compram.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Diagnostic Reality Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#BD5944]/20 shadow-xl flex flex-col space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#342825]/10">
                <div className="p-2 rounded-xl bg-[#BD5944]/15 text-[#BD5944]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#342825] font-aleo">
                    O Custo Invisível da Interrupção
                  </h4>
                  <span className="text-[11px] text-[#BD5944] font-semibold font-montserrat">
                    Rotina Operacional Sobrecarregada
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FAF6F2] border border-[#BD5944]/10">
                  <span className="text-xs font-bold text-[#342825] block font-montserrat">
                    Tempo Médio Desperdiçado:
                  </span>
                  <span className="text-2xl font-black text-[#BD5944] font-aleo block mt-0.5">
                    2 a 3 horas / dia
                  </span>
                  <p className="text-[11px] text-[#342825]/70 font-montserrat mt-1">
                    Gasto apenas respondendo perguntas repetitivas de cardápio e preços enquanto as encomendas estão esperando na bancada.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-[#342825]/10">
                  <p className="text-xs text-[#342825]/90 font-montserrat leading-relaxed italic">
                    "Você não consegue ser a confeiteira artística, a chefe de produção e a atendente de balcão ao mesmo tempo sem pagar um preço alto no cansaço."
                  </p>
                </div>
              </div>

              <div className="pt-1 text-center">
                <span className="text-[11px] font-bold text-[#BD5944] uppercase tracking-wider font-montserrat">
                  • Confeitar exige concentração e calma •
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} de {totalSlides} • Diagnóstico da Confeitaria</span>
        <span>Andreia Cakes USA & Easy Byz Creator</span>
      </div>
    </div>
  );
};
