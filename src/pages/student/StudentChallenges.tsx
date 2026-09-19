import React, { useState } from 'react';
import { MicroChallenge } from '../../types';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { 
  Layers, 
  Clock, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Send, 
  Sparkles, 
  AlertCircle,
  Building2,
  Code2,
  GitBranch
} from 'lucide-react';

interface StudentChallengesProps {
  challenges: MicroChallenge[];
}

export const StudentChallenges: React.FC<StudentChallengesProps> = ({ challenges }) => {
  const [selectedChallenge, setSelectedChallenge] = useState<MicroChallenge>(challenges[0]);
  const [repoUrl, setRepoUrl] = useState('https://github.com/nova-demo/weather-intelligence-dash');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Micro-Challenges
            </h1>
            <DemoBadge label="Demonstration Challenges" variant="cyan" size="md" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Short, focused coding challenges vetted by partner recruiters. Solve real problems to generate verifiable evidence proofs.
          </p>
        </div>
      </div>

      {/* Main Grid: Challenge list + Detail & Submit Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Challenges List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
            Active Challenges ({challenges.length})
          </div>

          {challenges.map((c) => {
            const isSelected = selectedChallenge.id === c.id;
            return (
              <GlassCard
                key={c.id}
                onClick={() => {
                  setSelectedChallenge(c);
                  setSubmitted(false);
                }}
                hoverEffect
                className={`p-5 cursor-pointer transition-all border ${
                  isSelected
                    ? 'border-cyan-500/60 bg-slate-900/90 shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)]'
                    : 'border-slate-800/80 bg-slate-950/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 flex items-center gap-1">
                    <Clock size={12} /> {c.duration}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                    {c.difficulty}
                  </span>
                </div>

                <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                  {c.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {c.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {c.requiredSkills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Building2 size={12} /> {c.company} (Demo)
                  </span>
                  <span className="text-emerald-400 font-medium">
                    {c.submissionsCount} Submissions
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Right Col: Challenge Details & Submission Terminal */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow="cyan">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-white">
                    {selectedChallenge.title}
                  </h2>
                  <DemoBadge label="Demo Challenge" variant="amber" size="sm" />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                  <span>Sponsor: <strong className="text-slate-200">{selectedChallenge.company}</strong></span>
                  <span>•</span>
                  <span>Duration: <strong className="text-slate-200">{selectedChallenge.duration}</strong></span>
                  <span>•</span>
                  <span className="text-cyan-400 font-mono font-medium">{selectedChallenge.reward}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-mono mb-1">
                  Challenge Overview
                </h4>
                <p className="text-slate-400">
                  {selectedChallenge.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-mono mb-2">
                  Required Competency Alignment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedChallenge.requiredSkills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 text-xs font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] font-mono mb-2">
                  Automated Evaluation Criteria
                </h4>
                <div className="space-y-2">
                  {selectedChallenge.evaluationCriteria.map((crit, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">{crit.criterion}</span>
                      <span className="text-cyan-400 font-mono font-bold">{crit.weight}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submission Form */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
                <Code2 size={15} className="text-cyan-400" />
                Submit Demonstration Solution
              </h4>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    Challenge Evidence Submitted Successfully!
                  </div>
                  <p className="text-slate-300">
                    Repository <code>{repoUrl}</code> queued for AST syntax review and automated pytest scoring.
                  </p>
                  <div className="text-[11px] font-mono text-emerald-400">
                    Benchmark Result: 91% Compatibility • Candidate #SP-1048 updated.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-slate-400 text-xs mb-1">
                      Repository URL (GitHub / Demo Source)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        placeholder="https://github.com/username/project"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 text-xs font-mono focus:outline-none focus:border-cyan-400 pl-9"
                        required
                      />
                      <GitBranch size={15} className="absolute left-3 top-3 text-slate-500" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send size={14} className={isSubmitting ? 'animate-spin' : ''} />
                    <span>{isSubmitting ? 'Verifying Commits...' : 'Submit Repository for Verification'}</span>
                  </button>
                </form>
              )}
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
