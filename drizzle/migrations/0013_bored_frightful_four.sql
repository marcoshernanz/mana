ALTER TABLE "twitter" DROP CONSTRAINT "twitter_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "twitter" ALTER COLUMN "user_id" SET NOT NULL;