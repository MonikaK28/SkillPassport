import React from 'react';
import { StudentProfile } from '../../types';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { 
  GraduationCap, 
  MapPin, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  ScanSearch, 
  Award, 
  GitFork, 
  Code2, 
  Layers, 
  ExternalLink, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';

interface StudentDashboardProps {
  student: StudentProfile;
  onNavigateTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  student,
  onNavigateTab
}) => {
  const radarData = student.skills.map((s) => ({
    subject: s.skill,
    score: s.score,
    fullMark: 100
  }));

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Banner Notice */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-cyan-500/10 border border-amber-500/30 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
            <AlertCircle size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-white text-sm">Demonstration Profile Active</span>
              <DemoBadge label="Fictional Candidate" variant="amber" size="sm" />
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              This portfolio represents fictional candidate <strong>{student.name}</strong> from <strong>{student.institution}</strong>. All scores are demonstration competency indicators.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigateTab('evidence')}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 flex items-center gap-2 shrink-0 transition-all"
        >
          <ScanSearch size={14} />
          <span>Run Evidence Scan</span>
        </button>
      </div>

      {/* Hero Profile Overview */}
      <GlassCard glow="cyan" className="p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={student.avatarUrl}
                alt={student.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10"
              />
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-emerald-500 text-black shadow-md" title="Verified Demo Status">
                <ShieldCheck size={16} />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {student.name}
                </h1>
                <DemoBadge label="Demonstration Profile" variant="cyan" size="sm" />
              </div>

              <p className="text-sm text-cyan-300 font-medium">
                {student.role}
              </p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Building2 size={13} className="text-slate-400" />
                  {student.institution}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={13} className="text-slate-400" />
                  {student.specialization}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-400" />
                  {student.location}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                  Passport ID: <span className="text-cyan-300 font-semibold">{student.passportId}</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded-md border border-emerald-800/40 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Cryptographic Proof Valid
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stat Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full lg:w-auto">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-mono">Verified Skills</div>
              <div className="text-xl font-extrabold text-white mt-0.5">7</div>
              <div className="text-[10px] text-cyan-400">Indicators Mapped</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-mono">Analyzed Repos</div>
              <div className="text-xl font-extrabold text-white mt-0.5">3</div>
              <div className="text-[10px] text-emerald-400">11.3k LOC Scanned</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-mono">Challenges</div>
              <div className="text-xl font-extrabold text-white mt-0.5">{student.completedChallengesCount}</div>
              <div className="text-[10px] text-indigo-400">Benchmarked</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-mono">Avg Competency</div>
              <div className="text-xl font-extrabold text-cyan-300 mt-0.5">85.3</div>
              <div className="text-[10px] text-slate-500">Demo Score Scale</div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Main Grid: Skills Breakdown + Competency Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Skill Radar & Proof Badges */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Award size={18} className="text-cyan-400" />
                  Demonstration Competency Indicators
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Extracted from AST syntax analysis, commit history, and test runner outputs.
                </p>
              </div>
              <DemoBadge label="Demo Indicators" variant="amber" size="sm" />
            </div>

            {/* Competency Bars */}
            <div className="space-y-3.5 mt-6">
              {student.skills.map((s, index) => (
                <div key={index} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-200">{s.skill}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        {s.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {s.previousScore && s.previousScore !== s.score && (
                        <span className="text-[11px] font-mono text-emerald-400 flex items-center">
                          <TrendingUp size={11} className="mr-0.5" />
                          {s.previousScore} → {s.score}
                        </span>
                      )}
                      <span className="font-mono font-bold text-cyan-300 text-sm">{s.score}/100</span>
                    </div>
                  </div>

                  {/* Visual Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                      style={{ width: `${s.score}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5">
                    <span>{s.evidenceCount} verified evidence items</span>
                    <span>Confidence: {s.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 italic">
              Note: Competency indicator numbers (0-100) are demonstration metrics intended to visualize repository evidence depth. They do not constitute scientifically validated psychometric or IQ tests.
            </div>
          </GlassCard>
        </div>

        {/* Right Col: Competency Radar Visualization */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard glow="indigo" className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-full flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu size={16} className="text-indigo-400" />
                Competency Topology
              </h4>
              <span className="text-[10px] font-mono text-slate-400">7 Axes</span>
            </div>

            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#1e293b" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#94a3b8', fontSize: 11 }} 
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    tick={{ fill: '#475569', fontSize: 9 }} 
                  />
                  <Radar
                    name="Competency"
                    dataKey="score"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400">Verification Hash:</span>
              <span className="font-mono text-cyan-400 text-[11px]">sha256:4f8e...92b1</span>
            </div>
          </GlassCard>

          {/* Quick CTA to Micro-Challenge */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider">
                Recommended Micro-Challenge
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                48 hrs
              </span>
            </div>
            <h4 className="text-base font-bold text-white">
              Build a Weather API Dashboard
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nexora Labs is seeking candidates with Python & REST API proof. Complete the challenge to unlock direct anonymized recruiter review.
            </p>
            <button
              onClick={() => onNavigateTab('challenges')}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
            >
              <span>View Challenge Details</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Fictional Demonstration Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <Code2 size={20} className="text-cyan-400" />
              Verified Fictional Projects
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Code repositories audited for syntax complexity, test assertions, and architecture.
            </p>
          </div>
          <DemoBadge label="Demonstration Projects" variant="amber" size="sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {student.projects.map((proj) => (
            <GlassCard key={proj.id} hoverEffect className="flex flex-col justify-between p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                    {proj.repoName}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 size={11} /> {proj.verifiedStatus}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Verified Evidence Points
                  </div>
                  {proj.keyHighlights.slice(0, 2).map((h, hidx) => (
                    <div key={hidx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <span className="text-cyan-400 shrink-0">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span>{proj.locCount} LOC</span>
                  <span>{proj.commitCount} Commits</span>
                </div>
                <div className="font-mono text-cyan-400 font-semibold">
                  Evidence: {proj.evidenceStrength}%
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

    </div>
  );
};
