
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'body' | 'label' | 'display';
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'body', 
  className = '' 
}) => {
  const styles = {
    display: 'text-[20vw] font-extrabold leading-none font-mono tabular-nums',
    h1: 'text-4xl md:text-5xl font-extrabold',
    h2: 'text-2xl md:text-3xl font-bold',
    body: 'text-base md:text-lg',
    label: 'text-xs font-medium uppercase tracking-widest'
  };

  return (
    <div className={`${styles[variant]} ${className}`}>
      {children}
    </div>
  );
};
