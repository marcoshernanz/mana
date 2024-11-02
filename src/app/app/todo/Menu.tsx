import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTodo } from "@/contexts/TodoContext";
import {
  CornerDownRightIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { useEffect } from "react";

interface MenuProps {
  isSubTodo?: boolean;
  id: string;
  deleteTodo?: (id: string) => Promise<void>;
  editTodo?: (id: string) => void;
}

export default function Menu({
  isSubTodo = false,
  id,
  deleteTodo,
  editTodo,
}: MenuProps) {
  const { setReplyingToTodoId } = useTodo();

  return (
    <div className="z-200 relative flex">
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <EllipsisVerticalIcon className="h-5 w-5 text-slate-700 dark:text-slate-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onCloseAutoFocus={(event) => event.preventDefault()}
          className="mx-3 flex w-full max-w-4xl flex-col items-stretch px-1 py-3"
        >
          <DropdownMenuItem className="gap-3 pl-2">
            <PencilIcon className="h-5 w-5 text-slate-600" />
            <Button
              className="p-1 text-slate-600"
              variant={"ghost"}
              onClick={() => editTodo?.(id)}
            >
              Edit
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-3 pl-2">
            <Trash2Icon className="h-5 w-5 text-slate-600" />
            <Button
              className="p-1 text-slate-600"
              variant={"ghost"}
              onClick={() => deleteTodo?.(id)}
            >
              Delete
            </Button>
          </DropdownMenuItem>
          {!isSubTodo ? (
            <DropdownMenuItem className="gap-3 pl-2">
              <CornerDownRightIcon className="h-5 w-5 text-slate-600" />
              <Button
                className="p-1 text-slate-600"
                variant={"ghost"}
                onClick={() => setReplyingToTodoId(id)}
              >
                Add Subtask
              </Button>
            </DropdownMenuItem>
          ) : null}

          <DropdownMenuItem className="pl-2 text-slate-600">
            More
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
