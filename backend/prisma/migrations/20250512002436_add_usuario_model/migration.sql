/*
  Warnings:

  - You are about to drop the column `grupoId` on the `Compra` table. All the data in the column will be lost.
  - Made the column `usuarioId` on table `Compra` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Compra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "monto" REAL NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoria" TEXT,
    "metodoRegistro" TEXT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Compra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Compra" ("categoria", "descripcion", "fecha", "id", "metodoRegistro", "monto", "usuarioId") SELECT "categoria", "descripcion", "fecha", "id", "metodoRegistro", "monto", "usuarioId" FROM "Compra";
DROP TABLE "Compra";
ALTER TABLE "new_Compra" RENAME TO "Compra";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
