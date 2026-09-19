import { StudentProfile, RecruiterProfile, MicroChallenge, AnonymizedCandidate, PlatformAnalytics } from '../types';
import { PRIMARY_STUDENT, DEMO_RECRUITER, MICRO_CHALLENGES, ANONYMIZED_CANDIDATES, PLATFORM_ANALYTICS } from '../data/mockData';

// Modular data service layer - Prepared for direct Supabase client substitution
class DataService {
  private student: StudentProfile = { ...PRIMARY_STUDENT };
  private recruiter: RecruiterProfile = { ...DEMO_RECRUITER };
  private challenges: MicroChallenge[] = [...MICRO_CHALLENGES];
  private candidates: AnonymizedCandidate[] = [...ANONYMIZED_CANDIDATES];
  private analytics: PlatformAnalytics = { ...PLATFORM_ANALYTICS };

  // Student methods
  getStudentProfile(): StudentProfile {
    return this.student;
  }

  updateSkillScores(updatedSkills: { skill: string; newScore: number }[]): StudentProfile {
    this.student.skills = this.student.skills.map(s => {
      const update = updatedSkills.find(u => u.skill === s.skill);
      if (update) {
        return {
          ...s,
          previousScore: s.score,
          score: update.newScore,
          confidence: Math.min(99, s.confidence + 2),
          evidenceCount: s.evidenceCount + 1,
          verifiedDate: new Date().toISOString().split('T')[0]
        };
      }
      return s;
    });
    return this.student;
  }

  // Recruiter methods
  getRecruiterProfile(): RecruiterProfile {
    return this.recruiter;
  }

  // Challenges methods
  getChallenges(): MicroChallenge[] {
    return this.challenges;
  }

  getChallengeById(id: string): MicroChallenge | undefined {
    return this.challenges.find(c => c.id === id);
  }

  createChallenge(challenge: Omit<MicroChallenge, 'id' | 'submissionsCount' | 'status'>): MicroChallenge {
    const newChallenge: MicroChallenge = {
      ...challenge,
      id: `chal_${Date.now()}`,
      submissionsCount: 0,
      status: 'Active'
    };
    this.challenges = [newChallenge, ...this.challenges];
    this.analytics.activeChallenges += 1;
    return newChallenge;
  }

  // Candidate Matching methods
  getCandidates(): AnonymizedCandidate[] {
    return this.candidates;
  }

  revealCandidate(candidateId: string): AnonymizedCandidate | undefined {
    this.candidates = this.candidates.map(c => {
      if (c.id === candidateId || c.maskedId === candidateId) {
        return { ...c, isRevealed: true };
      }
      return c;
    });
    return this.candidates.find(c => c.id === candidateId || c.maskedId === candidateId);
  }

  // Analytics
  getAnalytics(): PlatformAnalytics {
    return this.analytics;
  }
}

export const db = new DataService();
