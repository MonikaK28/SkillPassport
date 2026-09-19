import React from 'react';
import { ExplainableFactor } from '../types';
import { CheckCircle2, HelpCircle } from 'lucide-react';

interface ExplainableFactorBarProps {
  factors: ExplainableFactor[];
  overallMatch: number;
  evidenceStrength?: number;
}

export const ExplainableFactorBar: React.FC<ExplainableFactorBarProps> = ({
  factors,
  overallMatch,
  evidenceStrength
}) => {
  return (
    <div className="space-y-4">
      {/* Overall Summary Bar */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
            Demonstration Matching Algorithm
            <span title="Calculated based on demonstration project syntax scans and commit volume. Not a validated hiring guarantee." className="text-slate-500 cursor-help">
              <HelpCircle size={13} />
            </span>
          </div>
          <div className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
            Overall Challenge Match: <span className="text-cyan-400">{overallMatch}%</span>
          </div>
        </div>

        {evidenceStrength !== undefined && (
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Evidence Strength
            </div>
            <div className="text-lg font-bold text-emerald-400">
              {evidenceStrength}%
            </div>
          </div>
        )}
      </div>

      {/* Factor Breakdown */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center justify-between">
          <span>Explainable Compatibility Factors</span>
          <span className="text-[11px] font-mono text-slate-400 font-normal">Relative Weighting</span>
        </div>

        {factors.map((item, index) => (
          <div
            key={index}
            className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between text-sm mb-1.5">
              <div className="flex items-center gap-2 font-medium text-slate-200">
                <CheckCircle2 size={15} className="text-cyan-400" />
                <span>{item.factor}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">{item.weight}</span>
                <span className="font-mono font-bold text-cyan-300 text-sm">
                  {item.compatibility}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${item.compatibility}%` }}
              />
            </div>

            {/* Rationale explanation */}
            <p className="text-xs text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
