# KiroCrew Tutorial Series
### A Complete Beginner's Guide to AI Agent Orchestration

---

This folder contains a 14-lesson, self-paced tutorial series for KiroCrew — the AI agent orchestration system built into the Kiro CLI. Each lesson builds on the last. Start at Lesson 1 and work your way through in order.

---

## Lessons at a Glance

| # | Lesson | Topic | What You'll Learn |
|---|--------|--------|-------------------|
| 1 | [What Is KiroCrew?](lesson-01-what-is-kirocrew.md) | Overview & Architecture | What KiroCrew is, key terms, overall architecture diagram |
| 2 | [Agent Roles](lesson-02-agent-roles.md) | Built-In Roles | All 5 built-in roles and when to use each |
| 3 | [Pipelines](lesson-03-pipelines.md) | Chaining Agents | Linking agents into automated multi-step workflows |
| 4 | [Sequential vs Parallel](lesson-04-sequential-vs-parallel.md) | Stage Ordering | `depends_on`, bottlenecks, and speed tradeoffs |
| 5 | [Loop-Back Cycles](lesson-05-loop-back-cycles.md) | Iterative Review | `loop_to`, trigger text, and `max_iterations` |
| 6 | [Blocking vs Background](lesson-06-blocking-vs-background.md) | Execution Modes | Blocking mode (available) vs background (not yet) |
| 7 | [Prompt Templates](lesson-07-prompt-templates.md) | Writing Instructions | `prompt_template`, `{task}` placeholder, passing context |
| 8 | [Tools & MCP](lesson-08-tools-and-mcp.md) | Tool Integration | File I/O, web search, shell, and external MCP integrations |
| 9 | [The Conductor Pattern](lesson-09-conductor-pattern.md) | Long-Horizon Goals | Managing complex goals with `kirocrew-conductor` |
| 10 | [Capstone Project](lesson-10-capstone-pipeline.md) | Full Pipeline | Build a complete research-to-report pipeline |
| 11 | [Custom Agents & Templates](lesson-11-custom-agents-and-templates.md) | Agent Configuration | Create agents with custom model, prompt, and tools |
| 12 | [Artifacts & Widgets](lesson-12-artifacts.md) | Persistent Output | Save output, interactive widgets, version history, deploy to AWS |
| 13 | [Scheduling](lesson-13-scheduling.md) | Automation | Cron jobs, heartbeats, webhooks — run Crew unattended |
| 14 | [Messaging Integrations](lesson-14-messaging-integrations.md) | Connect Everywhere | Slack, Telegram, Discord, Teams, WhatsApp, and more |

---

## Quick Navigation

- [→ Start here: Lesson 1](lesson-01-what-is-kirocrew.md)
- [→ Jump to the Capstone: Lesson 10](lesson-10-capstone-pipeline.md)
- [→ Custom agents: Lesson 11](lesson-11-custom-agents-and-templates.md)
- [→ Scheduling: Lesson 13](lesson-13-scheduling.md)
- [→ Connect to Slack/Discord/Telegram: Lesson 14](lesson-14-messaging-integrations.md)

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
