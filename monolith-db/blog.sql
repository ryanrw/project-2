-- -------------------------------------------------------------
-- TablePlus 3.1.0(290)
--
-- https://tableplus.com/
--
-- Database: blog
-- Generation Time: 2563-01-30 21:11:02.1830
-- -------------------------------------------------------------


-- Connect to blog database
CREATE DATABASE blog;

\c blog;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS posts_post_id_seq;

-- Table Definition
CREATE TABLE "public"."posts" (
    "postid" int4 NOT NULL DEFAULT nextval('posts_post_id_seq'::regclass),
    "postby" uuid,
    "title" text,
    "excerpt" text,
    "content" text,
    "postat" timestamp DEFAULT now(),
    PRIMARY KEY ("postid")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."resume" (
    "metadata" jsonb
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."users" (
    "userid" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "username" varchar(32) NOT NULL,
    "email" varchar(64) NOT NULL,
    "password" varchar(64) NOT NULL,
    "create_at" timestamp DEFAULT now(),
    PRIMARY KEY ("userid")
);

ALTER TABLE "public"."posts" ADD FOREIGN KEY ("postby") REFERENCES "public"."users"("userid");
