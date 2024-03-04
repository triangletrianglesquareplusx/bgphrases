/*
  Warnings:

  - You are about to drop the `PhraseTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PhraseTags" DROP CONSTRAINT "PhraseTags_phraseId_fkey";

-- DropForeignKey
ALTER TABLE "PhraseTags" DROP CONSTRAINT "PhraseTags_tagId_fkey";

-- DropTable
DROP TABLE "PhraseTags";

-- CreateTable
CREATE TABLE "_PhraseToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PhraseToTag_AB_unique" ON "_PhraseToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PhraseToTag_B_index" ON "_PhraseToTag"("B");

-- AddForeignKey
ALTER TABLE "_PhraseToTag" ADD CONSTRAINT "_PhraseToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Phrase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhraseToTag" ADD CONSTRAINT "_PhraseToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
