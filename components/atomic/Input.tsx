
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-medium uppercase tracking-widest text-white/50 ml-1">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all font-mono text-lg w-full ${className}`}
      />
      {error && <span className="text-red-400 text-xs mt-1 ml-1">{error}</span>}
    </div>
  );
};
