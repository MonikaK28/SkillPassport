import React, { useState } from 'react';
import { StudentProfile } from '../../types';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { 
  Award, 
  ShieldCheck, 
  QrCode, 
  Download, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Lock, 
  Building2, 
  MapPin, 
  Calendar,
  Sparkles,
  GitCommit,
  Layers,
  FileCheck
} from 'lucide-react';

interface SkillPassportViewProps {
  student: StudentProfile;
}

export const SkillPassportView: React.FC<SkillPassportViewProps> = ({ student }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [integrityVerified, setIntegrityVerified] = useState(true);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://skillpassport.demo/verify/${student.passportId}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Verifiable Skill Passport
            </h1>
            <DemoBadge label="Demonstration Profile" variant="cyan" size="md" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            A tamper-evident, project-grounded skill credential. Demonstrates proof of competence without requiring raw resume assertions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors border border-slate-700"
          >
            {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{isCopied ? 'Link Copied' : 'Share Verification Link'}</span>
          </button>

          <button
            onClick={() => alert('Demo Passport Export: PDF generation is simulated in this demonstration environment.')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all"
          >
            <Download size={14} />
            <span>Export Verified Passport</span>
          </button>
        </div>
      </div>

      {/* Verifiable Passport Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: The Digital Passport Credential Card */}
        <div className="lg:col-span-8 space-y-6">
          <div className="relative rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-[#0e1420] to-[#0a0e17] border-2 border-cyan-500/40 shadow-[0_0_35px_-5px_rgba(6,182,212,0.2)] overflow-hidden">
            
            {/* Holographic Watermark / Top Band */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                    OFFICIAL SKILL PASSPORT
                  </div>
                  <div className="text-xl font-extrabold text-white tracking-tight">
                    Competency Credential
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Passport Serial</div>
                <div className="text-sm font-mono font-bold text-cyan-300">{student.passportId}</div>
                <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  DEMO VERIFIED
                </span>
              </div>
            </div>

            {/* Profile Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
              <img
                src={student.avatarUrl}
                alt={student.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/50 shadow-md"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-black text-white">{student.name}</h2>
                  <DemoBadge label="Demonstration Profile" variant="amber" size="sm" />
                </div>
                <p className="text-sm text-cyan-300 font-medium">{student.role}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Building2 size={13} /> {student.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {student.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Competency Indicators Table */}
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center justify-between">
                <span>Verified Competency Ledger</span>
                <span className="text-[11px] text-slate-500">Demonstration Indicator / 100</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {student.skills.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-200">{s.skill}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {s.evidenceCount} evidence links • {s.category}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold font-mono text-cyan-400">
                        {s.score}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-mono">Verified</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential Hash & Security Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                  <Lock size={12} className="text-cyan-400" />
                  <span>Tamper-Resistant Demonstration Signature:</span>
                </div>
                <div className="text-[10px] font-mono text-cyan-400/80 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                  SHA256: 9b2d8f61c305e714aa03184f479d2b1897c5e206ab41e0ff
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-black">
                  <QrCode size={40} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Col: Evidence Audit Trail & Rubric */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard>
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <FileCheck size={16} className="text-cyan-400" />
              Evidence Provenance
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Every score in the Skill Passport corresponds to transparent git commits and reproducible tests.
            </p>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="font-semibold text-slate-200">Smart Document Assistant</div>
                <div className="text-slate-400 text-[11px] mt-0.5">3,840 LOC • 47 Commits</div>
                <div className="flex gap-1.5 mt-2">
                  <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px]">Python: 91</span>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px]">AI/ML: 86</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="font-semibold text-slate-200">Weather Intelligence Dashboard</div>
                <div className="text-slate-400 text-[11px] mt-0.5">2,420 LOC • 32 Commits</div>
                <div className="flex gap-1.5 mt-2">
                  <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px]">REST APIs: 87</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px]">Viz: 84</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="font-semibold text-slate-200">Campus Event Management</div>
                <div className="text-slate-400 text-[11px] mt-0.5">5,120 LOC • 63 Commits</div>
                <div className="flex gap-1.5 mt-2">
                  <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px]">React: 79</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 text-[10px]">SQL: 82</span>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
              Audit Transparency
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Competencies are scored deterministically based on static code parsing, automated test coverage, and micro-challenge benchmarks.
            </p>
            <div className="mt-3 text-[11px] font-mono text-amber-300 bg-amber-950/20 p-2.5 rounded-lg border border-amber-500/20">
              Demo Notice: Fictional demonstration credentials. Not affiliated with any real academic body.
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
