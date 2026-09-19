import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'indigo' | 'emerald' | 'none';
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = 'none',
  onClick,
  hoverEffect = false
}) => {
  const glowStyles = {
    none: '',
    cyan: 'border-cyan-500/20 shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)]',
    indigo: 'border-indigo-500/20 shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)]',
    emerald: 'border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)]'
  };

  const hoverClass = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:shadow-xl'
    : '';

  const cursorClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-gradient-to-b from-[#111722]/90 to-[#0c1017]/95 border border-slate-800/80 backdrop-blur-xl p-6 ${glowStyles[glow]} ${hoverClass} ${cursorClass} ${className}`}
    >
      {children}
    </div>
  );
};
