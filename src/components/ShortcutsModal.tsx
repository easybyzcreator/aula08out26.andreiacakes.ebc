import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ onClose }) => {
  const shortcuts = [
    { key: '→ / Espaço', action: 'Avançar para o próximo slide' },
    { key: '←', action: 'Voltar para o slide anterior' },
    { key: 'F', action: 'Alternar Modo Tela Cheia' },
    { key: 'N', action: 'Abrir / Fechar Notas do Apresentador' },
    { key: 'G', action: 'Abrir / Fechar Índice de Slides' },
    { key: 'P', action: 'Ativar / Desativar Ferramenta de Anotação (Caneta)' },
    { key: 'Home / End', action: 'Ir para o primeiro / último slide' },
    { key: 'Esc', action: 'Fechar modais / Sair da tela cheia' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 select-none animate-fadeIn">
      <div className="bg-white text-slate-800 w-full max-w-md rounded-3xl border border-slate-200 shadow-2xl p-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
          <div className="flex items-center gap-2 text-amber-600">
            <Keyboard className="w-5 h-5" />
            <h3 className="text-base font-bold text-slate-900 font-heading">
              Atalhos do Teclado
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs"
            >
              <span className="text-slate-700 font-medium">{sc.action}</span>
              <kbd className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg font-mono text-slate-800 font-bold shadow-2xs">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 py-2.5 bg-[#1E3A5F] hover:bg-[#152B46] text-white text-xs font-bold rounded-full transition-colors shadow-sm"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
