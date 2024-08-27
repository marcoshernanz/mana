"use client";

import { useState } from "react";
import { type TaskType, type AvailableTagsType } from "./page";

interface TodoTaskProps {
  task: TaskType;
  deleteTask: (id: string) => void;

  initialIsCompleted: boolean;
  editTaskIsCompleted: (id: string, isCompleted: boolean) => void;

  availableTags: AvailableTagsType;
}

export default function TodoTask({
  task,
  deleteTask,

  initialIsCompleted,
  editTaskIsCompleted,

  availableTags,
}: TodoTaskProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(initialIsCompleted);

  return (
    <div className="bg-slate-50 px-6 py-3">
      <div className="flex items-center justify-between">
        <div>{task.text}</div>
        <div className="flex gap-2">
          {availableTags.map(
            (tag, index) =>
              task.tags.includes(tag) && (
                <span key={index} className="rounded-full border px-2">
                  {tag}
                </span>
              ),
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => {
              const isCompleted = e.target.checked;
              setIsCompleted(isCompleted);
              editTaskIsCompleted(task.id, isCompleted);
            }}
          />
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
