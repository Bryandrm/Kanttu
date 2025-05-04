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
    "usuarioId" INTEGER,
    "grupoId" INTEGER
);
INSERT INTO "new_Compra" ("categoria", "descripcion", "fecha", "grupoId", "id", "metodoRegistro", "monto", "usuarioId") SELECT "categoria", "descripcion", "fecha", "grupoId", "id", "metodoRegistro", "monto", "usuarioId" FROM "Compra";
DROP TABLE "Compra";
ALTER TABLE "new_Compra" RENAME TO "Compra";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
