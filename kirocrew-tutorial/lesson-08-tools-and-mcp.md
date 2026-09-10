# Lesson 8: Tools and MCP Integration

---

## 🧠 Theory (Read This First)

A **tool** is a built-in capability that a KiroCrew agent can call. Tools let agents do real things — read a file, run a shell command, search the web, or query a knowledge base. Without tools, an agent can only produce text. With tools, it can take real actions.

**MCP** stands for **Model Context Protocol**. It is a standard way for AI agents to connect to external services. Think of MCP like a USB port: you plug in any compatible device (tool), and the AI can use it right away. No custom wiring needed.

Why does this matter? Tools turn agents from text generators into active workers. They can call **APIs** (Application Programming Interfaces — ways for software to talk to other software), fetch live data, write files, and more.

Not every agent gets every tool. `kiro_default` and all `kirocrew` agents have access to the full standard **toolset**: file read/write, shell commands, web search, web fetch, and knowledge base. The `kirocrew-heartbeat` agent is restricted to **HEARTBEAT_SAFE_TOOLS** — read-only tools only. This keeps the heartbeat agent safe and predictable.

**Key terms:** tool, MCP, Model Context Protocol, toolset, HEARTBEAT_SAFE_TOOLS, API.

---

## 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="KiroCrew Agent Tools and MCP Integration" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=18;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="30" width="769" height="40" as="geometry" />
    </mxCell>

    <!-- Central Agent Box -->
    <mxCell id="3" value="Agent" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="484" y="320" width="200" height="80" as="geometry" />
    </mxCell>

    <!-- Tool: File Read/Write (top-left) -->
    <mxCell id="4" value="File Read/Write" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="160" y="160" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Tool: Shell Commands (bottom-left) -->
    <mxCell id="5" value="Shell Commands" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="160" y="500" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Tool: Web Search/Fetch (top-right) -->
    <mxCell id="6" value="Web Search/Fetch" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="829" y="160" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Tool: Knowledge Base (bottom-right) -->
    <mxCell id="7" value="Knowledge Base" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="829" y="500" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- MCP: External Services (far right) -->
    <mxCell id="8" value="MCP: External Services&#xa;(e.g. Ollama, APIs)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=13;" vertex="1" parent="1">
      <mxGeometry x="1020" y="320" width="200" height="70" as="geometry" />
    </mxCell>

    <!-- Restriction box: kirocrew-heartbeat -->
    <mxCell id="9" value="kirocrew-heartbeat:&#xa;Read-Only Tools Only&#xa;(HEARTBEAT_SAFE_TOOLS)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="140" y="320" width="220" height="80" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent -> File Read/Write -->
    <mxCell id="10" value="calls" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.25;exitY=0;exitDx=0;exitDy=0;entryX=0.75;entryY=1;entryDx=0;entryDy=0;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent -> Shell Commands -->
    <mxCell id="11" value="calls" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.25;exitY=1;exitDx=0;exitDy=0;entryX=0.75;entryY=0;entryDx=0;entryDy=0;" edge="1" source="3" target="5" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent -> Web Search/Fetch -->
    <mxCell id="12" value="calls" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.75;exitY=0;exitDx=0;exitDy=0;entryX=0.25;entryY=1;entryDx=0;entryDy=0;" edge="1" source="3" target="6" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent -> Knowledge Base -->
    <mxCell id="13" value="calls" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.75;exitY=1;exitDx=0;exitDy=0;entryX=0.25;entryY=0;entryDx=0;entryDy=0;" edge="1" source="3" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent -> MCP External Services -->
    <mxCell id="14" value="calls" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="3" target="8" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Dashed arrow: kirocrew-heartbeat -> File Read/Write (read-only subset) -->
    <mxCell id="15" value="read-only&#xa;subset" style="edgeStyle=orthogonalEdgeStyle;html=1;dashed=1;strokeColor=#b85450;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0;entryY=1;entryDx=0;entryDy=0;" edge="1" source="9" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Dashed arrow: kirocrew-heartbeat -> Knowledge Base (read-only subset) -->
    <mxCell id="16" value="" style="edgeStyle=orthogonalEdgeStyle;html=1;dashed=1;strokeColor=#b85450;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="9" target="3" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows a central **Agent** box connected to four standard tools (File Read/Write, Shell Commands, Web Search/Fetch, Knowledge Base) and one MCP integration for external services. The pink `kirocrew-heartbeat` box on the left has dashed arrows indicating it can only reach the read-only subset of tools (HEARTBEAT_SAFE_TOOLS), while the main agent has full access to all tools and MCP connections.

---

## 🔬 Lab

**Goal:** Ask an agent inside a pipeline to use the file-read tool and observe it taking a real action — not just generating text from memory.

**Time:** ~5 minutes

**Prerequisites:** Lessons 1–3

---

**Step 1: Open terminal** — Open a new terminal window on your machine.

> 💡 Tip: A fresh terminal avoids any leftover environment state from other sessions.

---

**Step 2: Create a test file with a known fact** — Run this exact command:

```bash
echo "The speed of light is 299,792,458 meters per second." > /tmp/test-fact.txt
```

> 💡 Tip: Putting a very specific fact in the file (not something common) makes it easy to verify the agent read the file rather than guessing from training data.

---

**Step 3: Start a kiro chat session** — Run:

```bash
kiro chat
```

> 💡 Tip: This launches the interactive KiroCrew chat interface where you can talk to agents and observe their tool calls in real time.

---

**Step 4: Ask the agent to read and summarize the file** — Type this message:

```
Using the kirocrew-research agent, read the file at /tmp/test-fact.txt and summarize what it says.
```

> 💡 Tip: Being explicit about which agent and which file path forces the system to use the file-read tool rather than answering from memory.

---

**Step 5: Observe the file-read tool call** — Watch the output carefully. You should see a tool call logged before the summary, something like:

```
[tool: read] path=/tmp/test-fact.txt
```

The agent's answer should include the exact number `299,792,458` — proving it read the file.

> 💡 Tip: If you don't see a tool call listed, the agent may have answered from memory. Change the fact in the file to something nonsensical (like `"The speed of light is 42 banana units per second."`) and repeat — a hallucinating agent will give the real number, not the fake one.

---

**Step 6: Ask which tool it used** — Type:

```
Which tool did you use to get that information?
```

> 💡 Tip: Asking the agent to name its tool helps you build intuition for when agents are using tools vs. generating from memory. Agents are transparent about this.

---

**Step 7: Exit the session** — Type:

```
/exit
```

> 💡 Tip: Always exit cleanly to flush any session logs or pending state.

---

**✅ Success Condition**

You succeed when the agent's answer contains the exact content from your file (`299,792,458 meters per second`) and a tool call is visibly logged before the response. If you swapped the file content to a nonsense value and the agent reported the nonsense value — that is proof it read the file.

---

**⚠️ Common Error and Fix**

**Error:** The agent gives the correct speed of light even though you wrote a wrong value in the file.

**What happened:** The agent answered from its training data (hallucinated), not from the file.

**Fix:** Make the file content something that does not exist in any training data — for example:

```bash
echo "Project Zeta launched on 2026-09-09 with budget code XK-4471." > /tmp/test-fact.txt
```

Now ask the agent to read and report the budget code. If it reports `XK-4471`, it read the file. If it makes up a different code, it did not.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 7](lesson-07-prompt-templates.md) | [Next: Lesson 9 — The Conductor Pattern →](lesson-09-conductor-pattern.md)
