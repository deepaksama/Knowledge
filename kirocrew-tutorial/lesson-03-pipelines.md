# KiroCrew Tutorial Series

---

## Lesson 3: Pipelines — Chaining Agents Together

---

### 🧠 Theory (Read This First)

A **pipeline** is a list of stages that run in a set order to complete one big task. Each stage uses one agent. The output of one stage can feed into the next stage as input.

Without pipelines, you would have to run each agent by hand, copy its output, and paste it into the next one. That is slow and error-prone. A pipeline does all of that for you, automatically.

Think of it like an assembly line at a car factory. Station 1 puts on the frame. Station 2 adds the engine. Station 3 adds the seats. Each station only starts after the previous one finishes. The car moves down the line and comes out complete at the end. KiroCrew pipelines work the same way.

**Key terms:**

- **Pipeline** — A set of stages that run in sequence or in parallel to complete a task.
- **Stage** — One unit of work inside a pipeline. It has a name, a role, and a prompt.
- **Prompt template** — The instructions you give to the agent at that stage. It tells the agent exactly what to do.
- **Sequential** — Stages that run one after another, in order. Stage 2 starts only after Stage 1 finishes.
- **Parallel** — Stages that run at the same time. Neither stage waits for the other.
- **depends_on** — A setting on a stage that tells KiroCrew: "do not start this stage until these other stages are done." This is how you create sequential order.
- **DAG** — Directed Acyclic Graph. A fancy term for a pipeline where stages can branch and merge but never loop back. Do not worry about this term — just know it means your pipeline has a clear start and a clear end.

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
    <mxCell id="2" value="Pipeline DAG: Sequential and Parallel Stages" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="230" y="20" width="560" height="40" as="geometry" />
    </mxCell>

    <!-- Input (light yellow) -->
    <mxCell id="3" value="Your Task&#xa;(Input)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="430" y="90" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Stage 1: sequential (light green) -->
    <mxCell id="4" value="Stage 1&#xa;Research&#xa;(kirocrew-research)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="430" y="220" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Arrow: Input -> Stage 1 -->
    <mxCell id="5" value="starts" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 2a: parallel branch (light green) -->
    <mxCell id="6" value="Stage 2a&#xa;Write Draft&#xa;(kirocrew)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="240" y="370" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Stage 2b: parallel branch (light green) -->
    <mxCell id="7" value="Stage 2b&#xa;Find Examples&#xa;(kirocrew-research)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="620" y="370" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Arrows: Stage 1 -> Stage 2a and 2b (parallel) -->
    <mxCell id="8" value="parallel" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="4" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="9" value="parallel" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="4" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 3: merges both (light green) -->
    <mxCell id="10" value="Stage 3&#xa;Review &amp; Combine&#xa;(kirocrew)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="430" y="520" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Arrows: Stage 2a and 2b -> Stage 3 (merge) -->
    <mxCell id="11" value="depends_on 2a" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="6" target="10" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>
    <mxCell id="12" value="depends_on 2b" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="7" target="10" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Output (light yellow) -->
    <mxCell id="13" value="Final Output&#xa;(back to you)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="430" y="665" width="160" height="55" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 3 -> Output -->
    <mxCell id="14" value="result" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="10" target="13" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

**What this diagram shows:**

Your task enters at the top. Stage 1 runs first (sequential). Then Stages 2a and 2b run at the same time (parallel) — neither waits for the other. Stage 3 waits for both Stage 2a and 2b to finish before it starts (using `depends_on`). The final output flows to you at the bottom.

---

### 🔬 Lab: Hands-On Practice

**Goal:** Write and run your first two-stage KiroCrew pipeline entirely from a Kiro chat session.

**Time:** ~5 minutes
**Prerequisites:** Lesson 1 (Kiro CLI installed, chat session working) and Lesson 2 (you know what a role is).

---

**Step 1: Open your terminal.**

On macOS, press `Command + Space`, type `Terminal`, and press `Enter`.

> 💡 Tip: All KiroCrew pipelines are launched from inside a Kiro chat session.

---

**Step 2: Start a Kiro chat session.**

```
kiro chat
```

> 💡 Tip: You need to be inside a chat session before you can launch a pipeline.

---

**Step 3: Ask the AI to run a two-stage pipeline — copy and paste this exactly.**

```
Please run a two-stage KiroCrew pipeline using the subagent tool.
Stage 1: name it "research", role "kirocrew-research", prompt "List 3 benefits of drinking water daily."
Stage 2: name it "summarize", role "kirocrew-lite", depends on "research", prompt "Take the research findings and write one short paragraph summarizing the 3 benefits."
```

> 💡 Tip: You are giving the AI the full blueprint of the pipeline. It will use the `subagent` tool to run both stages.

---

**Step 4: Watch the output appear.**

Wait for the AI to complete both stages. You will see two results: one from the research stage and one from the summarize stage.

> 💡 Tip: Notice that Stage 2 only runs after Stage 1 is done. That is the `depends_on` setting at work.

---

**Step 5: Ask the AI to explain what it just did.**

```
Can you explain the pipeline you just ran? How many stages were there, and what did each stage do?
```

> 💡 Tip: This helps you confirm you understand the output and connects the theory to the result you just saw.

---

**Step 6: Exit the session.**

```
/exit
```

> 💡 Tip: Always exit cleanly after each lab.

---

**✅ You're done when:** You see two separate stage outputs — research findings first, then a combined summary paragraph — and you can describe what `depends_on` does in your own words.

**❓ If something goes wrong:** If the AI only produces one output instead of two, try adding this to your prompt: `Make sure to run both stages using the subagent tool, not just answer directly.` The AI sometimes skips the pipeline and answers from memory — reminding it to use the tool fixes this.

---

*End of Lesson 3*

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 2](lesson-02-agent-roles.md) | [Next: Lesson 4 — Sequential vs Parallel →](lesson-04-sequential-vs-parallel.md)
