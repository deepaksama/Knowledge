## Lesson 12: Artifacts — Saving, Previewing, and Deploying Agent Output

### 🧠 Theory (Read This First)

Plain chat output is like a sticky note — useful now, gone when the session ends.

An **artifact** is something the agent creates that you want to keep: a webpage, a document, a code file. It is like saving to Google Drive. Artifacts persist beyond the chat session. They live in a library with **version history** (every edit is saved), folders, and comments.

A **widget** is interactive HTML inside a chat message. It runs in a sandboxed iframe and sends events back to the agent. Click a button or fill out a form, and the agent responds. Common uses: approval flows, config builders, progress dashboards.

To create an artifact, just ask: "Save this as an artifact." To update it, say: "Update the artifact."

Webapp artifacts can be **deployed** to AWS with one click. The agent proposes a plan and cost estimate, you confirm, and you get a public **CloudFront** URL (Amazon's global delivery network that makes sites fast worldwide). Deployments have a **TTL** (time-to-live) — 72 hours by default. A **reaper** (an automated cleaner that removes expired sites) handles cleanup when time runs out.

---

### 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="Artifacts, Widgets &amp; Deploy — KiroCrew Flow" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="30" width="600" height="40" as="geometry" />
    </mxCell>

    <!-- Chat Message box -->
    <mxCell id="3" value="Chat Message" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#d6b656;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="384" y="100" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Plain text output (LEFT branch) -->
    <mxCell id="4" value="Plain text output" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f5f5f5;strokeColor=#666666;fontColor=#333333;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="140" y="230" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Chat Message → Plain text output -->
    <mxCell id="5" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=0.25;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- "gone when session ends" label on plain text branch -->
    <mxCell id="6" value="gone when session ends" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontStyle=2;fontColor=#666666;" vertex="1" parent="1">
      <mxGeometry x="100" y="302" width="180" height="30" as="geometry" />
    </mxCell>

    <!-- Artifact (RIGHT branch) -->
    <mxCell id="7" value="Artifact" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=13;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="480" y="230" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Chat Message → Artifact -->
    <mxCell id="8" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=0.75;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="3" target="7" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Artifact Library -->
    <mxCell id="9" value="Artifact Library" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="480" y="360" width="180" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Artifact → Artifact Library -->
    <mxCell id="10" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="7" target="9" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- "version history, folders" label on Artifact Library -->
    <mxCell id="11" value="version history, folders" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontStyle=2;fontColor=#337733;" vertex="1" parent="1">
      <mxGeometry x="480" y="428" width="180" height="20" as="geometry" />
    </mxCell>

    <!-- Live Preview -->
    <mxCell id="12" value="Live Preview" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="360" y="510" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Artifact Library → Live Preview -->
    <mxCell id="13" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=0.25;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="9" target="12" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Deploy to AWS -->
    <mxCell id="14" value="Deploy to AWS" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="610" y="510" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Artifact Library → Deploy to AWS -->
    <mxCell id="15" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=0.75;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="9" target="14" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- CloudFront URL -->
    <mxCell id="16" value="CloudFront URL" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#d6b656;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="610" y="640" width="160" height="60" as="geometry" />
    </mxCell>

    <!-- Arrow: Deploy to AWS → CloudFront URL -->
    <mxCell id="17" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" source="14" target="16" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- "public HTTPS site" label on CloudFront URL -->
    <mxCell id="18" value="public HTTPS site" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=10;fontStyle=2;fontColor=#996600;" vertex="1" parent="1">
      <mxGeometry x="610" y="708" width="160" height="20" as="geometry" />
    </mxCell>

    <!-- Widget (interactive) box -->
    <mxCell id="19" value="Widget (interactive)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="770" y="90" width="170" height="60" as="geometry" />
    </mxCell>

    <!-- Agent box -->
    <mxCell id="20" value="Agent" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;fontSize=12;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="870" y="200" width="130" height="60" as="geometry" />
    </mxCell>

    <!-- Double-headed arrow: Widget ↔ Agent -->
    <mxCell id="21" value="events flow both ways" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;startArrow=block;startFill=1;endArrow=block;endFill=1;fontSize=10;fontStyle=2;" edge="1" source="19" target="20" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Arrow: Chat Message → Widget (connect them visually) -->
    <mxCell id="22" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" edge="1" source="3" target="19" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows two paths from a chat message: plain text (left) is a dead end that disappears when the session ends, while an artifact (right) flows into the Artifact Library with version history, then branches to a Live Preview or a Deploy to AWS step that produces a public CloudFront URL. On the right side, the Widget box connects to the Agent with a bidirectional arrow, showing that widgets inside chat send events back to the agent and the agent can respond in real time.

---

### 🔬 Lab

**Goal:** Ask the agent to build a simple webpage, save it as an artifact, preview it, and explore the artifact library.

**Time:** ~5 minutes

**Prerequisites:** Lesson 1 (Gateway running, dashboard accessible at [http://localhost:5476](http://localhost:5476))

---

**Step 1:** Open your browser and go to [http://localhost:5476](http://localhost:5476)

**Step 2:** Click the **+** button to start a new chat session

**Step 3:** Ask the agent to build something:

> *"Build me a simple HTML page with a dark background that says Hello from KiroCrew in large white text. Save it as an artifact."*

> 💡 **Tip:** The agent will write the HTML and save it as an artifact. You will see an artifact card appear in the chat.

**Step 4:** Look at the artifact card — click the **preview icon** to see the live local preview

> 💡 **Tip:** The preview renders right inside the dashboard. No browser tab needed.

**Step 5:** Ask the agent to update the artifact:

> *"Update the artifact — change the background color to navy blue"*

> 💡 **Tip:** The agent edits the artifact and creates a new version. You can see version history on the card.

**Step 6:** Click **Artifacts** in the sidebar to open the Artifacts library panel

> 💡 **Tip:** Every artifact you have ever created lives here. You can organize them into folders and add comments.

**Step 7:** Click on your artifact to see its full detail: versions, comments, and the deploy option

> 💡 **Tip:** The Deploy button deploys to AWS. You would need an AWS account and the Artifact Deploy app enabled to use it — that is a future step.

---

✅ **Success condition:** You see the artifact card in chat, the live preview renders, and you can find the artifact in the library panel with at least 2 versions.

❓ **Common error and fix:** If no artifact card appears and the agent just outputs code, say:

> *"Please save that HTML as a named artifact in my artifact library."*

The agent needs an explicit instruction to save.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 11](lesson-11-custom-agents-and-templates.md) | [Next: Lesson 13 — Scheduling →](lesson-13-scheduling.md)
