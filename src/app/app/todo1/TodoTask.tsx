"use client";

import { useState } from "react";
import { availableTags, Tags } from "./page";

interface TodoTaskProps {
  text: string;
  tags: Tags;
  index: number;
  deleteTask: (index: number) => void;

  initialIsCompleted: boolean;
  editTaskIsCompleted: (index: number, isCompleted: boolean) => void;
}

export default function TodoTask({
  text,
  tags,
  index,
  deleteTask,

  initialIsCompleted,
  editTaskIsCompleted,
}: TodoTaskProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(initialIsCompleted);

  return (
    <div className="bg-slate-50 px-6 py-3">
      <div className="flex items-center justify-between">
        <div>{text}</div>
        <div className="flex gap-2">
          {availableTags.map(
            (tag, index) =>
              tags[tag] && (
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
              editTaskIsCompleted(index, isCompleted);
            }}
          />
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
