/*
  Warnings:

  - You are about to drop the column `name` on the `courses` table. All the data in the column will be lost.
  - Added the required column `nameCourse` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameTeacher` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "name",
ADD COLUMN     "nameCourse" TEXT NOT NULL,
ADD COLUMN     "nameTeacher" TEXT NOT NULL;
