// "use server";

// import getSession from "../auth/getSession";
// import { TaskType } from "@/app/app/todo/page";
// import selectTodos from "@/database/queries/todos/selectTodos";

// interface selectBlockTodosProps {
//   numTodosPerBlock: number;
//   blockNumber: number;
//   orderBy: "date" | "completed";
//   descending: boolean;
// }

// export default async function selectBlockTodos({
//   numTodosPerBlock,
//   blockNumber,
//   orderBy,
//   descending,
// }: selectBlockTodosProps): Promise<TaskType[]> {
//   const session = await getSession();
//   if (!session) throw new Error("User not logged in");

//   const todos = await selectTodos({
//     numTodos: numTodosPerBlock,
//     offset: numTodosPerBlock * (blockNumber - 1),
//     orderBy,
//     descending,
//   });

//   const formattedTodos = todos.map((todo) => ({
//     id: todo.todos.id,
//     text: todo.todos.text,
//     isCompleted: todo.todos.isCompleted,
//     tags: todo.todos.tags,
//     author: todo.users?.name as string,
//     isUserTweet: todo.todos.userId === session.id,
//   }));

//   return formattedTodos;
// }
