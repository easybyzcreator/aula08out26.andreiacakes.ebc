import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../slidesData';
import { Sparkles, Cake, Smartphone, ArrowRight, Award, ShieldCheck } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
  slideNumber?: number;
  totalSlides?: number;
}

export const Slide1Cover: React.FC<SlideProps> = ({ onNext, slideNumber, totalSlides }) => {
  const andreiaImg = 'https://i.ibb.co/gZZspxLK/patitour-2026-09-16-T142053-904.png';
  const patiImg = 'https://i.ibb.co/2Y8d8ZTb/d7e9473f-94dd-4623-b092-cf60413d2aed.png';

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-br from-[#FAF6F2] via-[#F5EFEB] to-[#EAE0D9] select-none">
      {/* Decorative ambient background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BD5944]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      {/* Top Header Logos */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6 bg-white/85 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl shadow-sm border border-[#BD5944]/15">
          {/* Logo Andreia Cakes */}
          <div className="flex items-center gap-2.5">
            <img
              src={ASSETS.logos.andreiaCakes}
              alt="Andreia Cakes USA"
              className="h-8 sm:h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-black tracking-tight text-[#342825]">
                ANDREIA CAKES USA
              </span>
              <span className="text-[10px] font-bold text-[#BD5944] tracking-widest uppercase">
                BRAZILIAN DESSERTS
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-[#342825]/20" />

          {/* Logo Easy Byz */}
          <div className="flex items-center gap-2.5">
            <img
              src={ASSETS.logos.easyByz}
              alt="Easy Byz Creator"
              className="h-7 sm:h-9 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-black tracking-tight text-[#342825]">
                EASY BYZ CREATOR
              </span>
              <span className="text-[10px] font-bold text-[#BD5944] tracking-widest uppercase">
                APPS DE GESTÃO
              </span>
            </div>
          </div>
        </div>

        {/* Exclusive Tag */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#342825] text-white text-xs font-semibold shadow-sm">
          <Cake className="w-3.5 h-3.5 text-[#BD5944]" />
          <span>Metodologia & Tecnologia</span>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
        {/* Left Column: Headings & 2 Core Methodology Boxes (7 cols) */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#342825] leading-[1.15] tracking-tight font-heading"
          >
            Da metodologia da escola para a <span className="text-[#BD5944] underline decoration-[#D4A373]/50 underline-offset-6">palma da sua mão</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base lg:text-[17px] text-[#342825]/90 font-medium leading-relaxed max-w-xl font-montserrat"
          >
            O aplicativo exclusivo desenvolvido sob a metodologia de <strong>Andreia Cakes - Brazilian Desserts</strong> e tecnologia <strong>EASY BYZ</strong>.
          </motion.p>

          {/* Key Methodology Cards matching Image 1 exactly */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1"
          >
            {/* Box 1: Gestão Prática */}
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white border border-[#BD5944]/20 shadow-sm hover:border-[#BD5944]/50 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD5944] font-montserrat flex items-center gap-1.5">
                — GESTÃO PRÁTICA
              </span>
              <p className="text-xs sm:text-[13px] text-[#342825]/85 leading-relaxed font-montserrat italic">
                Uma ferramenta prática para organizar pedidos, gerir e profissionalizar sua confeitaria de bolos e doces.
              </p>
            </div>

            {/* Box 2: Método Andreia Cakes */}
            <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white border border-[#BD5944]/20 shadow-sm hover:border-[#BD5944]/50 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BD5944] font-montserrat flex items-center gap-1.5">
                — MÉTODO ANDREIA CAKES
              </span>
              <p className="text-xs sm:text-[13px] text-[#342825]/85 leading-relaxed font-montserrat italic">
                Desenvolvido com metodologia prática para simplificar sua rotina, encantar clientes e otimizar suas vendas diárias.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Full Image of Andreia + Pati with Phone Showcase (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative w-full"
        >
          {/* Dual Profile Card with Generous Proportions so whole image shows */}
          <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-[#BD5944]/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#BD5944]/15 rounded-full blur-xl pointer-events-none" />

            <div className="text-center mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD5944] font-montserrat">
                Especialistas da Aula
              </span>
              <h3 className="text-sm font-bold text-[#342825] mt-0.5 font-aleo">
                Confeitaria de excelência & tecnologia de gestão
              </h3>
            </div>

            {/* Photos Grid with balanced aspect ratio and zero blank void */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
              {/* Andreia - Filled naturally without blank void underneath */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#FAF6F2] border border-[#BD5944]/20 shadow-xs transition-transform hover:-translate-y-1 duration-300">
                <div className="relative mb-2 w-full flex items-center justify-center">
                  <div className="w-full h-44 sm:h-50 lg:h-52 rounded-2xl overflow-hidden border-2 border-[#BD5944] shadow-md bg-white">
                    <img
                      src={andreiaImg}
                      alt="Andreia Cakes USA"
                      className="w-full h-full object-cover object-[center_15%]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute bottom-1 right-2 bg-[#BD5944] text-white p-1 rounded-full text-[10px] shadow-sm">
                    🎂
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-[#342825] font-aleo">
                  Andreia
                </h4>
                <span className="text-[10px] font-semibold text-[#BD5944] mt-0.5 font-montserrat">
                  Andreia Cakes USA
                </span>
                <span className="text-[9px] text-[#342825]/80 mt-1 bg-white px-2 py-0.5 rounded-md border border-[#BD5944]/15 font-medium font-montserrat">
                  Metodologia & Doces
                </span>
              </div>

              {/* Pati with Phone in Hand */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#FAF6F2] border border-[#BD5944]/20 shadow-xs transition-transform hover:-translate-y-1 duration-300">
                <div className="relative mb-2 w-full flex items-center justify-center">
                  <div className="w-full h-44 sm:h-50 lg:h-52 rounded-2xl overflow-hidden border-2 border-[#D4A373] shadow-md bg-white">
                    <img
                      src={patiImg}
                      alt="Pati - Easy Byz Creator com celular na mão"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute bottom-1 right-2 bg-[#D4A373] text-[#342825] p-1 rounded-full text-[10px] shadow-sm">
                    📱
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-[#342825] font-aleo">
                  Pati
                </h4>
                <span className="text-[10px] font-semibold text-[#BD5944] mt-0.5 font-montserrat">
                  Easy Byz Creator
                </span>
                <span className="text-[9px] text-[#342825]/80 mt-1 bg-white px-2 py-0.5 rounded-md border border-[#BD5944]/15 font-medium font-montserrat">
                  Criadora do Aplicativo
                </span>
              </div>
            </div>

            {/* Bottom mini badge */}
            <div className="mt-4 pt-3 border-t border-[#BD5944]/15 flex items-center justify-between text-[11px] text-[#342825]/80 font-montserrat">
              <span className="font-semibold">Solução para Confeiteiras</span>
              <span className="font-bold text-[#BD5944]">100% no Celular</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer bar on Cover */}
      <div className="relative z-10 pt-3 border-t border-[#342825]/10 flex items-center justify-between text-xs text-[#342825]/70 font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#BD5944] animate-pulse" />
          <span>Apresentação Oficial para Alunas da Andreia Cakes USA</span>
        </div>

        {onNext ? (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#BD5944] hover:bg-[#a64835] text-white text-xs font-bold rounded-lg shadow-sm transition-all duration-200 font-montserrat cursor-pointer"
          >
            Avançar <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div className="text-[#342825]/70 text-xs font-montserrat">
            {slideNumber && totalSlides ? `Slide ${slideNumber} de ${totalSlides}` : 'Andreia Cakes USA & EBC'}
          </div>
        )}
      </div>
    </div>
  );
};
