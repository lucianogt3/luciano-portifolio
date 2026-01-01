#!/bin/bash
echo "🔧 Configurando ambiente Node.js..."
export NODE_VERSION=18.20.4
export NPM_VERSION=9.8.1

echo "📦 Instalando dependências com legacy-peer-deps..."
npm install --legacy-peer-deps --no-audit --progress=false

echo "🏗️ Executando build..."
npm run build

echo "✅ Build concluído!"
