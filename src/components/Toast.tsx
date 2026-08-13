import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#061925] text-[#F7F8F7] shadow-2xl border border-[#07323D] animate-in slide-in-from-bottom-5 duration-300">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-[#88B8B3] flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
      )}
      <span className="text-xs font-bold text-[#F7F8F7]">{message}</span>
      <button
        onClick={onClose}
        className="text-[#D2D7D8] hover:text-white p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
