/*
  Warnings:

  - You are about to drop the column `userId` on the `Phrase` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Phrase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Phrase" DROP CONSTRAINT "Phrase_userId_fkey";

-- AlterTable
ALTER TABLE "Phrase" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "displayName" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_displayName_key" ON "Author"("displayName");

-- AddForeignKey
ALTER TABLE "Phrase" ADD CONSTRAINT "Phrase_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
