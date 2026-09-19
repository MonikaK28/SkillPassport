import React from 'react';
import { UserRole } from '../types';
import { DemoBadge } from './DemoBadge';
import { 
  ShieldCheck, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  BarChart3, 
  Award, 
  ScanSearch, 
  Layers, 
  UserCheck, 
  PlusCircle,
  Code2
} from 'lucide-react';

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  studentName: string;
  recruiterName: string;
  recruiterCompany: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  onRoleChange,
  activeTab,
  onTabChange,
  studentName,
  recruiterName,
  recruiterCompany
}) => {
  const studentNavItems = [
    { id: 'dashboard', label: 'Overview', icon: GraduationCap },
    { id: 'passport', label: 'Skill Passport', icon: Award },
    { id: 'evidence', label: 'Analyze Evidence', icon: ScanSearch, highlight: true },
    { id: 'challenges', label: 'Micro-Challenges', icon: Layers },
    { id: 'analytics', label: 'Platform Analytics', icon: BarChart3 }
  ];

  const recruiterNavItems = [
    { id: 'recruiter-dashboard', label: 'Talent Overview', icon: Briefcase },
    { id: 'candidate-matching', label: 'Candidate Matching', icon: UserCheck, highlight: true },
    { id: 'challenge-details', label: 'Active Challenges', icon: Layers },
    { id: 'create-challenge', label: 'Post Challenge', icon: PlusCircle },
    { id: 'analytics', label: 'Platform Analytics', icon: BarChart3 }
  ];

  const navItems = currentRole === 'student' ? studentNavItems : recruiterNavItems;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#07090e]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4 shrink-0">
            <div 
              onClick={() => onTabChange(currentRole === 'student' ? 'dashboard' : 'recruiter-dashboard')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0c1017] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck size={20} className="text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    SKILL<span className="text-cyan-400">PASSPORT</span>
                  </span>
                  <DemoBadge label="Demo Data" variant="amber" size="sm" />
                </div>
                <p className="text-[10px] font-medium text-slate-400 hidden sm:block leading-none">
                  From Projects to Proof. From Skills to Opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                  <span>{item.label}</span>
                  {item.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Role Switcher & Persona Badge */}
          <div className="flex items-center gap-3">
            {/* Role Switcher Toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1 shadow-inner">
              <button
                onClick={() => {
                  onRoleChange('student');
                  onTabChange('dashboard');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  currentRole === 'student'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <GraduationCap size={13} />
                <span className="hidden lg:inline">Student View</span>
                <span className="lg:hidden">Student</span>
              </button>

              <button
                onClick={() => {
                  onRoleChange('recruiter');
                  onTabChange('recruiter-dashboard');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  currentRole === 'recruiter'
                    ? 'bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Briefcase size={13} />
                <span className="hidden lg:inline">Recruiter View</span>
                <span className="lg:hidden">Recruiter</span>
              </button>
            </div>

            {/* Active Persona Tag */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="text-right">
                <div className="text-xs font-bold text-slate-200 leading-tight">
                  {currentRole === 'student' ? studentName : recruiterName}
                </div>
                <div className="text-[10px] text-slate-400 font-mono leading-none">
                  {currentRole === 'student' ? 'Nova Institute of Tech' : `${recruiterCompany} (Demo)`}
                </div>
              </div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                currentRole === 'student' 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                  : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
              }`}>
                {currentRole === 'student' ? 'AM' : 'PS'}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile navigation row */}
      <div className="md:hidden border-t border-slate-800/80 px-4 py-2 flex items-center gap-1 overflow-x-auto bg-slate-950/80">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400'
              }`}
            >
              <Icon size={12} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
