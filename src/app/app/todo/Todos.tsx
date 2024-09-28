"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodosType } from "@/database/schemas/todos";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import PrincipalMenu from "./PrincipalMenu";
import { cn } from "@/lib/utils";

interface WriteTodoProps {
  initialData: TodosType[];
}

type NewTodoType = {
  createdAt: Date;
  isStared: boolean;
  id: string;
  text: string;
  isCompleted: boolean;
  userId: string;
  parentTodoId: string | null;
};

type UndoRegisterType = {
  action: "add" | "toggleIsCompleted" | "delete" | "updateText";
  todo: TodosType;
}[];

export default function Todos({ initialData }: WriteTodoProps) {
  const [todos, setTodos] = useState(initialData);
  const [expanded, setExpanded] = useState(false);
  const { toast } = useToast();

  const orderedTodos = async (order: string) => {
    console.log(order);
    const response = await fetch("/api/todo/orderBy", {
      method: "POST",
      body: JSON.stringify({
        orderBy: order,
        descending: true,
      }),
    });

    if (response.ok) {
      const newTodosOrder = await response.json();
      console.log(newTodosOrder);
      // setTodos((currTodos) => {
      //   const filteredTodos = currTodos.filter(
      //     (currTodo) =>
      //       !newTodosOrder.some(
      //         (newTodo: NewTodoType) => newTodo.id === currTodo.id,
      //       ),
      //   );
      // return [...filteredTodos, ...newTodosOrder];
      setTodos(newTodosOrder);
    }
  };

  const OnDeleteAll = async () => {
    console.log("delete all");
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const OnDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const undoRegisterRef = useRef<UndoRegisterType>([]);

  const uncompletedParentTodos = useMemo(
    () =>
      todos
        .filter((todo) => !todo.isCompleted && todo.parentTodoId === null)
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        ),
    [todos],
  );

  const replyTodos = useMemo(
    () => (parentTodoId: string | null) =>
      todos
        .filter(
          (todo) => !todo.isCompleted && todo.parentTodoId === parentTodoId,
        )
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

  const addTodo = async (text: string, parentTodoId: string | null) => {
    const response = await fetch("/api/todo/insertTodo", {
      method: "POST",
      body: JSON.stringify({ text, parentTodoId }),
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
        body: JSON.stringify({ id, isCompleted: !todo.isCompleted, undefined }),
      });

      if (response.ok) {
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id || todo.parentTodoId === id
              ? { ...todo, isCompleted: !todo.isCompleted }
              : todo,
          ),
        );
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
    <div className="rounded-xl border bg-white px-10 py-8 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl">My Tasks</h1>
        <PrincipalMenu />
      </div>
      <div className="pt-4">
        <AddTodo addTodo={addTodo} parentTodoId={null} />
      </div>
      <div className="flex flex-col gap-3 pb-6 pt-6">
        {uncompletedParentTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleIsCompleted={(id: string) => toggleIsCompleted({ id })}
            OnDelete={OnDelete}
            addSubTask={addTodo}
            replyTodos={replyTodos}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 pb-2 text-slate-600">
        <Button
          variant="ghost"
          onClick={toggleExpand}
          className="flex h-10 w-10 items-center justify-center rounded-full p-0"
        >
          <ChevronRightIcon
            className={cn(
              "h-6 w-6 transition-transform duration-300",
              expanded && "rotate-90",
            )}
            strokeWidth={1.5}
          />
        </Button>
        <span className="text-sm font-medium">
          Completed ({CompletedTodos.length})
        </span>
      </div>

      {expanded && (
        <div className="flex flex-col gap-3">
          {CompletedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleIsCompleted={(id: string) => toggleIsCompleted({ id })}
              OnDelete={OnDelete}
              addSubTask={addTodo}
              replyTodos={replyTodos}
            />
          ))}
        </div>
      )}
    </div>
  );
}
