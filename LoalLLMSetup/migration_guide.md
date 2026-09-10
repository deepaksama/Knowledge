# Kiro to Ollama Migration Guide

## Architecture Overview

### Understanding the Current Architecture

Before we migrate, let's understand how Kiro's LLM integration currently works. This will help us understand why we need to make the changes we're about to make.

#### What is an MCP Server?

**MCP (Model Context Protocol)** is a standard that allows Kiro to communicate with different LLM providers. Think of it as a translator that converts Kiro's requests into a format the LLM understands, and brings the response back.

Kiro uses MCP servers to:
- Send prompts to the LLM
- Receive responses from the LLM
- Handle authentication and API keys
- Manage model configuration

## Important: MCP Servers vs. Kiro's Underlying Model

**Critical clarification:** MCP servers provide **tools** that Kiro can use to interact with Ollama (like `ollama_list`, `ollama_chat`, `ollama_generate`), but they do NOT replace Kiro's own underlying model.

- **Kiro CLI** runs on AWS infrastructure with "Auto" model selection
- **MCP servers** enable Kiro to **call local Ollama models as tools** during tasks
- You cannot point Kiro's `/model` command at Ollama models - they aren't registered as Kiro models

## Architecture Diagrams

### Kiro IDE LLM Integration Architecture (Current)

```xml
<mxGraphModel dx="1414" dy="790" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="800" background="#ffffff" math="0" shadow="0">
  <root>
    <mxCell id="0"/>
    <mxCell id="1" parent="0"/>
    <mxCell id="2" value="User enters prompt in chat" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="100" y="50" width="160" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="3" value="VS Code Extension UI" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="80" y="150" width="160" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="4" value="Authentication Flow" style="endArrow=classic;html=1;exitX=0.5;exitY=0;entryX=0.5;entryY=1;" parent="1" source="3" target="2" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="230" y="200" as="sourcePoint"/>
        <mxPoint x="280" y="150" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="5" value="Kiro Agent (.kiro/settings/agent.json)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="250" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="6" value="Load agent config and model settings" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="3" target="5" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="250" as="sourcePoint"/>
        <mxPoint x="230" y="200" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="7" value="GitHub OAuth Token (stored in .kiro/settings/)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="350" width="260" height="40" as="geometry"/>
    </mxCell>
    <mxCell id="8" value="Load authentication token" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="5" target="7" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="360" as="sourcePoint"/>
        <mxPoint x="230" y="310" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="9" value="MCP Server (OpenAI-compatible)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="450" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="10" value="Initialize MCP server with token" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="7" target="9" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="460" as="sourcePoint"/>
        <mxPoint x="230" y="410" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="11" value="MCP Configuration (~/.kiro/settings/mcp.json)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="550" width="260" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="12" value="Load MCP config for Kiro Cloud endpoint" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="9" target="11" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="560" as="sourcePoint"/>
        <mxPoint x="230" y="510" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="13" value="Kiro Cloud API" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="650" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="14" value="Send prompt with auth token" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="11" target="13" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="660" as="sourcePoint"/>
        <mxPoint x="230" y="610" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="15" value="Response from LLM" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="750" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="16" value="Receive and return response" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="13" target="15" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="760" as="sourcePoint"/>
        <mxPoint x="230" y="710" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="17" value="GitHub OAuth Server" style="ellipse;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="380" y="350" width="100" height="40" as="geometry"/>
    </mxCell>
    <mxCell id="18" value="Auth token request" style="endArrow=classic;html=1;exitX=1;exitY=0.5;entryX=0;entryY=0.5;" parent="1" source="7" target="17" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="380" y="400" as="sourcePoint"/>
        <mxPoint x="430" y="350" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="19" value="GitHub OAuth Token" style="rounded=0;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="600" y="550" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="20" value="API Token" style="endArrow=classic;html=1;entryX=0;entryY=0.5;" parent="1" target="13" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="590" y="610" as="sourcePoint"/>
        <mxPoint x="290" y="600" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="21" value="Kiro Cloud LLM Service" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="560" y="650" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="22" value="Process request with cloud model" style="endArrow=classic;html=1;entryX=1;entryY=0.5;" parent="1" target="21" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="630" y="710" as="sourcePoint"/>
        <mxPoint x="330" y="700" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="23" value="Data Flow: User Input → Agent Config → Auth Token → MCP Server → Kiro Cloud → LLM Response" style="rounded=0;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="100" y="20" width="600" height="20" as="geometry"/>
    </mxCell>
  </root>
</mxGraphModel>
```

### Kirocrew LLM Integration Architecture (Current)

```xml
<mxGraphModel dx="1414" dy="790" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="800" background="#ffffff" math="0" shadow="0">
  <root>
    <mxCell id="0"/>
    <mxCell id="1" parent="0"/>
    <mxCell id="2" value="Agent Configuration (.kirocrew.json)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="100" y="50" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="3" value="Kirocrew Agent" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="80" y="150" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="4" value="Load agent definition" style="endArrow=classic;html=1;exitX=0.5;exitY=0;entryX=0.5;entryY=1;" parent="1" source="3" target="2" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="200" y="160" as="sourcePoint"/>
        <mxPoint x="250" y="110" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="5" value="Agent-specific Config (model, role, goals)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="250" width="260" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="6" value="Load agent config" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="2" target="5" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="200" y="260" as="sourcePoint"/>
        <mxPoint x="250" y="210" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="7" value="GitHub OAuth Token (stored in .kiro/settings/)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="350" width="260" height="40" as="geometry"/>
    </mxCell>
    <mxCell id="8" value="Load authentication token" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="5" target="7" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="200" y="360" as="sourcePoint"/>
        <mxPoint x="250" y="310" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="9" value="MCP Server (OpenAI-compatible)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="450" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="10" value="Initialize MCP server with token" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="7" target="9" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="200" y="460" as="sourcePoint"/>
        <mxPoint x="250" y="410" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="11" value="MCP Configuration (~/.kiro/settings/mcp.json)" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="550" width="260" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="12" value="Load MCP config for Kiro Cloud endpoint" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="9" target="11" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="200" y="560" as="sourcePoint"/>
        <mxPoint x="250" y="510" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="13" value="Kiro Cloud API" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="650" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="14" value="Send prompt with auth token" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="11" target="13" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="660" as="sourcePoint"/>
        <mxPoint x="250" y="610" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="15" value="Response from LLM" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="60" y="750" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="16" value="Receive and return response" style="endArrow=classic;html=1;exitX=0.5;exitY=1;entryX=0.5;entryY=0;" parent="1" source="13" target="15" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="180" y="760" as="sourcePoint"/>
        <mxPoint x="230" y="710" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="17" value="GitHub OAuth Server" style="ellipse;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="380" y="350" width="100" height="40" as="geometry"/>
    </mxCell>
    <mxCell id="18" value="Auth token request" style="endArrow=classic;html=1;exitX=1;exitY=0.5;entryX=0;entryY=0.5;" parent="1" source="7" target="17" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="380" y="400" as="sourcePoint"/>
        <mxPoint x="430" y="350" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="19" value="GitHub OAuth Token" style="rounded=0;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="600" y="550" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="20" value="API Token" style="endArrow=classic;html=1;entryX=0;entryY=0.5;" parent="1" target="13" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="590" y="610" as="sourcePoint"/>
        <mxPoint x="290" y="600" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="21" value="Kiro Cloud LLM Service" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="560" y="650" width="200" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="22" value="Process request with cloud model" style="endArrow=classic;html=1;entryX=1;entryY=0.5;" parent="1" target="21" edge="1">
      <mxGeometry width="50" height="50" relative="1" as="geometry">
        <mxPoint x="630" y="710" as="sourcePoint"/>
        <mxPoint x="330" y="700" as="targetPoint"/>
      </mxGeometry>
    </mxCell>
    <mxCell id="23" value="Data Flow: Agent Config → Auth Token → MCP Server → Kiro Cloud → LLM Response" style="rounded=0;whiteSpace=wrap;html=1;strokeColor=#000000;fillColor=#ffffff;" parent="1" vertex="1">
      <mxGeometry x="100" y="20" width="550" height="20" as="geometry"/>
    </mxCell>
  </root>
</mxGraphModel>
```

## Migration Plan

### Why We Need to Migrate

Before we start the migration, let's understand why we're making these changes:

**Current State:**
- Kiro IDE uses GitHub OAuth to authenticate with Kiro's cloud LLM service
- Each LLM request consumes your free credits
- The LLM is hosted remotely (cloud)
- You have 50 free credits that can be depleted

**Target State:**
- Ollama runs locally on your machine
- No API credits consumed for Ollama tool usage (unlimited usage)
- Models are stored locally
- No authentication required (by default)

**Key Change:** MCP servers enable Kiro to use local Ollama models as tools (like `ollama_chat`, `ollama_generate`) instead of going through Kiro's cloud service.

### Prerequisites

1. **Install Ollama**: Download and install from https://ollama.com/download

   **Why?** Ollama is the local LLM server that will run models on your machine. Without it, there's nowhere for Kiro to send requests.

2. **Start Ollama**: Run `ollama serve` in your terminal

   **Why?** This starts the Ollama server that listens on `http://localhost:11434`. Kiro needs this server to be running to send requests.

3. **Pull a model**: Run `ollama pull llama3:8b`

   **Why?** Ollama starts empty. You need to pull at least one model before Kiro can use it. `llama3:8b` is a good starting point - it's powerful but not too resource-intensive.

### Important: What MCP Servers Enable

**MCP servers provide tools, not model replacement:**

- Kiro CLI runs on AWS with "Auto" model selection
- MCP servers add tools like `ollama_list`, `ollama_chat`, `ollama_generate` to Kiro
- These tools allow Kiro to call your local Ollama models during tasks
- You cannot select Ollama models via `/model` - they're tools, not Kiro models

**This means:**
- You still need a cloud model for Kiro CLI's underlying model
- But you can use local Ollama models as tools for specific tasks
- This saves credits when you want to use local models for coding tasks

## Your Installed Models

Based on your `ollama list` output:

| Model Name | Size | Last Updated |
|------------|------|--------------|
| `qwen2.5-coder:1.5b` | 986 MB | 10 hours ago |
| `qwen2.5-coder:7b` | 4.7 GB | 10 hours ago |
| `llama3.2:latest` | 2.0 GB | 10 hours ago |
| `llama3.1:8b` | 4.9 GB | 2 weeks ago |

## For Kiro IDE

### Understanding MCP Configuration Locations

**Important**: Kiro stores MCP configuration at the **workspace level** (`.kiro/settings/mcp.json` in each project), not at the user level (`~/.kiro/settings/`).

The workspace-level config only affects that specific project. To apply MCP configuration across all projects, you would need to copy it to each project's `.kiro/settings/` directory.

### Step 1: Update MCP Configuration

**File to modify**: `.kiro/settings/mcp.json` in your workspace

**Configuration to add** (for your installed models):
```json
{
  "mcpServers": {
    "qwen-1.5b": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ollama"],
      "env": {
        "OLLAMA_BASE_URL": "http://localhost:11434"
      },
      "disabled": false
    },
    "qwen-7b": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ollama"],
      "env": {
        "OLLAMA_BASE_URL": "http://localhost:11434"
      },
      "disabled": false
    },
    "llama3.2": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ollama"],
      "env": {
        "OLLAMA_BASE_URL": "http://localhost:11434"
      },
      "disabled": false
    },
    "llama3.1-8b": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ollama"],
      "env": {
        "OLLAMA_BASE_URL": "http://localhost:11434"
      },
      "disabled": false
    }
  }
}
```

**Why this change?**
- **Multiple MCP servers**: Each model gets its own MCP server entry with a unique name
- **`mcpServers`**: This tells Kiro about available MCP servers
- **`qwen-1.5b`, `qwen-7b`, `llama3.2`, `llama3.1-8b`**: Descriptive names you choose (can be anything memorable)
- **`command: "npx"`**: npx downloads and runs the package without permanent installation
- **`@modelcontextprotocol/server-ollama`**: This is a pre-built MCP server that knows how to talk to Ollama
- **`OLLAMA_BASE_URL`**: Points to your local Ollama instance (default port 11434)

### Step 2: Switch Between Models

You can switch between models in two ways:

#### Option A: Using Kiro CLI (No File Editing - Recommended)

```bash
# Switch between models using the CLI
kiro settings set chat.defaultModel "ollama/qwen-1.5b"
kiro settings set chat.defaultModel "ollama/qwen-7b"
kiro settings set chat.defaultModel "ollama/llama3.2"
kiro settings set chat.defaultModel "ollama/llama3.1-8b"
```

**Note**: This method doesn't require you to edit any files. Kiro stores the model preference in its internal settings.

#### Option B: Using Agent Configuration File (If you prefer manual editing)

**File to modify**: `.kiro/settings/agent.json` (create if it doesn't exist)

**Important**: You have only ONE `agent.json` file. To switch models, you **edit** this same file and change the values inside it.

**Example - Qwen 1.5B configuration:**
```json
{
  "defaultAgent": {
    "model": "qwen-1.5b",
    "provider": "ollama",
    "modelConfig": {
      "model": "qwen2.5-coder:1.5b"
    }
  }
}
```

**To switch to Qwen 7B, you EDIT the same file:**
```json
{
  "defaultAgent": {
    "model": "qwen-7b",
    "provider": "ollama",
    "modelConfig": {
      "model": "qwen2.5-coder:7b"
    }
  }
}
```

**Or to Llama3.2:**
```json
{
  "defaultAgent": {
    "model": "llama3.2",
    "provider": "ollama",
    "modelConfig": {
      "model": "llama3.2:latest"
    }
  }
}
```

**Or to Llama3.1 8B:**
```json
{
  "defaultAgent": {
    "model": "llama3.1-8b",
    "provider": "ollama",
    "modelConfig": {
      "model": "llama3.1:8b"
    }
  }
}
```

The key point: **One file, edit the content to switch models.**

### Step 3: Restart Kiro IDE

**Why restart?** Kiro loads its configuration when it starts. Changes to MCP and agent configuration only take effect after a restart.

**How to restart**:
1. Close Kiro IDE completely
2. Reopen Kiro IDE
3. Test with a simple prompt

## For Kirocrew

### Step 1: Update Agent Configuration

**File to modify**: `.kirocrew.json`

**Configuration to update** (for Qwen 1.5B):
```json
{
  "provider": "ollama",
  "model": "qwen2.5-coder:1.5b",
  "providers": {
    "ollama": {
      "baseURL": "http://localhost:11434"
    }
  },
  "approval": "auto",
  "dashboard": {}
}
```

**To switch models**, update the `model` field:
- For Qwen 7B: `"model": "qwen2.5-coder:7b"`
- For Llama3.2: `"model": "llama3.2:latest"`
- For Llama3.1 8B: `"model": "llama3.1:8b"`

### Step 2: Use Kirocrew CLI

Kirocrew also supports environment variables:

```bash
# Run a task with a specific model
OLLAMA_MODEL="llama3.2:latest" kirocrew run "your task here"

# Or set it permanently in your shell profile
echo 'export OLLAMA_MODEL="qwen2.5-coder:1.5b"' >> ~/.zshrc
source ~/.zshrc
```

### Step 3: Restart Kirocrew

**Why restart?** Similar to Kiro IDE, configuration changes require a restart to take effect.

**How to restart**: Reload your Kirocrew agents through the Kiro interface.

## Multi-Model Configuration

### How to Switch Between Models

Kiro supports multiple models through MCP server configuration. Here's how:

#### Method 1: Kiro CLI (No File Editing)

```bash
# Switch between models using the CLI
kiro settings set chat.defaultModel "ollama/qwen-1.5b"
kiro settings set chat.defaultModel "ollama/qwen-7b"
kiro settings set chat.defaultModel "ollama/llama3.2"
kiro settings set chat.defaultModel "ollama/llama3.1-8b"
```

#### Method 2: Multiple MCP Servers

In `.kiro/settings/mcp.json`, define multiple servers:

```json
{
  "mcpServers": {
    "fast": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ollama"],
      "env": {"OLLAMA_BASE_URL": "http://localhost:11434"}
    },
    "powerful": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ollama"],
      "env": {"OLLAMA_BASE_URL": "http://localhost:11434"}
    }
  }
}
```

Then switch the agent config to use different server names.

#### Method 3: Environment Variables (Kirocrew)

```bash
# For single commands
OLLAMA_MODEL="llama3.2:latest" kirocrew run "your task"

# For permanent setting
export OLLAMA_MODEL="qwen2.5-coder:1.5b"
```

## Rollback Plan

If something breaks, you can easily revert:

### Step 1: Backup Current Configuration

Before making changes, create backups:
```bash
cp ~/.kiro/settings/cli.json ~/.kiro/settings/cli.json.backup
cp .kirocrew.json .kirocrew.json.backup
cp .kiro/settings/mcp.json .kiro/settings/mcp.json.backup 2>/dev/null || true
```

### Step 2: Restore from Backup

If needed, restore the original configuration:
```bash
cp ~/.kiro/settings/cli.json.backup ~/.kiro/settings/cli.json
cp .kirocrew.json.backup .kirocrew.json
cp .kiro/settings/mcp.json.backup .kiro/settings/mcp.json 2>/dev/null || true
```

### Step 3: Restart Kiro IDE and Kirocrew

After restoring, restart both tools to load the original configuration.

## Troubleshooting

### Issue: MCP configuration not found

**Cause**: Kiro stores MCP config at workspace level (`.kiro/settings/mcp.json`), not user level

**Solution**: Create `.kiro/settings/mcp.json` in your project directory

### Issue: "Connection refused" when connecting to Ollama

**Cause**: Ollama server is not running

**Solution**: Start Ollama with `ollama serve` in a separate terminal

### Issue: "Model not found"

**Cause**: The model specified in configuration doesn't exist locally

**Solution**: Pull the model with `ollama pull llama3:8b` (replace with your model name)

### Issue: Kiro still uses cloud LLM

**Cause**: Configuration file is in the wrong location or has syntax errors

**Solution**:
1. Check that `mcp.json` is at `.kiro/settings/mcp.json` (workspace level)
2. Check that `agent.json` is at `.kiro/settings/agent.json` (workspace level)
3. Validate JSON syntax with a JSON validator

### Issue: Slow responses

**Cause**: Model is too large for your hardware or Ollama isn't using GPU

**Solution**: Try a smaller model like `qwen2.5-coder:1.5b` instead of `qwen2.5-coder:7b`, or enable GPU acceleration in Ollama

## Files and Locations

| File | Purpose | Location |
|------|---------|----------|
| `mcp.json` | MCP server configuration (Ollama) | `.kiro/settings/mcp.json` (workspace level) |
| `agent.json` | Agent model configuration | `.kiro/settings/agent.json` (workspace level) |
| `cli.json` | CLI settings (chat.defaultModel) | `~/.kiro/settings/cli.json` (user level) |
| `.kirocrew.json` | Kirocrew agent configuration | Workspace root or home directory |

## Summary

### What This Migration Enables

The MCP configuration enables Kiro to use local Ollama models **as tools** during tasks:

| Tool | What it does |
|------|-------------|
| `ollama_list` | Lists available models on your local Ollama |
| `ollama_chat` | Sends a chat request to a local Ollama model |
| `ollama_generate` | Sends a generate request to a local Ollama model |

### How to Use Local Models

1. **Configure MCP servers** in `.kiro/settings/mcp.json` (workspace level)
2. **Restart Kiro IDE** to load the MCP servers
3. **Use local models via tools**: When Kiro needs to use a local model, it will call the MCP tools
4. **Switch between models** by using different MCP server names or modifying the MCP config

### What Still Requires Cloud

- **Kiro CLI** still requires a cloud model for its underlying model selection
- **Kirocrew** requires a cloud model subscription to use Kiro's agents
- You can use `/model` to select from cloud models only

### This Gives You

- **Unlimited local model usage** for coding tasks via MCP tools
- **No credit consumption** when using local Ollama models
- **Local model storage** - no need to rely on cloud models
- **Multiple model options** - configure different MCP servers for different models

### Features That May Differ with Ollama

| Feature | Kiro Cloud | Ollama Local | Notes |
|---------|------------|--------------|-------|
| Response Speed | Fast (cached) | Depends on hardware | Local models may be slower |
| Context Window | Large | Limited by model | Check model limits |
| Model Updates | Automatic | Manual (`ollama pull`) | You control updates |
| Authentication | GitHub OAuth | None (by default) | More convenient |
| Credits Used | Yes | No | Unlimited usage |

| Model | Size | Recommended For |
|-------|------|-----------------|
| `qwen2.5-coder:1.5b` | 986 MB | Quick tasks, limited resources |
| `qwen2.5-coder:7b` | 4.7 GB | Coding tasks, balanced performance |
| `llama3.2:latest` | 2.0 GB | General assistant tasks |
| `llama3.1:8b` | 4.9 GB | Complex reasoning, larger context |