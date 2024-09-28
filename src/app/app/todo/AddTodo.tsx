// "use client";

import { useState } from "react";
// import { TaskType } from "./page";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useTodo } from "@/contexts/TodoContext";

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

  const handleAddTodo = (text: string) => {
    addTodo && addTodo(text, parentTodoId);
    if (parentTodoId) {
      handleAddSubTodo && handleAddSubTodo(false);
    }
    setText("");
  };

  return (
    <div className="flex gap-2 pt-6">
      <Input
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => handleAddTodo(text)}>Add</Button>
    </div>
  );
}
