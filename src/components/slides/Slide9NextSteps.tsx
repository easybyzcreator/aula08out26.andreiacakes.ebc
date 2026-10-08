import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { Phone, Globe, Instagram, MessageCircle, HelpCircle, Sparkles, ArrowUpRight } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide9NextSteps: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#FAF6F2] via-[#F5EFEB] to-[#EAE0D9] overflow-hidden">
      <SlideHeader
        category="Encerramento & suporte"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Heading, Call to Action, Q&A (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#BD5944]/15 text-[#BD5944] rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-montserrat">
                <HelpCircle className="w-3.5 h-3.5 text-[#BD5944]" />
                Dúvidas & próximos passos
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#342825] font-heading leading-tight"
              >
                Vamos profissionalizar a <br />
                <span className="text-[#BD5944]">sua confeitaria?</span>
              </motion.h2>

              <p className="text-sm text-[#342825]/85 font-medium mt-1 font-montserrat font-light">
                Dê o próximo passo para transformar seu talento na confeitaria em um negócio estruturado, respeitado e lucrativo.
              </p>
            </div>

            {/* Q&A Highlight Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#BD5944]/20 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#342825] font-montserrat">
                <Sparkles className="w-4 h-4 text-[#BD5944]" />
                <span>Espaço aberto para perguntas</span>
              </div>
              <p className="text-xs text-[#342825]/85 leading-relaxed font-montserrat font-light">
                Envie suas dúvidas agora mesmo. A equipe <strong className="font-semibold text-[#BD5944]">Easy Byz</strong> e a <strong className="font-semibold text-[#BD5944]">Andreia</strong> estão prontas para te orientar!
              </p>
              <div className="pt-2 border-t border-[#BD5944]/10 flex items-center justify-between text-[11px] text-[#BD5944] font-bold font-montserrat">
                <span>✓ Link de inscrição liberado</span>
                <span>✓ Lote especial para alunas</span>
              </div>
            </div>

            {/* Direct WhatsApp Call Button */}
            <a
              href={ASSETS.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#BD5944] hover:bg-[#a64835] text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-montserrat"
            >
              <MessageCircle className="w-5 h-5 text-white fill-current" />
              <span>Chamar no WhatsApp ({ASSETS.contacts.phone})</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </a>
          </div>

          {/* Right Column: Contact Cards & Creator Profile (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            {/* Dual Profile Card */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#BD5944]/20 shadow-lg flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#BD5944] shadow-md bg-[#FAF6F2] flex items-center justify-center p-0.5">
                  <img
                    src={ASSETS.people.andreiaPhoto1}
                    alt="Andreia Cakes USA"
                    className="w-full h-full object-contain object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#BD5944] text-white p-1 rounded-full shadow-sm text-xs">
                  🎂
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-[#342825] font-aleo">
                    Andreia Cakes USA
                  </h4>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#BD5944]/15 text-[#BD5944] font-montserrat">
                    Metodologia
                  </span>
                </div>
                <p className="text-xs text-[#BD5944] font-bold mt-0.5 font-montserrat">
                  Brazilian Desserts & Escola de Confeitaria
                </p>
                <p className="text-[11px] text-[#342825]/80 mt-1 font-montserrat leading-tight font-light">
                  Apoiando confeiteiras a profissionalizarem suas vendas e conquistarem a liberdade financeira com bolos e doces.
                </p>
              </div>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* WhatsApp direct */}
              <a
                href={ASSETS.contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-[#BD5944]/15 hover:border-[#BD5944] shadow-sm flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 rounded-xl bg-[#BD5944]/15 text-[#BD5944] group-hover:bg-[#BD5944] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase text-[#BD5944] block font-montserrat">WhatsApp Oficial</span>
                  <span className="text-xs font-bold text-[#342825] block truncate">{ASSETS.contacts.phoneFormatted}</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={ASSETS.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-[#BD5944]/15 hover:border-[#BD5944] shadow-sm flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 rounded-xl bg-[#BD5944]/15 text-[#BD5944] group-hover:bg-[#BD5944] group-hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase text-[#BD5944] block font-montserrat">Instagram</span>
                  <span className="text-xs font-bold text-[#342825] block truncate">{ASSETS.contacts.instagram}</span>
                </div>
              </a>
            </div>

            {/* Official Website Card */}
            <a
              href={ASSETS.contacts.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white border border-[#342825]/10 hover:border-[#BD5944] shadow-sm flex items-center justify-between transition-colors px-4"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#BD5944]" />
                <span className="text-xs font-bold text-[#342825] font-montserrat">{ASSETS.contacts.website}</span>
              </div>
              <span className="text-[11px] font-semibold text-[#BD5944] font-montserrat flex items-center gap-1">
                Conhecer Soluções <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Parabéns por investir no seu crescimento!</span>
        <span>Andreia Cakes USA & Easy Byz Creator · 2026</span>
      </div>
    </div>
  );
};
