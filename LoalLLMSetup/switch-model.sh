#!/bin/bash

# Script to quickly switch Kiro's default model
# Usage: ./switch-model.sh <model-name>

AGENT_CONFIG="$HOME/.kiro/settings/agent.json"

# Define model configurations
declare -A MODELS=(
    ["llama3-8b"]='{"model": "llama3:8b"}'
    ["llama3-70b"]='{"model": "llama3:70b"}'
    ["qwen2.5-coder"]='{"model": "qwen2.5-coder:1.5b"}'
)

show_usage() {
    echo "Usage: $0 <model-name>"
    echo ""
    echo "Available models:"
    for model in "${!MODELS[@]}"; do
        echo "  - $model (${MODELS[$model]})"
    done
    exit 1
}

if [ -z "$1" ]; then
    show_usage
fi

SELECTED_MODEL="$1"

if [ -z "${MODELS[$SELECTED_MODEL]}" ]; then
    echo "Error: Unknown model '$SELECTED_MODEL'"
    show_usage
fi

MODEL_CONFIG="${MODELS[$SELECTED_MODEL]}"

echo "Switching to model: $SELECTED_MODEL"

# Create backup
cp "$AGENT_CONFIG" "$AGENT_CONFIG.backup.$(date +%Y%m%d%H%M%S)"

# Update agent configuration
cat > "$AGENT_CONFIG" << EOF
{
  "defaultAgent": {
    "model": "$SELECTED_MODEL",
    "provider": "ollama",
    "modelConfig": $MODEL_CONFIG
  }
}
EOF

echo "Model switched to: $SELECTED_MODEL"
echo "Configuration saved to: $AGENT_CONFIG"
echo "Please restart Kiro IDE for changes to take effect."
echo ""
echo "Backup saved at: $AGENT_CONFIG.backup.*"