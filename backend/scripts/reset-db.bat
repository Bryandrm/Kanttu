@echo off
echo 🧹 Borrando base de datos dev.db...

if exist "..\prisma\dev.db" del "..\prisma\dev.db"

echo 📜 Ejecutando migraciones...
cd ..
npx prisma migrate dev --name reset

echo ⚡ Prisma Client actualizado
npx prisma generate

echo ✅ Base de datos reseteada exitosamente.
pause