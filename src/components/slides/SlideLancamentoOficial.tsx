import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Sparkles, Palette, Clock, Video, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideLancamentoOficial: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const benefits = [
    {
      icon: Palette,
      badge: 'Identidade Própria',
      title: '100% Personalizado com a sua Marca',
      description: 'O aplicativo nasce com as suas cores, sua logo e o seu estilo visual.',
      accent: 'border-[#BD5944]/30 bg-[#BD5944]/5 text-[#BD5944]',
    },
    {
      icon: Clock,
      badge: 'Rapidez na Entrega',
      title: 'Pronto em até 10 Dias Úteis',
      description: 'Uma estrutura completa, formatada para a rotina real de quem produz e vende, entregue prontinha para você usar.',
      accent: 'border-amber-500/30 bg-amber-500/5 text-amber-700',
    },
    {
      icon: Video,
      badge: 'Treinamento Prático',
      title: 'Aulas Gravadas Passo a Passo',
      description: 'Tutoriais práticos ensinando detalhadamente como cadastrar produtos, alterar preços, organizar categorias e mexer em todas as funções.',
      accent: 'border-[#BD5944]/30 bg-[#BD5944]/5 text-[#BD5944]',
    },
    {
      icon: HeartHandshake,
      badge: 'Segurança Total',
      title: 'Suporte Humanizado de Verdade',
      description: 'Acompanhamento de perto para tirar todas as suas dúvidas e te dar total segurança na gestão do seu aplicativo.',
      accent: 'border-emerald-600/30 bg-emerald-600/5 text-emerald-700',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden select-none">
      {/* Decorative ambient glowing shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BD5944]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Slide Header */}
      <SlideHeader
        category="Lançamento Oficial"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 px-6 sm:px-10 lg:px-14 py-3 sm:py-5 flex flex-col justify-center max-w-7xl mx-auto w-full relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#BD5944]/15 text-[#BD5944] border border-[#BD5944]/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 font-montserrat shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#BD5944]" />
            Metodologia Andreia Cakes + Tecnologia Sob Medida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-[#342825] font-aleo leading-tight tracking-tight"
          >
            Lançamento Oficial: <br />
            <span className="text-[#BD5944]">Aplicativo da Andreia Cakes USA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-sm sm:text-base text-[#342825]/90 font-montserrat font-medium mt-1.5 max-w-2xl mx-auto leading-relaxed"
          >
            Toda a metodologia da Andreia integrada a uma tecnologia feita sob medida para confeitarias.
          </motion.p>

          {/* Core Value Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-3 sm:mt-4 inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-2xl bg-white/95 border border-[#BD5944]/25 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-[#BD5944] shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#342825] font-heading">
              O que o App traz para você?{' '}
              <span className="text-[#BD5944] font-normal italic font-montserrat">
                Praticidade para o seu cliente, controle total para você.
              </span>
            </span>
          </motion.div>
        </div>

        {/* 4 Feature Cards (2x2 Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 max-w-5xl mx-auto w-full"
        >
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-3xl border border-[#BD5944]/20 shadow-md hover:shadow-lg hover:border-[#BD5944]/50 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border shadow-xs ${item.accent}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#342825] font-aleo group-hover:text-[#BD5944] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF6F2] text-[#BD5944] border border-[#BD5944]/15 font-montserrat whitespace-nowrap">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#342825]/80 font-montserrat leading-relaxed mt-1 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} de {totalSlides} • Parceria Oficial</span>
        <span>Andreia Cakes USA & Easy Byz Creator</span>
      </div>
    </div>
  );
};
