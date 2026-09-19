import React from 'react';
import { MicroChallenge, AnonymizedCandidate } from '../../types';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { 
  Layers, 
  Clock, 
  Award, 
  Building2, 
  Users, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink,
  Sliders,
  ShieldCheck,
  Code2
} from 'lucide-react';

interface ChallengeDetailsProps {
  challenge: MicroChallenge;
  candidates: AnonymizedCandidate[];
  onNavigateTab: (tab: string) => void;
  onSelectCandidate: (candidate: AnonymizedCandidate) => void;
}

export const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({
  challenge,
  candidates,
  onNavigateTab,
  onSelectCandidate
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Back Button & Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={() => onNavigateTab('recruiter-dashboard')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 mb-2 transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to Recruiter Dashboard</span>
          </button>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {challenge.title}
            </h1>
            <DemoBadge label="Demo Challenge" variant="amber" size="sm" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Sponsored by <strong>{challenge.company}</strong> • Active Challenge Details & Candidate Benchmark Matrix.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('candidate-matching')}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold border border-cyan-500/40 transition-colors"
          >
            Evaluate Matches ({candidates.length})
          </button>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Total Submissions</div>
          <div className="text-2xl font-extrabold text-white mt-1">{challenge.submissionsCount}</div>
          <div className="text-[10px] text-cyan-400 font-mono">AST Syntax Audited</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Challenge Duration</div>
          <div className="text-2xl font-extrabold text-white mt-1">{challenge.duration}</div>
          <div className="text-[10px] text-indigo-400 font-mono">Time-capped</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Difficulty Grade</div>
          <div className="text-2xl font-extrabold text-amber-400 mt-1">{challenge.difficulty}</div>
          <div className="text-[10px] text-slate-500 font-mono">Production Scenario</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Average Match</div>
          <div className="text-2xl font-extrabold text-emerald-400 mt-1">87.2%</div>
          <div className="text-[10px] text-emerald-400/80 font-mono">High Quality Pool</div>
        </div>
      </div>

      {/* Challenge Spec & Criteria Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Description & Rubric */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow="cyan">
            <h3 className="text-base font-bold text-white mb-3">
              Technical Specification
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {challenge.description}
            </p>

            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Mandatory Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {challenge.requiredSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 text-xs font-semibold font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Evaluation Criteria Weights */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">
                Scoring Rubric Weighting
              </h4>
              <div className="space-y-2.5">
                {challenge.evaluationCriteria.map((c, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-200">{c.criterion}</span>
                    <span className="font-mono font-bold text-cyan-400">{c.weight}%</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Col: Top Anonymized Submissions for this Challenge */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Users size={16} className="text-indigo-400" />
                Submitted Code Solutions
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                Top 4 Ranked
              </span>
            </div>

            <div className="space-y-3">
              {candidates.map((cand) => (
                <div
                  key={cand.id}
                  onClick={() => {
                    onSelectCandidate(cand);
                    onNavigateTab('candidate-matching');
                  }}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer transition-all flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-mono font-bold text-slate-200">
                      {cand.maskedId}
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      Evidence Strength: <strong className="text-emerald-400">{cand.evidenceStrength}%</strong>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono font-extrabold text-cyan-400 text-sm">
                      {cand.challengeMatch}%
                    </div>
                    <div className="text-[10px] text-slate-500">Compatibility</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigateTab('candidate-matching')}
              className="w-full mt-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
            >
              Open Explainable Candidate Matcher →
            </button>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
