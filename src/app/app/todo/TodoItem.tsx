import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";
import { EllipsisVerticalIcon } from "lucide-react";
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
  return (
    <div>
      <div className="flex w-full rounded-lg border bg-white px-6 py-4 shadow-inner">
        <div className="flex w-full items-center gap-6">
          <Checkbox
            checked={todo.isCompleted}
            onCheckedChange={() => toggleIsCompleted(todo.id)}
          />
          <div>{todo.text}</div>
        </div>
        <div className="items-start justify-end">
          <Menu id={todo.id} OnDelete={OnDelete} />
        </div>
      </div>
    </div>
  );
}
