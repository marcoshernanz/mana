"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodosType } from "@/database/schemas/todos";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface WriteTodoProps {
  initialData: TodosType[];
}

type UndoRegisterType = {
  action: "add" | "toggleIsCompleted" | "delete" | "updateText";
  todo: TodosType;
}[];

export default function Todos({ initialData }: WriteTodoProps) {
  const [todos, setTodos] = useState(initialData);
  const [expanded, setExpanded] = useState(false);
  const { toast } = useToast();

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const OnDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

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

  const CompletedTodos = useMemo(
    () =>
      todos
        .filter((todo) => todo.isCompleted)
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
    <div className="flex w-full flex-col rounded-xl border border-slate-200 bg-white px-6 pt-6 hover:shadow-md">
      <span>My Tasks</span>
      <div className="flex max-w-lg flex-col pt-8">
        <AddTodo addTodo={addTodo} />
      </div>
      <div className="mt-10 flex w-full flex-col gap-3">
        {uncompletedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleIsCompleted={(id: string) => toggleIsCompleted({ id })}
            OnDelete={OnDelete}
          />
        ))}
      </div>
      <div className="mb-9 flex w-full flex-col gap-4">
        <div className="flex items-center gap-4 pt-10">
          <Button variant="ghost" onClick={toggleExpand}>
            {expanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </Button>
          <span>Completed ({CompletedTodos.length})</span>
        </div>

        {expanded && (
          <div className="flex w-full flex-col gap-3">
            {CompletedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleIsCompleted={(id: string) => toggleIsCompleted({ id })}
                OnDelete={OnDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
