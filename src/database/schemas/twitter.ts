import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text } from "drizzle-orm/pg-core";

export const twitterTable = pgTable("twitter", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  text: text("text").notNull(),
  author: text("author").notNull(),
  parentTweetId: text("parentTweetId"),
  isLiked: boolean("is_liked").notNull().default(false),
})

export type TwitterType = InferSelectModel<typeof twitterTable>;