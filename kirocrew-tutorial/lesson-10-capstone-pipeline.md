# Lesson 10: Capstone — Building a Real-World Research-to-Report Pipeline

---

## 🧠 Theory (Read This First)

In Lessons 1–9, you learned the full KiroCrew toolkit. You learned what KiroCrew is and how AI roles work. You built sequential pipelines (one stage after another) and parallel pipelines (multiple stages at the same time). You added loop-back cycles so a stage can retry when the output needs work. You used blocking mode to pause and wait for approval. You wrote reusable prompt templates. You connected tools and MCP servers so your agents can take real actions. And you used the conductor pattern to coordinate complex multi-agent workflows.

Now you put it all together.

This capstone project is a 4-stage pipeline. It researches a topic, writes a report, reviews the draft, and saves the final result to a file. It uses parallel stages, `depends_on`, a loop-back review cycle, prompt templates with variables, and file-write tool use.

Why does this matter? This is a real workflow you can use today. Change the topic and you have a reusable research assistant. The skills you practiced here transfer directly to any AI pipeline you build next.

---

## 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="100" value="KiroCrew Capstone Pipeline: Research-to-Report" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="20" width="769" height="40" as="geometry" />
    </mxCell>

    <!-- Input: Your Topic -->
    <mxCell id="10" value="Your Topic" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#36393d;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="90" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Stage 1: Research -->
    <mxCell id="20" value="Stage 1: Research&#xa;(kirocrew-research)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="464" y="200" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Your Topic -> Research -->
    <mxCell id="e10" value="topic input" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="10" target="20" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 2a: Write Report -->
    <mxCell id="30" value="Stage 2a: Write Report&#xa;(kirocrew)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="240" y="340" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Stage 2b: Find Supporting Facts -->
    <mxCell id="40" value="Stage 2b: Find Supporting Facts&#xa;(kirocrew-research)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="689" y="340" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Research -> Write Report -->
    <mxCell id="e20" value="depends_on Stage 1" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="20" target="30" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Research -> Find Supporting Facts -->
    <mxCell id="e30" value="depends_on Stage 1" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="20" target="40" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Stage 3: Review -->
    <mxCell id="50" value="Stage 3: Review&#xa;(kirocrew)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="464" y="480" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Write Report -> Review -->
    <mxCell id="e40" value="depends_on 2a" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="30" target="50" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Find Supporting Facts -> Review -->
    <mxCell id="e50" value="depends_on 2b" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="40" target="50" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Decision Diamond: NEEDS_CHANGES in output? -->
    <mxCell id="60" value="NEEDS_CHANGES&#xa;in output?" style="rhombus;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontSize=12;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="464" y="610" width="200" height="80" as="geometry" />
    </mxCell>

    <!-- Arrow: Review -> Decision -->
    <mxCell id="e60" value="review output" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="50" target="60" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Loop back arrow: Decision Yes -> Write Report -->
    <mxCell id="e70" value="Yes — NEEDS_CHANGES trigger&#xa;(loop_to: write_report)" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=1;entryDx=0;entryDy=0;dashed=1;strokeColor=#d6b656;fontStyle=2;" edge="1" source="60" target="30" parent="1">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="380" y="650" />
          <mxPoint x="380" y="400" />
          <mxPoint x="340" y="400" />
        </Array>
      </mxGeometry>
    </mxCell>

    <!-- Stage 4: Save to File -->
    <mxCell id="70" value="Stage 4: Save to File&#xa;(kiro_default)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="464" y="760" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Decision No -> Save to File -->
    <mxCell id="e80" value="No — APPROVED" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="60" target="70" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Output: report.md file -->
    <mxCell id="80" value="report.md file" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#36393d;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="890" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Arrow: Save to File -> report.md -->
    <mxCell id="e90" value="file write (tool)" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="70" target="80" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Parallel brace label -->
    <mxCell id="90" value="Runs in parallel ↔" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=2;fontColor=#82b366;" vertex="1" parent="1">
      <mxGeometry x="424" y="360" width="280" height="20" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows the full capstone pipeline from top to bottom. Stages 2a and 2b run in parallel after Stage 1 finishes, then both feed into Stage 3 (Review). After Review, a decision diamond checks whether `NEEDS_CHANGES` appeared in the output — if yes, the pipeline loops back to Stage 2a (Write Report) for another pass; if no, it flows straight to Stage 4 to save the file.

---

## 🔬 Lab (Capstone Project)

**Goal:** Build and run a complete 4-stage research-to-report pipeline that uses parallel stages, a review loop, and file output.  
**Time:** ~15 minutes  
**Prerequisites:** Lessons 1–9 (all prior lessons)

---

### Step 1: Open your terminal

Open the Terminal app on your computer. On macOS you can press `Cmd + Space`, type `Terminal`, and hit Enter.

> 💡 **Tip:** Make sure you have Kiro CLI installed and ready. If you type `kiro --version` and see a version number, you're good to go.

---

### Step 2: Create a working folder for this project

```bash
mkdir ~/kirocrew-capstone && cd ~/kirocrew-capstone
```

> 💡 **Tip:** This creates a fresh folder called `kirocrew-capstone` in your home directory and moves you into it. All output files from this pipeline will land here.

---

### Step 3: Start a kiro chat session

```bash
kiro chat
```

> 💡 **Tip:** Wait for the Kiro prompt to appear before you paste anything. You should see a `>` or similar prompt indicating the session is live and ready for input.

---

### Step 4: Ask the AI to run the capstone pipeline

Copy and paste the **entire block below** into your Kiro chat session:

```
Please run the following KiroCrew pipeline:

task: "Research the benefits of daily exercise and write a short 3-paragraph report"

stages:
  - id: research
    role: kirocrew-research
    prompt: |
      Research the benefits of daily exercise. Find credible information about
      physical health benefits, mental health benefits, and long-term outcomes.
      Summarize your findings clearly so a writer can use them in a report.

  - id: write_report
    role: kirocrew
    depends_on: [research]
    prompt: |
      Using the research findings from the previous stage, write a 3-paragraph report
      on the benefits of daily exercise. Each paragraph should cover one main benefit:
      (1) physical health, (2) mental health, (3) long-term outcomes.
      Write in clear, easy-to-read language suitable for a general audience.

  - id: find_facts
    role: kirocrew-research
    depends_on: [research]
    prompt: |
      Using the research findings from the previous stage, identify 5 specific
      supporting facts or statistics about the benefits of daily exercise.
      Format them as a numbered list. Be concise and precise.

  - id: review
    role: kirocrew
    depends_on: [write_report, find_facts]
    loop_to: write_report
    trigger: NEEDS_CHANGES
    max_iterations: 3
    prompt: |
      Review the 3-paragraph report from write_report against the 5 supporting facts
      from find_facts. Check that:
      1. The report is accurate and consistent with the facts.
      2. The report has exactly 3 paragraphs.
      3. The writing is clear and easy to understand.

      If the report meets all criteria, output exactly: APPROVED
      If the report needs improvement, output exactly: NEEDS_CHANGES
      followed by a bullet-point list of specific changes needed.

  - id: save
    role: kiro_default
    depends_on: [review]
    prompt: |
      The report has been approved. Save the final approved report text to a file
      called report.md in the current working folder (~/kirocrew-capstone/report.md).
      Use the file write tool to create the file. The file should contain only the
      3-paragraph report content in plain markdown format.
```

> 💡 **Tip:** This is the full pipeline. You can reuse this exact structure for any research topic — just change the `task` line and update the topic references in each stage prompt. The roles, `depends_on` links, `loop_to`, and `trigger` all stay the same.

---

### Step 5: Watch the pipeline run — identify which stages ran in parallel

As the pipeline executes, watch the output in your terminal. Look for `write_report` and `find_facts` starting at the same time.

> 💡 **Tip:** In KiroCrew output, parallel stages usually show overlapping start timestamps or log lines appearing interleaved. You should see both Stage 2a and Stage 2b begin running before either one finishes. This is the parallel execution from Lesson 4 in action.

---

### Step 6: Check if a loop iteration happened

After the pipeline finishes, ask the AI:

```
Did the review stage loop back to the writer? How many iterations ran?
```

> 💡 **Tip:** Ask the AI: `"Did the review stage loop back to the writer? How many iterations ran?"` — If the first draft was already good, the review will output `APPROVED` and no loop occurs. If the draft needed work, you'll see the pipeline ran `write_report` a second (or third) time before the reviewer approved it. Either outcome is correct — the loop feature protected you from a bad report.

---

### Step 7: Verify the output file was created

```bash
cat ~/kirocrew-capstone/report.md
```

> 💡 **Tip:** If you see three paragraphs of content about exercise benefits, the pipeline worked end-to-end. If the file is empty or missing, see the troubleshooting note below.

---

### Step 8: Exit and celebrate — you built a full AI pipeline!

```bash
exit
```

> 💡 **Tip:** Take a moment to appreciate what just happened. Your pipeline gathered research, wrote a report, checked facts in parallel, ran an automatic review loop, and saved the result to disk — all without you doing any of the writing. That is exactly what production AI workflows look like. You built one from scratch.

---

**✅ You're done when:** `report.md` exists, contains a 3-paragraph report, and you can name every stage and explain what it did.

**❓ If something goes wrong:** If `report.md` is not created, the save stage may not have had file-write permission. Try asking the AI:

```
Please write the final report content to ~/kirocrew-capstone/report.md using the file write tool.
```

---

## 🎓 What You've Learned

You just completed the full KiroCrew tutorial series. Here is everything you covered across all 10 lessons:

### Full Series Recap

- **Lesson 1 — What is KiroCrew?** You learned what KiroCrew is: a system for running multiple AI agents together as a coordinated crew. You set it up and ran your first pipeline.
- **Lesson 2 — Roles and Agents:** You learned that each agent in a pipeline has a role (like `kirocrew`, `kirocrew-research`, or `kiro_default`) and that roles determine what an agent is good at.
- **Lesson 3 — Sequential Pipelines:** You built a pipeline where stages run one after another using `depends_on`. Output from one stage feeds into the next.
- **Lesson 4 — Parallel Pipelines:** You ran multiple stages at the same time. Stages that don't depend on each other can run in parallel, saving time.
- **Lesson 5 — Loop-Back Cycles:** You added `loop_to` and `trigger` to let a stage send work back to an earlier stage when the output isn't good enough yet. You also set `max_iterations` to prevent infinite loops.
- **Lesson 6 — Blocking Mode:** You used `blocking: true` to pause a pipeline and wait for a human to approve before continuing. This is the human-in-the-loop pattern.
- **Lesson 7 — Prompt Templates:** You wrote reusable prompts with `{{variables}}` so the same pipeline can be used with different inputs without rewriting the whole thing.
- **Lesson 8 — Tools and MCP:** You connected your agents to external tools (like file write, web search, and code execution) using the Model Context Protocol (MCP). Agents can now take real actions in the world.
- **Lesson 9 — The Conductor Pattern:** You used a conductor agent to dynamically plan and delegate work to other agents. Instead of a fixed set of stages, the conductor decides what to do based on context.
- **Lesson 10 — Capstone:** You combined every concept into one real-world pipeline: parallel stages, `depends_on`, a loop-back review cycle, prompt templates, and file-write tool use.

---

### What's Next?

You've learned the core of KiroCrew. Here are three ways to keep growing:

1. **Build a custom role.** Instead of using `kirocrew` or `kiro_default`, define your own role with a specialized system prompt. For example, create a `kirocrew-legal-reviewer` that knows how to check contracts, or a `kirocrew-coder` tuned for Python. Custom roles make your pipelines more precise.

2. **Explore the knowledge tool.** KiroCrew agents can read from a knowledge base — a collection of indexed documents. Try indexing your own notes or documentation, then build a pipeline where the research stage pulls from your knowledge base instead of the open web. This is powerful for teams that have internal expertise to share.

3. **Integrate an MCP server.** You used the file write tool in this capstone. But MCP servers can connect your agents to almost anything: GitHub, Slack, databases, calendar apps, and more. Try setting up one MCP server for a tool you use daily and building a pipeline that interacts with it. That's where KiroCrew becomes a real productivity multiplier.

---

### 🎉 Congratulations!

You did it. Ten lessons. One capstone. A working AI pipeline that researches, writes, reviews, and saves — all on its own.

That is no small thing. A lot of people talk about AI agents. You actually built one. You understand how stages connect, how loops work, how tools give agents real power, and how a conductor can think on its feet. Those skills put you ahead of most people working with AI today.

Whatever you build next — a writing assistant, a code reviewer, a research tool, a customer support pipeline — you now have the foundation to do it. The hard part was learning the concepts. You've done that.

Go build something great.
