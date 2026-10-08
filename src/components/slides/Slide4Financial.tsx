import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { CardMockup } from '../CardMockup';
import { ASSETS } from '../../slidesData';
import { FileSpreadsheet, Zap, PieChart } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide4Financial: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'screen1' | 'screen2'>('both');

  const topics = [
    {
      title: 'A planilha de confeitaria no celular',
      description: 'A mesma estrutura de precificação e custos de insumos que antes estava no Excel, agora em formato de aplicativo — sem risco de desconfigurar fórmulas',
      icon: FileSpreadsheet,
    },
    {
      title: 'Modo simplificado',
      description: 'Registre compras de ingredientes, embalagens e pagamentos em menos de 10 segundos',
      icon: Zap,
    },
    {
      title: 'Controle de caixa & Lucro real',
      description: 'Saiba exatamente o que entrou, o que saiu e qual é o seu lucro real de cada bolo e encomenda entregue',
      icon: PieChart,
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Módulo Financeiro"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Headings & Bullets (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#342825] font-aleo leading-tight tracking-tight"
              >
                A gestão financeira da sua confeitaria na palma da mão
              </motion.h1>

              <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat mt-2 leading-relaxed">
                Toda a lógica de custos, insumos e precificação de confeitaria em uma interface prática e descomplicada.
              </p>
            </div>

            {/* Topics */}
            <div className="space-y-3 pt-1">
              {topics.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.1 }}
                  className="p-3.5 rounded-2xl bg-white border border-[#BD5944]/15 shadow-xs flex items-start gap-3 hover:border-[#BD5944]/40 transition-colors"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#BD5944] mt-2 shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-montserrat text-[#342825] leading-relaxed">
                      <strong className="font-bold text-[#342825]">{t.title}:</strong> {t.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick view filter buttons */}
            <div className="flex items-center gap-2 pt-1 font-montserrat">
              <span className="text-[11px] font-semibold text-[#342825]/70">Visualizar telas:</span>
              <button
                onClick={() => setActiveTab('both')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeTab === 'both'
                    ? 'bg-[#342825] text-white shadow-sm'
                    : 'bg-white text-[#342825] border border-[#342825]/15 hover:bg-[#FAF6F2]'
                }`}
              >
                Ambas as telas
              </button>
              <button
                onClick={() => setActiveTab('screen1')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeTab === 'screen1'
                    ? 'bg-[#BD5944] text-white shadow-sm'
                    : 'bg-white text-[#342825] border border-[#342825]/15 hover:bg-[#FAF6F2]'
                }`}
              >
                Tela 1: Fluxo
              </button>
              <button
                onClick={() => setActiveTab('screen2')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeTab === 'screen2'
                    ? 'bg-[#BD5944] text-white shadow-sm'
                    : 'bg-white text-[#342825] border border-[#342825]/15 hover:bg-[#FAF6F2]'
                }`}
              >
                Tela 2: Custos
              </button>
            </div>
          </div>

          {/* Right Column: Visual Mockup of Financial Screens (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              {(activeTab === 'both' || activeTab === 'screen1') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[240px]"
                >
                  <CardMockup
                    imageSrc={ASSETS.screens.financeiro1}
                    altText="Aba de Fluxo de Caixa do Aplicativo"
                    title="Aba: Fluxo de Caixa"
                    caption="Entradas, saídas e saldo em tempo real"
                    badge="Módulo 1"
                    badgeColor="#BD5944"
                    aspectRatio="video"
                  />
                </motion.div>
              )}

              {(activeTab === 'both' || activeTab === 'screen2') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[240px]"
                >
                  <CardMockup
                    imageSrc={ASSETS.screens.financeiro2}
                    altText="Aba de Custos e Margem por Bolo"
                    title="Aba: Custos & Margem"
                    caption="Cálculo automático de margem de lucro"
                    badge="Módulo 2"
                    badgeColor="#D4A373"
                    aspectRatio="video"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Controle financeiro descomplicado</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
