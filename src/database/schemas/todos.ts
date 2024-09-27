import { InferSelectModel } from "drizzle-orm";
import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const todosTable = pgTable("todos", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  text: text("text").notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
  isStared: boolean("is_stared").notNull().default(false),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  parentTodoId: text("parentTodoId"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type TodosType = InferSelectModel<typeof todosTable>;
