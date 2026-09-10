## Lesson 13: Scheduling — Cron Jobs, Heartbeats, and Webhooks

### 🧠 Theory (Read This First)

Crew gives you three ways to run tasks automatically.

A **cron job** is a prompt paired with a schedule. Crew fires it at the right time, runs it in its own session, and sends the result to your dashboard notifications and Slack DM. Think of it like a morning alarm clock — it goes off every day at the same time, no matter what.

A **cron expression** is a five-part code that describes a schedule, like `0 9 * * 1-5` (9 AM every weekday). You can also use `--every 300` to run every 300 seconds instead.

A **heartbeat** watches something over time and only tells you when something **changes**. It checks every 60 seconds. If nothing changed, it stays quiet. Think of it like a smoke detector — it only beeps when it senses something wrong.

A **webhook** lets an external system trigger Crew. That system sends a POST request with a **Bearer token** (a secret password used to authenticate the request) and a message. Crew runs an agent session in response. Think of it like a doorbell — a visitor (another system) rings it and you respond.

By default, cron jobs fire with a small **jitter** — a small random delay added on purpose to spread load. Use `--strict-schedule` to disable it.

---

### 📐 Diagram

```xml
<mxGraphModel dx="1422" dy="762" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1654" pageHeight="1169" math="0" shadow="0">
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0" />

    <!-- Title -->
    <mxCell id="2" value="Three Ways to Trigger Crew Automatically" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=18;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="200" y="30" width="1200" height="50" as="geometry" />
    </mxCell>

    <!-- ======================== LEFT: Cron Job Section ======================== -->
    <mxCell id="10" value="Cron Job" style="swimlane;fillColor=#d5e8d4;strokeColor=#82b366;fontSize=14;fontStyle=1;startSize=30;" vertex="1" parent="1">
      <mxGeometry x="60" y="100" width="340" height="500" as="geometry" />
    </mxCell>

    <!-- Schedule box -->
    <mxCell id="11" value="Schedule&#xa;(e.g. every weekday 9am&#xa;0 9 * * 1-5)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="10">
      <mxGeometry x="70" y="60" width="200" height="70" as="geometry" />
    </mxCell>

    <!-- fires arrow -->
    <mxCell id="12" value="fires" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="11" target="13" parent="10">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Agent Session box -->
    <mxCell id="13" value="Agent Session" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="10">
      <mxGeometry x="70" y="190" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- produces arrow -->
    <mxCell id="14" value="produces" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="13" target="15" parent="10">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Result box -->
    <mxCell id="15" value="Result" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="10">
      <mxGeometry x="70" y="300" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- delivers to arrow 1 -->
    <mxCell id="16" value="delivers to" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.3;exitY=1;exitFixed=1;entryX=0.5;entryY=0;entryFixed=1;" edge="1" source="15" target="17" parent="10">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- delivers to arrow 2 -->
    <mxCell id="19" value="delivers to" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.7;exitY=1;exitFixed=1;entryX=0.5;entryY=0;entryFixed=1;" edge="1" source="15" target="18" parent="10">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Dashboard Notification box -->
    <mxCell id="17" value="Dashboard&#xa;Notification" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="10">
      <mxGeometry x="20" y="410" width="130" height="60" as="geometry" />
    </mxCell>

    <!-- Slack DM box -->
    <mxCell id="18" value="Slack DM" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="10">
      <mxGeometry x="190" y="410" width="130" height="60" as="geometry" />
    </mxCell>

    <!-- ======================== CENTER: Heartbeat Section ======================== -->
    <mxCell id="30" value="Heartbeat" style="swimlane;fillColor=#dae8fc;strokeColor=#6c8ebf;fontSize=14;fontStyle=1;startSize=30;" vertex="1" parent="1">
      <mxGeometry x="460" y="100" width="340" height="500" as="geometry" />
    </mxCell>

    <!-- HEARTBEAT.md box -->
    <mxCell id="31" value="HEARTBEAT.md&#xa;(task definition)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="30">
      <mxGeometry x="70" y="50" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- 60s tick arrow -->
    <mxCell id="32" value="60s tick" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="31" target="33" parent="30">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Check condition box -->
    <mxCell id="33" value="Check Condition" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="30">
      <mxGeometry x="70" y="160" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- evaluate arrow -->
    <mxCell id="34" value="evaluate" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="33" target="35" parent="30">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Changed? diamond -->
    <mxCell id="35" value="Changed?" style="rhombus;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="30">
      <mxGeometry x="95" y="270" width="150" height="80" as="geometry" />
    </mxCell>

    <!-- YES arrow to Notify -->
    <mxCell id="36" value="YES" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=1;exitY=0.5;exitFixed=1;entryX=0;entryY=0.5;entryFixed=1;" edge="1" source="35" target="37" parent="30">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Notify box -->
    <mxCell id="37" value="Notify" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="30">
      <mxGeometry x="260" y="287" width="60" height="46" as="geometry" />
    </mxCell>

    <!-- NO arrow back to wait -->
    <mxCell id="38" value="NO" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0.5;exitY=1;exitFixed=1;entryX=0.5;entryY=0;entryFixed=1;" edge="1" source="35" target="39" parent="30">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Wait for next tick box -->
    <mxCell id="39" value="Wait for Next Tick" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="30">
      <mxGeometry x="70" y="400" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- loop back arrow -->
    <mxCell id="40" value="loop back" style="edgeStyle=orthogonalEdgeStyle;html=1;exitX=0;exitY=0.5;exitFixed=1;entryX=0;entryY=0.5;entryFixed=1;" edge="1" source="39" target="31" parent="30">
      <mxGeometry relative="1" as="geometry">
        <Array as="points">
          <mxPoint x="30" y="430" />
          <mxPoint x="30" y="80" />
        </Array>
      </mxGeometry>
    </mxCell>

    <!-- ======================== RIGHT: Webhook Section ======================== -->
    <mxCell id="50" value="Webhook" style="swimlane;fillColor=#ffe6cc;strokeColor=#d6b656;fontSize=14;fontStyle=1;startSize=30;" vertex="1" parent="1">
      <mxGeometry x="860" y="100" width="340" height="500" as="geometry" />
    </mxCell>

    <!-- External System box -->
    <mxCell id="51" value="External System&#xa;(CI, monitoring tool,&#xa;any HTTP client)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;" vertex="1" parent="50">
      <mxGeometry x="70" y="60" width="200" height="70" as="geometry" />
    </mxCell>

    <!-- POST arrow -->
    <mxCell id="52" value="POST /api/hooks/agent&#xa;Authorization: Bearer &lt;token&gt;&#xa;{&quot;message&quot;: &quot;...&quot;}" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="51" target="53" parent="50">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Agent Session box -->
    <mxCell id="53" value="Agent Session" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;" vertex="1" parent="50">
      <mxGeometry x="70" y="230" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- produces arrow -->
    <mxCell id="54" value="produces" style="edgeStyle=orthogonalEdgeStyle;html=1;" edge="1" source="53" target="55" parent="50">
      <mxGeometry relative="1" as="geometry" />
    </mxCell>

    <!-- Result box -->
    <mxCell id="55" value="Result" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d6b656;" vertex="1" parent="50">
      <mxGeometry x="70" y="350" width="200" height="60" as="geometry" />
    </mxCell>

    <!-- Note box -->
    <mxCell id="56" value="Note: up to 6 concurrent&#xa;sessions, 10-min timeout.&#xa;Mint token: kirocrew token" style="text;html=1;strokeColor=#d6b656;fillColor=#ffe6cc;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=1;" vertex="1" parent="50">
      <mxGeometry x="40" y="430" width="260" height="50" as="geometry" />
    </mxCell>

  </root>
</mxGraphModel>
```

The diagram shows all three triggering mechanisms side by side. The left (green) section traces a cron job from its schedule through an agent session to dashboard and Slack delivery. The center (blue) section shows the heartbeat's 60-second loop — it only notifies when the "Changed?" decision diamond takes the YES path. The right (orange) section shows an external system posting an authenticated HTTP request that starts an agent session.

---

### 🔬 Lab

**Goal:** Create a cron job from the CLI, list it, trigger it manually once, then remove it.

**Time:** ~5 minutes

**Prerequisites:** Lesson 1 (Gateway running), Lesson 2 (understanding agents)

---

**Step 1: Open your terminal**

Open a new terminal window or tab.

---

**Step 2: Make sure the Crew gateway is running**

```bash
kirocrew gateway &
```

> 💡 Tip: The `&` runs the gateway in the background. If it is already running, this command will show an error — that is fine, just ignore it.

---

**Step 3: Add a cron job that runs every 5 minutes**

```bash
kirocrew cron add "test-job" "Say: Crew is alive and the time is now." --every 300
```

> 💡 Tip: This creates a job named `test-job`. It will run the given prompt every 300 seconds (5 minutes) in its own session.

---

**Step 4: Verify the job was created**

```bash
kirocrew cron list
```

> 💡 Tip: You should see your `test-job` with a status of `active` and a next-run time.

---

**Step 5: Trigger the job manually right now (do not wait 5 minutes)**

```bash
kirocrew cron trigger test-job
```

> 💡 Tip: This fires the job immediately. Check the dashboard notifications panel at http://localhost:5476 to see the result land.

---

**Step 6: Pause the job so it stops running automatically**

```bash
kirocrew cron pause test-job
```

> 💡 Tip: Pause is safer than remove when you might want it again later.

---

**Step 7: Remove the job entirely**

```bash
kirocrew cron remove test-job
```

> 💡 Tip: Always clean up test jobs. Forgotten cron jobs run forever and can waste resources.

---

✅ **Success condition:** You ran `kirocrew cron list` and saw the job. You triggered it manually and saw a result appear in the dashboard notifications.

❓ **Common error and fix:** If `kirocrew cron trigger` returns `job not found`, the job name is case-sensitive. Run `kirocrew cron list` to see the exact name and use that.

---

**Navigation:** [← Back to Index](README.md) | [← Lesson 12](lesson-12-artifacts.md) | [Next: Lesson 14 — Messaging Integrations →](lesson-14-messaging-integrations.md)
