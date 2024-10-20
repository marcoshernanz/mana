"use client";

import { FormEvent, useEffect, useRef, useState, useTransition } from "react";
import { useTodo } from "@/contexts/TodoContext";
import { LoaderCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddTodoProps {
  parentTodoId: string | null;
}

export default function AddTodo({ parentTodoId }: AddTodoProps) {
  const [text, setText] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const { setTodos, setReplyingToTodoId, isUpdatingReplyingToRef } = useTodo();

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text) {
      inputRef.current?.focus();
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/todos/insertTodo", {
          method: "POST",
          body: JSON.stringify({ text, parentTodoId }),
        });

        if (response.ok) {
          const newTodo = await response.json();
          setTodos((prev) => [...prev, newTodo]);
          setText("");
        } else {
          console.error("Failed to add todo");
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    if (!parentTodoId) return;

    const timeoutId = setTimeout(() => inputRef.current?.focus());

    return () => clearTimeout(timeoutId);
  }, [parentTodoId]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        parentTodoId === null ||
        isUpdatingReplyingToRef.current ||
        document.activeElement !== inputRef.current
      ) {
        return;
      }

      if (!formRef.current?.contains(event.target as Node)) {
        setReplyingToTodoId(null);
      }
    };

    window.addEventListener("pointerdown", handleClick);

    return () => window.removeEventListener("pointerdown", handleClick);
  }, [isUpdatingReplyingToRef, parentTodoId, setReplyingToTodoId]);

  return (
    <form
      onSubmit={(event) => handleAddTodo(event)}
      className={cn(
        "group flex h-12 w-full items-center justify-between bg-white pl-5 focus-within:bg-blue-50/70 hover:bg-blue-50/70",
        parentTodoId && "pl-14",
      )}
      ref={formRef}
    >
      <div className="flex h-full w-full items-center gap-2 py-1 pr-2">
        <button
          type="button"
          className="h-[1.125rem] w-[1.125rem] flex-shrink-0 rounded-full border border-blue-500 group-hover:border-blue-600"
        ></button>
        <input
          type="text"
          placeholder={parentTodoId === null ? "Add a task" : "Add a subtask"}
          // autoFocus
          ref={inputRef}
          className="h-full w-full bg-transparent px-2 font-normal placeholder:text-blue-500 focus:outline-none focus:placeholder:text-slate-600 group-hover:placeholder:text-slate-600 focus:group-hover:placeholder:text-slate-500"
          value={text}
          disabled={isPending}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "flex h-full w-28 items-center justify-center bg-transparent font-semibold text-slate-700 transition hover:!bg-blue-200 hover:text-slate-800 hover:shadow-sm active:shadow-none group-focus-within:bg-blue-100 group-hover:bg-blue-100",
          !text && "cursor-default text-slate-600",
        )}
        disabled={isPending}
      >
        {isPending ? <LoaderCircleIcon className="animate-spin" /> : "Add"}
      </button>
    </form>
  );
}
