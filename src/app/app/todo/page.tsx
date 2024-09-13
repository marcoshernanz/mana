"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TodoTask from "./TodoTask";
import { LoaderCircleIcon } from "lucide-react";
import TodoTaskLoading from "./TodoTaskLoading";
import updateTodo from "@/database/queries/todos/updateTodo";
import deleteTodo from "@/database/queries/todos/deleteTodo";
import { cn } from "@/lib/utils";
import insertTodo from "@/server-actions/todo/insertTodo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import SideBar from "../SideBar";
import selectBlockTodos from "@/server-actions/todo/selectBlockTodos";

const availableTags = ["university", "house", "urgent", "work"] as const;
const numTodosPerBlock = 20;

export type AvailableTagsType = typeof availableTags;

export type TaskType = {
  id: string;
  text: string;
  tags: string[];
  isCompleted: boolean;
  author?: string;
};

export default function TodoPage() {
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [isFirstTimeLoadingTasks, setIsFirstTimeLoadingTasks] = useState(true);

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [text, setText] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const numBlocksRef = useRef(0);
  const addTask = async () => {
    const newTask = {
      text,
      tags: selectedTags,
    };

    setText("");
    setSelectedTags([]);

    await insertTodo({ text: newTask.text, tags: newTask.tags });
    await fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await deleteTodo(id);
    await fetchTasks();
  };
  const editTaskIsCompleted = async (id: string, isCompleted: boolean) => {
    await updateTodo(id, { isCompleted });
    await fetchTasks();
  };

  const fetchTasks = useCallback(async () => {
    const newTaskBlock = await selectBlockTodos({
      numTodosPerBlock,
      blockNumber: numBlocksRef.current,
      orderBy: "date",
      descending: true,
    });

    setTasks((currTasks) => {
      const filteredTasks = currTasks.filter(
        (currTasks) =>
          !newTaskBlock.some((newTask) => newTask.id === currTasks.id),
      );
      return [...filteredTasks, ...newTaskBlock];
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (
        currentScroll >=
        (documentHeight * numBlocksRef.current) / (numBlocksRef.current + 1)
      ) {
        if (
          !isLoadingTasks &&
          !isFirstTimeLoadingTasks &&
          tasks.length === numTodosPerBlock * numBlocksRef.current
        ) {
          setIsLoadingTasks(true);
          numBlocksRef.current += 1;
          fetchTasks();
          setIsLoadingTasks(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchTasks, isLoadingTasks, tasks, isFirstTimeLoadingTasks]);

  useEffect(() => {
    if (!isFirstTimeLoadingTasks || numBlocksRef.current !== 0) return;

    setIsLoadingTasks(true);
    numBlocksRef.current += 1;
    fetchTasks();
    setIsLoadingTasks(false);
    setIsFirstTimeLoadingTasks(false);
  }, [fetchTasks, isFirstTimeLoadingTasks]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-1 justify-center bg-slate-50">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-20">
          <div className="flex flex-col items-center justify-center">
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
                        return tags.filter(
                          (tagToDelete) => tagToDelete !== tag,
                        );
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
                editTaskIsCompleted={editTaskIsCompleted}
                availableTags={availableTags}
              />
            ))}
            {/* } */}
          </div>
        </div>
      </div>
    </div>
  );
}
