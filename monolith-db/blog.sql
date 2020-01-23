-- -------------------------------------------------------------
-- TablePlus 3.1.0(290)
--
-- https://tableplus.com/
--
-- Database: blog
-- Generation Time: 2563-01-23 17:33:44.0360
-- -------------------------------------------------------------


-- Connect to blog database
CREATE DATABASE blog;

\c blog;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."contact" (
    "email" varchar(64),
    "tel" varchar(12)
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."education" (
    "name" varchar(64),
    "description" text,
    "year" varchar(32)
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."experience" (
    "duration" varchar(32),
    "place" varchar(128),
    "job_title" varchar(64),
    "description" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS posts_post_id_seq;

-- Table Definition
CREATE TABLE "public"."posts" (
    "post_id" int4 NOT NULL DEFAULT nextval('posts_post_id_seq'::regclass),
    "post_by" uuid,
    "title" text,
    "excerpt" text,
    "content" text,
    "post_at" timestamp,
    PRIMARY KEY ("post_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."resume" (
    "name" varchar(24),
    "about_me" text,
    "job_to_apply" text,
    "github_link" varchar(64)
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

DROP TYPE IF EXISTS "public"."fieldlist";
CREATE TYPE "public"."fieldlist" AS ENUM ('frontend', 'backend', 'other');
DROP TYPE IF EXISTS "public"."skilllevel";
CREATE TYPE "public"."skilllevel" AS ENUM ('expert', 'intermediate', 'beginner');

-- Table Definition
CREATE TABLE "public"."tool_skills" (
    "field" "public"."fieldlist",
    "name" varchar(32),
    "skill" "public"."skilllevel"
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."users" (
    "user_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "username" varchar(32) NOT NULL,
    "email" varchar(64) NOT NULL,
    "password" varchar(64) NOT NULL,
    "create_at" timestamp DEFAULT now(),
    PRIMARY KEY ("user_id")
);

ALTER TABLE "public"."posts" ADD FOREIGN KEY ("post_by") REFERENCES "public"."users"("user_id");
