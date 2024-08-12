"use client";

import NewTask from "@/components/ui/newtask";
import { useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState<string[]>(["hola"]);
  const TasksNames = [
    "Gess how to put single quote in react",
    "Finish TodoPage",
    "Add more",
  ];

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 pb-10">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-3 py-10">
          <button
            onClick={function () {
              // tasks
              setTasks(function (prevTasks) {
                // tasks.push("new task") -> NO - modifies tasks
                // return tasks.concat("new task"); // Concat creates a new array
                const nextTask = TasksNames[prevTasks.length];
                if (nextTask) {
                  return prevTasks.concat(nextTask);
                }
                return prevTasks;
              });
            }}
          >
            Add new task
          </button>
          {tasks.map(function (task, i) {
            return (
              <div key={i} className="h-full w-full">
                <NewTask title={`Task ${i}`} message={task}>
                  {/* <span>Hola</span> */}
                </NewTask>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
