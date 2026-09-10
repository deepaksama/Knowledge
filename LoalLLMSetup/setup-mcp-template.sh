#!/bin/bash

# Template MCP configuration for Ollama
MCP_CONFIG='{
  "mcpServers": {
    "ollama": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-ollama"
      ],
      "env": {
        "OLLAMA_BASE_URL": "http://localhost:11434"
      }
    }
  }
}'

echo "This script copies MCP config to a workspace directory."
echo "Usage: ./setup-mcp-template.sh /path/to/workspace"
echo ""
echo "Example: ./setup-mcp-template.sh ~/Documents/Development/Repositories/MyProject"

if [ -z "$1" ]; then
    echo ""
    echo "No workspace path provided."
    exit 0
fi

WORKSPACE_PATH="$1"
MCP_DIR="$WORKSPACE_PATH/.kiro/settings"

if [ ! -d "$WORKSPACE_PATH" ]; then
    echo "Error: Directory does not exist: $WORKSPACE_PATH"
    exit 1
fi

# Create .kiro/settings directory if it doesn't exist
mkdir -p "$MCP_DIR"

# Write MCP config
echo "$MCP_CONFIG" > "$MCP_DIR/mcp.json"

echo "MCP config copied to $MCP_DIR/mcp.json"