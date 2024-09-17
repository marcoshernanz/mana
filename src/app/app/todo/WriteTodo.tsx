"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface WriteTodoProps {
  // addTask: (text: string) => Promise<void>;
}

export default function WriteTodo() {
  const [text, setText] = useState<string>("");

  const addTask = async () => {
    setText("O");
    const FetchedTasks = await fetch("/api/todo/PostTask", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
  };

  return (
    <div className="flex gap-2 pt-20">
      <Input
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={addTask}>Add</Button>
    </div>
  );
}
