export type UserRole = 'student' | 'recruiter';

export interface CompetencyScore {
  skill: string;
  category: 'Languages' | 'AI & ML' | 'Architecture & APIs' | 'Databases' | 'Frontend' | 'Tools & DevOps';
  score: number; // 0 - 100 demonstration indicator
  previousScore?: number;
  confidence: number; // e.g. 94%
  evidenceCount: number;
  verifiedDate: string;
  sourceProjects: string[];
}

export interface ProjectEvidence {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  repoName: string;
  demoUrl?: string;
  evidenceStrength: number; // 0 - 100%
  locCount: number;
  commitCount: number;
  complexityScore: number;
  skillsMapped: string[];
  keyHighlights: string[];
  verifiedStatus: 'Verified' | 'Analyzing' | 'Pending Review';
}

export interface StudentProfile {
  id: string;
  passportId: string;
  name: string;
  role: string;
  institution: string;
  specialization: string;
  location: string;
  bio: string;
  avatarUrl: string;
  verificationStatus: 'Verified Demo Profile' | 'Unverified';
  joinedDate: string;
  skills: CompetencyScore[];
  projects: ProjectEvidence[];
  completedChallengesCount: number;
}

export interface RecruiterProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  isDemoRecruiter: boolean;
}

export interface MicroChallenge {
  id: string;
  title: string;
  duration: string; // "48 hours"
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  requiredSkills: string[];
  description: string;
  company: string;
  reward: string;
  submissionsCount: number;
  status: 'Active' | 'Closing Soon' | 'Completed';
  evaluationCriteria: { criterion: string; weight: number }[];
}

export interface ExplainableFactor {
  factor: string;
  compatibility: number; // 0 - 100%
  description: string;
  weight: string;
}

export interface AnonymizedCandidate {
  id: string; // e.g. "Candidate #SP-1048"
  maskedId: string;
  challengeMatch: number; // e.g. 89%
  evidenceStrength: number; // e.g. 94%
  skills: {
    name: string;
    score: number;
  }[];
  explainableFactors: ExplainableFactor[];
  topProjects: {
    name: string;
    technologies: string[];
    evidenceType: string;
  }[];
  challengeHistory: {
    challengeTitle: string;
    score: number;
    completionTime: string;
  }[];
  isRevealed: boolean;
  revealedProfile?: {
    name: string;
    role: string;
    institution: string;
    location: string;
    email: string;
    avatarUrl: string;
  };
}

export interface EvidenceAnalysisStep {
  stepNumber: number;
  title: string;
  description: string;
  durationMs: number;
  status: 'waiting' | 'in_progress' | 'completed';
}

export interface PlatformAnalytics {
  verifiedStudents: number;
  projectsAnalyzed: number;
  skillsAnalyzed: number;
  activeChallenges: number;
  averageMatchScore: number;
  topSkillsDemand: { skill: string; count: number; growth: string }[];
  domainDistribution: { name: string; value: number }[];
  recentVerifications: { timestamp: string; skill: string; score: number; studentId: string }[];
}
