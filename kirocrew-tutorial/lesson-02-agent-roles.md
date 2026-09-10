# KiroCrew Tutorial Series

---

## Lesson 2: Agent Roles — Who Does What?

---

### 🧠 Theory (Read This First)

An **agent** is an AI worker. Each agent has a **role** — a set of instructions that tells it what kind of work to do and how to behave. Roles are like job titles. A researcher agent searches and summarizes. A coder agent writes code. A reviewer agent checks work.

KiroCrew comes with built-in roles you can assign to any stage in a pipeline. Choosing the right role for each stage is the most important decision you make when designing a pipeline. The wrong role gives you poor results — like asking a pastry chef to grill a steak.

Think of it like a school. Each teacher has a subject. You would not ask your math teacher to grade your essay. KiroCrew agents are the same — each role is trained to excel at one type of task.

**Key terms:**

- **Role** — A named preset that defines an agent's behavior, skills, and focus area.
- **Built-in role** — A role that already exists in KiroCrew. You do not need to create it.
- **Custom role** — A role you define yourself by writing a system prompt (instructions for the agent).
- **System prompt** — A set of instructions given to an agent before it starts work. It shapes how the agent thinks and responds.
- **Pipeline stage** — One step in a pipeline. You assign one role to each stage.

---

### 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1"
  connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169"
  pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="KiroCrew Agent Roles" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="280" y="20" width="500" height="40" as="geometry" />
    </mxCell>

    <!-- Pipeline (light green) -->
    <mxCell id="3" value="Pipeline&#xa;(your task)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="420" y="90" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Role: kirocrew (orchestrator) - light blue -->
    <mxCell id="4" value="kirocrew&#xa;(Orchestrator / Default)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="60" y="240" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Role: kirocrew-conductor - light blue -->
    <mxCell id="5" value="kirocrew-conductor&#xa;(Goal Manager)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="270" y="240" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Role: kirocrew-research - light blue -->
    <mxCell id="6" value="kirocrew-research&#xa;(Researcher)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="480" y="240" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Role: kirocrew-knowledge - light blue -->
    <mxCell id="7" value="kirocrew-knowledge&#xa;(Knowledge Extractor)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="690" y="240" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Role: kirocrew-lite - light blue -->
    <mxCell id="8" value="kirocrew-lite&#xa;(Lightweight Worker)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="900" y="240" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Arrows from pipeline to each role -->
    <mxCell id="9" value="assign role" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="10" value="assign role" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="3" target="5" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="11" value="assign role" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="3" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="12" value="assign role" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="3" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="13" value="assign role" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="3" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Output boxes per role (light yellow) -->
    <mxCell id="14" value="Schedules tasks,&#xa;manages agents" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=11;" vertex="1" parent="1">
      <mxGeometry x="60" y="380" width="180" height="50" as="geometry" />
    </mxCell>
    <mxCell id="15" value="Breaks goals into&#xa;work items" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=11;" vertex="1" parent="1">
      <mxGeometry x="270" y="380" width="180" height="50" as="geometry" />
    </mxCell>
    <mxCell id="16" value="Searches, reads,&#xa;summarizes info" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=11;" vertex="1" parent="1">
      <mxGeometry x="480" y="380" width="180" height="50" as="geometry" />
    </mxCell>
    <mxCell id="17" value="Extracts and stores&#xa;key knowledge" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=11;" vertex="1" parent="1">
      <mxGeometry x="690" y="380" width="180" height="50" as="geometry" />
    </mxCell>
    <mxCell id="18" value="Fast, simple&#xa;low-cost tasks" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=11;" vertex="1" parent="1">
      <mxGeometry x="900" y="380" width="180" height="50" as="geometry" />
    </mxCell>

    <!-- Arrows from role to output description -->
    <mxCell id="19" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="4" target="14" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="20" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="5" target="15" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="21" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="6" target="16" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="22" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="7" target="17" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="23" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="8" target="18" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

**What this diagram shows:**

Your pipeline (top center, green) can assign any of the built-in roles to a stage. Each role (blue) is a different type of AI worker. Below each role is a yellow box describing what that worker actually does. You pick the right role for each job.

---

### 🔬 Lab: Hands-On Practice

**Goal:** Read the built-in role list in the KiroCrew subagent tool and match each role to a real-world job.

**Time:** ~5 minutes
**Prerequisites:** Lesson 1 — you should have Kiro CLI installed and a chat session working.

---

**Step 1: Open your terminal.**

On macOS, press `Command + Space`, type `Terminal`, and press `Enter`.

> 💡 Tip: Every KiroCrew command runs from the terminal.

---

**Step 2: Start a Kiro chat session.**

```
kiro chat
```

> 💡 Tip: KiroCrew pipelines live inside chat sessions. You need an active session to explore agent features.

---

**Step 3: Ask the AI to list all available KiroCrew agent roles.**

```
What are all the available KiroCrew agent roles I can use in a pipeline stage?
```

> 💡 Tip: The AI knows its own role catalog. This response will list every built-in role and a short description of each.

---

**Step 4: Ask about the difference between `kirocrew` and `kirocrew-conductor`.**

```
What is the difference between the kirocrew role and the kirocrew-conductor role?
```

> 💡 Tip: These two roles are easy to confuse. `kirocrew` is the general-purpose default agent. `kirocrew-conductor` is a planner — it decomposes big goals into smaller work items but does not do the work itself.

---

**Step 5: Ask which role you would use for a research task.**

```
If I want one stage of my pipeline to search the web and summarize findings, which role should I use?
```

> 💡 Tip: The answer should be `kirocrew-research`. Notice how the role name hints at its purpose.

---

**Step 6: Ask which role is best for a quick, low-cost task.**

```
Which role is best when I want a fast, simple response and do not need deep reasoning?
```

> 💡 Tip: The answer should be `kirocrew-lite`. Use this role when speed matters more than depth.

---

**Step 7: Exit the session.**

```
/exit
```

> 💡 Tip: Always exit cleanly so no resources are left running.

---

**✅ You're done when:** You can name at least 4 built-in roles and say in one sentence what each one does.

**❓ If something goes wrong:** If the AI does not list roles, try rephrasing: `List all agent roles available in KiroCrew subagent pipelines.` If you still get nothing, make sure you are inside a `kiro chat` session, not just your regular terminal.

---

*End of Lesson 2*
