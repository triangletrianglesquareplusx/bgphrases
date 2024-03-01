/*
  Warnings:

  - You are about to drop the column `phraseId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_phraseId_fkey";

-- AlterTable
ALTER TABLE "Phrase" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "phraseId";

-- CreateTable
CREATE TABLE "PhraseTags" (
    "phraseId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "PhraseTags_pkey" PRIMARY KEY ("phraseId","tagId")
);

-- AddForeignKey
ALTER TABLE "PhraseTags" ADD CONSTRAINT "PhraseTags_phraseId_fkey" FOREIGN KEY ("phraseId") REFERENCES "Phrase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhraseTags" ADD CONSTRAINT "PhraseTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
