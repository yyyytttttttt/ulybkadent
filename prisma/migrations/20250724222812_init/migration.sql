-- CreateTable
CREATE TABLE "Reel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "videoURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reel_pkey" PRIMARY KEY ("id")
);
