# Lesson 4: Sequential vs Parallel Stages

---

## 🧠 Theory (Read This First)

A **pipeline** is a series of **stages** — units of work that run in order, or at the same time.

**Sequential** means one stage runs after another. Stage B waits for Stage A to finish before it starts. Think of washing dishes one at a time: you finish one dish, then pick up the next.

**Parallel** means two or more stages run at the same time. Neither waits for the other. Think of loading a dishwasher: you can load plates and glasses at the same time.

Why does this matter? Speed. If two stages don't need each other's output, running them in parallel cuts your total time. But if Stage C needs the result of Stage A, you must run Stage A first. That's a **dependency**.

In KiroCrew, you declare dependencies with `depends_on`. A stage with no `depends_on` starts immediately. A stage with `depends_on` waits.

A **bottleneck** happens when one slow stage blocks everything after it. Parallelism helps avoid bottlenecks where possible.

**Key terms:**
- **stage** — one unit of work in a pipeline
- **sequential** — stages run one after another
- **parallel** — stages run at the same time
- **depends_on** — a declaration that one stage needs another to finish first
- **bottleneck** — a slow stage that blocks downstream work

---

## 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="KiroCrew Pipeline: Sequential vs Parallel Stages" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="30" width="769" height="40" as="geometry" />
    </mxCell>

    <!-- Pipeline Start (input) -->
    <mxCell id="3" value="Pipeline Start" style="ellipse;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#666600;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="110" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Stage A -->
    <mxCell id="4" value="Stage A&#xa;(no deps)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="240" y="240" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Stage B -->
    <mxCell id="5" value="Stage B&#xa;(no deps)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="729" y="240" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Stage C -->
    <mxCell id="6" value="Stage C&#xa;(depends on A)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="240" y="400" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Stage D -->
    <mxCell id="7" value="Stage D&#xa;(depends on B &amp; C)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="484" y="560" width="160" height="70" as="geometry" />
    </mxCell>

    <!-- Pipeline End (output) -->
    <mxCell id="8" value="Pipeline End" style="ellipse;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#666600;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="700" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Pipeline Start → Stage A (starts) -->
    <mxCell id="9" value="starts" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#666666;fontStyle=2;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Pipeline Start → Stage B (starts, parallel) -->
    <mxCell id="10" value="starts (parallel)" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#666666;fontStyle=2;" edge="1" source="3" target="5" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage A → Stage C (depends_on A) -->
    <mxCell id="11" value="depends_on A" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#82b366;fontStyle=2;" edge="1" source="4" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage C → Stage D (depends_on C) -->
    <mxCell id="12" value="depends_on C" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0;entryY=1;entryDx=0;entryDy=0;strokeColor=#82b366;fontStyle=2;" edge="1" source="6" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage B → Stage D (depends_on B) -->
    <mxCell id="13" value="depends_on B" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=1;entryY=1;entryDx=0;entryDy=0;strokeColor=#82b366;fontStyle=2;" edge="1" source="5" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage D → Pipeline End -->
    <mxCell id="14" value="completes" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#666666;fontStyle=2;" edge="1" source="7" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Parallel annotation -->
    <mxCell id="15" value="← A and B run in parallel →" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontStyle=2;fontSize=11;fontColor=#444444;" vertex="1" parent="1">
      <mxGeometry x="240" y="190" width="649" height="30" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows a pipeline with four stages. Stage A and Stage B both start at the same time (parallel) from the Pipeline Start node — neither depends on the other. Stage C can only run after Stage A finishes (`depends_on A`), and Stage D can only run after both Stage B and Stage C finish (`depends_on B` and `depends_on C`). Everything feeds into the Pipeline End node once Stage D completes.

---

## 🔬 Lab

**Goal:** Run a 3-stage pipeline where Stage 1 and Stage 2 run in parallel, and Stage 3 depends on both.

**Time:** ~5 minutes

**Prerequisites:** Lessons 1–3 completed. KiroCrew CLI installed and working.

---

**Step 1: Create a new project directory** — `mkdir parallel-lab && cd parallel-lab`

> 💡 Tip: Keeping each lab in its own folder prevents config files from one lesson from interfering with another.

---

**Step 2: Initialize a new KiroCrew pipeline config** — `kiro crew init --name parallel-lab`

> 💡 Tip: `init` scaffolds a starter `crew.yaml` file. You'll edit it in the next step to define your stages.

---

**Step 3: Edit `crew.yaml` to define three stages** — Open `crew.yaml` and replace its contents with the following:

```yaml
name: parallel-lab

stages:
  fetch-data:
    agent: kiro_default
    prompt: "Print: Stage 1 (fetch-data) complete."

  validate-schema:
    agent: kiro_default
    prompt: "Print: Stage 2 (validate-schema) complete."

  generate-report:
    agent: kiro_default
    depends_on:
      - fetch-data
      - validate-schema
    prompt: "Print: Stage 3 (generate-report) complete. Both inputs received."
```

> 💡 Tip: `fetch-data` and `validate-schema` have no `depends_on`, so KiroCrew starts them at the same time. `generate-report` lists both as dependencies, so it waits for both to finish before it runs.

---

**Step 4: Validate your config before running** — `kiro crew validate`

> 💡 Tip: Always validate first. This catches typos in stage names and missing `depends_on` references before you waste time running a broken pipeline.

---

**Step 5: Run the pipeline** — `kiro crew run`

> 💡 Tip: Watch the output. You should see Stage 1 and Stage 2 start nearly simultaneously. Stage 3 will only appear after both finish.

---

**Step 6: Confirm the execution order in the run log** — `kiro crew logs --last`

> 💡 Tip: The log shows timestamps for each stage. If Stage 1 and Stage 2 have overlapping start/end times, parallel execution worked correctly.

---

**✅ Success Condition**

The run completes without errors. The log shows `fetch-data` and `validate-schema` ran in parallel (overlapping timestamps), and `generate-report` started only after both finished.

---

**⚠️ Common Error and Fix**

**Error:** `generate-report` fails with `unknown stage referenced in depends_on: fetch_data`

**Fix:** Stage names in `depends_on` must exactly match the stage keys in `crew.yaml`. Check for typos, especially underscores vs hyphens (e.g., `fetch_data` vs `fetch-data`). Fix the name to match exactly and re-run `kiro crew validate`.
