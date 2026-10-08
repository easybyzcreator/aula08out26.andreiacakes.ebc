import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { XCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide6Comparison: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Comparativo prático"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#BD5944]/15 text-[#BD5944] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 font-montserrat">
            <Sparkles className="w-3.5 h-3.5 text-[#BD5944]" />
            Transformação operacional
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#342825] font-heading">
            A evolução da sua confeitaria na prática
          </h2>
          <p className="text-xs sm:text-sm text-[#342825]/80 font-montserrat font-light">
            A rotina da sua confeitaria antes e depois da tecnologia:
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4">
          {/* Card: Como é Hoje */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 rounded-3xl bg-white border border-[#342825]/15 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#342825]/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-stone-100 text-stone-600">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 font-montserrat">
                      Cenário manual
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#342825] font-aleo">
                      ANTES ✕
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-montserrat">
                  Sobrecarga
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#342825]/90 font-montserrat font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-400 font-bold text-base leading-none">✕</span>
                  <span>Caderninho com manchas de calda e farinha</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-400 font-bold text-base leading-none">✕</span>
                  <span>Planilhas de precificação esquecidas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-400 font-bold text-base leading-none">✕</span>
                  <span>Decoração e fornos interrompidos pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-400 font-bold text-base leading-none">✕</span>
                  <span>Margem de lucro incerta em cada encomenda</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-stone-400 font-bold text-base leading-none">✕</span>
                  <span>Cliente esperando horas por orçamento e desistindo</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-[#342825]/10 text-[11px] text-stone-600 font-medium bg-stone-50 p-2 rounded-xl text-center font-montserrat">
              ⚠️ Resultado: Cansaço extremo, risco de errar datas e perda de vendas.
            </div>
          </motion.div>

          {/* Card: Com o App Andreia Cakes & Easy Byz */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#BD5944] shadow-lg flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#BD5944]/20">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#BD5944]/15 text-[#BD5944]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD5944] font-montserrat">
                      Estrutura Digital
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#342825] font-aleo">
                      DEPOIS ✓
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#BD5944] text-white font-montserrat">
                  Confeitaria VIP
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#342825]/90 font-montserrat font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#BD5944] font-bold text-base leading-none">✓</span>
                  <span>Cardápio digital 24h com fotos de bolos e doces</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#BD5944] font-bold text-base leading-none">✓</span>
                  <span>Encomendas organizadas com sabor e data confirmados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#BD5944] font-bold text-base leading-none">✓</span>
                  <span>Gestão financeira e custos de insumos na palma da mão</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#BD5944] font-bold text-base leading-none">✓</span>
                  <span>Clientes encantadas com atendimento visual e rápido</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#BD5944] font-bold text-base leading-none">✓</span>
                  <span>Mais tempo livre para criar novidades e faturar mais</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-[#BD5944]/20 text-[11px] text-[#BD5944] font-bold bg-[#FDF1EE] p-2 rounded-xl text-center font-montserrat">
              ✨ Resultado: Autoridade imediata, lucratividade e paz de espírito.
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • A transformação da sua rotina</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
