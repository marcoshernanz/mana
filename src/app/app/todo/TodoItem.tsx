import { TodosType } from "@/database/schemas/todos";
import { CheckIcon, StarIcon, Trash2Icon } from "lucide-react";
import Menu from "./Menu";
import { useState } from "react";
import { useTodo } from "@/contexts/TodoContext";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: TodosType;
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
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const { setTodos, undoRegisterRef } = useTodo();

  const { toast } = useToast();

  const toggleIsCompleted = async ({
    isUndo = false,
  }: {
    isUndo?: boolean;
  } = {}) => {
    const response = await fetch("/api/todos/updateTodo", {
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
    text?: string,
    isCompleted?: boolean,
    isStared?: boolean,
  ) => {
    await fetch("/api/todos/updateTodo", {
      method: "PATCH",
      body: JSON.stringify({
        id,
        text,
        isCompleted,
        isStared,
      }),
    });
  };

  const handleDelete = async (id: string) => {
    const response = await fetch("/api/todos/deleteTodo", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const handleStar = () => {
    update(todo.id, undefined, undefined, !stared);
    setStared((prev) => !prev);
  };

  const handleAddSubTodo = (reply: boolean) => {
    setReplying(reply);
  };

  const handleEditTodo = (id: string) => {
    setIsEditing(true);
    console.log("id", id);
  };

  const handleSaveEdit = async () => {
    console.log("text", text);
    await update(todo.id, text);
    setTodos((prev) =>
      prev.map((item) => (item.id === todo.id ? { ...item, text } : item)),
    );
    setIsEditing(false);
  };

  return (
    <div className="group flex h-9 w-full items-center justify-between bg-white pl-5 pr-5 focus-within:bg-blue-50/70 hover:bg-blue-50/70">
      <div
        className={cn(
          "flex h-full w-full items-center gap-2 py-1 pr-2",
          isSubTodo && "pl-9",
        )}
      >
        <button
          className="group/checkbox flex h-[1.125rem] w-[1.125rem] flex-shrink-0 items-center justify-center rounded-full border border-blue-500 p-0.5 transition hover:bg-white"
          onClick={() => toggleIsCompleted()}
        >
          <CheckIcon className="text-blue-600 opacity-0 transition-opacity group-hover/checkbox:opacity-100" />
        </button>

        {isEditing ? (
          <input
            type="text"
            value={text}
            className="w-full bg-transparent px-2 font-normal text-slate-700 focus:outline-none"
            onChange={(e) => setText(e.target.value)}
          ></input>
        ) : (
          <span
            className="w-full bg-transparent px-2 font-normal text-slate-700 focus:outline-none group-hover:text-slate-800"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-0.5">
        {todo.isCompleted ? (
          <button
            className="rounded-full p-1 text-slate-500 transition hover:bg-blue-100 hover:text-slate-700"
            onClick={() => handleDelete(todo.id)}
          >
            <Trash2Icon className="h-5 w-5 text-slate-600" />
          </button>
        ) : isEditing ? null : (
          <div className="rounded-full p-1 text-slate-500 transition hover:bg-blue-100 hover:text-slate-700">
            <Menu
              isSubTodo={isSubTodo}
              id={todo.id}
              deleteTodo={() => handleDelete(todo.id)}
              editTodo={() => handleEditTodo(todo.id)}
            />
          </div>
        )}
        <button
          onClick={() => handleStar()}
          className="rounded-full p-1 text-slate-500 transition hover:bg-blue-100 hover:text-slate-700"
        >
          {isEditing ? (
            <button
              className="flex h-full w-28 items-center justify-center rounded-full bg-transparent pt-1 font-semibold text-slate-700 transition hover:text-slate-800 active:shadow-none group-hover:bg-blue-100"
              onClick={handleSaveEdit}
            >
              Save{" "}
            </button>
          ) : (
            <StarIcon
              className={cn(
                "h-5 w-5 text-slate-500",
                stared && "fill-blue-500 text-blue-500",
              )}
            />
          )}
        </button>
      </div>
      {/* {replying && (
        <AddTodo parentTodoId={todo.id} handleAddSubTodo={handleAddSubTodo} />
      )} */}
    </div>
  );
}
