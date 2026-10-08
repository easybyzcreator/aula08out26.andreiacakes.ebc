import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Clock, MessageSquareShare, ShieldCheck, Flame, Sparkles, TrendingUp, Check } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide7TimeSavings: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const cards = [
    {
      metric: '< 5 min',
      metricLabel: 'por dia',
      title: 'Organização financeira em menos de 5 minutos',
      description: 'Lançamentos rápidos que cabem em qualquer intervalo entre fornadas. Sem pilhas de recibos acumulados para o fim de semana.',
      icon: Clock,
      color: '#424733',
      bg: 'bg-[#424733]/10',
      border: 'border-[#424733]/20',
    },
    {
      metric: '10x',
      metricLabel: 'mais rápido',
      title: 'Respostas rápidas e padronizadas',
      description: 'Chega de digitar textos longos e confusos repetidamente. Envie o link do seu cardápio com foto, preço e nutrição em 1 segundo.',
      icon: MessageSquareShare,
      color: '#859159',
      bg: 'bg-[#859159]/15',
      border: 'border-[#859159]/30',
    },
    {
      metric: '100%',
      metricLabel: 'segurança',
      title: 'Segurança para crescer sem virar bagunça',
      description: 'Aumente o volume de marmitas diárias com a tranquilidade de saber que os custos, pedidos e finanças continuam sob controle.',
      icon: ShieldCheck,
      color: '#613C26',
      bg: 'bg-[#613C26]/15',
      border: 'border-[#613C26]/25',
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Produtividade & escala"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-4 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#859159]/20 text-[#424733] rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-montserrat">
            <Flame className="w-3.5 h-3.5 text-[#859159]" />
            Economia de tempo e foco no que importa
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#424733] font-heading leading-tight">
            Menos tempo no papel, <br className="hidden sm:inline" />
            <span className="text-[#859159]">mais tempo produzindo e vendendo</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#613C26] font-medium mt-1 font-montserrat font-light">
            Seu tempo deve ser dedicado a produzir receitas incríveis e fechar novos clientes, não preencher planilhas manuais e anotar pedidos em caderninhos.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                className={`p-6 rounded-2xl bg-white border ${card.border} shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-[#424733] font-heading">
                        {card.metric}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#859159] font-montserrat">
                        {card.metricLabel}
                      </span>
                    </div>

                    <div className={`p-2.5 rounded-xl ${card.bg}`}>
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#424733] font-aleo mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#424733]/85 font-medium leading-relaxed font-montserrat font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#424733]/10 flex items-center gap-1.5 text-xs font-bold text-[#859159] font-montserrat">
                  <Check className="w-4 h-4" />
                  <span>Mais tempo livre e paz de espírito</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-6 p-4 rounded-xl bg-[#424733] text-white flex items-center justify-between shadow-md font-montserrat"
        >
          <div>
            <span className="text-xs font-bold text-[#A38C66] uppercase tracking-wider block font-montserrat">O resultado real:</span>
            <p className="text-xs sm:text-sm font-semibold text-white">
              Mais clareza sobre o lucro, menos estresse diário e clientes impressionados com o seu profissionalismo.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#859159] bg-white/10 px-3 py-1.5 rounded-lg">
            <TrendingUp className="w-4 h-4" /> Gestão descomplicada
          </div>
        </motion.div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide 7 • Foco e produtividade</span>
        <span>Escola de Gastronomia & Negócios</span>
      </div>
    </div>
  );
};
