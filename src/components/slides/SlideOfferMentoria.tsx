import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { Crown, Sparkles, FileSignature, Truck, Video, CheckCircle2, Calendar, ExternalLink, Users, Clock } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideOfferMentoria: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const mentoriaSteps = [
    {
      number: '1',
      title: 'Exclusivo para alunas da Mentoria',
      description: 'Feito sob medida para o grupo seleto de mentoradas da Chef Gabi Paludo.',
      icon: Crown,
      badge: 'Exclusivo Mentoria',
      color: '#424733',
    },
    {
      number: '2',
      title: 'Inscrição para Mentoradas (Sem limite de vagas)',
      description: 'Condição super especial válida para todas as mentoradas. Ao final da aula vamos enviar o link exclusivo para você preencher e fazer o pagamento.',
      icon: Sparkles,
      badge: 'Válido p/ todas as mentoradas',
      color: '#613C26',
      highlight: true,
      subBadge: 'Até 28/08 às 12h'
    },
    {
      number: '3',
      title: 'Assinatura do contrato',
      description: 'Após o pagamento, aguarde que a equipe do Easy Byz entrará em contato para preenchimento do contrato.',
      icon: FileSignature,
      color: '#859159',
    },
    {
      number: '4',
      title: 'Entrega em até 7 dias úteis',
      description: 'Como preparamos um ambiente personalizado para a sua marmitaria, o app estará disponível em até 7 dias úteis após o contrato/pagamento.',
      icon: Truck,
      badge: 'Personalizado',
      color: '#A38C66',
    },
    {
      number: '5',
      title: 'Treinamento completo',
      description: 'Aulas gravadas passo a passo dentro da plataforma para você aprender a cadastrar tudo com máxima facilidade.',
      icon: Video,
      badge: 'Aulas passo a passo',
      color: '#424733',
    }
  ];

  const mentoriaLink = ASSETS.appLinks.mentoriaRegistrationApp || 'https://inscricao-app-egn-ebc-mentoria.vercel.app/';

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Condição Exclusiva • Mentoria"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Mentoria Presentation Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-sm flex flex-col items-center">
              {/* Top VIP Badge */}
              <div className="mb-2.5 px-4 py-1 text-xs font-black uppercase tracking-wider text-white rounded-full shadow-md bg-gradient-to-r from-[#424733] via-[#613C26] to-[#859159] font-montserrat flex items-center gap-1.5 border border-white/20">
                <Crown className="w-3.5 h-3.5 text-[#E6C687]" />
                <span>Exclusivo Alunas da Mentoria</span>
              </div>

              {/* Clean Image Card with Clickable Link */}
              <a
                href={mentoriaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#859159]/40 bg-white group hover:shadow-2xl hover:border-[#859159] transition-all duration-300 block cursor-pointer"
                title="Clique para abrir a página de inscrição da Mentoria"
              >
                <img
                  src={ASSETS.screens.capaInscricao}
                  alt="Página de inscrição do app da mentoria"
                  className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-[#424733] text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl font-montserrat border border-[#859159]">
                    <ExternalLink className="w-3.5 h-3.5 text-[#859159]" /> Abrir Inscrição Mentoria
                  </span>
                </div>
              </a>

              {/* Caption */}
              <p className="mt-2 text-xs font-medium text-[#424733]/85 text-center font-montserrat leading-tight">
                Ambiente exclusivo e personalizado para a sua marmitaria
              </p>
            </div>

            {/* Clickable Registration Link Tag / Button */}
            <a
              href={mentoriaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 px-4 py-2 bg-gradient-to-r from-[#424733] to-[#613C26] hover:from-[#353928] hover:to-[#4e2f1c] text-white rounded-xl text-xs font-bold flex items-center gap-2 font-montserrat shadow-md hover:shadow-lg transition-all group border border-white/10"
              title="Abrir página de inscrição da mentoria em nova aba"
            >
              <CheckCircle2 className="w-4 h-4 text-[#859159] shrink-0" />
              <span>Link liberado ao final da aula com preço especial!</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

            {/* Tag de validade do valor promocional para Mentoradas */}
            <div className="mt-1.5 px-3.5 py-1.5 bg-[#859159]/20 text-[#424733] border border-[#859159]/40 rounded-xl text-xs font-bold flex items-center gap-1.5 font-montserrat shadow-xs">
              <Calendar className="w-4 h-4 text-[#613C26] shrink-0" />
              <span>Valor promocional válido somente até 28 de agosto, 12h</span>
            </div>
          </motion.div>

          {/* Right Column: Title & Steps (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div>
              {/* Highlight Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#424733]/15 to-[#859159]/20 text-[#424733] rounded-full text-xs font-black uppercase tracking-wider mb-1 font-montserrat border border-[#859159]/30">
                <Crown className="w-3.5 h-3.5 text-[#859159]" />
                Condição especial para alunas da MENTORIA CHEF GABI
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl font-black text-[#424733] font-heading leading-tight"
              >
                A sua ferramenta de trabalho <br />
                <span className="text-[#859159]">sob medida com benefício exclusivo</span>
              </motion.h2>

              {/* Subtitle with key condition badge */}
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <p className="text-xs text-[#424733]/85 font-medium font-montserrat font-light">
                  Passo a passo transparente de como funcionará a sua entrada e entrega:
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 bg-[#859159]/15 text-[#424733] rounded-md font-montserrat">
                  <Users className="w-3 h-3 text-[#859159]" /> Válido para todas as mentoradas no prazo
                </span>
              </div>
            </div>

            {/* 5 Steps timeline */}
            <div className="space-y-2 pt-1">
              {mentoriaSteps.map((step, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + idx * 0.08 }}
                    className={`p-2.5 sm:p-3 rounded-xl border flex items-start gap-3 transition-all ${
                      step.highlight
                        ? 'bg-gradient-to-r from-[#859159]/15 via-[#613C26]/5 to-transparent border-[#859159]/50 shadow-sm'
                        : 'bg-white border-[#424733]/10 hover:border-[#859159]/40'
                    }`}
                  >
                    {/* Number Badge */}
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0 mt-0.5 shadow-sm font-montserrat"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-[#424733] font-aleo">
                          {step.title}
                        </h4>
                        {step.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-montserrat ${
                            step.highlight
                              ? 'bg-[#859159] text-white'
                              : 'bg-[#F0F0F0] text-[#613C26]'
                          }`}>
                            {step.badge}
                          </span>
                        )}
                        {step.subBadge && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#613C26] text-white font-montserrat">
                            <Clock className="w-2.5 h-2.5" />
                            {step.subBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#424733]/85 font-medium leading-snug mt-0.5 font-montserrat font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide {slideNumber} • Condição Exclusiva Mentoria</span>
        <span className="font-semibold text-[#613C26]">Válido para todas as mentoradas até 28 de agosto às 12h</span>
      </div>
    </div>
  );
};
