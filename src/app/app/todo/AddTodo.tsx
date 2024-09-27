// "use client";

import { useState } from "react";
// import { TaskType } from "./page";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

interface AddTodoProps {
  addTodo: (text: string, parentTodoId: string | null) => void;
  parentTodoId: string | null;
  handleReply?: (reply: boolean) => void;
}

export default function AddTodo({
  addTodo,
  parentTodoId,
  handleReply,
}: AddTodoProps) {
  const [text, setText] = useState<string>("");

  const handleAddTodo = (text: string) => {
    addTodo && addTodo(text, parentTodoId);
    if (parentTodoId) {
      handleReply && handleReply(false);
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
