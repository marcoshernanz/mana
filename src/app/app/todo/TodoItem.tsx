import { Input } from "@/components/ui/input";
import { TodosType } from "@/database/schemas/todos";
import { useState } from "react";
import { TaskType } from "./page";
import { Checkbox } from "@/components/ui/checkbox";
import { UpdateTodoType } from "./Todos";

interface TodoItemProps {
  task: TaskType;
  updateTodo: (id: string, task: UpdateTodoType) => void;
}

export default function TodoItem({ task, updateTodo }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const handleIsCompleted = (id: string) => {
    const newIsCompleted = !isCompleted;
    setIsCompleted(newIsCompleted);
    updateTodo(id, { isCompleted: newIsCompleted });
  };

  return (
    <div>
      <div className="flex w-full items-center gap-6 rounded-lg border bg-white px-6 py-4 shadow-inner">
        <Checkbox
          checked={isCompleted}
          onCheckedChange={() => handleIsCompleted(task.id)}
        />
        <div>{task.text}</div>
        {/* <div className="text-sm text-slate-500">{task.author}</div> */}
      </div>
    </div>
  );
}
