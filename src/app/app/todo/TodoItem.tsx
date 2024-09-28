import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";
import { EllipsisVerticalIcon, StarIcon, Trash2Icon } from "lucide-react";
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
  const [stared, setStared] = useState(todo.isStared);
  const [replying, setReplying] = useState(isReplying);

  const update = async (
    id: string,
    isCompleted?: boolean,
    isStared?: boolean,
  ) => {
    await fetch("/api/todo/updateTodo", {
      method: "PATCH",
      body: JSON.stringify({
        id,
        isCompleted,
        isStared,
      }),
    });
  };

  const handleDelete = async (id: string) => {
    const response = await fetch("/api/todo/deleteTodo", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      OnDelete(id);
    }
  };

  const handleStar = () => {
    update(todo.id, undefined, !stared);
    setStared((prev) => !prev);
  };

  const handleAddSubTodo = (reply: boolean) => {
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
            {replyTodos(todo.id).length > 0 ? (
              <div className="mt-6 flex flex-col rounded-md border border-slate-100">
                {replyTodos(todo.id).map((todos) => (
                  <SubTodos
                    key={todos.id}
                    todo={todos}
                    toggleIsCompleted={toggleIsCompleted}
                    OnDelete={OnDelete}
                    handleStar={update}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex items-start justify-end">
            <div className="flex items-center justify-center gap-2">
              {todo.isCompleted ? (
                <button
                  className="p-1 text-slate-600"
                  onClick={() => handleDelete(todo.id)}
                >
                  <Trash2Icon className="h-5 w-5 text-slate-600" />
                </button>
              ) : (
                <Menu
                  OnDelete={OnDelete}
                  handleAddSubTodo={handleAddSubTodo}
                  handleDelete={() => handleDelete(todo.id)}
                />
              )}
              <button onClick={() => handleStar()}>
                {stared ? (
                  <StarIcon className="h-5 w-5 fill-yellow-300 text-yellow-400" />
                ) : (
                  <StarIcon className="h-5 w-5 text-slate-600" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-xl">
          {replying
            ? (console.log(todo.id),
              (
                <AddTodo
                  parentTodoId={todo.id}
                  addTodo={addSubTask}
                  handleAddSubTodo={handleAddSubTodo}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
