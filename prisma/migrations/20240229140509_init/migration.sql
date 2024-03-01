-- CreateTable
CREATE TABLE "Phrase" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "example_usage" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL,

    CONSTRAINT "Phrase_pkey" PRIMARY KEY ("id")
);
