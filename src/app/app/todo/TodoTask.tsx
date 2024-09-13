"use client";

import { useState } from "react";
import { type TaskType, type AvailableTagsType } from "./page";
import { Button } from "@/components/ui/Button";

interface TodoTaskProps {
  task: TaskType;
  deleteTask: (id: string) => void;
  editTaskIsCompleted: (id: string, isCompleted: boolean) => void;
  availableTags: AvailableTagsType;
}

export default function TodoTask({
  task,
  deleteTask,
  editTaskIsCompleted,
  availableTags,
}: TodoTaskProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(task.isCompleted);

  return (
    <div className="items-center justify-center bg-slate-50 px-6 py-3">
      <div className="flex w-full bg-slate-100 px-10 py-5 shadow-md">
        <div className="flex w-full flex-col justify-around">
          <div className="pb-4 text-lg">{task.text}</div>
          <div className="flex gap-2">
            {availableTags.map(
              (tag, index) =>
                task.tags.includes(tag) && (
                  <span
                    key={index}
                    className="mb-10 rounded-md border bg-slate-200 px-2 text-slate-600"
                  >
                    {tag}
                  </span>
                ),
            )}
          </div>
          <div className="text-sm text-slate-500">{task.author}</div>
        </div>
        <div className="flex flex-col justify-around gap-10">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => {
              const isCompleted = e.target.checked;
              setIsCompleted(isCompleted);
              editTaskIsCompleted(task.id, isCompleted);
            }}
          />
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
        </div>
      </div>
    </div>
  );
}
