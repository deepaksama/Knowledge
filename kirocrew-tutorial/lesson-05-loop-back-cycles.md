# KiroCrew Tutorial

## Lesson 5: Loop-Back Cycles — Iterative Agent Review

---

### 🧠 Theory (Read This First)

A **loop-back cycle** is when one stage's output causes an earlier stage to re-run. It's a built-in retry system inside your pipeline.

Why it exists: quality control. A Writer agent drafts text. A Reviewer checks it. If the Reviewer finds problems, it sends the work back. The Writer fixes it. The Reviewer checks again. This repeats until the work passes.

Analogy: a teacher returns a paper with red marks. The student rewrites it. The teacher checks again — until the paper passes or the teacher runs out of patience.

**Key terms:**

- **`loop_to`** — the config block that tells KiroCrew to loop back to a prior stage.
- **trigger** — the exact text that fires the loop (e.g., `NEEDS_CHANGES`). If KiroCrew sees it, it loops.
- **`max_iterations`** — a safety cap. Stops the loop after N tries to prevent infinite loops.
- **`target`** — the stage name to loop back to.

The loop stops when:
1. The trigger text is **not** found in the output (work approved), or
2. `max_iterations` is reached (safety cap fires).

---

### 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="KiroCrew Loop-Back Cycle: Writer → Reviewer → (loop or done)"
      style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;"
      vertex="1" parent="1">
      <mxGeometry x="200" y="30" width="700" height="40" as="geometry" />
    </mxCell>

    <!-- Input box -->
    <mxCell id="3" value="Input / Prompt"
      style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontStyle=1;fontSize=11;"
      vertex="1" parent="1">
      <mxGeometry x="460" y="100" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Writer Stage -->
    <mxCell id="4" value="Writer Agent&#xa;(Stage 1)"
      style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=11;"
      vertex="1" parent="1">
      <mxGeometry x="460" y="210" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Input -> Writer -->
    <mxCell id="5" value="send prompt"
      style="edgeStyle=orthogonalEdgeStyle;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=2;fontSize=10;"
      edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Reviewer Stage -->
    <mxCell id="6" value="Reviewer Agent&#xa;(Stage 2)"
      style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontStyle=1;fontSize=11;"
      vertex="1" parent="1">
      <mxGeometry x="460" y="340" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Writer -> Reviewer -->
    <mxCell id="7" value="draft output"
      style="edgeStyle=orthogonalEdgeStyle;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=2;fontSize=10;"
      edge="1" source="4" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Decision Diamond: Trigger found? -->
    <mxCell id="8" value="Trigger found?&#xa;(NEEDS_CHANGES in output?)"
      style="rhombus;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontStyle=1;fontSize=10;verticalAlign=middle;"
      vertex="1" parent="1">
      <mxGeometry x="430" y="470" width="220" height="90" as="geometry" />
    </mxCell>

    <!-- Arrow: Reviewer -> Decision -->
    <mxCell id="9" value="reviewer output"
      style="edgeStyle=orthogonalEdgeStyle;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=2;fontSize=10;"
      edge="1" source="6" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Loop arrow: Decision (Yes) -> Writer -->
    <mxCell id="10" value="Yes → loop back&#xa;(NEEDS_CHANGES found)"
      style="edgeStyle=orthogonalEdgeStyle;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontStyle=2;fontSize=10;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;"
      edge="1" source="8" target="4" parent="1">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="730" y="515" />
          <mxPoint x="730" y="240" />
        </Array>
      </mxGeometry>
    </mxCell>

    <!-- Output box -->
    <mxCell id="11" value="Final Output&#xa;(Approved)"
      style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontStyle=1;fontSize=11;"
      vertex="1" parent="1">
      <mxGeometry x="460" y="630" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Decision (No) -> Output -->
    <mxCell id="12" value="No → done&#xa;(trigger NOT found)"
      style="edgeStyle=orthogonalEdgeStyle;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=2;fontSize=10;"
      edge="1" source="8" target="11" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- max_iterations note -->
    <mxCell id="13" value="max_iterations cap:&#xa;loop also stops if&#xa;retry limit is reached"
      style="text;html=1;strokeColor=#d6b656;fillColor=#ffe6cc;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=10;"
      vertex="1" parent="1">
      <mxGeometry x="760" y="340" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow from max_iterations note to decision diamond -->
    <mxCell id="14" value=""
      style="edgeStyle=orthogonalEdgeStyle;html=1;dashed=1;strokeColor=#d6b656;fontSize=10;"
      edge="1" source="13" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows a 3-stage pipeline flowing top to bottom: Input feeds the Writer agent, which passes its draft to the Reviewer agent. After the Reviewer runs, a decision diamond checks whether `NEEDS_CHANGES` appears in the output — if yes, the loop arrow on the right carries the work back to the Writer for another pass; if no, the pipeline exits normally to Final Output. The orange note on the right reminds you that `max_iterations` acts as a safety brake, forcing the loop to end even if the trigger keeps appearing.

---

### 🔬 Lab

**Goal:** Run a pipeline where a Reviewer agent loops back to a Writer agent when it outputs `NEEDS_CHANGES`.

**Time:** ~5 minutes

**Prerequisites:** Lessons 1–4 (you know how to create agents and run a basic pipeline)

---

**Step 1: Create a project folder** — `mkdir loop-lab && cd loop-lab`

> 💡 Tip: Keeping each lab in its own folder prevents config files from different lessons from mixing together.

---

**Step 2: Create the Writer agent** — Create a file named `writer.md` with this content:

```
You are a Writer agent. Write a short two-sentence product description for a coffee mug.
Always end your response with the word DONE.
```

> 💡 Tip: The Writer always says `DONE` at the end. This gives the Reviewer something clear to look for before deciding to approve or reject.

---

**Step 3: Create the Reviewer agent** — Create a file named `reviewer.md` with this content:

```
You are a Reviewer agent. Read the draft below and check if it mentions a price.
If the draft does NOT mention a price, respond with exactly: NEEDS_CHANGES — please add a price.
If the draft DOES mention a price, respond with exactly: APPROVED
```

> 💡 Tip: The Reviewer's job is simple and binary: it either outputs `NEEDS_CHANGES` or `APPROVED`. That predictability is what makes the loop trigger reliable.

---

**Step 4: Create the pipeline config** — Create a file named `pipeline.yml` with this content:

```yaml
pipeline:
  name: writer-reviewer-loop
  stages:
    - name: writer
      agent: writer.md
      input: "Write a product description for a coffee mug."

    - name: reviewer
      agent: reviewer.md
      input: "{{ stages.writer.output }}"
      loop_to:
        target: writer
        trigger: "NEEDS_CHANGES"
        max_iterations: 3
```

> 💡 Tip: The `loop_to` block is what turns a normal linear pipeline into a cycle. `trigger` is the exact text to watch for, `target` is the stage to re-run, and `max_iterations: 3` means the pipeline will try at most 3 times before stopping no matter what.

---

**Step 5: Run the pipeline** — `kiro-crew run pipeline.yml`

> 💡 Tip: Watch the console output. You should see the Writer stage run, then the Reviewer stage run. If the Reviewer outputs `NEEDS_CHANGES`, you will see the Writer stage run again — that is your loop-back cycle in action.

---

**Step 6: Confirm the loop fired** — Look for a log line that says something like `Looping back to stage: writer (iteration 1)` in the console output.

> 💡 Tip: Seeing at least one loop iteration confirms your `loop_to` config is wired up correctly. If you see `APPROVED` on the very first pass, try temporarily removing the word "price" from the Writer prompt to force a rejection.

---

**Step 7: Inspect the final output** — After the pipeline finishes, check the last output block. It should contain `APPROVED` and a product description that includes a price.

> 💡 Tip: The final output always comes from the last stage that ran without triggering the loop. Verifying it contains `APPROVED` (not `NEEDS_CHANGES`) confirms the loop exited cleanly.

---

**✅ Success Condition**

You succeed when you see at least one loop iteration in the console log — the Writer runs more than once because the Reviewer sent it `NEEDS_CHANGES`.

---

**⚠️ Common Error and Fix**

**Error:** The pipeline runs, but the loop never fires — the Reviewer always outputs `APPROVED` on the first pass even when the draft has no price.

**Fix:** Check the `trigger` value in your `pipeline.yml`. It must match the Reviewer's output *exactly*, including capitalization and any extra spaces. `NEEDS_CHANGES` ≠ `needs_changes` ≠ `NEEDS_CHANGES — please add a price`. If you want the trigger to match a prefix only, adjust the Reviewer prompt so it outputs exactly the trigger string with no extra characters, or check if your KiroCrew version supports substring matching.

---

*Next up — Lesson 6: Branching Pipelines — sending work to different agents based on output content.*

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 4](lesson-04-sequential-vs-parallel.md) | [Next: Lesson 6 — Blocking vs Background →](lesson-06-blocking-vs-background.md)
