"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TaskType } from "./page";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodosType } from "@/database/schemas/todos";

export type UpdateTodoType = Omit<
  TodosType,
  "text" | "tags" | "id" | "isCompleted" | "createdAt" | "userId"
> & {
  text?: string;
  tags?: string[];
  id?: string;
  isCompleted?: boolean;
  createdAt?: Date;
  userId?: string;
};

interface WriteTodoProps {
  initialData: TaskType[];
}

export default function Todos({ initialData }: WriteTodoProps) {
  const [todos, setTodos] = useState(initialData);

  const addTodo = async (text: string) => {
    const response = await fetch("/api/todo/postTask", {
      method: "POST",
      body: JSON.stringify({ text, isCompleted: false }),
    });

    const newTodo = await response.json();

    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = async (id: string, task: UpdateTodoType) => {
    const response = await fetch("/api/todo/updateTodo", {
      method: "PATCH",
      body: JSON.stringify({ id, task }),
    });

    if (response.ok) {
      setTodos((prev) =>
        prev.filter((todo) => todo.id !== id || !task.isCompleted),
      );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <AddTodo addTodo={addTodo} />
      </div>
      <div className="flex w-full flex-col gap-3 pt-10">
        {todos.map((task) => (
          <TodoItem key={task.id} task={task} updateTodo={updateTodo} />
        ))}
      </div>
    </>
  );
}
