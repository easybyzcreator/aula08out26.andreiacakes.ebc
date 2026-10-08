import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { PhoneMockup } from '../PhoneMockup';
import { ASSETS } from '../../slidesData';
import { Eye, UtensilsCrossed, LayoutGrid, TrendingUp, Sparkles, Heart } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide5VisualCatalog: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const [activeScreen, setActiveScreen] = useState<'both' | 'screen1' | 'screen2'>('both');

  const topics = [
    {
      icon: UtensilsCrossed,
      title: 'Cadastro completo de pratos',
      description: 'Fotos apetitosas, descrições detalhadas, ingredientes selecionados e preços estruturados de forma profissional.',
      color: '#424733',
      bg: 'bg-[#424733]/10',
    },
    {
      icon: LayoutGrid,
      title: 'Catálogo profissional & nutricional',
      description: 'Pare de mandar listas confusas de texto solto no WhatsApp. Entregue um cardápio digital moderno com tabela de calorias e macros.',
      color: '#859159',
      bg: 'bg-[#859159]/15',
    },
    {
      icon: TrendingUp,
      title: 'Valor percebido elevado',
      description: 'Um produto bem apresentado e transparente permite cobrar um preço justo e valorizado, sem aquele cliente pedindo desconto.',
      color: '#613C26',
      bg: 'bg-[#613C26]/15',
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Módulo 2 • Cardápio & vendas"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Phone Mockups showcasing dish detail & nutrition info (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-2 lg:order-1">
            {activeScreen === 'both' ? (
              <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <PhoneMockup
                    imageSrc={ASSETS.screens.cardapio1}
                    altText="Tela de prato e detalhes"
                    badge="Foto & descrição"
                    caption="Apresentação impecável do prato"
                    accentColor="#859159"
                    size="sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <PhoneMockup
                    imageSrc={ASSETS.screens.cardapio2}
                    altText="Informação nutricional do prato"
                    badge="Tabela nutricional"
                    caption="Macros, calorias e transparência"
                    accentColor="#A38C66"
                    size="sm"
                  />
                </motion.div>
              </div>
            ) : activeScreen === 'screen1' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <PhoneMockup
                  imageSrc={ASSETS.screens.cardapio1}
                  altText="Tela de prato e detalhes"
                  badge="Apresentação do cardápio"
                  caption="Fotos de alta qualidade que despertam o apetite do cliente"
                  accentColor="#859159"
                  size="md"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <PhoneMockup
                  imageSrc={ASSETS.screens.cardapio2}
                  altText="Informação nutricional do prato"
                  badge="Informações nutricionais"
                  caption="Diferencial competitivo que clientes fitness e corporativos adoram"
                  accentColor="#A38C66"
                  size="md"
                />
              </motion.div>
            )}

            {/* Quick switcher buttons */}
            <div className="flex items-center gap-2 mt-3 font-montserrat">
              <button
                onClick={() => setActiveScreen('both')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeScreen === 'both'
                    ? 'bg-[#424733] text-white shadow-sm'
                    : 'bg-white text-[#424733] border border-[#424733]/15'
                }`}
              >
                Ambas as telas
              </button>
              <button
                onClick={() => setActiveScreen('screen1')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeScreen === 'screen1'
                    ? 'bg-[#859159] text-white shadow-sm'
                    : 'bg-white text-[#424733] border border-[#424733]/15'
                }`}
              >
                Foto & prato
              </button>
              <button
                onClick={() => setActiveScreen('screen2')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeScreen === 'screen2'
                    ? 'bg-[#A38C66] text-white shadow-sm'
                    : 'bg-white text-[#424733] border border-[#424733]/15'
                }`}
              >
                Info nutricional
              </button>
            </div>
          </div>

          {/* Right Column: Headings & 3 Topics (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-3.5 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#859159]/15 text-[#424733] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 font-montserrat">
                <Eye className="w-3.5 h-3.5 text-[#859159]" />
                O poder da apresentação visual
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#424733] font-heading leading-tight"
              >
                O cliente come primeiro <br />
                <span className="text-[#859159]">com os olhos</span>
              </motion.h2>

              <p className="text-xs sm:text-sm text-[#613C26] font-medium mt-1 font-montserrat font-light">
                A diferença entre uma marmita comum e uma refeição premium com alto valor percebido.
              </p>
            </div>

            {/* Topics */}
            <div className="space-y-2.5 pt-1">
              {topics.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 + idx * 0.1 }}
                    className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#424733]/10 shadow-sm flex items-start gap-3 hover:border-[#859159]/40 transition-colors"
                  >
                    <div className={`p-2 rounded-xl ${t.bg} shrink-0 mt-0.5`}>
                      <Icon className="w-4 h-4" style={{ color: t.color }} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#424733] font-aleo">
                        {t.title}
                      </h4>
                      <p className="text-xs text-[#424733]/80 font-medium mt-0.5 leading-relaxed font-montserrat font-light">
                        {t.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote box */}
            <div className="p-3 rounded-xl bg-[#EAECE4] border border-[#859159]/30 text-xs text-[#424733] flex items-center gap-2 font-montserrat font-light">
              <Sparkles className="w-4 h-4 text-[#859159] shrink-0" />
              <span>
                <strong className="font-semibold">Dica de ouro:</strong> Clientes pagam até 40% a mais quando encontram fotos padronizadas e informações nutricionais transparentes.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide 5 • Apresentação & cardápio</span>
        <span>Aumente o valor percebido do seu cardápio</span>
      </div>
    </div>
  );
};
