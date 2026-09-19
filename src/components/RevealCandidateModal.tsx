import React from 'react';
import { AnonymizedCandidate } from '../types';
import { DemoBadge } from './DemoBadge';
import { UserCheck, MapPin, Building2, Mail, ExternalLink, ShieldCheck, X } from 'lucide-react';

interface RevealCandidateModalProps {
  candidate: AnonymizedCandidate | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmReveal: (id: string) => void;
}

export const RevealCandidateModal: React.FC<RevealCandidateModalProps> = ({
  candidate,
  isOpen,
  onClose,
  onConfirmReveal
}) => {
  if (!isOpen || !candidate) return null;

  const isAlreadyRevealed = candidate.isRevealed;
  const profile = candidate.revealedProfile;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 to-[#0c1017] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <UserCheck size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  {isAlreadyRevealed ? 'Demonstration Candidate Profile' : 'Reveal Candidate Identity'}
                </h3>
                <DemoBadge label="Demonstration Profile" variant="amber" size="sm" />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isAlreadyRevealed
                  ? 'Fictional student identity revealed for recruiter demo.'
                  : `Reviewing anonymized profile for ${candidate.maskedId}.`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {!isAlreadyRevealed ? (
            /* Confirmation Step */
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm">
                <p className="font-semibold mb-1">Anonymized Evaluation Mode Active</p>
                <p className="text-xs text-amber-300/90 leading-relaxed">
                  Candidate names, contact emails, and college names are shielded to ensure bias-free skill evaluations.
                  Confirming this action will reveal this candidate's fictional demonstration profile.
                </p>
              </div>

              {/* Quick Anonymized Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Candidate ID</div>
                  <div className="text-sm font-bold text-white mt-1 font-mono">{candidate.id}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Challenge Match</div>
                  <div className="text-sm font-bold text-cyan-400 mt-1">{candidate.challengeMatch}%</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Evidence Strength</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">{candidate.evidenceStrength}%</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Top Skill</div>
                  <div className="text-sm font-bold text-indigo-400 mt-1">
                    {candidate.skills[0]?.name} ({candidate.skills[0]?.score})
                  </div>
                </div>
              </div>

              {/* Verified Projects in Anonymized View */}
              <div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Verified Demonstration Projects
                </div>
                <div className="space-y-2">
                  {candidate.topProjects.map((p, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-slate-200">{p.name}</span>
                        <div className="flex gap-1.5 mt-1">
                          {p.technologies.map((t, ti) => (
                            <span key={ti} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="text-cyan-400 font-mono text-[11px] bg-cyan-950/40 px-2 py-1 rounded border border-cyan-800/40">
                        {p.evidenceType}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Revealed Fictional Profile */
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900 to-indigo-950/30 border border-cyan-500/30 flex items-center gap-5 flex-wrap sm:flex-nowrap">
                <img
                  src={profile?.avatarUrl}
                  alt={profile?.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-lg"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-xl font-bold text-white">{profile?.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <ShieldCheck size={12} /> Verified Demonstration Student
                    </span>
                  </div>
                  <p className="text-sm text-cyan-300">{profile?.role}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-1 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Building2 size={13} className="text-slate-500" />
                      {profile?.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-slate-500" />
                      {profile?.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail size={13} className="text-slate-500" />
                      {profile?.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Competency Summary */}
              <div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  Demonstration Competency Indicators
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {candidate.skills.map((s, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">{s.name}</div>
                      <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">
                        {s.score}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Demo Indicator</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completed Challenges */}
              <div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Completed Micro-Challenges
                </div>
                <div className="space-y-2">
                  {candidate.challengeHistory.map((c, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-slate-200">{c.challengeTitle}</div>
                        <div className="text-slate-500 text-[11px]">Duration: {c.completionTime}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 font-bold font-mono text-sm">{c.score}%</span>
                        <div className="text-[10px] text-slate-500">Benchmark</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Privacy Notice:</span> This is an entirely fictional student profile generated for testing and demonstration of the SkillPassport recruitment matching protocol.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 flex items-center justify-end gap-3 bg-slate-950/60">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          {!isAlreadyRevealed ? (
            <button
              onClick={() => onConfirmReveal(candidate.id)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg hover:from-cyan-400 hover:to-indigo-500 transition-all flex items-center gap-2"
            >
              <UserCheck size={15} />
              <span>Confirm & Reveal Candidate</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-all flex items-center gap-2 border border-slate-700"
            >
              <ExternalLink size={14} />
              <span>Continue Review</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
