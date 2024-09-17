import TodoTask from "./TodoTask";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import WriteTodo from "./WriteTodo";
import getSession from "@/server-actions/auth/getSession";
import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { and, eq } from "drizzle-orm";

export type TaskType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export default async function TodoPage() {
  // const tasks = await fetch("/api/todo/selectTasks", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => res.json());

  const session = await getSession();

  const userId = session?.id;

  if (!userId) {
    return;
  }

  const tasks = await db
    .select()
    .from(todosTable)
    .where(
      and(eq(todosTable.userId, userId), eq(todosTable.isCompleted, false)),
    );

  // const addTask = async (text: string) => {
  //   const newTask = {
  //     text: text,
  //     // tags: tags,
  //   };
  //   // setText("");
  //   // setSelectedTags([]);
  //   // await insertTodo({ text: newTask.text, tags: newTask.tags });
  //   // await fetchTasks();
  // };

  // const addTask = async () => {
  //   const newTask = {
  //     text,
  //     tags: selectedTags,
  //   };

  //   setText("");
  //   setSelectedTags([]);

  //   await insertTodo({ text: newTask.text, tags: newTask.tags });
  //   await fetchTasks();
  // };

  return (
    <div className="flex">
      <div className="flex flex-1 justify-center bg-slate-50">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-20">
          <div className="flex flex-col items-center justify-center">
            {/* <div className="flex gap-2 pt-20"> */}
            {/* <Input
                placeholder="Enter your task"
                className="border"
                value={tasks.text}
                // onChange={(e) => setText(e.target.value)}
              />
              <Button onClick={addTask} className="bg-slate-800">
                Add
              </Button> */}
            <WriteTodo />
            {/* </div> */}
          </div>
          <div className="flex w-full flex-col gap-3 pt-10">
            {tasks.map((task, index) => (
              <TodoTask key={index} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
