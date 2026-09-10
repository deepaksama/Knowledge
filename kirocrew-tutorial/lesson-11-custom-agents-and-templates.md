## Lesson 11: Custom Agents and Agent Templates

### 🧠 Theory (Read This First)

Every KiroCrew session runs under an **agent**. An agent is a configuration — it has four parts: a **model** (which AI to use), a **system prompt** (instructions for how the AI should behave), a **tool list** (what the agent is allowed to do), and **MCP servers** (external integrations — covered in Lesson 8).

The default agent is named `kirocrew`. It uses model `auto`, a general-purpose prompt, full tool access (file read/write, shell, web), and two MCP servers: `kirocrew-core` and `kirocrew-cron`.

Think of a custom agent like a new employee. You give them a job description (system prompt), a tool access badge (tool list), and a specific role. A **template** is like a pre-written job description for a common role — code reviewer, researcher, writer. Use a template when a common workflow fits your needs. Build from scratch when you need full control.

**Approval modes** control how tools get called: Interactive (prompts every time), Trust this command (session-exact), Trust this tool (session-any-args), or Autopilot (all auto-approved).

Custom agents let you restrict scope, lock down tools, change the model, or tailor the prompt for a specific task.

---

### 📐 Diagram

```xml
<mxGraphModel>
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="KiroCrew: Agent Capabilities Overview" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="80" y="20" width="560" height="40" as="geometry" />
    </mxCell>

    <!-- Agent Capabilities container -->
    <mxCell id="3" value="Agent Capabilities" style="swimlane;startSize=30;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=13;fontStyle=1;align=center;" vertex="1" parent="1">
      <mxGeometry x="80" y="80" width="560" height="300" as="geometry" />
    </mxCell>

    <!-- Agents Panel -->
    <mxCell id="4" value="Agents Panel" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;fontStyle=1;" vertex="1" parent="3">
      <mxGeometry x="20" y="50" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Agent Templates Panel -->
    <mxCell id="5" value="Agent Templates Panel" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;fontStyle=1;" vertex="1" parent="3">
      <mxGeometry x="200" y="50" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- MCP Integrations Panel -->
    <mxCell id="6" value="MCP Integrations Panel" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;fontStyle=1;" vertex="1" parent="3">
      <mxGeometry x="380" y="50" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Default Agent (kirocrew) -->
    <mxCell id="7" value="Default Agent (kirocrew)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=11;" vertex="1" parent="3">
      <mxGeometry x="20" y="160" width="160" height="50" as="geometry" />
    </mxCell>

    <!-- Custom Agent (e.g. reviewer) -->
    <mxCell id="8" value="&lt;b&gt;Custom Agent (e.g. reviewer)&lt;/b&gt;&lt;br/&gt;&lt;font style=&quot;font-size: 10px;&quot;&gt;Model | Prompt | Tools | MCP&lt;/font&gt;" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=11;" vertex="1" parent="3">
      <mxGeometry x="200" y="160" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Agents Panel → Default Agent -->
    <mxCell id="9" value="" style="edgeStyle=orthogonalEdgeStyle;" edge="1" source="4" target="7" parent="3">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agents Panel → Custom Agent -->
    <mxCell id="10" value="" style="edgeStyle=orthogonalEdgeStyle;" edge="1" source="4" target="8" parent="3">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Agent Templates Panel → Custom Agent (start from template) -->
    <mxCell id="11" value="start from template" style="edgeStyle=orthogonalEdgeStyle;fontSize=10;" edge="1" source="5" target="8" parent="3">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Session box (outside container, below) -->
    <mxCell id="12" value="Session" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#888800;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="270" y="430" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Default Agent → Session (runs under) -->
    <mxCell id="13" value="runs under" style="edgeStyle=orthogonalEdgeStyle;fontSize=10;" edge="1" source="7" target="12" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Custom Agent → Session (runs under) -->
    <mxCell id="14" value="runs under" style="edgeStyle=orthogonalEdgeStyle;fontSize=10;" edge="1" source="8" target="12" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows the three panels inside Agent Capabilities: Agents, Agent Templates, and MCP Integrations. The Agents Panel manages both the default `kirocrew` agent and any custom agents you create — and Agent Templates provide a shortcut by letting you start a custom agent from a prebuilt configuration. Every agent, whether default or custom, ultimately runs under a Session.

---

### 🔬 Lab

**Goal:** Create a custom agent from the dashboard that can only read files (not write them), then use it in a chat session.

**Time:** ~5 minutes

**Prerequisites:** Lesson 1 (Kiro CLI and Gateway running), Lesson 2 (understanding roles)

---

**Step 1:** Open your browser and go to the Crew dashboard at [http://localhost:5476](http://localhost:5476).

> 💡 **Tip:** The dashboard must be running. If you see a blank page, run `kirocrew gateway` in your terminal first.

---

**Step 2:** Click **Agent Capabilities** in the sidebar.

> 💡 **Tip:** This section is your control center for all agent and template management. You will see sub-menu items appear once you click it.

---

**Step 3:** Click **Agents** in the sub-menu.

> 💡 **Tip:** This opens the Agents panel, which lists all agents — including the default `kirocrew` agent. You can view, edit, switch, or reset agents from here.

---

**Step 4:** Click **Create** to make a new agent.

> 💡 **Tip:** You will fill in four fields: Name, Model, Prompt, and Tools.

---

**Step 5:** Fill in the fields exactly as follows:

- **Name:** `read-only-helper`
- **Model:** `auto`
- **Prompt:** `You are a read-only assistant. You can read files and answer questions about them. You cannot write, edit, or delete any files.`
- **Tools:** select only `fs_read` and `grep` (deselect everything else)

> 💡 **Tip:** Limiting tools is how you build a safer agent — it literally cannot do what you did not allow.

---

**Step 6:** Click **Save**, then open a new chat session and switch to the `read-only-helper` agent using the model/agent dropdown in the chat header.

> 💡 **Tip:** The dropdown is typically in the top bar of the chat window. Select `read-only-helper` from the list of available agents. If it does not appear, refresh the page after saving.

---

**Step 7:** Ask the agent to read a file:

> *"Read the file /etc/hosts and summarize what you see."*

> 💡 **Tip:** The agent should read the file successfully. If you then ask it to delete a file, it should refuse — because it does not have the tool to do so.

---

✅ **Success condition:** You can see the `read-only-helper` agent listed in the Agents panel, and it successfully reads a file in the chat session.

❓ **Common error and fix:** If the **Create** button is not visible, make sure the gateway is running and you are signed in. Check the top-right corner of the dashboard for your login status.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 10](lesson-10-capstone-pipeline.md) | [Next: Lesson 12 — Artifacts & Widgets →](lesson-12-artifacts.md)
