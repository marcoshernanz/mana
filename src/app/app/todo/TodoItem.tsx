import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";
import { CheckIcon, StarIcon, Trash2Icon } from "lucide-react";
import Menu from "./Menu";
import { useState } from "react";
import AddTodo from "./AddTodo";
import { formattedTodosType, useTodo } from "@/contexts/TodoContext";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: formattedTodosType;
  isSubTodo?: boolean;
  isReplying?: boolean;
}

export default function TodoItem({
  todo,
  isSubTodo = false,
  isReplying = false,
}: TodoItemProps) {
  const [stared, setStared] = useState(todo.isStared);
  const [replying, setReplying] = useState(isReplying);

  const { setTodos, undoRegisterRef } = useTodo();

  const { toast } = useToast();

  const toggleIsCompleted = async ({
    isUndo = false,
  }: {
    isUndo?: boolean;
  } = {}) => {
    const response = await fetch("/api/todo/updateTodo", {
      method: "PATCH",
      body: JSON.stringify({
        id: todo.id,
        isCompleted: !todo.isCompleted,
        undefined,
      }),
    });

    if (response.ok) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === todo.id
            ? { ...item, isCompleted: !item.isCompleted }
            : item,
        ),
      );
    }

    if (isUndo === false) {
      undoRegisterRef.current.push({ action: "toggleIsCompleted", todo });
      toast({
        title: "Todo updated",
        action: (
          <ToastAction
            onClick={async () => {
              undoRegisterRef.current.pop();
              await toggleIsCompleted({ isUndo: true });
              toast({
                title: "Action undone",
              });
            }}
            altText="Undo"
          >
            Undo
          </ToastAction>
        ),
      });
    }
  };

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
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const handleStar = () => {
    update(todo.id, undefined, !stared);
    setStared((prev) => !prev);
  };

  const handleAddSubTodo = (reply: boolean) => {
    setReplying(reply);
    // isReplying = true;
  };

  return (
    <div className="flex w-full flex-col">
      <div className="group flex h-9 w-full items-center justify-between pl-5 pr-5 focus-within:bg-blue-50/70 hover:bg-blue-50/70 dark:focus-within:bg-slate-600 dark:hover:bg-slate-700">
        <div
          className={cn(
            "flex h-full w-full items-center gap-2 py-1 pr-2",
            isSubTodo && "pl-9",
          )}
        >
          {!todo.isCompleted ? (
            <button
              className="group/checkbox flex h-[1.125rem] w-[1.125rem] flex-shrink-0 items-center justify-center rounded-full border border-blue-500 p-0.5 transition hover:bg-white dark:hover:bg-slate-700"
              onClick={() => toggleIsCompleted()}
            >
              <CheckIcon className="text-blue-600 opacity-0 transition-opacity group-hover/checkbox:opacity-100" />
            </button>
          ) : (
            <CheckIcon className="group/checkbox flex h-[1.125rem] w-[1.125rem] flex-shrink-0 items-center justify-center rounded-full border border-blue-500 p-0.5 text-blue-600 transition hover:bg-white dark:hover:bg-slate-600" />
          )}

          <span className="w-full bg-transparent px-2 font-normal text-slate-700 focus:outline-none group-hover:text-slate-800 dark:text-slate-100 dark:group-hover:text-slate-50">
            {todo.text}
          </span>
        </div>

        <div className="flex items-center gap-0.5">
          {todo.isCompleted ? (
            <button
              className="rounded-full p-1 text-slate-500 transition hover:bg-blue-100 hover:text-slate-700 dark:hover:bg-slate-500"
              onClick={() => handleDelete(todo.id)}
            >
              <Trash2Icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            </button>
          ) : (
            <div className="rounded-full p-1 text-slate-500 transition hover:bg-blue-100 hover:text-slate-700 dark:text-slate-100 dark:hover:bg-slate-500 dark:hover:text-slate-50">
              <Menu
                isSubTodo={isSubTodo}
                handleAddSubTodo={handleAddSubTodo}
                handleDelete={() => handleDelete(todo.id)}
              />
            </div>
          )}
          <button
            onClick={() => handleStar()}
            className="rounded-full p-1 text-slate-500 transition hover:bg-blue-100 hover:text-slate-700 dark:hover:bg-slate-500"
          >
            <StarIcon
              className={cn(
                "h-5 w-5 text-slate-500 dark:text-slate-400",
                stared &&
                  "fill-blue-500 text-blue-500 dark:fill-blue-400 dark:text-blue-500",
              )}
            />
          </button>
        </div>
      </div>
      <div className="pl-5">
        {replying && (
          <AddTodo parentTodoId={todo.id} handleAddSubTodo={handleAddSubTodo} />
        )}
      </div>
    </div>
  );
}
