# Local AI Lab — Learning Guide Prompt

---

## Improved Prompt (v2 — Micro-Step Edition)

```
You are a patient, expert guide in AI/ML infrastructure and local AI development.
Your audience is a complete beginner — no prior hardware knowledge, no AI/ML
background, and limited programming experience. Use simple language, avoid jargon,
and explain every term the first time you use it.

---

CONTEXT:
I want to build a home AI lab on a tight budget. My goals are:
1. Run open-source AI models locally (e.g., LLaMA, Mistral, Whisper)
2. Build a local personal AI assistant (voice or text-based)
3. Create custom AI agents that can automate tasks

I have no experience purchasing hardware for AI workloads and want to learn
from scratch. I am comfortable using a computer but have beginner-level
programming skills.

---

TASK:
Give me a complete, step-by-step beginner's guide covering the following,
in this exact order:

**PART 1 — Understanding the Hardware**
- What hardware components matter for running AI locally (CPU, GPU, RAM, storage)?
- What specs should I look for and why?
- Explain the difference between running AI on CPU vs. GPU vs. Apple Silicon

**PART 2 — Budget Hardware Recommendations**
- List 3–5 specific hardware options (new or used/refurbished) under $500 total
- For each option, provide: name, approximate price, where to buy it, and why
  it works for local AI
- Also list one "best value upgrade" option in the $500–$1,500 range

**PART 3 — Learning Path**
- Recommend free resources (videos, docs, courses) to learn:
  - How to set up a local AI environment (Ollama, LM Studio, or similar)
  - Python basics needed for AI projects
  - How to build a local personal assistant
  - How to build and run custom AI agents (e.g., using LangChain or AutoGen)
- Order the resources from beginner to intermediate

**PART 4 — Step-by-Step Setup Guide**
- Walk me through setting up my first local AI model from scratch
  (from powering on the machine to running a model and chatting with it)
- Include every command I need to type, with explanations

**PART 5 — Project Roadmap**
- Give me a 3-month learning and building plan with weekly milestones
- Week 1 goal, Week 2 goal, etc.

---

CONSTRAINTS:
- Budget: under $500 for initial hardware (mention if something is impossible
  at this budget and why)
- Do not recommend cloud services — everything must run locally and offline
- Do not skip steps — assume I will get lost if anything is left unexplained
- Use analogies where technical concepts are hard to grasp
- Format the response with clear headings, bullet points, and numbered steps
- Where you recommend a product, link or name the exact model, not a category

MICRO-STEP RULE (most important constraint):
- Every single step or action must be completable in 5 minutes or less
- If a step would take longer, break it into smaller sub-steps, each under 5 minutes
- Start each step with a time estimate: e.g., "(~2 min) Download the installer"
- Group steps into named sessions (e.g., "Session 1 — 20 min total") so I know
  exactly how much time I am committing before I start
- Each step must have exactly one action — no step should require doing two things
  at the same time
- After every session, I should have something visible or working to confirm
  I did it right (a file downloaded, a terminal output, a model responding, etc.)
- If a step involves waiting (e.g., a download), tell me what to do while I wait
  so no time is wasted

---

OUTPUT FORMAT:
Structured guide with 5 clearly labeled parts as described above.
Use markdown formatting. Keep each part focused and scannable.
Include a "Quick Start Checklist" at the top listing the first 5 actions I should
take — each one under 5 minutes.

Each step in Part 4 must follow this exact template:

  **Step N (~X min)**
  What you are doing: [one sentence]
  Command or action: [exact command or click instruction]
  How you know it worked: [what you should see or feel]
  If it fails: [one simple thing to try]
```

---

## What Changed from v1 → v2

| Change | Why |
|---|---|
| Added MICRO-STEP RULE constraint block | Forces every action to be completable in ≤5 min — prevents overwhelming walls of steps |
| Added time estimates per step `(~X min)` | Makes the effort visible upfront so the user can commit confidently |
| Added "Session" grouping | Lets the user stop and resume at natural checkpoints without losing progress |
| One action per step rule | Eliminates cognitive overload from compound instructions |
| Added "How you know it worked" field | Gives instant feedback — critical for beginners who can't self-diagnose |
| Added "If it fails" field | Reduces frustration and prevents the user from getting stuck silently |
| Added "what to do while waiting" instruction | Keeps momentum during downloads/installs — no dead time |
| Updated Quick Start Checklist to enforce 5-min constraint | First 5 actions now must each be under 5 minutes, making the very first session achievable |
| Kept all v1 constraints intact | Budget, no cloud, no jargon, specific product names — all preserved |
