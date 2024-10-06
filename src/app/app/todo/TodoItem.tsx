import { Checkbox } from "@/components/ui/checkbox";
import { TodosType } from "@/database/schemas/todos";
import { StarIcon, Trash2Icon } from "lucide-react";
import Menu from "./Menu";
import { useState } from "react";
import AddTodo from "./AddTodo";
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
  isReplying,
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
  };

  return (
    <div>
      <div
        className={cn(
          isSubTodo
            ? "flex w-full flex-col rounded-lg bg-slate-50 px-6 py-4 hover:bg-slate-100/70"
            : "flex w-full flex-col rounded-lg bg-white px-6 py-4 hover:bg-slate-50",
        )}
      >
        <div className="flex w-full">
          <div className="flex w-full flex-col">
            <div className="flex w-full gap-6">
              <Checkbox
                checked={todo.isCompleted}
                onCheckedChange={() => toggleIsCompleted()}
              />
              {todo.isCompleted ? (
                <div className="line-through">{todo.text}</div>
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
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
                  isSubTodo={isSubTodo}
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
        {!isSubTodo && (
          <div className="max-w-xl">
            {replying
              ? (console.log(todo.id),
                (
                  <AddTodo
                    parentTodoId={todo.id}
                    handleAddSubTodo={handleAddSubTodo}
                  />
                ))
              : null}
          </div>
        )}
      </div>
    </div>
  );
}
