import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { 
  Sparkles, 
  ClipboardCheck, 
  Zap, 
  ShieldCheck, 
  Link2, 
  FileX2, 
  CheckCircle2, 
  LayoutList,
  Smartphone,
  Eye
} from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide2WhatIsCardapio: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const benefits = [
    {
      id: 'organize',
      badge: 'Benefício #1',
      title: 'Organizar melhor seus pedidos',
      description: 'Chega de mensagens perdidas ou anotações em papéis soltos.',
      detail: 'Centralize os pedidos com itens, dados do cliente e detalhes sem confusão.',
      icon: ClipboardCheck,
      accentBg: 'bg-[#424733]/10',
      accentBorder: 'border-[#424733]/25',
      accentText: 'text-[#424733]',
      iconColor: 'text-[#424733]',
      tag: 'Zero pedidos perdidos'
    },
    {
      id: 'facilitate',
      badge: 'Benefício #2',
      title: 'Facilitar a venda das marmitas',
      description: 'O cliente escolhe sozinho, de forma rápida e sem atrito.',
      detail: 'Vitrine interativa 24 horas por dia com visualização clara de pratos e preços.',
      icon: Zap,
      accentBg: 'bg-[#859159]/15',
      accentBorder: 'border-[#859159]/40',
      accentText: 'text-[#424733]',
      iconColor: 'text-[#859159]',
      tag: 'Venda rápida e autônoma'
    },
    {
      id: 'professionalize',
      badge: 'Benefício #3',
      title: 'Profissionalizar sua marmitaria',
      description: 'Transmita autoridade e valor desde o primeiro contato.',
      detail: 'Passe a imagem de um negócio moderno e confiável, valorizando seu preço.',
      icon: ShieldCheck,
      accentBg: 'bg-[#A38C66]/20',
      accentBorder: 'border-[#A38C66]/40',
      accentText: 'text-[#613C26]',
      iconColor: 'text-[#A38C66]',
      tag: 'Percepção de alto valor'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Conceito & Fundamentos"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content */}
      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#859159]/15 text-[#424733] border border-[#859159]/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-montserrat"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#859159]" />
            A Virada de Chave na Gestão
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#424733] font-heading leading-tight"
          >
            O que é um <span className="text-[#859159]">Cardápio Digital</span> e por que ele muda o jogo?
          </motion.h2>
        </div>

        {/* Highlight Main Definition Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#859159]/35 shadow-md flex flex-col md:flex-row items-center gap-4 relative overflow-hidden"
        >
          <div className="p-3 rounded-2xl bg-[#859159]/20 text-[#424733] shrink-0 flex items-center justify-center">
            <Link2 className="w-6 h-6 text-[#859159]" />
          </div>

          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#424733] text-white font-montserrat">
                Vitrine Online Profissional
              </span>
              <span className="text-xs text-[#859159] font-bold font-montserrat">
                Tudo em um único link
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#424733] font-medium leading-relaxed font-montserrat">
              É a sua <strong>vitrine profissional online organizada em um único link</strong>. Em vez de listas confusas no WhatsApp, PDFs pesados ou mensagens automáticas engessadas, o cliente visualiza seus pratos, preços e informações de forma <strong>limpa, rápida e interativa</strong>.
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-1.5 pl-4 border-l border-[#424733]/15 text-[11px] font-montserrat font-semibold text-[#613C26] shrink-0">
            <span className="flex items-center gap-1.5 text-red-700/80">
              <FileX2 className="w-3.5 h-3.5 text-red-600" /> Sem PDFs confusos
            </span>
            <span className="flex items-center gap-1.5 text-[#424733]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#859159]" /> Link único direto no WhatsApp
            </span>
          </div>
        </motion.div>

        {/* 3 Main Benefit Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-5">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className={`relative p-5 rounded-2xl bg-white border ${item.accentBorder} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#F0F0F0] text-[#424733] font-montserrat">
                      {item.badge}
                    </span>
                    <div className={`p-2 rounded-xl ${item.accentBg} ${item.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#424733] font-aleo mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Main Description */}
                  <p className="text-xs sm:text-sm text-[#424733]/90 font-medium leading-relaxed mb-2 font-montserrat">
                    {item.description}
                  </p>

                  <p className="text-[11px] text-[#613C26] leading-snug font-montserrat font-normal">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom detail tag */}
                <div className="pt-3 border-t border-[#424733]/10 mt-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-bold font-montserrat">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#859159] shrink-0" />
                    <span>{item.tag}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom takeaway banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3.5 p-3 sm:p-3.5 rounded-xl bg-[#424733] text-white flex flex-col sm:flex-row items-center justify-between gap-2 shadow-sm text-center sm:text-left"
        >
          <p className="text-xs sm:text-sm font-semibold text-[#F0F0F0] font-montserrat">
            O Cardápio Digital transforma o WhatsApp em um canal ágil de fechamento, sem perda de pedidos!
          </p>
          <span className="text-xs font-bold px-3 py-1 bg-[#859159] text-white rounded-lg whitespace-nowrap font-montserrat">
            Prático & Direto ao Ponto
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Escola de Gastronomia e Negócios • Chef Gabi</span>
        <span>Tecnologia Easy Byz Creator</span>
      </div>
    </div>
  );
};
