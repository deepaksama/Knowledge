#!/bin/bash

echo "Resetting Kirocrew configuration to defaults..."

# Backup current configs
cp ~/.kiro/crew/config.json ~/.kiro/crew/config.json.backup
cp ~/.kiro/agents/kirocrew.json ~/.kiro/agents/kirocrew.json.backup

# Delete configs so Kirocrew regenerates defaults on next run
rm ~/.kiro/crew/config.json
rm ~/.kiro/agents/kirocrew.json

echo "Done. Restart Kiro IDE and Kirocrew to apply changes."
echo "Backups saved at:"
echo "  - ~/.kiro/crew/config.json.backup"
echo "  - ~/.kiro/agents/kirocrew.json.backup"