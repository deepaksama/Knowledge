# Lesson 6: Blocking vs Background Mode

## 🧠 Theory (Read This First)

When you run a KiroCrew pipeline, it runs in **blocking mode** by default. That means your tool call waits. It does not return until every stage in the pipeline finishes. You get all results at once, in order.

**Blocking** means: the pipeline holds the line. You asked for it, you wait for it, you get it.

**Background** means: fire and forget — send the task and move on while it runs. But here is the important part: **background mode is NOT yet implemented in KiroCrew.** Do not try to use it. If you see a `mode` parameter in documentation, know that only `blocking` works today. Passing any other value will either error or be ignored.

The **mode parameter** is the setting that would control this behavior when background mode arrives.

Why does it matter? Blocking is safe and predictable. You always know when your results are ready — because they arrive the moment the call returns.

**Analogy:** Blocking is like ordering food at a counter and standing there until your tray is ready. Background would be like getting a buzzer so you can sit at your table — but that buzzer hasn't been built yet.

---

## 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1100" pageHeight="850" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- ===== TITLE ===== -->
    <mxCell id="100" value="Blocking vs Background Mode" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=18;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="20" width="700" height="40" as="geometry" />
    </mxCell>

    <!-- ===== LEFT PANEL LABEL: BLOCKING MODE ===== -->
    <mxCell id="101" value="BLOCKING MODE (Available Now)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#2d6a2d;" vertex="1" parent="1">
      <mxGeometry x="40" y="70" width="440" height="30" as="geometry" />
    </mxCell>

    <!-- ===== RIGHT PANEL LABEL: BACKGROUND MODE ===== -->
    <mxCell id="102" value="BACKGROUND MODE (NOT YET IMPLEMENTED)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1;fontColor=#666666;" vertex="1" parent="1">
      <mxGeometry x="580" y="70" width="480" height="30" as="geometry" />
    </mxCell>

    <!-- ===== DIVIDER LINE ===== -->
    <mxCell id="103" value="" style="endArrow=none;dashed=1;html=1;strokeColor=#aaaaaa;strokeWidth=2;" edge="1" parent="1">
      <mxGeometry x="550" y="60" width="10" height="10" as="geometry">
        <mxPoint x="550" y="110" as="sourcePoint" />
        <mxPoint x="550" y="800" as="targetPoint" />
      </mxGeometry>
    </mxCell>

    <!-- ===== LEFT SIDE: BLOCKING MODE FLOW ===== -->

    <!-- User box -->
    <mxCell id="200" value="User" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#cccc00;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="120" width="120" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: User -> Pipeline -->
    <mxCell id="201" value="Sends task" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#2d6a2d;fontColor=#2d6a2d;fontStyle=1;" edge="1" source="200" target="202" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Pipeline box -->
    <mxCell id="202" value="Pipeline Starts" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="180" y="220" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Pipeline -> Stage 1 -->
    <mxCell id="203" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#2d6a2d;" edge="1" source="202" target="204" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 1 box -->
    <mxCell id="204" value="Stage 1 Runs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="180" y="320" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 1 -> Stage 2 -->
    <mxCell id="205" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#2d6a2d;" edge="1" source="204" target="206" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 2 box -->
    <mxCell id="206" value="Stage 2 Runs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="180" y="420" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 2 -> Stage 3 -->
    <mxCell id="207" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#2d6a2d;" edge="1" source="206" target="208" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 3 box -->
    <mxCell id="208" value="Stage 3 Runs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="180" y="520" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 3 -> Results returned -->
    <mxCell id="209" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#2d6a2d;" edge="1" source="208" target="210" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Results returned box -->
    <mxCell id="210" value="Results Returned" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="180" y="620" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Results -> User -->
    <mxCell id="211" value="Gets results" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#2d6a2d;fontColor=#2d6a2d;fontStyle=1;" edge="1" source="210" target="212" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- User (receives results) box -->
    <mxCell id="212" value="User (Done Waiting)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#cccc00;fontSize=12;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="180" y="720" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- WAITING label on left side -->
    <mxCell id="213" value="⏳ User is WAITING here" style="text;html=1;strokeColor=#cc8800;fillColor=#fff4cc;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=2;" vertex="1" parent="1">
      <mxGeometry x="370" y="400" width="160" height="40" as="geometry" />
    </mxCell>

    <!-- Bracket arrow pointing left to indicate waiting period -->
    <mxCell id="214" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;dashed=1;strokeColor=#cc8800;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="213" target="206" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- ===== RIGHT SIDE: BACKGROUND MODE FLOW (NOT YET IMPLEMENTED) ===== -->

    <!-- Right side outer dashed container -->
    <mxCell id="300" value="NOT YET IMPLEMENTED" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#666666;strokeWidth=2;dashed=1;fontSize=16;fontStyle=3;fontColor=#666666;verticalAlign=top;" vertex="1" parent="1">
      <mxGeometry x="580" y="110" width="460" height="680" as="geometry" />
    </mxCell>

    <!-- User box (right) -->
    <mxCell id="301" value="User" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#999999;fontSize=13;fontStyle=1;fontColor=#999999;" vertex="1" parent="1">
      <mxGeometry x="780" y="150" width="120" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: User -> Pipeline (right) -->
    <mxCell id="302" value="Sends task" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=#999999;fontColor=#999999;dashed=1;" edge="1" source="301" target="303" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Pipeline starts (right) -->
    <mxCell id="303" value="Pipeline Starts" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#999999;fontSize=12;fontColor=#999999;dashed=1;" vertex="1" parent="1">
      <mxGeometry x="760" y="250" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Pipeline returns immediately (right) -->
    <mxCell id="304" value="Returns immediately" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#999999;fontColor=#999999;dashed=1;endArrow=block;" edge="1" source="303" target="301" parent="1">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="960" y="275" />
          <mxPoint x="960" y="175" />
        </Array>
      </mxGeometry>
    </mxCell>

    <!-- Stage 1 (right, greyed) -->
    <mxCell id="305" value="Stage 1 Runs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#999999;fontSize=12;fontColor=#999999;dashed=1;" vertex="1" parent="1">
      <mxGeometry x="760" y="350" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Pipeline -> Stage 1 (right) -->
    <mxCell id="306" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#bbbbbb;dashed=1;" edge="1" source="303" target="305" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 2 (right, greyed) -->
    <mxCell id="307" value="Stage 2 Runs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#999999;fontSize=12;fontColor=#999999;dashed=1;" vertex="1" parent="1">
      <mxGeometry x="760" y="450" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 1 -> Stage 2 (right) -->
    <mxCell id="308" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#bbbbbb;dashed=1;" edge="1" source="305" target="307" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 3 (right, greyed) -->
    <mxCell id="309" value="Stage 3 Runs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#999999;fontSize=12;fontColor=#999999;dashed=1;" vertex="1" parent="1">
      <mxGeometry x="760" y="550" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 2 -> Stage 3 (right) -->
    <mxCell id="310" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#bbbbbb;dashed=1;" edge="1" source="307" target="309" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Results (right, greyed) -->
    <mxCell id="311" value="Results (Delivered Later?)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#999999;fontSize=11;fontColor=#999999;dashed=1;" vertex="1" parent="1">
      <mxGeometry x="750" y="650" width="180" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Stage 3 -> Results (right) -->
    <mxCell id="312" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;strokeColor=#bbbbbb;dashed=1;" edge="1" source="309" target="311" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- "User free to work" note (right) -->
    <mxCell id="313" value="🚫 User cannot act freely yet&#xa;(feature not built)" style="text;html=1;strokeColor=#999999;fillColor=#f5f5f5;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=2;fontColor=#999999;dashed=1;" vertex="1" parent="1">
      <mxGeometry x="590" y="380" width="160" height="50" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The left side shows the blocking flow: the user sends a task, waits while stages 1, 2, and 3 run in sequence, and only receives results after the entire pipeline completes. The right side (greyed out with a dashed border) shows what background mode would look like — the pipeline fires immediately and the user would return control right away — but this panel is marked **NOT YET IMPLEMENTED** because that feature does not exist in KiroCrew today. Color coding makes the distinction clear: green for what works, grey for what doesn't.

---

## 🔬 Lab

**Goal:** Confirm that a KiroCrew pipeline runs in blocking mode and observe that your session waits until all stages are done before you see any results.

**Time:** ~5 minutes

**Prerequisites:** Lessons 1–3 completed. You have a working KiroCrew pipeline with at least 2 stages.

---

**Step 1: Open your pipeline config** — Locate the pipeline YAML or JSON file you built in Lessons 1–3 and open it in your editor.

> 💡 Tip: You need to see the pipeline definition to confirm there is no `mode` parameter set — the default is blocking.

---

**Step 2: Add a slow stage** — In one of your pipeline stages, add a step that takes a few seconds (for example, a summarize or analyze task with a large input). This makes the wait time visible.

> 💡 Tip: A fast pipeline finishes so quickly you might miss the blocking behavior. A slow stage makes it obvious that your session is waiting.

---

**Step 3: Run the pipeline** — Execute your pipeline using the KiroCrew tool call:

```
/crew run --pipeline my-pipeline.yaml
```

> 💡 Tip: Watch the terminal. Notice that no results appear at all while the pipeline is running. Your prompt does not return until everything is done.

---

**Step 4: Observe the wait** — Watch the terminal output during the run. You should see the pipeline progress through each stage, but your command line stays occupied — you cannot type new commands until it finishes.

> 💡 Tip: This is blocking mode in action. The tool call holds the line. This is the expected behavior, not a bug.

---

**Step 5: Check the final output** — When the pipeline completes, all results appear at once. Confirm that you see output from every stage before you regain control.

> 💡 Tip: In blocking mode, results arrive together at the end, not one by one as stages finish. This makes it easy to process everything in sequence.

---

**Step 6: Try adding `mode: background`** — Add `mode: background` to your pipeline config and run it again. Observe what happens.

> 💡 Tip: You should see an error or the parameter should be ignored — because background mode is not implemented. This confirms that `blocking` is the only working mode today.

---

**✅ Success Condition:** Your pipeline ran from start to finish without returning control mid-way. All results appeared after the last stage completed. When you tried `mode: background`, it either errored or ran as blocking anyway.

---

**⚠️ Common Error:** The pipeline seems to "hang" and never return.

**Fix:** This is usually a timeout or a stage that got stuck — not a blocking-mode issue. Check that each stage has a valid input and that the model or tool it calls is available. Add a shorter, simpler stage to test. If the pipeline does complete but takes longer than expected, that is normal blocking behavior — it is waiting for real work to finish.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 5](lesson-05-loop-back-cycles.md) | [Next: Lesson 7 — Prompt Templates →](lesson-07-prompt-templates.md)
