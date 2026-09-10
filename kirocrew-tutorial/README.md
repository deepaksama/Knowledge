# KiroCrew Tutorial Series
### A Complete Beginner's Guide to AI Agent Orchestration

---

This folder contains a 10-lesson, self-paced tutorial series for KiroCrew — the AI agent orchestration system built into the Kiro CLI. Each lesson builds on the last. Start at Lesson 1 and work your way through in order.

---

## Lessons at a Glance

| # | File | Topic | What You'll Learn |
|---|------|--------|-------------------|
| 1 | `lesson-01-what-is-kirocrew.md` | What Is KiroCrew? | Overview, architecture, key terms |
| 2 | `lesson-02-agent-roles.md` | Agent Roles | Built-in roles and when to use each |
| 3 | `lesson-03-pipelines.md` | Pipelines | Chaining agents into automated workflows |
| 4 | `lesson-04-sequential-vs-parallel.md` | Sequential vs Parallel | `depends_on`, bottlenecks, speed tradeoffs |
| 5 | `lesson-05-loop-back-cycles.md` | Loop-Back Cycles | Iterative review with `loop_to` and trigger text |
| 6 | `lesson-06-blocking-vs-background.md` | Blocking vs Background | Execution modes and what's not yet available |
| 7 | `lesson-07-prompt-templates.md` | Prompt Templates | Writing instructions, using `{task}`, passing context |
| 8 | `lesson-08-tools-and-mcp.md` | Tools & MCP | File I/O, web search, shell, and external integrations |
| 9 | `lesson-09-conductor-pattern.md` | The Conductor Pattern | Managing long-horizon goals with `kirocrew-conductor` |
| 10 | `lesson-10-capstone-pipeline.md` | Capstone Project | Build a full research-to-report pipeline |
| 11 | `lesson-11-custom-agents-and-templates.md` | Custom Agents & Templates | Create agents with custom model, prompt, and tools; use templates |
| 12 | `lesson-12-artifacts.md` | Artifacts & Widgets | Save agent output, interactive widgets, version history, deploy to AWS |
| 13 | `lesson-13-scheduling.md` | Scheduling (Cron, Heartbeats, Webhooks) | Automate tasks on a schedule or trigger from external systems |
| 14 | `lesson-14-messaging-integrations.md` | Messaging Integrations | Connect Crew to Slack, Telegram, Discord, Teams, WhatsApp, and more |

---

## How to View Diagrams

Each lesson includes a draw.io architecture diagram in XML format.

To view any diagram:
1. Go to [app.diagrams.net](https://app.diagrams.net)
2. Click **Extras → Edit Diagram**
3. Delete any existing XML, paste the XML from the lesson's code block, and click **OK**
4. The diagram renders immediately — no account needed

---

## Tips for Beginners

- Read each Theory section before starting the Lab.
- Do the Labs in order — each one builds on the last.
- If a lab step fails, read the "If something goes wrong" note at the bottom of the lab.
- You do not need to memorize anything. The goal is to build intuition through practice.

---

*Total estimated time to complete all 14 lessons: ~2.5 hours*
