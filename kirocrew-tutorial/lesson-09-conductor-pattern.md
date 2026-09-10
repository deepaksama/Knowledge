# Lesson 9: The Conductor Pattern — Managing Long-Horizon Goals

---

## 🧠 Theory (Read This First)

The **kirocrew-conductor** is a special agent role. It only plans and coordinates — it never does the actual work itself.

A **long-horizon goal** is a goal too big to finish in one step or session. Examples: "build a full web app" or "write a 20-page report."

How it works: the conductor receives your goal, breaks it into **work items** (sub-tasks), and spawns a separate **top-level session** (a fresh, independent agent run) for each one. It monitors progress and decides what to do next each round. It is the project manager, not the worker.

Why it exists: large goals overwhelm single agents. The conductor stays organized, handles failures, and ensures every piece gets done.

How it differs from a regular pipeline: a regular pipeline has a fixed set of stages you define upfront. The conductor works **dynamically** — it creates and manages sessions on the fly as needed.

**Analogy:** A conductor in an orchestra never plays an instrument. They stand at the front, read the full score, and direct every section to come in at the right time.

---

## 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="The Conductor Pattern: Managing Long-Horizon Goals" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="30" width="769" height="40" as="geometry" />
    </mxCell>

    <!-- Your Goal box -->
    <mxCell id="3" value="Your Goal" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#36393d;fontSize=14;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="100" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Conductor box -->
    <mxCell id="4" value="&lt;b&gt;kirocrew-conductor&lt;/b&gt;&lt;br/&gt;Conductor: Plans Only, Never Works" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=14;fontStyle=0;" vertex="1" parent="1">
      <mxGeometry x="384" y="230" width="400" height="80" as="geometry" />
    </mxCell>

    <!-- Session 1 box -->
    <mxCell id="5" value="&lt;b&gt;Session 1: Sub-task A&lt;/b&gt;&lt;br/&gt;role: kirocrew" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="120" y="410" width="200" height="70" as="geometry" />
    </mxCell>

    <!-- Session 2 box -->
    <mxCell id="6" value="&lt;b&gt;Session 2: Sub-task B&lt;/b&gt;&lt;br/&gt;role: kirocrew-research" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="484" y="410" width="200" height="70" as="geometry" />
    </mxCell>

    <!-- Session 3 box -->
    <mxCell id="7" value="&lt;b&gt;Session 3: Sub-task C&lt;/b&gt;&lt;br/&gt;role: kirocrew" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="849" y="410" width="200" height="70" as="geometry" />
    </mxCell>

    <!-- Results box -->
    <mxCell id="8" value="Results" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#36393d;fontSize=14;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="580" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Goal -> Conductor -->
    <mxCell id="9" value="big goal" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=11;fontStyle=2;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Conductor -> Session 1 -->
    <mxCell id="10" value="spawns + monitors" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=10;fontStyle=2;" edge="1" source="4" target="5" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Conductor -> Session 2 -->
    <mxCell id="11" value="spawns + monitors" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=10;fontStyle=2;" edge="1" source="4" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Conductor -> Session 3 -->
    <mxCell id="12" value="spawns + monitors" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=10;fontStyle=2;" edge="1" source="4" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Session 1 -> Results -->
    <mxCell id="13" value="reports back" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=10;fontStyle=2;" edge="1" source="5" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Session 2 -> Results -->
    <mxCell id="14" value="reports back" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=10;fontStyle=2;" edge="1" source="6" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Session 3 -> Results -->
    <mxCell id="15" value="reports back" style="edgeStyle=orthogonalEdgeStyle;html=1;fontSize=10;fontStyle=2;" edge="1" source="7" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Results -> Conductor (feedback loop) -->
    <mxCell id="16" value="decides next round" style="edgeStyle=elbowEdgeStyle;html=1;fontSize=10;fontStyle=2;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;curved=1;" edge="1" source="8" target="4" parent="1">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="760" y="610" />
          <mxPoint x="760" y="270" />
        </Array>
      </mxGeometry>
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows how a single big goal flows down to the `kirocrew-conductor`, which splits it into three independent sessions running in parallel. Each session does real work and reports its results back, and the conductor uses those results to decide what happens in the next round — forming a feedback loop that continues until the full goal is complete.

---

## 🔬 Lab

**Goal:** Use the `kirocrew-conductor` role in a single pipeline stage and observe how it decomposes a goal instead of directly answering it.

**Time:** ~5 minutes

**Prerequisites:** Lessons 1–3 (basic pipeline setup, roles, and stages)

---

**Step 1: Open terminal** — Open a new terminal window on your machine.

> 💡 Tip: A clean terminal session avoids leftover environment state from other work.

---

**Step 2: Start kiro chat** — Run the following command to start an interactive Kiro session:

```bash
kiro chat
```

> 💡 Tip: The `kiro chat` command puts you in an interactive session where you can send prompts directly to the AI.

---

**Step 3: Send the planning prompt** — Type or paste this exact prompt and press Enter:

```
Run a single-stage pipeline with the role kirocrew-conductor and this prompt:
"Create a plan to build a simple to-do list web app. Break this into at least 4 work items and list them."
```

> 💡 Tip: Specifying the role explicitly tells KiroCrew to use the conductor's planning-only behavior — not a general-purpose agent that would just write code.

---

**Step 4: Observe the output** — Read the response carefully. You should see a structured list of work items or sub-tasks, not any actual code or file output.

> 💡 Tip: If you see code instead of a plan, the role was not applied correctly. Go back to Step 3 and make sure you included `kirocrew-conductor` in your prompt.

---

**Step 5: Verify the conductor stayed in planning mode** — Ask the AI:

```
Did the conductor agent write any code, or did it only plan?
```

> 💡 Tip: This question helps you confirm the conductor role is working as designed — it should confirm it only produced a plan, not implementation.

---

**Step 6: Compare to a regular role** — Ask the AI:

```
How is using kirocrew-conductor different from using the kirocrew role for the same prompt?
```

> 💡 Tip: The answer should highlight that `kirocrew` would attempt to do the work, while `kirocrew-conductor` only breaks it down and coordinates. This is the core distinction.

---

**Step 7: Exit** — Type `exit` or press `Ctrl+C` to end the session.

```
exit
```

> 💡 Tip: Always exit cleanly so Kiro can flush any session state it tracks.

---

**✅ Success Condition:** You saw a structured plan with at least 4 labeled work items. No source code was generated. The AI confirmed the conductor only planned.

---

**⚠️ Common Error: The AI generates code instead of a plan**

**Cause:** The `kirocrew-conductor` role was not passed correctly, so the session defaulted to a standard agent that tries to do the work directly.

**Fix:** Make sure your prompt explicitly names the role as `kirocrew-conductor`. Example:

```
Use the kirocrew-conductor role. Do not write code. Only produce a structured plan with work items.
```

If the problem continues, check that your KiroCrew version supports the conductor role by running `kiro --version` and consulting the release notes.
