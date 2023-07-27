/*
  Warnings:

  - You are about to drop the `expensives` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "expensives";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "expensive" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "desciption" TEXT NOT NULL,
    "value" REAL NOT NULL
);
