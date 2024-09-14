"use client";

import { useState } from "react";
import { TaskType } from "./page";
import { Checkbox } from "@/components/ui/checkbox";

interface TodoTaskProps {
  task: TaskType;
}

export default function TodoTask({ task }: TodoTaskProps) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleIsCompleted = () => {
    const currentIsCompleted = isCompleted;
    setIsCompleted((prev) => !prev);
    // API route
  };

  return (
    <div className="flex w-full items-center gap-6 rounded-lg border bg-white px-6 py-4 shadow-sm">
      <Checkbox
        checked={isCompleted}
        onCheckedChange={() => handleIsCompleted()}
      />
      <div>{task.text}</div>
    </div>
  );
}
