import { InferSelectModel } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const blogsTable = pgTable("blogs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  content: text("content").notNull(),
  tags: text("tags").array().notNull(),
  isRead: boolean("is_read").notNull().default(false),
  pageNumber: integer("page_number").notNull().default(0),
});

export type BlogsTableType = InferSelectModel<typeof blogsTable>;