import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { CheckCircle2, ExternalLink, Sparkles, Cake } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide8HowToGet: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const cakeImg = ASSETS.illustrations?.cake || 'https://i.ibb.co/3yvkjP50/patitour-2026-09-30-T062642-314.png';
  const salesPageUrl = 'https://paginadevendas-andreiacakes.vercel.app/';

  const highlights = [
    {
      emoji: '🏷️',
      title: 'Preço Especial de Lançamento',
      description: 'Desconto exclusivo garantido para as 15 primeiras alunas',
      bg: 'bg-white',
      border: 'border-[#BD5944]/20',
    },
    {
      emoji: '🎂',
      title: 'App Exclusivo e Personalizado',
      description: 'Desenvolvido sob medida com a sua logo, cores e identidade visual',
      bg: 'bg-white',
      border: 'border-[#BD5944]/20',
    },
    {
      emoji: '🤝',
      title: 'Suporte Humanizado e Aulas',
      description: 'Acompanhamento de perto e tutoriais gravados passo a passo',
      bg: 'bg-white',
      border: 'border-[#BD5944]/20',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Condição Especial"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Custom Andreia Cakes Sales Page Mockup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-sm flex flex-col items-center">
              {/* Top Badge */}
              <div className="mb-2.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full shadow-md bg-[#BD5944] font-montserrat">
                Lote Especial Alunas
              </div>

              {/* Clean Preview Card linking to https://www.easybyzcreator.com */}
              <a
                href={salesPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-[#BD5944]/25 bg-white group hover:shadow-2xl hover:border-[#BD5944] transition-all duration-300 block cursor-pointer p-4 text-center"
                title="Clique para abrir a página de vendas Andreia Cakes"
              >
                {/* Header of preview card */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#342825]/10">
                  <div className="flex items-center gap-2">
                    <img
                      src={ASSETS.logos.andreiaCakes}
                      alt="Andreia Cakes"
                      className="h-6 object-contain"
                    />
                    <span className="text-[10px] font-bold text-[#342825] font-montserrat">
                      Andreia Cakes USA
                    </span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#BD5944]/15 text-[#BD5944] font-montserrat">
                    Página Oficial
                  </span>
                </div>

                {/* Cake image showcase - expanded height and object-contain / top so Andreia's face and cake are never cut */}
                <div className="relative rounded-2xl overflow-hidden h-52 sm:h-60 lg:h-64 bg-[#FAF6F2] mb-3 border border-[#BD5944]/15 flex items-center justify-center">
                  <img
                    src={cakeImg}
                    alt="Página de vendas Andreia Cakes"
                    className="w-full h-full object-contain object-top bg-white group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-3 text-left pointer-events-none">
                    <span className="text-white text-xs font-bold font-heading">
                      Cardápio Digital para Confeiteiras
                    </span>
                    <span className="text-[#E8BA9A] text-[10px] font-montserrat">
                      Metodologia Andreia Cakes + Easy Byz
                    </span>
                  </div>
                </div>

                {/* Action CTA inside card */}
                <div className="w-full py-2 bg-[#BD5944] group-hover:bg-[#a64835] text-white rounded-xl text-xs font-bold font-montserrat flex items-center justify-center gap-1.5 shadow-sm transition-colors">
                  <span>Acessar Página de Inscrição</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Caption */}
              <p className="mt-2 text-xs font-medium text-[#342825]/85 text-center font-montserrat leading-tight">
                Ambiente exclusivo e personalizado para a sua confeitaria
              </p>
            </div>

            {/* Clickable Registration Link Tag / Button */}
            <a
              href={salesPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 px-3.5 py-2 bg-[#BD5944] hover:bg-[#a64835] text-white rounded-xl text-xs font-bold flex items-center gap-2 font-montserrat shadow-md hover:shadow-lg transition-all group"
              title="Abrir página de vendas em nova aba"
            >
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Link liberado com condição especial!</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          </motion.div>

          {/* Right Column: Title, Subtitle and Highlights Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#342825] font-aleo leading-tight tracking-tight"
              >
                Agora é a hora de profissionalizar sua confeitaria
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base text-[#342825]/85 font-montserrat mt-2 leading-relaxed"
              >
                Condição especial para as alunas da <strong>Andreia Cakes USA</strong>.
              </motion.p>
            </div>

            {/* 3 Highlight Cards */}
            <div className="space-y-3 pt-1">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.1 }}
                  className={`p-4 rounded-2xl bg-white border ${item.border} shadow-sm hover:border-[#BD5944]/50 transition-all flex items-center gap-4`}
                >
                  <div className="text-xl sm:text-2xl shrink-0 p-2.5 rounded-xl bg-[#FAF6F2]">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#342825] font-montserrat">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#342825]/75 font-montserrat mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="p-3 rounded-xl bg-white/70 border border-[#BD5944]/20 text-xs text-[#342825]/80 font-montserrat flex items-center justify-between"
            >
              <span>⚡ Entregue em até 10 dias úteis</span>
              <span className="font-bold text-[#BD5944]">Suporte em Português</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Oferta exclusiva para a turma</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
