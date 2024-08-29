CREATE TABLE IF NOT EXISTS "blogs" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"tags" text[] NOT NULL,
	"is_read" boolean DEFAULT false NOT NULL,
	"page_number" integer DEFAULT 0 NOT NULL
);
