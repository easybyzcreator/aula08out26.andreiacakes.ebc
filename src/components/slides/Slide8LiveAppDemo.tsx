import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { 
  ExternalLink, 
  Smartphone, 
  LayoutDashboard, 
  Copy, 
  Check, 
  Sparkles, 
  Cake, 
  ShieldCheck, 
  PieChart, 
  Clock,
  Maximize2,
  X
} from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide8LiveAppDemo: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const [copiedApp, setCopiedApp] = useState(false);
  const [copiedAdmin, setCopiedAdmin] = useState(false);
  const [embeddedUrl, setEmbeddedUrl] = useState<string | null>(null);

  const clientAppUrl = ASSETS.appLinks?.clientApp || 'https://appandreiacakessimulacao.vercel.app/';
  const adminAppUrl = ASSETS.appLinks?.adminApp || 'https://appandreiacakessimulacao.vercel.app/#/admin';

  const copyToClipboard = (text: string, type: 'app' | 'admin') => {
    navigator.clipboard.writeText(text);
    if (type === 'app') {
      setCopiedApp(true);
      setTimeout(() => setCopiedApp(false), 2000);
    } else {
      setCopiedAdmin(true);
      setTimeout(() => setCopiedAdmin(false), 2000);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#FAF6F2] overflow-hidden">
      <SlideHeader
        category="Demonstração ao vivo"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Top Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#BD5944]/15 text-[#BD5944] border border-[#BD5944]/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-montserrat shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#BD5944]" />
            Tour Prático pelo Sistema
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#342825] font-heading leading-tight"
          >
            Veja o aplicativo funcionando <br />
            <span className="text-[#BD5944]">na prática</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm text-[#342825]/85 font-medium mt-1 font-montserrat font-light"
          >
            Apresentação ao vivo da experiência completa para as suas clientes e do painel de gestão da sua confeitaria.
          </motion.p>
        </div>

        {/* 2 Main Presentation Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto w-full">
          {/* Card 1: Cardápio Digital (Cliente) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group relative bg-white p-5 sm:p-6 rounded-3xl border border-[#BD5944]/25 shadow-lg hover:shadow-xl hover:border-[#BD5944] transition-all flex flex-col justify-between"
          >
            {/* Header Badge */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#BD5944]/15 text-[#BD5944] text-[11px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 font-montserrat">
                  <Smartphone className="w-3.5 h-3.5" /> Visão da Cliente
                </span>
                <span className="text-[11px] font-bold text-[#BD5944] bg-[#FDF1EE] px-2.5 py-0.5 rounded-md font-montserrat">
                  Cardápio 24h
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#342825] font-aleo mb-2">
                Cardápio Digital das Clientes
              </h3>

              <p className="text-xs text-[#342825]/80 font-montserrat leading-relaxed mb-4">
                A vitrine onde sua cliente navega pelos bolos decorados, escolhe massas, recheios e tamanhos sem precisar esperar resposta no WhatsApp.
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-4 text-xs text-[#342825]/85 font-montserrat">
                <div className="flex items-center gap-2">
                  <Cake className="w-3.5 h-3.5 text-[#BD5944]" />
                  <span>Fotos de dar água na boca e detalhes das receitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#BD5944]" />
                  <span>Disponível 24h por dia para pedidos instantâneos</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#342825]/10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEmbeddedUrl(clientAppUrl)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#BD5944] hover:bg-[#a64835] text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Testar na Apresentação
                </button>

                <a
                  href={clientAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl border border-[#BD5944]/30 hover:bg-[#FAF6F2] text-[#342825] transition-colors"
                  title="Abrir em Nova Aba"
                >
                  <ExternalLink className="w-4 h-4 text-[#BD5944]" />
                </a>

                <button
                  onClick={() => copyToClipboard(clientAppUrl, 'app')}
                  className="px-3 py-2.5 rounded-xl border border-[#342825]/20 hover:bg-[#FAF6F2] text-[#342825] transition-colors"
                  title="Copiar Link"
                >
                  {copiedApp ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Painel Administrativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="group relative bg-white p-5 sm:p-6 rounded-3xl border border-[#342825]/20 shadow-lg hover:shadow-xl hover:border-[#342825] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#342825]/10 text-[#342825] text-[11px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 font-montserrat">
                  <LayoutDashboard className="w-3.5 h-3.5" /> Gestão da Confeiteira
                </span>
                <span className="text-[11px] font-bold text-[#342825] bg-stone-100 px-2.5 py-0.5 rounded-md font-montserrat">
                  Admin & Custos
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#342825] font-aleo mb-2">
                Painel Administrativo da Confeitaria
              </h3>

              <p className="text-xs text-[#342825]/80 font-montserrat leading-relaxed mb-4">
                O coração da sua gestão: controle de encomendas, cadastro de novos bolos, precificação de ingredientes e acompanhamento de lucros.
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-4 text-xs text-[#342825]/85 font-montserrat">
                <div className="flex items-center gap-2">
                  <PieChart className="w-3.5 h-3.5 text-[#BD5944]" />
                  <span>Fluxo de caixa diário e margem líquida por bolo</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#BD5944]" />
                  <span>Acesso seguro exclusivo para você gerenciar o negócio</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#342825]/10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEmbeddedUrl(adminAppUrl)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#342825] hover:bg-[#251b18] text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Testar na Apresentação
                </button>

                <a
                  href={adminAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl border border-[#342825]/30 hover:bg-[#FAF6F2] text-[#342825] transition-colors"
                  title="Abrir em Nova Aba"
                >
                  <ExternalLink className="w-4 h-4 text-[#342825]" />
                </a>

                <button
                  onClick={() => copyToClipboard(adminAppUrl, 'admin')}
                  className="px-3 py-2.5 rounded-xl border border-[#342825]/20 hover:bg-[#FAF6F2] text-[#342825] transition-colors"
                  title="Copiar Link"
                >
                  {copiedAdmin ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Embedded Live App Modal if clicked */}
      {embeddedUrl && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
            <div className="p-3 bg-[#342825] text-white flex items-center justify-between px-6">
              <span className="text-xs font-bold font-montserrat flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#BD5944]" /> Demonstração Interativa ao Vivo
              </span>
              <button
                onClick={() => setEmbeddedUrl(null)}
                className="p-1 rounded-full hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={embeddedUrl}
              className="w-full flex-1 border-0"
              title="Demo do App"
            />
          </div>
        </div>
      )}

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#342825]/10 text-[11px] text-[#342825]/60 font-montserrat">
        <span>Slide {slideNumber} • Demonstração Prática do Ecossistema</span>
        <span>Andreia Cakes USA • Easy Byz Creator</span>
      </div>
    </div>
  );
};
