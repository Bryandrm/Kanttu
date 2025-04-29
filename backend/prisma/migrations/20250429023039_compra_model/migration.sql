/*
  Warnings:

  - Added the required column `usuarioId` to the `Compra` table without a default value. This is not possible if the table is not empty.

*/
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
    "grupoId" INTEGER
);
INSERT INTO "new_Compra" ("descripcion", "fecha", "id", "monto") SELECT "descripcion", "fecha", "id", "monto" FROM "Compra";
DROP TABLE "Compra";
ALTER TABLE "new_Compra" RENAME TO "Compra";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
