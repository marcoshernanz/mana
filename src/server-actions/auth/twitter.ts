import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "../../database/schemas/users";

export const twitterTable = pgTable("twitter", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  text: text("text").notNull(),
  // author: text("author").notNull(),
  userId: text("user_id").references(() => usersTable.id),
  parentTweetId: text("parentTweetId"),
  isLiked: boolean("is_liked").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export type TwitterType = InferSelectModel<typeof twitterTable>;











