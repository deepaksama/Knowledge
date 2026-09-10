## Lesson 7: Prompt Templates — Giving Each Stage Its Instructions

### 🧠 Theory (Read This First)

A **prompt template** is the text you write to tell an agent what to do at a specific stage. Think of it as the agent's job description for that step.

Why does it matter? The quality of your prompt directly determines the quality of the agent's output. A vague prompt gives vague output. A specific prompt gives exactly what you need.

KiroCrew gives you two special placeholders:

- **`{{task}}`** — inserts the overall task description (the top-level `task` field of the pipeline) into this stage's prompt. Every stage can use it so each agent always knows the big picture.
- **Prior stage context** — the pipeline automatically passes earlier stage output as context. Reference it directly: "Using the outline from Stage 1, write the full article."

Analogy: writing a prompt is like writing a recipe for a chef. Say "make food" and you get random results. Say "make a 3-ingredient pasta for two" and you get exactly what you need.

**Best practices:**
- Be specific
- Use action verbs (write, list, summarize, extract)
- State the desired output format (bullet list, JSON, markdown)

---

### 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Overall Task Field (light yellow) -->
    <mxCell id="2" value="Overall Task Field&#xa;(pipeline.task)&#xa;&#xa;&quot;Write KiroCrew tutorial lessons 4–7&quot;" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontStyle=1;fontSize=13;verticalAlign=middle;arcSize=10;" vertex="1" parent="1">
      <mxGeometry x="334" y="40" width="420" height="90" as="geometry" />
    </mxCell>

    <!-- Stage 1 container (light green) -->
    <mxCell id="3" value="Stage 1" style="swimlane;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=14;fontStyle=1;startSize=30;" vertex="1" parent="1">
      <mxGeometry x="120" y="220" width="420" height="200" as="geometry" />
    </mxCell>

    <!-- Stage 1 prompt_template box -->
    <mxCell id="4" value="prompt_template:&#xa;&#xa;&quot;Your overall goal is: {{task}}&#xa;&#xa;Research and list 5 key concepts&#xa;for this topic. Output a numbered list.&quot;&#xa;&#xa;⬆ {{task}} placeholder highlighted" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontSize=11;verticalAlign=top;" vertex="1" parent="3">
      <mxGeometry x="20" y="50" width="380" height="130" as="geometry" />
    </mxCell>

    <!-- Stage 2 container (light green) -->
    <mxCell id="5" value="Stage 2" style="swimlane;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=14;fontStyle=1;startSize=30;" vertex="1" parent="1">
      <mxGeometry x="630" y="220" width="420" height="200" as="geometry" />
    </mxCell>

    <!-- Stage 2 prompt_template box -->
    <mxCell id="6" value="prompt_template:&#xa;&#xa;&quot;Your overall goal is: {{task}}&#xa;&#xa;Using the concept list from Stage 1&#xa;(provided in context above), write a&#xa;short tutorial paragraph for each concept.&quot;" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontSize=11;verticalAlign=top;" vertex="1" parent="5">
      <mxGeometry x="20" y="50" width="380" height="130" as="geometry" />
    </mxCell>

    <!-- Arrow: Overall Task → Stage 1 ({{task}} injected) -->
    <mxCell id="7" value="{{task}} injected" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#888800;fontStyle=1;fontSize=11;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="2" target="3" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Overall Task → Stage 2 ({{task}} injected) -->
    <mxCell id="8" value="{{task}} injected" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#888800;fontStyle=1;fontSize=11;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="2" target="5" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 1 → Stage 2 (prior output as context) -->
    <mxCell id="9" value="prior output as context" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#6c8ebf;fontStyle=1;fontSize=12;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="3" target="5" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows the overall `task` field at the top (yellow) injecting `{{task}}` into both Stage 1 and Stage 2 via downward arrows, so every stage always knows the big-picture goal. A horizontal blue arrow from Stage 1 to Stage 2 shows how Stage 1's output flows forward as context, allowing Stage 2's `prompt_template` to reference it directly. Each stage box contains its own `prompt_template` text, illustrating how the same `{{task}}` placeholder plus prior-stage context combine to give each agent precise, connected instructions.

---

### 🔬 Lab

**Goal:** Write a two-stage pipeline where Stage 2's prompt uses `{{task}}` and explicitly references Stage 1's output.

**Time:** ~5 minutes

**Prerequisites:** Lessons 1–3

---

Step 1: Create a new pipeline file — create a file named `prompt-template-lab.yaml` in your pipelines directory.

> 💡 Tip: Keeping each lab in its own file makes it easy to compare and revisit examples later.

---

Step 2: Add the top-level task field — paste this at the top of the file:

```yaml
task: "Explain what prompt templates are and why they matter in AI pipelines"
```

> 💡 Tip: This is the text that `{{task}}` will inject into every stage. Write it as a clear, one-sentence goal.

---

Step 3: Define Stage 1 with a `{{task}}`-powered prompt — add the first stage:

```yaml
stages:
  - name: outline_stage
    role: kiro_default
    prompt_template: |
      Your overall goal is: {{task}}

      List 3 key points about this topic as a numbered list.
      Be concise — one sentence per point.
```

> 💡 Tip: `{{task}}` gets replaced at runtime with the value you set in Step 2. This keeps your prompt DRY (don't repeat yourself).

---

Step 4: Define Stage 2 that references Stage 1's output — append the second stage:

```yaml
  - name: expand_stage
    role: kiro_default
    prompt_template: |
      Your overall goal is: {{task}}

      Stage 1 produced a 3-point outline (see context above).
      For each of the 3 points, write one short paragraph expanding on it.
      Use plain language suitable for a beginner.
```

> 💡 Tip: The phrase "see context above" works because KiroCrew automatically prepends prior stage output to this stage's context window — you don't wire it manually.

---

Step 5: Save the file — save `prompt-template-lab.yaml`.

> 💡 Tip: Double-check indentation. YAML is indent-sensitive; misaligned lines cause parse errors before the pipeline even starts.

---

Step 6: Run the pipeline — execute:

```bash
kiro crew run prompt-template-lab.yaml
```

> 💡 Tip: Watch the output for Stage 1 first. Confirm it produced a numbered list before Stage 2 runs — that list is exactly what Stage 2's prompt refers to as "context above."

---

Step 7: Verify the output — confirm that Stage 2's response contains three expanded paragraphs that match the three points from Stage 1.

> 💡 Tip: If Stage 2 ignores Stage 1's points entirely, your `prompt_template` may not be referencing the context explicitly enough. Add a line like "Point 1 from context was: …" to force grounding.

---

**✅ Success condition:** Stage 2 produces three paragraphs that each correspond to one of Stage 1's numbered points, and both stages show `{{task}}` resolved to your task string in the logs.

---

**⚠️ Common error:** Stage 2 output is generic and does not reference Stage 1's list.

**Fix:** Make the reference explicit in the `prompt_template`. Instead of a vague "use the context," write: "Stage 1 gave you a numbered list of 3 points. Start each paragraph with the exact point number and restate it before expanding." Explicit instructions force the agent to anchor its output to the prior stage's results.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 6](lesson-06-blocking-vs-background.md) | [Next: Lesson 8 — Tools & MCP →](lesson-08-tools-and-mcp.md)
