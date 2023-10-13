/*
  Warnings:

  - Added the required column `address` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Place` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "coordintes" TEXT[],
ADD COLUMN     "country" TEXT NOT NULL;
