"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useTodo } from "@/contexts/TodoContext";
import { Checkbox } from "@/components/ui/checkbox";

interface AddTodoProps {
  parentTodoId: string | null;
  handleAddSubTodo?: (reply: boolean) => void;
}

export default function AddTodo({
  parentTodoId,
  handleAddSubTodo,
}: AddTodoProps) {
  const [text, setText] = useState<string>("");

  const { setTodos, undoRegisterRef } = useTodo();

  const addTodo = async (parentTodoId: string | null) => {
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

  const handleAddTodo = () => {
    addTodo(parentTodoId);
    if (parentTodoId) {
      handleAddSubTodo && handleAddSubTodo(false);
    }
    setText("");
  };

  return (
    <div className="group flex h-12 w-full items-center justify-between bg-white pl-5 focus-within:bg-blue-50/70 hover:bg-blue-50/70 dark:bg-slate-800 dark:hover:bg-slate-700/70">
      <div className="flex h-full w-full items-center gap-2 py-1 pr-2">
        <button className="h-[1.125rem] w-[1.125rem] flex-shrink-0 rounded-full border border-blue-500 group-hover:border-blue-600"></button>
        <input
          type="text"
          placeholder="Add a task"
          className="h-full w-full bg-transparent px-2 font-normal placeholder:text-sky-800/60 focus:outline-none focus:placeholder:text-slate-400 group-hover:placeholder:text-slate-600 focus:group-hover:placeholder:text-slate-500 dark:placeholder:text-sky-200/60 dark:focus:placeholder:text-slate-600 dark:group-hover:placeholder:text-slate-400 dark:focus:group-hover:placeholder:text-slate-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="h-full bg-transparent px-8 font-semibold text-slate-700 transition hover:text-slate-800 hover:shadow-sm active:shadow-none group-focus-within:bg-blue-100 group-hover:bg-blue-100 dark:text-slate-600 dark:hover:text-slate-800 dark:group-focus-within:bg-blue-200 dark:group-hover:bg-blue-200"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}
