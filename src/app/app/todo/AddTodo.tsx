// "use client";

import { useState } from "react";
// import { TaskType } from "./page";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState<string>("");

  const handleAddTodo = (text: string) => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex gap-2 pt-10">
      <Input
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => handleAddTodo(text)}>Add</Button>
    </div>
  );
}
