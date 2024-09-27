import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";
import { EllipsisVerticalIcon, StarIcon } from "lucide-react";
import Menu from "./Menu";
import { useState } from "react";
import SubTodos from "./SubTodos";
import AddTodo from "./AddTodo";

interface TodoItemProps {
  todo: TodosType;
  toggleIsCompleted: (id: string) => Promise<void>;
  OnDelete: (id: string) => void;
  isReplying?: boolean;
  addSubTask: (text: string, parentTodoId: string | null) => void;
  replyTodos: (parentTodoId: string | null) => TodosType[];
}

export default function TodoItem({
  todo,
  toggleIsCompleted,
  OnDelete,
  isReplying,
  addSubTask,
  replyTodos,
}: TodoItemProps) {
  const [stared, setStared] = useState(false);
  const [replying, setReplying] = useState(isReplying);

  const handleStar = () => {
    setStared((prev) => !prev);
  };

  const handleReply = (reply: boolean) => {
    setReplying(reply);
  };

  return (
    <div>
      <div className="flex w-full flex-col rounded-lg bg-white px-6 py-4 hover:bg-slate-50">
        <div className="flex w-full">
          <div className="flex w-full flex-col">
            <div className="flex w-full gap-6">
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
            {replyTodos(todo.id) ? (
              <div className="mt-6 flex flex-col rounded-md border border-slate-100">
                {replyTodos(todo.id).map((todos) => (
                  <SubTodos
                    key={todos.id}
                    todo={todos}
                    toggleIsCompleted={toggleIsCompleted}
                    OnDelete={OnDelete}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex items-start justify-end gap-2">
            <Menu id={todo.id} OnDelete={OnDelete} handleReply={handleReply} />
            <button onClick={handleStar}>
              {stared ? (
                <StarIcon className="h-5 w-5 fill-yellow-300 text-yellow-400" />
              ) : (
                <StarIcon className="h-5 w-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
        <div className="max-w-xl">
          {replying
            ? (console.log(todo.id),
              (
                <AddTodo
                  parentTodoId={todo.id}
                  addTodo={addSubTask}
                  handleReply={handleReply}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
