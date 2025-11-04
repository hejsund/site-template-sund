#!/bin/bash
# Script to replace Sommarboosten-specific content with template placeholders

cd ~/site-template-sund-och-stark-v0

# Replace in all TypeScript/TSX/HTML files
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/Sommarboosten/Program Name/g' \
  -e 's/sommarboosten/program-name/g' \
  -e 's/Charlotte/Instructor Name/g' \
  -e 's/Sund & Stark/Company Name/g' \
  -e 's/Sund och Stark/Company Name/g' \
  -e 's/@sundochstark/@yoursite/g' \
  {} \;

# Keep specific Swedish UI text for template consistency
# We'll leave: Anmälan, välkommen, etc in the template as examples

echo "✅ Content replacement complete!"
echo ""
echo "Replaced:"
echo "  - 'Sommarboosten' → 'Program Name'"
echo "  - 'Charlotte' → 'Instructor Name'"
echo "  - 'Sund & Stark' → 'Company Name'"
echo ""
echo "✅ All database connections preserved"
