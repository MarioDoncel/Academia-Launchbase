CREATE DATABASE "gymmanager"

CREATE TABLE "instructors" (
    "id"	SERIAL PRIMARY KEY,
    "name"	TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "birth": TIMESTAMP,
    "gender" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "created_at" TIMESTAMP DEFAULT(now())		
);

CREATE TABLE "members" (
    "id"	SERIAL PRIMARY KEY,
    "name"	TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "birth": TIMESTAMP,
    "gender" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "blood" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "created_at" TIMESTAMP DEFAULT(now())		
    "instructor_id" INTEGER,
);
