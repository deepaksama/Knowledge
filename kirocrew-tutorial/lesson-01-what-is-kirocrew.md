# KiroCrew Tutorial Series

---

## Lesson 1: What Is KiroCrew?

---

### 🧠 Theory (Read This First)

**KiroCrew** is a system built into the Kiro CLI that lets you run multiple AI agents at the same time — each doing a different job — and coordinate them like an assembly line.

Without KiroCrew, you talk to one AI at a time. You ask, it answers, you ask again. That works fine for small tasks. But some tasks are too big or too complex for one conversation. KiroCrew solves this by letting you split a big task into stages and assign each stage to a specialist agent.

Think of it like a kitchen. You (the user) are the head chef. You give orders. The prep cook chops vegetables, the grill cook cooks the steak, and the plating cook arranges the dish. Each cook only does their part. The whole team finishes faster and better than one cook doing everything alone.

**Key terms:**

- **Agent** — An AI worker that runs one specific job. Each agent has a role (like "researcher" or "code writer").
- **Pipeline** — A list of stages that run in order (or in parallel). Think of it as the recipe the whole kitchen follows.
- **Stage** — One step in a pipeline. Each stage uses one agent.
- **CLI** — Command Line Interface. The text-based terminal where you type commands.
- **Kiro CLI** — The terminal tool that gives you access to KiroCrew and other AI features.
- **Orchestration** — Coordinating multiple workers toward one goal. KiroCrew is the orchestrator.

---

### 📐 Diagram

> 📌 **How to view these diagrams:**
> 1. Go to [app.diagrams.net](https://app.diagrams.net)
> 2. Click **Extras → Edit Diagram**
> 3. Delete any existing XML, paste the XML from the code block below, and click **OK**
> 4. The diagram will render immediately — no account needed

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1"
  connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169"
  pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="KiroCrew: Overall Architecture" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="280" y="20" width="400" height="40" as="geometry" />
    </mxCell>

    <!-- User / CLI box (input/output = light yellow) -->
    <mxCell id="3" value="You (User)&#xa;Kiro CLI Terminal" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="430" y="90" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- KiroCrew Orchestrator (pipeline = light green) -->
    <mxCell id="4" value="KiroCrew&#xa;Orchestrator" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="430" y="220" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: User -> Orchestrator -->
    <mxCell id="5" value="sends task + pipeline definition" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Agent 1 (light blue) -->
    <mxCell id="6" value="Agent 1&#xa;(Researcher)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="130" y="370" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Agent 2 (light blue) -->
    <mxCell id="7" value="Agent 2&#xa;(Code Writer)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="450" y="370" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Agent 3 (light blue) -->
    <mxCell id="8" value="Agent 3&#xa;(Reviewer)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="770" y="370" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Orchestrator -> Agent 1 -->
    <mxCell id="9" value="Stage 1" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="4" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Orchestrator -> Agent 2 -->
    <mxCell id="10" value="Stage 2" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="4" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Orchestrator -> Agent 3 -->
    <mxCell id="11" value="Stage 3" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="4" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Output box (light yellow) -->
    <mxCell id="12" value="Final Output&#xa;(back to you)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="430" y="510" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent 2 -> Output -->
    <mxCell id="13" value="result" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="7" target="12" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent 1 -> Agent 2 (feeds into) -->
    <mxCell id="14" value="feeds into" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="6" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent 3 -> Output -->
    <mxCell id="15" value="review result" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0;exitY=1;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="8" target="12" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

**What this diagram shows:**

You (at the top) send a task to the KiroCrew Orchestrator. The Orchestrator breaks the work into stages and sends each stage to a different agent. The agents do their work and pass results along. All results flow back to you as the final output.

---

### 🔬 Lab: Hands-On Practice

**Goal:** Explore the KiroCrew help documentation so you know where to find commands.
**Time:** ~5 minutes
**Prerequisites:** Kiro CLI must be installed and working on your machine.

---

**Step 1: Open your terminal.**

On macOS, press `Command + Space`, type `Terminal`, and press `Enter`.

> 💡 Tip: All KiroCrew commands are typed into this terminal window.

---

**Step 2: Check that Kiro CLI is installed.**

```
kiro --version
```

> 💡 Tip: If you see a version number (like `1.0.0`), Kiro CLI is ready. If you see `command not found`, you need to install it before continuing.

---

**Step 3: Open the Kiro CLI help menu.**

```
kiro --help
```

> 💡 Tip: This shows all top-level commands. You are looking for anything related to `chat` or agents — that is where KiroCrew lives.

---

**Step 4: Open the chat subcommand help.**

```
kiro chat --help
```

> 💡 Tip: KiroCrew pipelines are triggered from within a Kiro chat session. This shows you the options available.

---

**Step 5: Start a Kiro chat session.**

```
kiro chat
```

> 💡 Tip: This opens an interactive session. You will see a prompt where you can type messages to the AI. You are now inside the environment where KiroCrew runs.

---

**Step 6: Type a simple hello message to confirm the session works.**

```
Hello! What can you help me with?
```

> 💡 Tip: You should get a reply from the AI. This confirms your session is live. KiroCrew pipelines will be launched from sessions like this one in later lessons.

---

**Step 7: Exit the session.**

```
/exit
```

> 💡 Tip: This cleanly closes the chat session and returns you to your normal terminal.

---

**✅ You're done when:** You have seen the Kiro CLI version number, read the help output, started a chat session, received a reply, and exited cleanly.

**❓ If something goes wrong:** If `kiro --version` gives `command not found`, the Kiro CLI is not installed or not on your system PATH. Check the Kiro installation guide and make sure the install location is added to your PATH environment variable.

---

*End of Lesson 1*
