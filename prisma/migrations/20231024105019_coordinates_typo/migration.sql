/*
  Warnings:

  - You are about to drop the column `coordintes` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "coordintes",
ADD COLUMN     "coordinates" DOUBLE PRECISION[];
