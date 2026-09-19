import React from 'react';
import { DemoBadge } from './DemoBadge';
import { ShieldCheck, Lock, ExternalLink, Code2, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#07090e] mt-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <ShieldCheck size={18} className="text-cyan-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SKILL<span className="text-cyan-400">PASSPORT</span>
              </span>
              <DemoBadge label="Demo Dataset" variant="amber" size="sm" />
            </div>

            <p className="text-sm text-cyan-300 font-medium">
              "From Projects to Proof. From Skills to Opportunities."
            </p>

            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              SkillPassport is a cryptographic and evidence-driven talent verification architecture. It bridges the gap between raw student code repositories and high-conviction technical hiring through explainable matching algorithms.
            </p>
          </div>

          {/* Col 2: Architectural Specs */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Platform Architecture
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>React 18 & TypeScript (Strict Mode)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Tailwind CSS & Glassmorphism</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>Framer Motion & Lucide Icons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Recharts Data Visualizations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Modular Supabase Data Layer</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Privacy & Demo Policy */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Lock size={13} />
              Demonstration Policy
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All profiles (including Arjun Mehta and Priya Sharma), academic institutions (Nova Institute of Technology), project repositories, and challenge matching scores are purely fictional demonstrations.
            </p>
            <div className="mt-3">
              <span className="text-[11px] font-mono text-slate-500 block">
                Zero personal identifiable data used.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SkillPassport Demonstration Environment. Built for hackathon showcase.
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hover:text-cyan-300 cursor-pointer">Demonstration Terms</span>
            <span>•</span>
            <span className="hover:text-cyan-300 cursor-pointer">Anonymization Protocols</span>
            <span>•</span>
            <span className="hover:text-cyan-300 cursor-pointer">Verification Rubric</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
