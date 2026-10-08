import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { DollarSign, HelpCircle, Wallet, Calculator, ShoppingBag } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideQuestion3Financeiro: React.FC<SlideProps> = ({
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
          <DollarSign className="w-4 h-4 text-[#BD5944]" />
          Pergunta 3 — Gestão Financeira e Lucro
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Questions & Subtext (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[2.65rem] font-bold text-[#342825] font-aleo leading-[1.2] tracking-tight"
            >
              No final do mês, você sabe dizer exatamente quanto teve de lucro real no seu negócio?
            </motion.h1>

            {/* Subtext Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-white border-l-4 border-l-[#BD5944] border border-[#BD5944]/20 shadow-md"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#BD5944] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#BD5944] font-aleo">
                    Ou o dinheiro entra, paga os ingredientes e você não sabe para onde ele vai?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#342825]/80 mt-1 font-montserrat leading-relaxed">
                    <strong>Dificuldade de precificar e controlar o caixa:</strong> Muitas confeiteiras vendem bem toda semana, mas na hora de ver o dinheiro na conta, sobra pouco ou nada. Faturamento alto com controle zero é ilusão.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Common Financial Blind Spots */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1"
            >
              <div className="p-3 rounded-xl bg-white/80 border border-[#342825]/10 text-xs text-[#342825] font-montserrat">
                <Calculator className="w-4 h-4 text-[#BD5944] mb-1" />
                <span className="font-bold block">Precificação no 'achismo'</span>
                <span className="text-[11px] text-[#342825]/70">Custo do quilo desatualizado</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#342825]/10 text-xs text-[#342825] font-montserrat">
                <ShoppingBag className="w-4 h-4 text-[#BD5944] mb-1" />
                <span className="font-bold block">Gastos invisíveis</span>
                <span className="text-[11px] text-[#342825]/70">Embalagens, fitas e energia</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#342825]/10 text-xs text-[#342825] font-montserrat">
                <Wallet className="w-4 h-4 text-[#BD5944] mb-1" />
                <span className="font-bold block">Mistura de contas</span>
                <span className="text-[11px] text-[#342825]/70">Caixa pessoal com o da confeitaria</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Contrast Card (5 cols) */}
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
                  Diagnóstico Financeiro
                </span>
                <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold">
                  Sinal Amarelo
                </span>
              </div>

              {/* Paradox Card */}
              <div className="my-4 space-y-3 font-montserrat text-xs">
                <div className="p-3.5 rounded-2xl bg-[#FAF6F2] border border-[#BD5944]/15">
                  <div className="flex items-center justify-between text-xs font-bold text-[#342825]">
                    <span>Faturou no mês:</span>
                    <span className="text-emerald-700 font-extrabold text-sm">$ 3.500,00</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#342825]/75 mt-1.5 pt-1.5 border-t border-[#342825]/10">
                    <span>Ingredientes e embalagens:</span>
                    <span className="text-stone-700 font-semibold">- $ 1.850,00</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#342825]/75 mt-1">
                    <span>Despesas extras & compras soltas:</span>
                    <span className="text-stone-700 font-semibold">- $ 980,00</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#BD5944] mt-2 pt-2 border-t border-[#BD5944]/20 bg-white p-2 rounded-xl">
                    <span>O que sobrou no bolso:</span>
                    <span className="text-base font-extrabold text-[#BD5944]">$ 670,00 (?!)</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] text-center font-medium">
                  "Trabalhei o mês todo até de madrugada para lucrar só isso?"
                </div>
              </div>

              {/* Diagnosis reflection - Zero mentions of app or solution */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#FAF6F2] border border-[#BD5944]/20 text-center">
                <span className="text-xs font-bold text-[#342825] block font-aleo">
                  A armadilha da cozinha:
                </span>
                <span className="text-[11px] text-[#BD5944] font-medium font-montserrat block mt-1">
                  Sem clareza exata de cada custo, a confeiteira trabalha incansavelmente sem ver a recompensa merecida.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} de {totalSlides} • Pergunta 3: Gestão Financeira</span>
        <span>Andreia Cakes USA & Easy Byz Creator</span>
      </div>
    </div>
  );
};
