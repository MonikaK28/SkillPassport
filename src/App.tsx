import React, { useState } from 'react';
import { UserRole, StudentProfile, RecruiterProfile, MicroChallenge, AnonymizedCandidate, PlatformAnalytics } from './types';
import { db } from './services/supabaseMock';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoBanner } from './components/DemoBadge';

// Student Pages
import { StudentDashboard } from './pages/student/StudentDashboard';
import { SkillPassportView } from './pages/student/SkillPassportView';
import { EvidenceAnalysis } from './pages/student/EvidenceAnalysis';
import { StudentChallenges } from './pages/student/StudentChallenges';

// Recruiter Pages
import { RecruiterDashboard } from './pages/recruiter/RecruiterDashboard';
import { CandidateMatching } from './pages/recruiter/CandidateMatching';
import { CreateChallenge } from './pages/recruiter/CreateChallenge';
import { ChallengeDetails } from './pages/recruiter/ChallengeDetails';

// Shared Analytics Page
import { AnalyticsPage } from './pages/AnalyticsPage';

export function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  // State synchronized with modular service
  const [student, setStudent] = useState<StudentProfile>(db.getStudentProfile());
  const [recruiter, setRecruiter] = useState<RecruiterProfile>(db.getRecruiterProfile());
  const [challenges, setChallenges] = useState<MicroChallenge[]>(db.getChallenges());
  const [candidates, setCandidates] = useState<AnonymizedCandidate[]>(db.getCandidates());
  const [analytics, setAnalytics] = useState<PlatformAnalytics>(db.getAnalytics());
  const [selectedCandidate, setSelectedCandidate] = useState<AnonymizedCandidate | null>(null);

  // Evidence analysis callback to dynamically update scores in real-time
  const handleEvidenceAnalysisComplete = (updatedSkills: { skill: string; newScore: number }[]) => {
    const updated = db.updateSkillScores(updatedSkills);
    setStudent({ ...updated });
  };

  // Recruiter reveal action
  const handleRevealCandidate = (candidateId: string) => {
    db.revealCandidate(candidateId);
    setCandidates([...db.getCandidates()]);
  };

  // Recruiter create challenge action
  const handleCreateChallenge = (newChallengeData: Omit<MicroChallenge, 'id' | 'submissionsCount' | 'status'>) => {
    db.createChallenge(newChallengeData);
    setChallenges([...db.getChallenges()]);
    setAnalytics({ ...db.getAnalytics() });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 bg-grid-pattern relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Demo Disclaimer Banner */}
      <DemoBanner />

      {/* Main Navbar */}
      <Navbar
        currentRole={currentRole}
        onRoleChange={(role) => {
          setCurrentRole(role);
          setActiveTab(role === 'student' ? 'dashboard' : 'recruiter-dashboard');
        }}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        studentName={student.name}
        recruiterName={recruiter.name}
        recruiterCompany={recruiter.company}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* STUDENT VIEWS */}
        {currentRole === 'student' && (
          <>
            {activeTab === 'dashboard' && (
              <StudentDashboard
                student={student}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}

            {activeTab === 'passport' && (
              <SkillPassportView student={student} />
            )}

            {activeTab === 'evidence' && (
              <EvidenceAnalysis
                onAnalysisComplete={handleEvidenceAnalysisComplete}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}

            {activeTab === 'challenges' && (
              <StudentChallenges challenges={challenges} />
            )}

            {activeTab === 'analytics' && (
              <AnalyticsPage analytics={analytics} />
            )}
          </>
        )}

        {/* RECRUITER VIEWS */}
        {currentRole === 'recruiter' && (
          <>
            {activeTab === 'recruiter-dashboard' && (
              <RecruiterDashboard
                recruiter={recruiter}
                challenges={challenges}
                candidates={candidates}
                onNavigateTab={(tab) => setActiveTab(tab)}
                onSelectCandidate={(cand) => {
                  setSelectedCandidate(cand);
                  setActiveTab('candidate-matching');
                }}
              />
            )}

            {activeTab === 'candidate-matching' && (
              <CandidateMatching
                candidates={candidates}
                selectedCandidate={selectedCandidate}
                onSelectCandidate={(cand) => setSelectedCandidate(cand)}
                onRevealCandidate={handleRevealCandidate}
              />
            )}

            {activeTab === 'challenge-details' && (
              <ChallengeDetails
                challenge={challenges[0]}
                candidates={candidates}
                onNavigateTab={(tab) => setActiveTab(tab)}
                onSelectCandidate={(cand) => {
                  setSelectedCandidate(cand);
                  setActiveTab('candidate-matching');
                }}
              />
            )}

            {activeTab === 'create-challenge' && (
              <CreateChallenge
                onCreateChallenge={handleCreateChallenge}
                onNavigateTab={(tab) => setActiveTab(tab)}
              />
            )}

            {activeTab === 'analytics' && (
              <AnalyticsPage analytics={analytics} />
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
