/*
  Warnings:

  - The `coordintes` column on the `Place` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "coordintes",
ADD COLUMN     "coordintes" DOUBLE PRECISION[];
