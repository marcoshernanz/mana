import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const twitterTable = pgTable("twitter", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  text: text("text").notNull(),
  userId: text("user_id").notNull(),
  parentTweetId: text("parentTweetId"),
  isLiked: boolean("is_liked").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type TwitterType = InferSelectModel<typeof twitterTable>;
