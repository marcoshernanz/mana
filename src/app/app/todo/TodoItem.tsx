import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";
import { EllipsisVerticalIcon, StarIcon } from "lucide-react";
import Menu from "./Menu";
import { useState } from "react";

interface TodoItemProps {
  todo: TodosType;
  toggleIsCompleted: (id: string) => Promise<void>;
  OnDelete: (id: string) => void;
}

export default function TodoItem({
  todo,
  toggleIsCompleted,
  OnDelete,
}: TodoItemProps) {
  const [stared, setStared] = useState(false);

  const handleStar = () => {
    setStared((prev) => !prev);
  };

  return (
    <div>
      <div className="flex w-full rounded-lg bg-white px-6 py-4 hover:bg-slate-50">
        <div className="flex w-full items-center gap-6">
          <Checkbox
            checked={todo.isCompleted}
            onCheckedChange={() => toggleIsCompleted(todo.id)}
          />
          {todo.isCompleted ? (
            <div className="line-through">{todo.text}</div>
          ) : (
            <div>{todo.text}</div>
          )}
        </div>
        <div className="flex items-start justify-end gap-2">
          <Menu id={todo.id} OnDelete={OnDelete} />
          <button onClick={handleStar}>
            {stared ? (
              <StarIcon className="h-5 w-5 fill-yellow-300 text-yellow-400" />
            ) : (
              <StarIcon className="h-5 w-5 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
