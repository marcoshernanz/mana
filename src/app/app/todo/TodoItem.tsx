import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";

interface TodoItemProps {
  todo: TodosType;
  toggleIsCompleted: (id: string) => Promise<void>;
}

export default function TodoItem({ todo, toggleIsCompleted }: TodoItemProps) {
  return (
    <div>
      <div className="flex w-full items-center gap-6 rounded-lg border bg-white px-6 py-4 shadow-inner">
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={() => toggleIsCompleted(todo.id)}
        />
        <div>{todo.text}</div>
      </div>
    </div>
  );
}
