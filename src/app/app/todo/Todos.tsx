"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodosType } from "@/database/schemas/todos";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

// export type UpdateTodoType = Omit<
//   TodosType,
//   "text" | "tags" | "id" | "isCompleted" | "createdAt" | "userId"
// > & {
//   text?: string;
//   tags?: string[];
//   id?: string;
//   isCompleted?: boolean;
//   createdAt?: Date;
//   userId?: string;
// };

interface WriteTodoProps {
  initialData: TodosType[];
}

type UndoRegisterType = {
  action: "add" | "toggleIsCompleted" | "delete" | "updateText";
  todo: TodosType;
}[];

export default function Todos({ initialData }: WriteTodoProps) {
  const [todos, setTodos] = useState(initialData);
  const { toast } = useToast();

  const undoRegisterRef = useRef<UndoRegisterType>([]);

  const uncompletedTodos = useMemo(
    () =>
      todos
        .filter((todo) => !todo.isCompleted)
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        ),
    [todos],
  );

  const addTodo = async (text: string) => {
    const response = await fetch("/api/todo/insertTodo", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const newTodo = await response.json();

      setTodos((prev) => [...prev, newTodo]);
      undoRegisterRef.current.push(newTodo);
    } else {
      // TODO
    }
  };

  const toggleIsCompleted = useCallback(
    async ({ id, isUndo = false }: { id: string; isUndo?: boolean }) => {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) {
        return;
      }

      const response = await fetch("/api/todo/updateTodo", {
        method: "PATCH",
        body: JSON.stringify({ id, isCompleted: !todo.isCompleted }),
      });

      if (response.ok) {
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        );
      } else {
        // TODO
      }

      if (isUndo === false) {
        undoRegisterRef.current.push({ action: "toggleIsCompleted", todo });
        toast({
          title: "Todo updated",
          action: (
            <ToastAction
              onClick={async () => {
                undoRegisterRef.current.pop();
                await toggleIsCompleted({ id: todo.id, isUndo: true });
                toast({
                  title: "Action undone",
                });
              }}
              altText="Undo"
            >
              Undo
            </ToastAction>
          ),
        });
      }
    },
    [toast, todos],
  );

  const handleUndo = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key === "z" && e.ctrlKey) {
        const undo = undoRegisterRef.current.pop();
        if (!undo) return;

        const { action, todo } = undo;

        if (action === "add") {
          // TODO
          // deleteTodo(todo.id);
        } else if (action === "toggleIsCompleted") {
          await toggleIsCompleted({ id: todo.id, isUndo: true });
        } else if (action === "delete") {
        } else if (action === "updateText") {
        }
        toast({
          title: "Action undone",
        });
      }
    },
    [toast, toggleIsCompleted],
  );

  useEffect(() => {
    addEventListener("keydown", handleUndo);

    return () => removeEventListener("keydown", handleUndo);
  }, [handleUndo]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <AddTodo addTodo={addTodo} />
      </div>
      <div className="flex w-full flex-col gap-3 pt-10">
        {uncompletedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleIsCompleted={(id: string) => toggleIsCompleted({ id })}
          />
        ))}
      </div>
    </>
  );
}
