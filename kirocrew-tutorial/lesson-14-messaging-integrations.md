## Lesson 14: Messaging Integrations — Slack, Telegram, Discord, and More

---

### 🧠 Theory (Read This First)

Crew runs one **Gateway** — the server that runs Crew locally on your machine. Many different surfaces connect to it. Think of the Gateway like your home landline. Each messaging integration is a different phone in a different room. They all ring to the same house, and you can pick up from any room. But only the homeowner — you — can answer.

Crew supports these surfaces: Desktop app, Web dashboard, CLI, Slack, Telegram, Discord, Teams, Webex, WeCom, WeChat, WhatsApp, iMessage, and Feishu. Every surface connects to the same Gateway. Sessions are independent, but memory is shared across all of them.

Messaging channels use **Socket Mode** — Slack's way of connecting outbound — no public URL needed. Crew reaches out to the messaging service. You never open a port to the internet.

**Owner lock** means only your account can talk to the bot. Messages from anyone else are silently dropped.

In Slack, tool approvals appear as **Block Kit** (Slack's system for interactive buttons) — you tap Approve or Reject right in the chat.

The dashboard chat tab has a 💬 button that links a dashboard conversation to a Slack thread for bidirectional real-time sync.

A **Bearer token** lets you access the dashboard remotely: run `kirocrew token --ttl 2h` to mint one.

---

### 📐 Diagram

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1654" pageHeight="1169" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="title" value="One Gateway, Many Surfaces" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="527" y="40" width="600" height="40" as="geometry" />
    </mxCell>

    <!-- Gateway (center) -->
    <mxCell id="gateway" value="Crew Gateway&#xa;(localhost:5476)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=14;fontStyle=1;arcSize=10;" vertex="1" parent="1">
      <mxGeometry x="677" y="460" width="300" height="100" as="geometry" />
    </mxCell>

    <!-- Shared Memory -->
    <mxCell id="sharedmem" value="Shared Memory" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#bbbb00;fontSize=12;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="727" y="640" width="200" height="60" as="geometry" />
    </mxCell>
    <mxCell id="edge-sharedmem" value="all surfaces share" style="endArrow=block;startArrow=block;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;html=1;fontSize=10;fontStyle=2;" edge="1" source="gateway" target="sharedmem" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Desktop App (light blue) -->
    <mxCell id="desktop" value="Desktop App" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="220" y="120" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-desktop" value="outbound connection" style="endArrow=block;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.18;entryY=0;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="desktop" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Web Dashboard (light blue) -->
    <mxCell id="webdash" value="Web Dashboard" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="480" y="120" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-webdash" value="outbound connection" style="endArrow=block;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.35;entryY=0;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="webdash" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- CLI (light blue) -->
    <mxCell id="cli" value="CLI" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="740" y="120" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-cli" value="outbound connection" style="endArrow=block;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="cli" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Owner-only label near messaging surfaces -->
    <mxCell id="ownerlabel" value="⚠️ owner-only access" style="text;html=1;strokeColor=#ff8800;fillColor=#fff2cc;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=11;fontStyle=2;arcSize=20;" vertex="1" parent="1">
      <mxGeometry x="1290" y="430" width="200" height="40" as="geometry" />
    </mxCell>

    <!-- Slack (light orange) -->
    <mxCell id="slack" value="Slack" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="1130" y="120" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-slack" value="outbound connection" style="endArrow=block;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.85;entryY=0;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="slack" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Telegram (light orange) -->
    <mxCell id="telegram" value="Telegram" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="1310" y="220" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-telegram" value="outbound connection" style="endArrow=block;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.3;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="telegram" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Discord (light orange) -->
    <mxCell id="discord" value="Discord" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="1350" y="360" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-discord" value="outbound connection" style="endArrow=block;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="discord" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Teams (light orange) -->
    <mxCell id="teams" value="Teams" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="1350" y="510" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-teams" value="outbound connection" style="endArrow=block;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.7;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="teams" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- WhatsApp (light orange) -->
    <mxCell id="whatsapp" value="WhatsApp" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=12;" vertex="1" parent="1">
      <mxGeometry x="1310" y="640" width="140" height="50" as="geometry" />
    </mxCell>
    <mxCell id="edge-whatsapp" value="outbound connection" style="endArrow=block;html=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;entryX=1;entryY=0.9;entryDx=0;entryDy=0;fontSize=9;fontStyle=2;" edge="1" source="whatsapp" target="gateway" parent="1">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows the Crew Gateway at the center, with three built-in surfaces (Desktop App, Web Dashboard, CLI) connecting from above in light blue, and five messaging surfaces (Slack, Telegram, Discord, Teams, WhatsApp) connecting from the right in light orange — all via outbound connections, so no inbound ports are ever opened. The Shared Memory box below the Gateway reminds you that all surfaces draw from the same memory store, even though each session is independent. The "owner-only access" label flags that every messaging surface enforces owner lock — only you can interact with the bot.

---

### 🔬 Lab

**Goal:** Connect Crew to Slack so you can send messages to your agent from a Slack DM

**Time:** ~10 minutes

**Prerequisites:**
- Lesson 1 complete (Gateway running at http://localhost:5476)
- A Slack workspace where you have admin rights

---

**Step 1:** Open your browser and go to http://localhost:5476

> 💡 Tip: If you see a blank page, run `kirocrew gateway` in your terminal first.

---

**Step 2:** Click **Settings** in the sidebar, then click **Channels**

> 💡 Tip: This is where all messaging integrations live.

---

**Step 3:** Click **Slack**, then click **Connect**

> 💡 Tip: The dashboard shows a one-click URL that opens Slack's app creation page with all required scopes pre-filled.

---

**Step 4:** Click the URL — it opens Slack's **Create New App** page. Click **Create App**.

> 💡 Tip: You are creating a private Slack bot that only you will use. It will only exist in your workspace.

---

**Step 5:** In the Slack app settings, go to **Socket Mode** → toggle it **ON** → generate an App Token (add the `connections:write` scope) → copy the token (starts with `xapp-`)

> 💡 Tip: This App Token is how Crew connects to Slack without needing a public URL.

---

**Step 6:** Go to **OAuth & Permissions** → **Install to Workspace** → copy the Bot Token (starts with `xoxb-`). Also get your Slack Member ID: click your profile picture in Slack → **Profile** → three dots → **Copy Member ID**

> 💡 Tip: The Member ID (starts with `U0`) is what locks the bot to your account only.

---

**Step 7:** Paste the App Token, Bot Token, and Member ID into the dashboard panel → click **Save**

> 💡 Tip: The dashboard validates the tokens immediately. You will see a green **Connected** badge when it works.

---

**Step 8:** Open Slack, find the bot in your Apps list, send it a message: `Hello! What can you do?`

> 💡 Tip: You should see a streaming reply from Crew right inside Slack, with the same capabilities as the dashboard.

---

**✅ Success condition:** You send a message in Slack and get a reply from Crew. The dashboard shows the conversation in a linked session.

**❓ Common error and fix:** If the bot does not respond, run `kirocrew doctor` in your terminal. The most common cause is Socket Mode being turned off — go back to the Slack app settings and make sure Socket Mode is toggled **ON**.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 13](lesson-13-scheduling.md)
