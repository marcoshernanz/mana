CREATE TABLE IF NOT EXISTS "twitter" (
	"id" text PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"author" text NOT NULL,
	"parentTweetId" text,
	"is_liked" boolean DEFAULT false NOT NULL
);
