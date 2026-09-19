import React from 'react';
import { PlatformAnalytics } from '../types';
import { GlassCard } from '../components/GlassCard';
import { DemoBadge } from '../components/DemoBadge';
import { 
  BarChart3, 
  Users, 
  Code2, 
  Award, 
  Layers, 
  TrendingUp, 
  ShieldAlert, 
  Clock, 
  Sparkles,
  PieChart as PieIcon,
  CheckCircle2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

interface AnalyticsPageProps {
  analytics: PlatformAnalytics;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ analytics }) => {
  const chartColors = ['#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#10b981'];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header with Prominent Demo Label */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Platform Verification Analytics
            </h1>
            <DemoBadge label="Demo Dataset" variant="amber" size="md" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Aggregate telemetry on repository AST code scanning, automated test executions, and anonymized employer matching velocity.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-300 bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-500/30 flex items-center gap-1.5">
            <ShieldAlert size={13} />
            <span>Demonstration Data Only</span>
          </span>
        </div>
      </div>

      {/* 4 Primary KPI Tiles with Required Fictional Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Verified Students: 128 */}
        <GlassCard glow="cyan" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Verified Students
            </span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Users size={18} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white mt-2 font-mono">
            {analytics.verifiedStudents}
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
            <span className="text-cyan-400 font-mono">+14% this month</span>
            <DemoBadge label="Demo Data" variant="amber" size="sm" />
          </div>
        </GlassCard>

        {/* Projects Analyzed: 347 */}
        <GlassCard glow="indigo" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Projects Analyzed
            </span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Code2 size={18} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white mt-2 font-mono">
            {analytics.projectsAnalyzed}
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
            <span className="text-indigo-400 font-mono">1.2M LOC Scanned</span>
            <DemoBadge label="Demo Data" variant="amber" size="sm" />
          </div>
        </GlassCard>

        {/* Skills Analyzed: 1,240 */}
        <GlassCard glow="emerald" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Skills Analyzed
            </span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Award size={18} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white mt-2 font-mono">
            {analytics.skillsAnalyzed.toLocaleString()}
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
            <span className="text-emerald-400 font-mono">AST Mapping Active</span>
            <DemoBadge label="Demo Data" variant="amber" size="sm" />
          </div>
        </GlassCard>

        {/* Active Challenges: 18 */}
        <GlassCard glow="none" className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Active Challenges
            </span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Layers size={18} />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white mt-2 font-mono">
            {analytics.activeChallenges}
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[11px]">
            <span className="text-amber-300 font-mono">12 Partner Labs</span>
            <DemoBadge label="Demo Data" variant="amber" size="sm" />
          </div>
        </GlassCard>

      </div>

      {/* Visual Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Top Skills Demanded by Challenges */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow="cyan">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BarChart3 size={18} className="text-cyan-400" />
                  Top Verified Competencies in Recruiter Demand
                </h3>
                <p className="text-xs text-slate-400">
                  Aggregate demonstration counts across live challenge listings.
                </p>
              </div>
              <DemoBadge label="Demonstration Data" variant="amber" size="sm" />
            </div>

            <div className="w-full h-72 pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.topSkillsDemand} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <XAxis 
                    dataKey="skill" 
                    tick={{ fill: '#94a3b8', fontSize: 11 }} 
                    interval={0}
                    angle={-15}
                    textAnchor="end"
                  />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '10px', fontSize: '12px' }}
                    itemStyle={{ color: '#06b6d4' }}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                    {analytics.topSkillsDemand.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>

        {/* Right: Real-time Verification Stream (Simulated) */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock size={16} className="text-cyan-400" />
                Live Verification Telemetry
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Active Feed
              </span>
            </div>

            <div className="space-y-3">
              {analytics.recentVerifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>{item.skill} verified for <strong>{item.studentId}</strong></span>
                    </div>
                    <div className="text-slate-500 text-[10px] font-mono">
                      Timestamp: {item.timestamp}
                    </div>
                  </div>

                  <div className="text-right font-mono font-bold text-cyan-300 text-sm">
                    {item.score}/100
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-[11px] text-amber-200/90 leading-relaxed">
              <strong>Dataset Disclaimer:</strong> These figures represent synthetic seeded metrics. Do not treat as real employment records or audited placement outcomes.
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
