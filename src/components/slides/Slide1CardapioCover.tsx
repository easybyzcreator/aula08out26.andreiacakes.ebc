import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../slidesData';
import { Cake, Smartphone, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
}

export const Slide1CardapioCover: React.FC<SlideProps> = ({ onNext }) => {
  // Use high-resolution cake image provided by user
  const cakeImg = '/assets/cover-cake.png';
  const patiImg = ASSETS.people?.pati || 'https://i.ibb.co/2Y8d8ZTb/d7e9473f-94dd-4623-b092-cf60413d2aed.png';
  const andreiaImg = ASSETS.people?.andreia || 'https://i.ibb.co/gZZspxLK/patitour-2026-09-16-T142053-904.png';

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden select-none bg-gradient-to-br from-[#FFFFFF] via-[#FAF6F2] to-[#F5ECE6]">
      {/* Decorative ambient glowing background shapes in bright, luminous warm tones */}
      <div className="absolute -top-16 -right-16 w-[480px] h-[480px] bg-[#BD5944]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#D4A373]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-white/70 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Row inside slide */}
      <div className="relative z-10 flex items-center justify-end">
        {/* Right Badge: Tag */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#BD5944]/25 text-[#342825] text-xs font-semibold shadow-xs font-montserrat">
          <Cake className="w-3.5 h-3.5 text-[#BD5944]" />
          <span>Aula Especial</span>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
        {/* Left Column: Title, Subtitle, Description & Pill Tags (7 cols) */}
        {/* Notice: kicker line "ANDREIA CAKES USA • BRAZILIAN DESSERTS & EASY BYZ CREATOR" is completely removed per user request */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-4">
          {/* User Requested Exact Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#342825] leading-[1.12] tracking-tight font-heading"
          >
            Como Profissionalizar Seus Pedidos e Parar de Perder Vendas no WhatsApp
          </motion.h1>

          {/* User Requested Exact Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl font-bold text-[#BD5944] leading-snug font-heading"
          >
            Um guia prático para organizar a rotina da sua confeitaria.
          </motion.p>

          {/* Micro description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#342825]/85 font-medium leading-relaxed max-w-xl font-montserrat"
          >
            Descubra como transformar o fluxo caótico de mensagens em uma rotina clara, que valoriza cada bolo, economiza horas da sua produção e aumenta seu faturamento.
          </motion.p>

          {/* 3 Value Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#BD5944]/25 bg-white text-[#342825] text-xs font-semibold shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#BD5944] shrink-0" />
              <span>Organizar encomendas</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#BD5944]/25 bg-white text-[#342825] text-xs font-semibold shadow-xs">
              <Smartphone className="w-3.5 h-3.5 text-[#BD5944] shrink-0" />
              <span>Parar perdas no WhatsApp</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#BD5944]/25 bg-white text-[#342825] text-xs font-semibold shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#BD5944] shrink-0" />
              <span>Confeitaria lucrativa</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Featured Cake Showcase + Specialists Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center gap-3 w-full"
        >
          {/* Main Card with Cake & Experts */}
          <div className="w-full max-w-md bg-white rounded-3xl p-3.5 sm:p-4 border border-[#BD5944]/20 shadow-xl flex flex-col items-center relative overflow-hidden">
            {/* Top Cake Photo Highlight - Prominently Displayed with expanded height and top alignment so head is never cut */}
            <div className="w-full relative rounded-2xl overflow-hidden shadow-md border border-[#BD5944]/15 mb-2.5 bg-[#FAF6F2] flex items-center justify-center">
              <img
                src={cakeImg}
                alt="Andreia Cakes USA"
                className="w-full h-72 sm:h-80 lg:h-[340px] object-contain object-top bg-white transform hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#BD5944] text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1 font-montserrat">
                <Sparkles className="w-3 h-3 text-[#BD5944]" /> Confeitaria de Alto Padrão
              </div>
            </div>

            {/* Experts Mini Row */}
            <div className="w-full flex items-center justify-between pb-3 pt-1 border-b border-[#342825]/10">
              <div className="flex items-center gap-2.5">
                {/* Andreia avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#BD5944] shadow-xs bg-[#FAF6F2]">
                  <img
                    src={andreiaImg}
                    alt="Andreia Cakes USA"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Pati avatar holding phone */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4A373] shadow-xs -ml-2 bg-white">
                  <img
                    src={patiImg}
                    alt="Pati - Easy Byz Creator com celular na mão"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-left">
                  <h4 className="text-xs font-bold text-[#342825] font-aleo leading-tight">
                    Andreia & Pati
                  </h4>
                  <span className="text-[10px] text-[#BD5944] font-semibold font-montserrat">
                    Andreia Cakes USA & Easy Byz
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FAF6F2] text-[#342825]/75 font-montserrat border border-[#BD5944]/15">
                Aula Ao Vivo
              </span>
            </div>

            {/* Call to action button */}
            {onNext && (
              <button
                onClick={onNext}
                className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#BD5944] hover:bg-[#a64835] text-white text-xs font-bold rounded-2xl shadow-md transition-all cursor-pointer active:scale-95 font-montserrat"
              >
                <span>Iniciar Apresentação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Row of Cover */}
      <div className="relative z-10 pt-2 border-t border-[#342825]/10 flex items-center justify-between text-xs text-[#342825]/65 font-montserrat">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD5944] animate-pulse" />
          <span>Andreia Cakes USA · Brazilian Desserts</span>
        </div>

        <div className="text-[#342825]/80 font-medium">
          Andreia Cakes & Easy Byz Creator · 2026
        </div>
      </div>
    </div>
  );
};
