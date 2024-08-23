"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import TodoTask from "./TodoTask";

export const availableTags: ["university", "house", "urgent", "work"] = [
  "university",
  "house",
  "urgent",
  "work",
];

export type Tags = {
  university: boolean;
  house: boolean;
  urgent: boolean;
  work: boolean;
};

export type Task = {
  text: string;
  tags: Tags;
  isCompleted: boolean;
};

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [text, setText] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tags>({
    university: false,
    house: false,
    urgent: false,
    work: false,
  });

  const addTask = () => {
    const newTask = { text, tags: selectedTags, isCompleted: false };
    setTasks((tasks) => {
      const newTasks = [...tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });

    setText("");
    setSelectedTags({
      university: false,
      house: false,
      urgent: false,
      work: false,
    });
  };

  const deleteTask = (taskIndex: number) => {
    setTasks((tasks) => {
      const newTasks = tasks.filter((_, index) => index !== taskIndex);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const editTaskIsCompleted = (index: number, isCompleted: boolean) => {
    setTasks((tasks) => {
      const newTasks = tasks.map((task, i) =>
        i === index ? { ...task, isCompleted } : task,
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    setTasks(tasks);
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex gap-2">
          <input
            placeholder="Enter your task"
            className="border"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="flex gap-2 text-sm">
          {availableTags.map((tag, index) => (
            <button
              onClick={() =>
                setSelectedTags((tags) => ({
                  ...tags,
                  [tag]: !tags[tag],
                }))
              }
              key={index}
              className={twMerge(
                "rounded-full border px-2 transition duration-300",
                selectedTags[tag] && "bg-black text-white",
              )}
            >
              <span>{selectedTags[tag] ? "-" : "+"}</span>
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <TodoTask
            key={index}
            text={task.text}
            tags={task.tags}
            deleteTask={deleteTask}
            index={index}
            initialIsCompleted={task.isCompleted}
            editTaskIsCompleted={editTaskIsCompleted}
          />
        ))}
      </div>
    </div>
  );
}

// x = addTask()
