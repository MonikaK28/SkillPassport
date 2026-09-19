import React from 'react';
import { AlertCircle, ShieldAlert, Sparkles, Database } from 'lucide-react';

interface DemoBadgeProps {
  label?: string;
  variant?: 'amber' | 'cyan' | 'indigo' | 'emerald' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'alert' | 'shield' | 'sparkles' | 'data';
  showSubtext?: boolean;
  subtext?: string;
  className?: string;
}

export const DemoBadge: React.FC<DemoBadgeProps> = ({
  label = 'Demo Data',
  variant = 'amber',
  size = 'md',
  icon = 'shield',
  showSubtext = false,
  subtext = 'Demonstration data only. Not a scientifically validated prediction or real placement outcome.',
  className = ''
}) => {
  const variantStyles = {
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    subtle: 'bg-slate-800/80 text-slate-300 border-slate-700/60'
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium'
  };

  const renderIcon = () => {
    const iconSize = size === 'sm' ? 12 : size === 'md' ? 14 : 16;
    switch (icon) {
      case 'alert':
        return <AlertCircle size={iconSize} className="shrink-0" />;
      case 'sparkles':
        return <Sparkles size={iconSize} className="shrink-0" />;
      case 'data':
        return <Database size={iconSize} className="shrink-0" />;
      case 'shield':
      default:
        return <ShieldAlert size={iconSize} className="shrink-0" />;
    }
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span
        className={`inline-flex items-center rounded-full border tracking-wide uppercase font-mono ${variantStyles[variant]} ${sizeStyles[size]}`}
      >
        {renderIcon()}
        <span>{label}</span>
      </span>
      {showSubtext && (
        <span className="text-[11px] text-slate-400 mt-1 italic leading-tight">
          {subtext}
        </span>
      )}
    </div>
  );
};

export const DemoBanner: React.FC<{ message?: string; className?: string }> = ({
  message = 'Demonstration Environment: All student profiles, projects, recruiter accounts, competency metrics, and challenge matching scores are synthetic demo data created for proof-of-concept demonstration.',
  className = ''
}) => {
  return (
    <div
      className={`w-full bg-amber-950/30 border-y border-amber-500/20 px-4 py-2 text-xs text-amber-200/90 flex items-center justify-between flex-wrap gap-2 ${className}`}
    >
      <div className="flex items-center gap-2">
        <ShieldAlert size={14} className="text-amber-400 shrink-0" />
        <span>{message}</span>
      </div>
      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold uppercase tracking-wider">
        Demo Mode Active
      </span>
    </div>
  );
};
