# SkillPassport

> *"From Projects to Proof. From Skills to Opportunities."*

SkillPassport is an evidence-driven technical competency verification and bias-free talent matching platform. It bridges the gap between raw student code repositories and high-conviction technical hiring by extracting verifiable skill proofs, benchmarking micro-challenges, and providing explainable candidate matching for recruiters.

---

## ⚠️ Demonstration & Privacy Notice

**This repository contains purely synthetic demonstration data for hackathon and proof-of-concept purposes:**
- **Primary Student Persona**: Arjun Mehta (3rd Year Computer Science & AI Student, Nova Institute of Technology, Bengaluru).
- **Recruiter Persona**: Priya Sharma (Technical Recruiter, Nexora Labs).
- **Demonstration Metrics**: All competency indicator numbers (0–100) and matching compatibility percentages are synthetic demonstration indicators, not scientifically validated psychometric measurements or employment guarantees.
- **Privacy Compliance**: No personally identifiable student records, private repositories, or real academic data are present.

---

## 🚀 Key Features

### 1. Verifiable Skill Passport
- **Tamper-Evident Credential**: Cryptographically styled passport card with serial numbering (`SKP-IN-2026-8942`) and proof signature hashing.
- **Direct Project Grounding**: Competencies are tied directly to audited project evidence rather than unverified resume claims.
- **Multi-Axis Competency Topology**: Interactive radar chart visualizing competency distributions across 7 technical dimensions.

### 2. Interactive Evidence Analysis Engine
- **6-Step Static Code & Repository Analysis Simulation**:
  1. *Scanning project evidence...*
  2. *Detecting technologies...*
  3. *Analyzing project complexity...*
  4. *Mapping evidence to skills...*
  5. *Generating competency indicators...*
  6. *Evidence Verified ✓*
- **Dynamic Score Diffs**: Live feedback showing competency indicators updating based on repository complexity (e.g. Python `84 → 91`, REST APIs `74 → 87`, Git `79 → 88`).

### 3. Bias-Free Recruiter Workspace & Candidate Anonymization
- **Shielded Candidate Review**: Recruiters evaluate candidates (e.g. `Candidate #SP-1048`) based strictly on evidence strength, AST code proofs, and challenge performance. Personal demographics, college names, and contact details remain masked.
- **Explainable Matching Algorithm**: Transparent breakdown of compatibility factors (e.g. Python compatibility 94%, REST API compatibility 87%, Git compatibility 91%, Visualization compatibility 82%).
- **Intentional Unmasking**: Recruiter can explicitly reveal the demonstration candidate's profile through a two-step confirmation modal.

### 4. Micro-Challenges System
- **Real-World Code Scenarios**: Time-capped challenges (e.g. *"Build a Weather API Dashboard"* — 48 hours).
- **Automated Verification Rubric**: Weighted scoring across API resilience, test coverage, code architecture, and Git commit hygiene.

### 5. Seeded Platform Telemetry
- Demonstration analytics tracking **128 Verified Students**, **347 Projects Analyzed**, **1,240 Skills Analyzed**, and **18 Active Challenges**.

---

## 🛠️ Architecture & Tech Stack

- **Frontend Framework**: React 18 + TypeScript (Strict Mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom dark glassmorphism and subtle glow accents
- **Visualizations & Charts**: Recharts (Radar charts, Bar charts, Metric telemetry)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Service Layer**: Modular data service (`supabaseMock.ts`) structured for plug-and-play Supabase connection

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+ or v24 LTS recommended)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone <your-github-repo-url>
cd SkillPassport

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Run TypeScript validation and build the optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License
MIT License. Created for the SkillPassport Hackathon Demonstration.
