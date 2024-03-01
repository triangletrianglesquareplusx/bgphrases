/*
  Warnings:

  - Added the required column `userId` to the `Phrase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Phrase" ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "likes" SET DEFAULT 0,
ALTER COLUMN "dislikes" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "displayName" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phraseId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_displayName_key" ON "User"("displayName");

-- AddForeignKey
ALTER TABLE "Phrase" ADD CONSTRAINT "Phrase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_phraseId_fkey" FOREIGN KEY ("phraseId") REFERENCES "Phrase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
