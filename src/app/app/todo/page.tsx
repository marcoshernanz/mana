"use client";

import { useEffect, useState } from "react";
import TodoTask from "./TodoTask";
import { LoaderCircleIcon } from "lucide-react";
import TodoTaskLoading from "./TodoTaskLoading";
// import selectAllTodos from "@/database/queries/todos/selectAllTodos";
import updateTodo from "@/database/queries/todos/updateTodo";
import deleteTodo from "@/database/queries/todos/deleteTodo";
import { cn } from "@/lib/utils";
import insertTodo from "@/server-actions/todo/insertTodo";
import selectAllTodo from "@/server-actions/todo/selectAllTodo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

const availableTags = ["university", "house", "urgent", "work"] as const;

export type AvailableTagsType = typeof availableTags;

export type TaskType = {
  id: string;
  text: string;
  tags: string[];
  isCompleted: boolean;
  author?: string;
};

export default function TodoPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [text, setText] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fetchTasks = async () => {
    const todos = await selectAllTodo();
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
    await insertTodo({ text: newTask.text, tags: newTask.tags });
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
    <div className="flex flex-col items-center justify-center px-10">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center">
        <div className="flex gap-2 pt-20">
          <Input
            placeholder="Enter your task"
            className="border"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={addTask} className="bg-slate-800">
            Add
          </Button>
        </div>
        <div className="flex gap-5 text-sm">
          {availableTags.map((tag, index) => (
            <Button
              variant="default"
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
              className={cn(
                "mt-6 border bg-slate-400 p-2 transition duration-300",
                selectedTags.includes(tag) && "bg-slate-800 text-slate-50",
              )}
            >
              <span>{selectedTags.includes(tag) ? "-" : "+"}</span>
              {tag}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 pt-10">
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
