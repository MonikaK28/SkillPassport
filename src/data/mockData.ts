import { StudentProfile, RecruiterProfile, MicroChallenge, AnonymizedCandidate, PlatformAnalytics } from '../types';

export const PRIMARY_STUDENT: StudentProfile = {
  id: 'std_demo_01',
  passportId: 'SKP-IN-2026-8942',
  name: 'Arjun Mehta',
  role: '3rd Year Computer Science Student',
  institution: 'Nova Institute of Technology',
  specialization: 'Computer Science & Artificial Intelligence',
  location: 'Bengaluru, India',
  bio: 'Passionate undergraduate builder focused on AI applications, backend systems, and clean developer tooling. Transforming code repositories into transparent, verifiable skill proofs.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  verificationStatus: 'Verified Demo Profile',
  joinedDate: 'August 2024',
  completedChallengesCount: 4,
  skills: [
    {
      skill: 'Python',
      category: 'Languages',
      score: 91,
      previousScore: 84,
      confidence: 96,
      evidenceCount: 14,
      verifiedDate: '2026-03-12',
      sourceProjects: ['Smart Document Assistant', 'Weather Intelligence Dashboard']
    },
    {
      skill: 'REST APIs',
      category: 'Architecture & APIs',
      score: 87,
      previousScore: 74,
      confidence: 93,
      evidenceCount: 11,
      verifiedDate: '2026-03-12',
      sourceProjects: ['Weather Intelligence Dashboard', 'Campus Event Management System']
    },
    {
      skill: 'Git/GitHub',
      category: 'Tools & DevOps',
      score: 88,
      previousScore: 79,
      confidence: 95,
      evidenceCount: 18,
      verifiedDate: '2026-03-12',
      sourceProjects: ['Smart Document Assistant', 'Weather Intelligence Dashboard', 'Campus Event Management System']
    },
    {
      skill: 'AI/ML',
      category: 'AI & ML',
      score: 86,
      previousScore: 86,
      confidence: 91,
      evidenceCount: 9,
      verifiedDate: '2026-02-28',
      sourceProjects: ['Smart Document Assistant']
    },
    {
      skill: 'Data Visualization',
      category: 'Frontend',
      score: 84,
      previousScore: 84,
      confidence: 89,
      evidenceCount: 7,
      verifiedDate: '2026-03-01',
      sourceProjects: ['Weather Intelligence Dashboard']
    },
    {
      skill: 'SQL',
      category: 'Databases',
      score: 82,
      previousScore: 82,
      confidence: 88,
      evidenceCount: 8,
      verifiedDate: '2026-02-15',
      sourceProjects: ['Campus Event Management System']
    },
    {
      skill: 'Frontend Development',
      category: 'Frontend',
      score: 79,
      previousScore: 79,
      confidence: 85,
      evidenceCount: 12,
      verifiedDate: '2026-02-20',
      sourceProjects: ['Campus Event Management System']
    }
  ],
  projects: [
    {
      id: 'proj_01',
      title: 'Smart Document Assistant',
      technologies: ['Python', 'FastAPI', 'NLP', 'Vector Search', 'Streamlit'],
      description: 'A student project that allows users to upload documents and ask questions about their contents using dense semantic retrieval and conversational memory.',
      repoName: 'nova-demo/smart-doc-assistant',
      demoUrl: 'https://smartdoc-demo.example.internal',
      evidenceStrength: 96,
      locCount: 3840,
      commitCount: 47,
      complexityScore: 88,
      skillsMapped: ['Python', 'AI/ML', 'REST APIs', 'Git/GitHub'],
      keyHighlights: [
        'Implemented chunking & embedding pipeline with FAISS vector index',
        'Built asynchronous FastAPI query gateway with rate-limiting',
        'Integrated multi-turn conversational memory in Streamlit UI'
      ],
      verifiedStatus: 'Verified'
    },
    {
      id: 'proj_02',
      title: 'Weather Intelligence Dashboard',
      technologies: ['Python', 'REST APIs', 'Streamlit', 'Data Visualization'],
      description: 'A dashboard that retrieves weather information from an external API and presents forecasts and environmental information visually with predictive trendlines.',
      repoName: 'nova-demo/weather-intelligence-dash',
      demoUrl: 'https://weather-intel-demo.example.internal',
      evidenceStrength: 94,
      locCount: 2420,
      commitCount: 32,
      complexityScore: 82,
      skillsMapped: ['Python', 'REST APIs', 'Data Visualization', 'Git/GitHub'],
      keyHighlights: [
        'Resilient API consumer with exponential backoff & redis-backed cache',
        'Dynamic interactive visual graphs using Plotly & Streamlit components',
        'Automated CI/CD workflow with GitHub Actions lint & pytest coverage'
      ],
      verifiedStatus: 'Verified'
    },
    {
      id: 'proj_03',
      title: 'Campus Event Management System',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      description: 'A web application for managing campus events, registrations, and participant information with role-based access control and attendee check-ins.',
      repoName: 'nova-demo/campus-event-hub',
      demoUrl: 'https://campusevents-demo.example.internal',
      evidenceStrength: 91,
      locCount: 5120,
      commitCount: 63,
      complexityScore: 85,
      skillsMapped: ['Frontend Development', 'SQL', 'REST APIs', 'Git/GitHub'],
      keyHighlights: [
        'Normalized relational schema with foreign keys, indexes, and triggers',
        'JWT authentication flow with granular role permissions',
        'Clean responsive dashboard built with TypeScript and Tailwind CSS'
      ],
      verifiedStatus: 'Verified'
    }
  ]
};

export const DEMO_RECRUITER: RecruiterProfile = {
  id: 'rec_demo_01',
  name: 'Priya Sharma',
  role: 'Technical Recruiter',
  company: 'Nexora Labs',
  location: 'Bengaluru, India',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  isDemoRecruiter: true
};

export const MICRO_CHALLENGES: MicroChallenge[] = [
  {
    id: 'chal_01',
    title: 'Build a Weather API Dashboard',
    duration: '48 hours',
    difficulty: 'Intermediate',
    requiredSkills: ['Python', 'REST APIs', 'Git', 'Data Visualization'],
    description: 'Design and deploy a resilient real-time Weather Dashboard connecting to an open environmental API. Candidates must exhibit proper error handling, caching, clean git history, and intuitive visual data representations.',
    company: 'Nexora Labs',
    reward: 'Fast-Track Interview + $300 Project Grant',
    submissionsCount: 42,
    status: 'Active',
    evaluationCriteria: [
      { criterion: 'API Resilience & Error Handling', weight: 30 },
      { criterion: 'Data Visualization & UX Clarity', weight: 25 },
      { criterion: 'Git Commit Cleanliness & Modularity', weight: 25 },
      { criterion: 'Code Quality & Typing Strictness', weight: 20 }
    ]
  },
  {
    id: 'chal_02',
    title: 'High-Throughput Vector Retrieval Engine',
    duration: '72 hours',
    difficulty: 'Advanced',
    requiredSkills: ['Python', 'AI/ML', 'REST APIs', 'Vector Search'],
    description: 'Implement a microservice capable of indexing 50k dense embeddings and responding to approximate nearest-neighbor queries with sub-25ms latency.',
    company: 'Nexora Labs',
    reward: 'Direct Interview with Core Engineering Team',
    submissionsCount: 19,
    status: 'Active',
    evaluationCriteria: [
      { criterion: 'Query Latency & Index Efficiency', weight: 40 },
      { criterion: 'Memory Optimization', weight: 30 },
      { criterion: 'Test Coverage & Benchmarks', weight: 30 }
    ]
  },
  {
    id: 'chal_03',
    title: 'Real-Time Collaborative Canvas',
    duration: '48 hours',
    difficulty: 'Intermediate',
    requiredSkills: ['React', 'TypeScript', 'WebSockets', 'Frontend Development'],
    description: 'Create an interactive whiteboard supporting concurrent multi-cursor rendering and conflict-free data synchronization across client sessions.',
    company: 'Nexora Labs',
    reward: 'Interview Opportunity + Hardware Voucher',
    submissionsCount: 31,
    status: 'Active',
    evaluationCriteria: [
      { criterion: 'State Reconciliation & Low Latency', weight: 35 },
      { criterion: 'Component Hierarchy & Performance', weight: 35 },
      { criterion: 'Accessibility & Responsive Design', weight: 30 }
    ]
  }
];

export const ANONYMIZED_CANDIDATES: AnonymizedCandidate[] = [
  {
    id: 'SP-1048',
    maskedId: 'Candidate #SP-1048',
    challengeMatch: 89,
    evidenceStrength: 94,
    skills: [
      { name: 'Python', score: 92 },
      { name: 'REST APIs', score: 88 },
      { name: 'Git', score: 90 },
      { name: 'Data Visualization', score: 84 }
    ],
    explainableFactors: [
      {
        factor: 'Python compatibility',
        compatibility: 94,
        description: 'Demonstrated deep syntax mastery, async handling, and automated pytest coverage in 2 analyzed production-grade repositories.',
        weight: 'Primary (35%)'
      },
      {
        factor: 'REST API compatibility',
        compatibility: 87,
        description: 'Robust error trapping, rate-limit backoffs, and clean schema serialization verified in public weather service endpoints.',
        weight: 'High (25%)'
      },
      {
        factor: 'Git compatibility',
        compatibility: 91,
        description: 'Atomic commits, semantic PR messages, feature branching, and zero merge artifacts recorded across 70+ lifetime commits.',
        weight: 'High (20%)'
      },
      {
        factor: 'Visualization compatibility',
        compatibility: 82,
        description: 'Structured Plotly/Streamlit charting, legible scale legends, and responsive mobile viewport adjustments verified.',
        weight: 'Supporting (20%)'
      }
    ],
    topProjects: [
      { name: 'Smart Document Assistant', technologies: ['Python', 'FastAPI', 'NLP'], evidenceType: 'Deep Repo Scan & Tests' },
      { name: 'Weather Intelligence Dashboard', technologies: ['Python', 'REST APIs', 'Streamlit'], evidenceType: 'Live Production URL & Commits' },
      { name: 'Campus Event Management System', technologies: ['React', 'Node.js', 'PostgreSQL'], evidenceType: 'Schema & Architecture Audit' }
    ],
    challengeHistory: [
      { challengeTitle: 'Build a Weather API Dashboard', score: 91, completionTime: '34 hours' },
      { challengeTitle: 'Async Task Queue with Redis', score: 88, completionTime: '42 hours' }
    ],
    isRevealed: false,
    revealedProfile: {
      name: 'Arjun Mehta',
      role: '3rd Year Computer Science Student',
      institution: 'Nova Institute of Technology',
      location: 'Bengaluru, India',
      email: 'arjun.mehta@nova-demo.edu',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'SP-2104',
    maskedId: 'Candidate #SP-2104',
    challengeMatch: 86,
    evidenceStrength: 91,
    skills: [
      { name: 'Python', score: 89 },
      { name: 'REST APIs', score: 85 },
      { name: 'Git', score: 88 },
      { name: 'Data Visualization', score: 81 }
    ],
    explainableFactors: [
      {
        factor: 'Python compatibility',
        compatibility: 90,
        description: 'Well-structured OOP design patterns and modular packaging observed in analyzed utilities.',
        weight: 'Primary (35%)'
      },
      {
        factor: 'REST API compatibility',
        compatibility: 84,
        description: 'FastAPI and Flask microservice implementation with OpenAPI docstrings.',
        weight: 'High (25%)'
      },
      {
        factor: 'Git compatibility',
        compatibility: 89,
        description: 'Consistent daily commit cadence with clear descriptive messaging.',
        weight: 'High (20%)'
      },
      {
        factor: 'Visualization compatibility',
        compatibility: 80,
        description: 'Clean Matplotlib and Seaborn analytics reports transformed into interactive dashboards.',
        weight: 'Supporting (20%)'
      }
    ],
    topProjects: [
      { name: 'Air Quality Forecast Engine', technologies: ['Python', 'REST APIs', 'Pandas'], evidenceType: 'Repository Scan' },
      { name: 'IoT Telemetry Pipeline', technologies: ['Python', 'MQTT', 'InfluxDB'], evidenceType: 'Dockerized Submission' }
    ],
    challengeHistory: [
      { challengeTitle: 'Build a Weather API Dashboard', score: 87, completionTime: '38 hours' }
    ],
    isRevealed: false,
    revealedProfile: {
      name: 'Rohan Verma',
      role: 'Final Year Information Technology Student',
      institution: 'Zenith Engineering Institute',
      location: 'Pune, India',
      email: 'rohan.v@zenith-demo.edu',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'SP-3091',
    maskedId: 'Candidate #SP-3091',
    challengeMatch: 82,
    evidenceStrength: 88,
    skills: [
      { name: 'Python', score: 85 },
      { name: 'REST APIs', score: 82 },
      { name: 'Git', score: 84 },
      { name: 'Data Visualization', score: 79 }
    ],
    explainableFactors: [
      {
        factor: 'Python compatibility',
        compatibility: 86,
        description: 'Clean functional data wrangling scripts with Pandas and NumPy.',
        weight: 'Primary (35%)'
      },
      {
        factor: 'REST API compatibility',
        compatibility: 81,
        description: 'HTTP client wrappers with basic token authentication and JSON parsing.',
        weight: 'High (25%)'
      },
      {
        factor: 'Git compatibility',
        compatibility: 85,
        description: 'Regular branch merges and tag releases across 4 student repositories.',
        weight: 'High (20%)'
      },
      {
        factor: 'Visualization compatibility',
        compatibility: 76,
        description: 'Foundational chart visual styling with basic responsive dimensions.',
        weight: 'Supporting (20%)'
      }
    ],
    topProjects: [
      { name: 'Global Climate Visualizer', technologies: ['Python', 'Streamlit', 'GeoJSON'], evidenceType: 'Repository Analysis' },
      { name: 'Cryptocurrency Ticker Bot', technologies: ['Python', 'WebSockets'], evidenceType: 'Live Bot Audit' }
    ],
    challengeHistory: [
      { challengeTitle: 'Build a Weather API Dashboard', score: 83, completionTime: '45 hours' }
    ],
    isRevealed: false,
    revealedProfile: {
      name: 'Ananya Sen',
      role: '3rd Year Data Science Student',
      institution: 'Apex Institute of Science & Technology',
      location: 'Hyderabad, India',
      email: 'ananya.s@apex-demo.edu',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
    }
  },
  {
    id: 'SP-4052',
    maskedId: 'Candidate #SP-4052',
    challengeMatch: 92,
    evidenceStrength: 96,
    skills: [
      { name: 'Python', score: 94 },
      { name: 'REST APIs', score: 91 },
      { name: 'Git', score: 89 },
      { name: 'Data Visualization', score: 88 }
    ],
    explainableFactors: [
      {
        factor: 'Python compatibility',
        compatibility: 96,
        description: 'High-level performance profiling, type annotations, and concurrent asyncio execution patterns.',
        weight: 'Primary (35%)'
      },
      {
        factor: 'REST API compatibility',
        compatibility: 92,
        description: 'Production microservice architecture with OpenAPI generation and comprehensive mock testing.',
        weight: 'High (25%)'
      },
      {
        factor: 'Git compatibility',
        compatibility: 90,
        description: 'Strict conventional commit standards, git hook linting, and multi-contributor repo stewardship.',
        weight: 'High (20%)'
      },
      {
        factor: 'Visualization compatibility',
        compatibility: 90,
        description: 'Highly polished animated charts with custom themes, high accessibility scores, and data export features.',
        weight: 'Supporting (20%)'
      }
    ],
    topProjects: [
      { name: 'HydroGrid Flow Predictor', technologies: ['Python', 'FastAPI', 'D3.js'], evidenceType: 'Production Audit & Code Review' },
      { name: 'Distributed Log Aggregator', technologies: ['Python', 'Asyncio', 'Redis'], evidenceType: 'Benchmark Verified' }
    ],
    challengeHistory: [
      { challengeTitle: 'Build a Weather API Dashboard', score: 94, completionTime: '29 hours' }
    ],
    isRevealed: false,
    revealedProfile: {
      name: 'Siddharth Iyer',
      role: '4th Year Computer Science Student',
      institution: 'Cascade Institute of Technology',
      location: 'Chennai, India',
      email: 'siddharth.i@cascade-demo.edu',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    }
  }
];

export const PLATFORM_ANALYTICS: PlatformAnalytics = {
  verifiedStudents: 128,
  projectsAnalyzed: 347,
  skillsAnalyzed: 1240,
  activeChallenges: 18,
  averageMatchScore: 84.6,
  topSkillsDemand: [
    { skill: 'Python', count: 184, growth: '+28%' },
    { skill: 'REST APIs', count: 162, growth: '+34%' },
    { skill: 'Git / GitHub', count: 149, growth: '+19%' },
    { skill: 'React / Frontend', count: 137, growth: '+22%' },
    { skill: 'AI / LLM Integration', count: 118, growth: '+62%' },
    { skill: 'SQL & Relational DBs', count: 104, growth: '+15%' }
  ],
  domainDistribution: [
    { name: 'AI & Data Science', value: 38 },
    { name: 'Full-Stack Web', value: 32 },
    { name: 'Backend & Systems', value: 18 },
    { name: 'DevOps & Tooling', value: 12 }
  ],
  recentVerifications: [
    { timestamp: '10 mins ago', skill: 'Python', score: 91, studentId: 'SP-1048' },
    { timestamp: '24 mins ago', skill: 'REST APIs', score: 87, studentId: 'SP-1048' },
    { timestamp: '1 hour ago', skill: 'Git/GitHub', score: 88, studentId: 'SP-1048' },
    { timestamp: '3 hours ago', skill: 'FastAPI', score: 89, studentId: 'SP-2104' },
    { timestamp: '5 hours ago', skill: 'SQL', score: 82, studentId: 'SP-3091' }
  ]
};
