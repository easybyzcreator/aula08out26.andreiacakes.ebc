import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { 
  ShoppingBag, 
  Smartphone, 
  Percent, 
  AlertTriangle, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  Crown, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users
} from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideMarketplaceComparison: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Estratégia & Lucratividade"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-5 sm:px-8 lg:px-12 py-2 sm:py-3 flex flex-col justify-start max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#859159]/15 text-[#424733] border border-[#859159]/30 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 font-montserrat shadow-xs"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#859159]" />
            Margem Real & Sustentabilidade
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#424733] font-heading leading-tight"
          >
            App Próprio vs. Marketplace: <span className="text-[#859159]">Onde está o seu lucro?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-[13px] text-[#424733]/85 font-medium mt-3 sm:mt-3.5 font-montserrat font-light"
          >
            Entenda a matemática prática entre vender por aplicativos terceiros e ter a sua própria estrutura.
          </motion.p>
        </div>

        {/* Comparison Grid (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5 max-w-5xl mx-auto w-full items-stretch mb-4 sm:mb-5">
          {/* Card 1: Marketplaces (iFood, 99Food, etc.) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="p-3 sm:p-3.5 rounded-2xl bg-white border border-[#613C26]/20 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#613C26]/15">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#613C26]/10 text-[#613C26] shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#613C26] font-montserrat block">
                      Intermediários
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#424733] font-aleo leading-tight">
                      Marketplaces <span className="text-[11px] font-normal text-[#613C26]/80">(iFood, 99Food, etc.)</span>
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#613C26]/10 text-[#613C26] font-montserrat shrink-0">
                  Vitrine Cara
                </span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-1.5 text-[11px] sm:text-xs text-[#424733] font-montserrat">
                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#FAF8F5] border border-[#424733]/10">
                  <div className="w-4 h-4 rounded-full bg-amber-500/15 text-amber-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ●
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#424733]">Início sem custo: </strong>
                    <span className="font-light text-[#424733]/85">Bom para atrair o primeiro cliente (funciona como vitrine).</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#613C26]/5 border border-[#613C26]/15">
                  <div className="w-4 h-4 rounded-full bg-[#613C26]/20 text-[#613C26] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✕
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#613C26]">Taxas altas: </strong>
                    <span className="font-light text-[#424733]/85">Cobram de <strong className="font-semibold text-[#613C26]">12% a mais de 30%</strong> sobre cada pedido.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#613C26]/5 border border-[#613C26]/15">
                  <div className="w-4 h-4 rounded-full bg-[#613C26]/20 text-[#613C26] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✕
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#613C26]">Riscos financeiros: </strong>
                    <span className="font-light text-[#424733]/85">Atrasos e retenções nos repasses podem travar seu caixa.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#613C26]/5 border border-[#613C26]/15">
                  <div className="w-4 h-4 rounded-full bg-[#613C26]/20 text-[#613C26] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✕
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#613C26]">O cliente não é seu: </strong>
                    <span className="font-light text-[#424733]/85">A base de contatos pertence à plataforma, não a você.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-1.5 border-t border-[#613C26]/15 text-[10.5px] text-[#613C26] font-semibold bg-[#613C26]/5 p-1.5 rounded-lg text-center font-montserrat">
              📉 Você trabalha pesado na cozinha e divide seu lucro com o app.
            </div>
          </motion.div>

          {/* Card 2: Seu App Próprio */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="p-3 sm:p-3.5 rounded-2xl bg-white border-2 border-[#859159] shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            {/* Highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#424733] via-[#859159] to-[#A38C66]" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#859159]/20">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#859159] text-white shrink-0 shadow-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#859159] font-montserrat block">
                      Canal Direto
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#424733] font-aleo leading-tight">
                      Seu App Próprio <span className="text-[11px] font-normal text-[#859159]">(EGN + Easy Byz)</span>
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#859159] text-white shadow-xs font-montserrat shrink-0">
                  100% no Seu Bolso
                </span>
              </div>

              {/* Bullet Points */}
              <div className="space-y-1.5 text-[11px] sm:text-xs text-[#424733] font-montserrat">
                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#859159]/10 border border-[#859159]/30">
                  <div className="w-4 h-4 rounded-full bg-[#859159] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#424733]">Zero taxas por venda: </strong>
                    <span className="font-light text-[#424733]/90"><strong className="font-semibold text-[#859159]">100% do valor do pedido</strong> fica no seu bolso.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#859159]/10 border border-[#859159]/30">
                  <div className="w-4 h-4 rounded-full bg-[#859159] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#424733]">Custo fixo e previsível: </strong>
                    <span className="font-light text-[#424733]/90">Você paga apenas uma mensalidade simples, sem surpresas.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#859159]/10 border border-[#859159]/30">
                  <div className="w-4 h-4 rounded-full bg-[#859159] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#424733]">Segurança e controle: </strong>
                    <span className="font-light text-[#424733]/90">O dinheiro entra direto para você, sem intermediários.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-1.5 sm:p-2 rounded-xl bg-[#859159]/10 border border-[#859159]/30">
                  <div className="w-4 h-4 rounded-full bg-[#859159] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div className="leading-snug">
                    <strong className="font-bold text-[#424733]">Base de clientes sua: </strong>
                    <span className="font-light text-[#424733]/90">Liberdade para fidelizar e vender novamente sem comissão.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-1.5 border-t border-[#859159]/20 text-[10.5px] text-[#424733] font-bold bg-[#859159]/15 p-1.5 rounded-lg text-center font-montserrat">
              🚀 Autonomia, lucro preservado e clientes fieis à sua marmitaria!
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner: A Estratégia de Ouro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#323627] via-[#24281B] to-[#323627] text-white shadow-md border border-[#A38C66]/40 max-w-5xl mx-auto w-full relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 shrink-0 bg-[#A38C66]/25 border border-[#A38C66]/50 px-2.5 py-1 rounded-lg">
              <Crown className="w-3.5 h-3.5 text-[#E6C687]" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#F5E6C8] font-heading">
                A Estratégia de Ouro
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-[#F3F3F0] font-montserrat font-light text-center sm:text-left leading-snug">
              Use os marketplaces apenas como vitrine para captar o cliente na <strong className="font-semibold text-white">primeira venda</strong>. Depois, traga esse cliente para o seu <strong className="font-semibold text-[#859159]">aplicativo próprio</strong> para garantir <strong className="font-semibold text-[#E6C687]">lucratividade, autonomia e um negócio sustentável a longo prazo</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
