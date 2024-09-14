import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import getSession from "@/server-actions/auth/getSession";
import { and, eq } from "drizzle-orm";
import TodoTask from "./TodoTask";

export type TaskType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export default async function TodoPage() {
  const session = await getSession();
  if (!session) return null;

  const userId = session.id;

  // const tasks = await db
  //   .select()
  //   .from(todosTable)
  //   .where(
  //     and(eq(todosTable.userId, userId), eq(todosTable.isCompleted, false)),
  //   );

  const tasks = [
    {
      id: "1",
      text: "Task 1",
      isCompleted: false,
    },
    {
      id: "2",
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: "3",
      text: "Task 3",
      isCompleted: false,
    },
  ];

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

  // const fetchTasks = useCallback(async () => {
  //   const newTaskBlock = await selectBlockTodos({
  //     numTodosPerBlock,
  //     blockNumber: numBlocksRef.current,
  //     orderBy: "date",
  //     descending: true,
  //   });

  //   setTasks((currTasks) => {
  //     const filteredTasks = currTasks.filter(
  //       (currTasks) =>
  //         !newTaskBlock.some((newTask) => newTask.id === currTasks.id),
  //     );
  //     return [...filteredTasks, ...newTaskBlock];
  //   });
  // }, []);

  return (
    <div className="flex">
      <div className="flex flex-1 justify-center bg-slate-50">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-20">
          {/* <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 pt-20">
              <Input
                placeholder="Enter your task"
                className="border"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button onClick={addTask} className="bg-slate-800">
                Add
              </Button>
            </div>
          </div> */}
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
