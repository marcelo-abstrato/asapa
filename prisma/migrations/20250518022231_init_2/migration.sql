/*
  Warnings:

  - You are about to drop the column `isFuture` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "isFuture",
ADD COLUMN     "imageOrientation" TEXT DEFAULT 'horizontal';
