import { Input } from "@/components/ui/input";
import { TodosType } from "@/database/schemas/todos";
import { useState } from "react";
import { TaskType } from "./page";

interface TodoItemProps {
  task: TaskType;
  updateTodo: (
    id: string,
    isCompleted: boolean,
    todo: Partial<TodosType>,
  ) => void;
}

export default function TodoItem({ task, updateTodo }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleIsCompleted = (
    id: string,
    isCompleted: boolean,
    task: TaskType,
  ) => {
    setIsCompleted((prev) => !prev);
    updateTodo(id, isCompleted, task);
  };

  return (
    <div className="items-center justify-center bg-slate-50 px-6 py-3">
      <div className="flex w-full bg-slate-100 px-10 py-5 shadow-md">
        <div className="flex w-full flex-col justify-around">
          <div className="pb-4 text-lg">{task.text}</div>
          <div className="text-sm text-slate-500">{task.author}</div>
        </div>
        <div className="flex flex-col justify-around gap-10">
          <Input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => {
              const isCompleted = e.target.checked;
              setIsCompleted(isCompleted);
              handleIsCompleted(task.id, isCompleted, task);
            }}
          />
        </div>
      </div>
    </div>
  );
}
