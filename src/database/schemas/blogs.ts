import { InferSelectModel } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const blogsTable = pgTable("blogs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  tags: text("tags").array().notNull(),
  isRead: boolean("is_read").notNull().default(false),
  pageNumber: integer("page_number").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type BlogsTableType = InferSelectModel<typeof blogsTable>;
