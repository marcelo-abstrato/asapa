-- CreateTable
CREATE TABLE "Event"
(
    "id"          TEXT         NOT NULL,
    "title"       TEXT         NOT NULL,
    "date"        TEXT         NOT NULL,
    "location"    TEXT         NOT NULL,
    "description" TEXT         NOT NULL,
    "image"       TEXT         NOT NULL,
    "isFuture"    BOOLEAN      NOT NULL DEFAULT true,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
