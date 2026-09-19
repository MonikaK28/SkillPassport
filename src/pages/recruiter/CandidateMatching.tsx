import React, { useState } from 'react';
import { AnonymizedCandidate } from '../../types';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { ExplainableFactorBar } from '../../components/ExplainableFactorBar';
import { RevealCandidateModal } from '../../components/RevealCandidateModal';
import { 
  UserCheck, 
  Eye, 
  ShieldAlert, 
  Search, 
  SlidersHorizontal, 
  Building2, 
  MapPin, 
  Mail, 
  ExternalLink,
  Lock,
  Unlock,
  CheckCircle2,
  Code2,
  FolderGit2
} from 'lucide-react';

interface CandidateMatchingProps {
  candidates: AnonymizedCandidate[];
  onRevealCandidate: (id: string) => void;
  selectedCandidate: AnonymizedCandidate | null;
  onSelectCandidate: (candidate: AnonymizedCandidate) => void;
}

export const CandidateMatching: React.FC<CandidateMatchingProps> = ({
  candidates,
  onRevealCandidate,
  selectedCandidate,
  onSelectCandidate
}) => {
  const [activeCandidate, setActiveCandidate] = useState<AnonymizedCandidate>(
    selectedCandidate || candidates[0]
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [filterSkill, setFilterSkill] = useState<string>('All');
  const [minMatch, setMinMatch] = useState<number>(80);

  const filteredCandidates = candidates.filter((c) => {
    if (c.challengeMatch < minMatch) return false;
    if (filterSkill === 'All') return true;
    return c.skills.some((s) => s.name.toLowerCase().includes(filterSkill.toLowerCase()));
  });

  const handleOpenReveal = (c: AnonymizedCandidate) => {
    setActiveCandidate(c);
    setModalOpen(true);
  };

  const handleConfirmReveal = (id: string) => {
    onRevealCandidate(id);
    setActiveCandidate((prev) => ({ ...prev, isRevealed: true }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Anonymized Candidate Matching
            </h1>
            <DemoBadge label="Demonstration Matching Algorithm" variant="amber" size="md" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Review technical candidate compatibility objectively through cryptographic code evidence. Personal demographic attributes are strictly protected until intentional unlock.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-800/40 flex items-center gap-1.5">
            <Lock size={13} /> Bias-Free Anonymization Active
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <SlidersHorizontal size={13} /> Filter By Skill:
          </span>
          {['All', 'Python', 'REST APIs', 'Git', 'Data Visualization'].map((skill) => (
            <button
              key={skill}
              onClick={() => setFilterSkill(skill)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterSkill === skill
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Min Match:</span>
          <input
            type="range"
            min="70"
            max="95"
            value={minMatch}
            onChange={(e) => setMinMatch(Number(e.target.value))}
            className="w-24 accent-cyan-400"
          />
          <span className="font-mono font-bold text-cyan-300">{minMatch}%</span>
        </div>
      </div>

      {/* Candidate Pool + Deep Explainability Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Anonymized Cards List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
            Candidate Pipeline ({filteredCandidates.length} Matched)
          </div>

          {filteredCandidates.map((cand) => {
            const isSelected = activeCandidate.id === cand.id;
            return (
              <GlassCard
                key={cand.id}
                onClick={() => setActiveCandidate(cand)}
                hoverEffect
                className={`p-5 cursor-pointer transition-all border ${
                  isSelected
                    ? 'border-cyan-500/60 bg-slate-900 shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)]'
                    : 'border-slate-800/80 bg-slate-950/60'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-cyan-300">
                        {cand.maskedId}
                      </span>
                      {cand.isRevealed ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <Unlock size={10} /> {cand.revealedProfile?.name}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 flex items-center gap-1">
                          <Lock size={10} /> Shielded
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-slate-400">
                      Evidence Strength: <strong className="text-emerald-400">{cand.evidenceStrength}%</strong>
                    </div>

                    {/* Competency Indicators */}
                    <div className="grid grid-cols-2 gap-1.5 pt-1.5 text-[11px] font-mono">
                      {cand.skills.map((s, sidx) => (
                        <div key={sidx} className="text-slate-300 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
                          {s.name}: <span className="text-cyan-300 font-bold">{s.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Match Score Card */}
                  <div className="text-right flex flex-col items-end justify-between self-stretch">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 min-w-[80px] text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Match</div>
                      <div className="text-xl font-black text-cyan-400 font-mono">
                        {cand.challengeMatch}%
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenReveal(cand);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 mt-3 ${
                        cand.isRevealed
                          ? 'bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30'
                          : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40'
                      }`}
                    >
                      {cand.isRevealed ? <Eye size={13} /> : <Unlock size={13} />}
                      <span>{cand.isRevealed ? 'View Profile' : 'Reveal'}</span>
                    </button>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Right Col: Deep Explainability & Match Breakdown for Selected Candidate */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow="cyan">
            
            {/* Header for Selected Candidate */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-5 mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-xl font-bold text-white">
                    {activeCandidate.isRevealed
                      ? `${activeCandidate.revealedProfile?.name} (${activeCandidate.maskedId})`
                      : activeCandidate.maskedId}
                  </h2>
                  <DemoBadge
                    label={activeCandidate.isRevealed ? 'Revealed Demo Profile' : 'Anonymized Candidate'}
                    variant={activeCandidate.isRevealed ? 'emerald' : 'amber'}
                    size="sm"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Evaluated against challenge: <strong>Build a Weather API Dashboard (48 hours)</strong>
                </p>
              </div>

              <button
                onClick={() => handleOpenReveal(activeCandidate)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-lg transition-all flex items-center gap-2 ${
                  activeCandidate.isRevealed
                    ? 'bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/40'
                    : 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-cyan-500/20'
                }`}
              >
                {activeCandidate.isRevealed ? <Eye size={14} /> : <Unlock size={14} />}
                <span>{activeCandidate.isRevealed ? 'Full Profile Card' : 'Reveal Candidate Identity'}</span>
              </button>
            </div>

            {/* Revealed Profile Preview if unmasked */}
            {activeCandidate.isRevealed && activeCandidate.revealedProfile && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/20 via-slate-900 to-cyan-950/20 border border-emerald-500/30 mb-6 flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <img
                  src={activeCandidate.revealedProfile.avatarUrl}
                  alt={activeCandidate.revealedProfile.name}
                  className="w-14 h-14 rounded-xl object-cover border border-emerald-500/40"
                />
                <div className="space-y-0.5 text-xs">
                  <div className="font-bold text-white text-sm">
                    {activeCandidate.revealedProfile.name}
                  </div>
                  <div className="text-cyan-300">{activeCandidate.revealedProfile.role}</div>
                  <div className="text-slate-400 flex items-center gap-3 pt-1">
                    <span>{activeCandidate.revealedProfile.institution}</span>
                    <span>•</span>
                    <span>{activeCandidate.revealedProfile.location}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Explainable Factor Bar (Requirement) */}
            <ExplainableFactorBar
              factors={activeCandidate.explainableFactors}
              overallMatch={activeCandidate.challengeMatch}
              evidenceStrength={activeCandidate.evidenceStrength}
            />

            {/* Verified Project Repositories */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <FolderGit2 size={16} className="text-cyan-400" />
                Audited Project Evidence
              </h4>

              <div className="space-y-2.5">
                {activeCandidate.topProjects.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-slate-200">{p.name}</div>
                      <div className="flex gap-1.5 mt-1">
                        {p.technologies.map((t, ti) => (
                          <span
                            key={ti}
                            className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-cyan-400 font-mono text-[11px] bg-cyan-950/30 px-2 py-1 rounded border border-cyan-800/40">
                      {p.evidenceType}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-Challenge Performance */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3">
                Challenge Benchmark History
              </h4>
              <div className="space-y-2">
                {activeCandidate.challengeHistory.map((ch, chidx) => (
                  <div
                    key={chidx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="text-slate-200 font-medium">{ch.challengeTitle}</span>
                      <span className="text-slate-500 text-[11px] ml-2">({ch.completionTime})</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-400">{ch.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 italic">
              Algorithm Note: Matching compatibility is a demonstration calculation derived from repository AST nodes and commit regularity. It does not predict future job performance.
            </div>

          </GlassCard>
        </div>

      </div>

      {/* Reveal Candidate Modal */}
      <RevealCandidateModal
        candidate={activeCandidate}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirmReveal={handleConfirmReveal}
      />

    </div>
  );
};
