"use client";

import { useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 py-10">
      <button
        onClick={function () {
          setTasks(function (tasks) {
            // tasks.push("new task") -> NO - modifies tasks
            return tasks.concat("new task"); // Concat creates a new array
          });
        }}
      >
        Add new task
      </button>
      {tasks.map(function (task, i) {
        return (
          <div key={i} className="h-24 w-full bg-red-600">
            {task}
          </div>
        );
      })}
    </div>
  );
}
