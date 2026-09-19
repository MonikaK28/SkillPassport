import React, { useState } from 'react';
import { MicroChallenge } from '../../types';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { PlusCircle, CheckCircle2, Layers, Clock, Award, Sparkles, Building2 } from 'lucide-react';

interface CreateChallengeProps {
  onCreateChallenge: (challenge: Omit<MicroChallenge, 'id' | 'submissionsCount' | 'status'>) => void;
  onNavigateTab: (tab: string) => void;
}

export const CreateChallenge: React.FC<CreateChallengeProps> = ({
  onCreateChallenge,
  onNavigateTab
}) => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('48 hours');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [skills, setSkills] = useState('Python, REST APIs, Git, Data Visualization');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('Guaranteed Technical Interview + $250 Stipend');
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const skillsArray = skills.split(',').map((s) => s.trim()).filter(Boolean);

    onCreateChallenge({
      title,
      duration,
      difficulty,
      requiredSkills: skillsArray,
      description,
      company: 'Nexora Labs',
      reward,
      evaluationCriteria: [
        { criterion: 'API Resilience & Error Handling', weight: 35 },
        { criterion: 'Clean Architecture & Type Safety', weight: 35 },
        { criterion: 'Commit Hygiene & Testing', weight: 30 }
      ]
    });

    setIsCreated(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Launch Micro-Challenge
          </h1>
          <DemoBadge label="Demo Challenge Builder" variant="indigo" size="md" />
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Post an objective technical coding challenge to attract pre-vetted student builders with verifiable repository evidence.
        </p>
      </div>

      {isCreated ? (
        <GlassCard glow="emerald" className="p-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-xl font-extrabold text-white">
            Micro-Challenge Created (Demo Sandbox)
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            <strong>"{title}"</strong> has been broadcast to the student talent pool. Candidates matching your required skill profile can now submit repository evidence.
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsCreated(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
            >
              Post Another Challenge
            </button>
            <button
              onClick={() => onNavigateTab('recruiter-dashboard')}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md"
            >
              Return to Recruiter Dashboard
            </button>
          </div>
        </GlassCard>
      ) : (
        <GlassCard glow="cyan" className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                Challenge Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Build an Automated Financial Sentiment Pipeline"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Duration & Difficulty */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Challenge Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="24 hours">24 hours (Sprint)</option>
                  <option value="48 hours">48 hours (Standard)</option>
                  <option value="72 hours">72 hours (Extended Deep Dive)</option>
                  <option value="7 days">7 days (Capstone Mini-Project)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Difficulty Level
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
                >
                  <option value="Beginner">Beginner (Foundational)</option>
                  <option value="Intermediate">Intermediate (Production-Simulated)</option>
                  <option value="Advanced">Advanced (High-Scale Systems)</option>
                </select>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                Required Skills (Comma-Separated) *
              </label>
              <input
                type="text"
                required
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Python, FastAPI, Docker, SQL"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Candidate AST algorithms will automatically verify code submissions against these competencies.
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                Challenge Specification & Objectives *
              </label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the architectural challenge, required endpoints, input test cases, and expectations..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Reward */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                Incentive / Outcome
              </label>
              <input
                type="text"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Submit button */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Building2 size={14} className="text-slate-500" />
                Posting as <strong>Nexora Labs</strong> (Demo Recruiter Priya Sharma)
              </span>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2"
              >
                <PlusCircle size={15} />
                <span>Publish Micro-Challenge</span>
              </button>
            </div>

          </form>
        </GlassCard>
      )}

    </div>
  );
};
