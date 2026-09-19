import React, { useState, useEffect } from 'react';
import { GlassCard } from '../../components/GlassCard';
import { DemoBadge } from '../../components/DemoBadge';
import { 
  ScanSearch, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Code2, 
  ShieldCheck, 
  RotateCcw,
  GitBranch,
  FileCode,
  Cpu,
  ArrowRight
} from 'lucide-react';

interface EvidenceAnalysisProps {
  onAnalysisComplete: (updatedSkills: { skill: string; newScore: number }[]) => void;
  onNavigateTab: (tab: string) => void;
}

interface StepInfo {
  step: number;
  label: string;
  detail: string;
  duration: number; // ms
}

export const EvidenceAnalysis: React.FC<EvidenceAnalysisProps> = ({
  onAnalysisComplete,
  onNavigateTab
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const STEPS: StepInfo[] = [
    {
      step: 1,
      label: 'Scanning project evidence...',
      detail: 'Cloning tree for nova-demo/smart-doc-assistant and inspecting git history...',
      duration: 1200
    },
    {
      step: 2,
      label: 'Detecting technologies...',
      detail: 'Parsed AST: FastAPI endpoints, FAISS vector embeddings, Streamlit widgets.',
      duration: 1100
    },
    {
      step: 3,
      label: 'Analyzing project complexity...',
      detail: 'Calculated cyclomatic complexity: 82/100, test coverage: 89%, 0 security alerts.',
      duration: 1300
    },
    {
      step: 4,
      label: 'Mapping evidence to skills...',
      detail: 'Synthesizing evidence anchors to Python (91), REST APIs (87), and Git/GitHub (88).',
      duration: 1100
    },
    {
      step: 5,
      label: 'Generating competency indicators...',
      detail: 'Computed differential confidence margins across 34 commits & 3 repos.',
      duration: 1000
    },
    {
      step: 6,
      label: 'Evidence Verified ✓',
      detail: 'Cryptographic proof hash generated: sha256:8b41...ce92. Competencies updated.',
      duration: 800
    }
  ];

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setIsCompleted(false);
    setCurrentStepIndex(0);
    setConsoleLogs([
      '⚡ [DEMO ENGINE] Initiating Demonstration Evidence Analysis v2.4...',
      '📦 Target Student: Arjun Mehta (Nova Institute of Technology)',
      '🔍 Scanned Repositories: 3 public demonstration projects'
    ]);
  };

  useEffect(() => {
    if (!isAnalyzing || currentStepIndex < 0) return;

    if (currentStepIndex < STEPS.length) {
      const step = STEPS[currentStepIndex];
      const timer = setTimeout(() => {
        setConsoleLogs((prev) => [
          ...prev,
          `▶ Step ${step.step}: ${step.label}`,
          `  ↳ ${step.detail}`
        ]);
        setCurrentStepIndex((prev) => prev + 1);
      }, step.duration);

      return () => clearTimeout(timer);
    } else {
      // Completed!
      setIsAnalyzing(false);
      setIsCompleted(true);
      setConsoleLogs((prev) => [
        ...prev,
        '✨ [DEMO ENGINE] Evidence Verified — Demo Result Generated Successfully.'
      ]);

      onAnalysisComplete([
        { skill: 'Python', newScore: 91 },
        { skill: 'REST APIs', newScore: 87 },
        { skill: 'Git/GitHub', newScore: 88 }
      ]);
    }
  }, [isAnalyzing, currentStepIndex]);

  const handleReset = () => {
    setIsAnalyzing(false);
    setCurrentStepIndex(-1);
    setIsCompleted(false);
    setConsoleLogs([]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Evidence Analysis Workflow
            </h1>
            <DemoBadge label="Demonstration Evidence Analysis" variant="cyan" size="md" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Audit student repository evidence, verify cyclomatic code complexity, extract AST dependencies, and generate verifiable competency indicators.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isCompleted && (
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <RotateCcw size={14} />
              <span>Reset Analysis</span>
            </button>
          )}

          <button
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            className={`px-5 py-2.5 rounded-xl font-semibold text-xs text-white shadow-lg transition-all flex items-center gap-2 ${
              isAnalyzing
                ? 'bg-slate-700 cursor-not-allowed text-slate-400'
                : 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-cyan-500/20'
            }`}
          >
            <ScanSearch size={16} className={isAnalyzing ? 'animate-spin' : ''} />
            <span>{isAnalyzing ? 'Analyzing Evidence...' : 'Analyze Evidence'}</span>
          </button>
        </div>
      </div>

      {/* Main Analysis Pipeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: 6-Step Workflow Display */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard glow={isCompleted ? 'emerald' : 'cyan'}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers size={18} className="text-cyan-400" />
                  Demonstration Verification Pipeline
                </h3>
                <p className="text-xs text-slate-400">
                  Automated verification rubric executed across project commits.
                </p>
              </div>

              {isCompleted ? (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono flex items-center gap-1.5">
                  <ShieldCheck size={14} /> Evidence Verified — Demo Result
                </span>
              ) : isAnalyzing ? (
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono animate-pulse">
                  Step {Math.min(currentStepIndex + 1, 6)} of 6
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">
                  Ready to Run
                </span>
              )}
            </div>

            {/* Stepper Cards */}
            <div className="space-y-3">
              {STEPS.map((s, idx) => {
                const isStepActive = isAnalyzing && currentStepIndex === idx;
                const isStepFinished = currentStepIndex > idx || isCompleted;

                return (
                  <div
                    key={s.step}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isStepActive
                        ? 'bg-cyan-950/30 border-cyan-500/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]'
                        : isStepFinished
                        ? 'bg-slate-900/80 border-emerald-500/30 text-slate-200'
                        : 'bg-slate-950/40 border-slate-800/60 opacity-60 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                            isStepFinished
                              ? 'bg-emerald-500 text-black'
                              : isStepActive
                              ? 'bg-cyan-500 text-black animate-pulse'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {isStepFinished ? <CheckCircle2 size={16} /> : s.step}
                        </div>
                        <div>
                          <div className={`font-semibold text-sm ${isStepFinished ? 'text-white' : isStepActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                            Step {s.step}: {s.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {s.detail}
                          </div>
                        </div>
                      </div>

                      {isStepActive && (
                        <span className="text-[11px] font-mono text-cyan-400 animate-pulse">
                          Processing...
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          {/* Differential Competency Results (Example Changes) */}
          <GlassCard glow="indigo">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp size={18} className="text-cyan-400" />
                  Competency Indicator Deltas
                </h3>
                <p className="text-xs text-slate-400">
                  Differential adjustments triggered by newly verified evidence artifacts.
                </p>
              </div>
              <DemoBadge label="Demonstration Deltas" variant="amber" size="sm" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Python Delta */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Language Competency</div>
                <div className="font-bold text-white text-base mt-1">Python</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono text-slate-400 text-lg">84</span>
                  <ArrowRight size={14} className="text-cyan-400" />
                  <span className="font-mono font-extrabold text-cyan-300 text-2xl">91</span>
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                  <TrendingUp size={12} /> +7 pts from Smart Document Asst
                </div>
              </div>

              {/* REST APIs Delta */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Architecture Competency</div>
                <div className="font-bold text-white text-base mt-1">REST APIs</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono text-slate-400 text-lg">74</span>
                  <ArrowRight size={14} className="text-cyan-400" />
                  <span className="font-mono font-extrabold text-cyan-300 text-2xl">87</span>
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                  <TrendingUp size={12} /> +13 pts from Weather Dashboard
                </div>
              </div>

              {/* Git/GitHub Delta */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Tooling Competency</div>
                <div className="font-bold text-white text-base mt-1">Git/GitHub</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono text-slate-400 text-lg">79</span>
                  <ArrowRight size={14} className="text-cyan-400" />
                  <span className="font-mono font-extrabold text-cyan-300 text-2xl">88</span>
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                  <TrendingUp size={12} /> +9 pts from Commit Analysis
                </div>
              </div>
            </div>

            {isCompleted && (
              <div className="mt-5 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2.5 text-xs text-emerald-300">
                  <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                  <span>
                    <strong>Verification Seal Created:</strong> Updated competency indicators are permanently stamped on Arjun Mehta's Skill Passport.
                  </span>
                </div>
                <button
                  onClick={() => onNavigateTab('passport')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-black text-xs font-bold transition-all shadow-md"
                >
                  View Passport Card →
                </button>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Right Col: Interactive Verification Terminal / Logs */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-0 overflow-hidden border-slate-800 flex flex-col h-[520px]">
            {/* Terminal Header */}
            <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Terminal size={14} className="text-cyan-400" />
                <span>evidence_verifier_daemon.log</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-xs text-slate-300 bg-[#070a10] flex-1 overflow-y-auto space-y-2 leading-relaxed">
              <div className="text-slate-500">
                # SkillPassport Proof Protocol v1.4.2 [Demonstration Environment]
              </div>
              <div className="text-slate-500">
                # Ready. Click "Analyze Evidence" to trigger synthetic AST verification.
              </div>

              {consoleLogs.map((log, lidx) => (
                <div
                  key={lidx}
                  className={`${
                    log.startsWith('✨')
                      ? 'text-emerald-400 font-bold'
                      : log.startsWith('⚡')
                      ? 'text-amber-300 font-semibold'
                      : log.startsWith('▶')
                      ? 'text-cyan-300 font-medium'
                      : 'text-slate-300 pl-3'
                  }`}
                >
                  {log}
                </div>
              ))}

              {isAnalyzing && (
                <div className="flex items-center gap-2 text-cyan-400 animate-pulse pt-2">
                  <span className="inline-block w-2 h-4 bg-cyan-400"></span>
                  <span>analyzing abstract syntax tree...</span>
                </div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Status: {isAnalyzing ? 'ACTIVE_SCAN' : isCompleted ? 'VERIFIED_OK' : 'IDLE'}</span>
              <span>Demo Dataset Mode</span>
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
