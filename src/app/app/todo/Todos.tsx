"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TaskType } from "./page";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodosType } from "@/database/schemas/todos";

interface WriteTodoProps {
  initialData: TaskType[];
}

export default function Todos({ initialData }: WriteTodoProps) {
  const [todos, setTodos] = useState(initialData);

  const addTodo = async (text: string) => {
    await fetch("/api/todo/postTask", {
      method: "POST",
      body: JSON.stringify({ text, isCompleted: false }),
    });
  };

  const updateTodo = async (
    id: string,
    task: TaskType,
    isCompleted: boolean,
  ) => {
    fetch("/api/todo/updateTodo", {
      method: "PATCH",
      body: JSON.stringify({ id, task, isCompleted }),
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <AddTodo addTodo={addTodo} />
      </div>
      <div className="flex w-full flex-col gap-3 pt-10">
        {todos.map((task, index) => (
          <TodoItem key={index} task={task} updateTodo={() => updateTodo} />
        ))}
      </div>
    </>
  );
}
