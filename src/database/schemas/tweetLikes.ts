import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./users";
import { twitterTable } from "./twitter";

export const twitterLikesTable = pgTable("twitter_likes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  tweetId: text("tweet_id")
    .notNull()
    .references(() => twitterTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type TwitterLikeType = InferSelectModel<typeof twitterLikesTable>;
