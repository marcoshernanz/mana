"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import TodoTask from "./TodoTask";
import { LoaderCircleIcon } from "lucide-react";
import TodoTaskLoading from "./TodoTaskLoading";
import selectAllTodos from "@/server-actions/todos/selectAllTodos";
import insertTodo from "@/server-actions/todos/insertTodo";
import updateTodo from "@/server-actions/todos/updateTodo";
import deleteTodo from "@/server-actions/todos/deleteTodo";

const availableTags = ["university", "house", "urgent", "work"] as const;

export type AvailableTagsType = typeof availableTags;

export type TaskType = {
  id: string;
  text: string;
  tags: string[];
  isCompleted: boolean;
};

export default function TodoPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [text, setText] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fetchTasks = async () => {
    const todos = await selectAllTodos();
    setTasks(todos);
  };

  const addTask = async () => {
    const newTask = {
      text,
      tags: selectedTags,
    };

    setText("");
    setSelectedTags([]);

    setIsLoading(true);
    await insertTodo(newTask);
    await fetchTasks();
    setIsLoading(false);
  };

  const editTaskIsCompleted = async (id: string, isCompleted: boolean) => {
    setIsLoading(true);
    await updateTodo(id, { isCompleted });
    await fetchTasks();
    setIsLoading(false);
  };

  const deleteTask = async (id: string) => {
    setIsLoading(true);
    await deleteTodo(id);
    await fetchTasks();
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchTasks();
      setIsLoading(false);
    })();
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
                setSelectedTags((tags) => {
                  if (tags.includes(tag)) {
                    return tags.filter((tagToDelete) => tagToDelete !== tag);
                  } else {
                    return [...tags, tag];
                  }
                })
              }
              key={index}
              className={twMerge(
                "rounded-full border px-2 transition duration-300",
                selectedTags.includes(tag) && "bg-black text-white",
              )}
            >
              <span>{selectedTags.includes(tag) ? "-" : "+"}</span>
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {/* {isLoading
          ? // <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
            //   <LoaderCircleIcon className="h-32 w-32 animate-spin text-slate-400" />
            // </div>
            Array(30)
              .fill(0)
              .map((_, index) => <TodoTaskLoading key={index} />)
          : */}
        {tasks.map((task, index) => (
          <TodoTask
            key={index}
            task={task}
            deleteTask={deleteTask}
            initialIsCompleted={task.isCompleted}
            editTaskIsCompleted={editTaskIsCompleted}
            availableTags={availableTags}
          />
        ))}
        {/* } */}
      </div>
    </div>
  );
}

// x = addTask()
