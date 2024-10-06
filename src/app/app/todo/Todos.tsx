"use client";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import PrincipalMenu from "./PrincipalMenu";
import { cn } from "@/lib/utils";
import { OrderByType, useTodo } from "@/contexts/TodoContext";
import { Fragment, useCallback } from "react";

export default function Todos() {
  const {
    todos,
    orderBy,
    areCompletedTodosExpanded,
    setAreCompletedTodosExpanded,
  } = useTodo();

  const getTodos = useCallback(
    ({ completed, orderBy }: { completed: boolean; orderBy: OrderByType }) => {
      const filteredTodos = todos.filter(
        (todo) => todo.isCompleted === completed,
      );

      const orderedTodos = filteredTodos.sort((a, b) => {
        if (orderBy === "myOrder") {
          return 0;
        } else if (orderBy === "date") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else if (orderBy === "starred") {
          return Number(b.isStared) - Number(a.isStared);
        } else {
          return 0;
        }
      });

      const formattedTodos = orderedTodos.map((todo) => ({
        ...todo,
        subTodos:
          todo.parentTodoId === null
            ? orderedTodos.filter((subTodo) => subTodo.parentTodoId === todo.id)
            : undefined,
      }));

      const parentTodos = formattedTodos.filter(
        (todo) => todo.parentTodoId === null,
      );

      return parentTodos;
    },
    [todos],
  );

  // const handleUndo = useCallback(
  //   async (e: KeyboardEvent) => {
  //     if (e.key === "z" && e.ctrlKey) {
  //       const undo = undoRegisterRef.current.pop();
  //       if (!undo) return;

  //       const { action, todo } = undo;

  //       if (action === "add") {
  //       } else if (action === "toggleIsCompleted") {
  //         await toggleIsCompleted({ id: todo.id, isUndo: true });
  //       } else if (action === "delete") {
  //       } else if (action === "updateText") {
  //       }
  //       toast({
  //         title: "Action undone",
  //       });
  //     }
  //   },
  //   [toast, toggleIsCompleted],
  // );

  // useEffect(() => {
  //   addEventListener("keydown", handleUndo);

  //   return () => removeEventListener("keydown", handleUndo);
  // }, [handleUndo]);

  return (
    <div className="rounded-xl border bg-white py-4 shadow-sm">
      <div className="flex w-full items-center justify-between px-5 pb-5">
        <h1 className="text-xl font-medium">My Tasks</h1>
        <PrincipalMenu />
      </div>
      <AddTodo parentTodoId={null} />
      <div className="flex flex-col pt-2">
        {getTodos({ completed: false, orderBy }).map((todo) => (
          <Fragment key={todo.id}>
            <TodoItem todo={todo} />
            {todo.subTodos?.map((subTodo) => (
              <TodoItem key={subTodo.id} todo={subTodo} isSubTodo={true} />
            ))}
          </Fragment>
        ))}
      </div>

      <div className="flex items-center gap-2 pb-2 text-slate-600">
        <Button
          variant="ghost"
          onClick={() => setAreCompletedTodosExpanded((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full p-0"
        >
          <ChevronRightIcon
            className={cn(
              "h-6 w-6 transition-transform duration-300",
              areCompletedTodosExpanded && "rotate-90",
            )}
            strokeWidth={1.5}
          />
        </Button>
        <span className="text-sm font-medium">
          Completed ({getTodos({ completed: true, orderBy }).length})
        </span>
      </div>

      {areCompletedTodosExpanded && (
        <div className="flex flex-col gap-3">
          {getTodos({ completed: true, orderBy }).map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}
