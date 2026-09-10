#!/bin/bash

echo "Resetting Kiro configuration to defaults..."

# Workspace level
cp ~/.kirocrew.json ~/.kirocrew.json.backup 2>/dev/null || true
echo '{}' > ~/.kirocrew.json

cp ~/.kiro/settings/mcp.json ~/.kiro/settings/mcp.json.backup 2>/dev/null || true
echo '{"mcpServers":{}}' > ~/.kiro/settings/mcp.json

# User level
cp ~/.kiro/settings/agent.json ~/.kiro/settings/agent.json.backup 2>/dev/null || true
echo '{}' > ~/.kiro/settings/agent.json

echo "Done. Restart Kiro IDE to apply changes."
