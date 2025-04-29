#!/bin/bash

echo "🧹 Borrando base de datos dev.db..."
rm -f prisma/dev.db

echo "📜 Ejecutando migraciones..."
npx prisma migrate dev --name reset

echo "⚡ Prisma Client actualizado"
npx prisma generate

echo "✅ Base de datos reseteada exitosamente."