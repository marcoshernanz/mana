ALTER TABLE "twitter_likes" DROP CONSTRAINT "twitter_likes_tweet_id_twitter_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "twitter_likes" ADD CONSTRAINT "twitter_likes_tweet_id_twitter_id_fk" FOREIGN KEY ("tweet_id") REFERENCES "public"."twitter"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
