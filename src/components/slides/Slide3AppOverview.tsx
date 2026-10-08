import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { PhoneMockup } from '../PhoneMockup';
import { ASSETS } from '../../slidesData';
import { Sparkles, Cake, DollarSign, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide3AppOverview: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const points = [
    { title: 'Seu cardápio digital', desc: 'Vitrine moderna com fotos apetitosas dos seus bolos e doces' },
    { title: 'Seus bolos, massas, recheios e encomendas', desc: 'Tudo organizado para a cliente escolher e encomendar sem atrito' },
    { title: 'Sua gestão financeira', desc: 'Controle de custos de insumos, entradas e lucro real de cada encomenda' },
    { title: 'Acesso pelo celular — sem complicação', desc: 'Funciona direto no navegador ou como app no smartphone das clientes' },
    { title: 'Interface simples e intuitiva', desc: 'Pensada especialmente para quem está com a mão ocupada confeitando' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="A grande solução"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
          {/* Left Column: Phone Mockup showcasing app home screen (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Decorative aura */}
              <div className="absolute inset-0 bg-[#BD5944]/15 rounded-full blur-2xl -z-10 scale-95" />
              
              <PhoneMockup
                imageSrc="/assets/app-mockup-new.jpg"
                altText="Tela inicial do aplicativo da sua confeitaria"
                badge="Tela inicial do app"
                caption="Interface clean, intuitiva e prática"
                accentColor="#BD5944"
                size="md"
              />
            </div>
          </motion.div>

          {/* Right Column: Title & Bullet Points (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#342825] font-aleo leading-tight tracking-tight"
              >
                O aplicativo da sua confeitaria
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base text-[#342825]/85 font-montserrat mt-2 leading-relaxed"
              >
                Uma estrutura exclusiva e personalizada para profissionalizar suas encomendas e sua gestão.
              </motion.p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-2">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                  className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white border border-[#BD5944]/15 shadow-xs hover:border-[#BD5944]/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#BD5944] mt-2 shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#342825] font-montserrat">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#342825]/70 font-montserrat mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom highlight pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-2 flex items-center gap-2 text-xs font-bold text-[#BD5944] font-montserrat"
            >
              <CheckCircle2 className="w-4 h-4 text-[#BD5944]" />
              <span>Personalizado com as cores e a identidade da sua marca</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • A estrutura digital para o seu negócio</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
