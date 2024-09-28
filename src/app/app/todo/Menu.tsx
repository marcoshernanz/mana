import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  CornerDownRightIcon,
  EllipsisVerticalIcon,
  Trash2Icon,
} from "lucide-react";

interface MenuProps {
  isSubTodo?: boolean;
  handleAddSubTodo?: (reply: boolean) => void;
  className?: string;
  handleDelete?: () => void;
}

export default function Menu({
  isSubTodo = false,
  handleAddSubTodo,
  className,
  handleDelete,
}: MenuProps) {
  const addSubTask = () => {
    handleAddSubTodo && handleAddSubTodo(true);
  };

  return (
    <div className={cn("z-200 relative flex", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <EllipsisVerticalIcon className="h-5 w-5 text-slate-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3 flex w-full max-w-4xl flex-col items-stretch px-1 py-3">
          <DropdownMenuItem className="gap-3 pl-2">
            <Trash2Icon className="h-5 w-5 text-slate-600" />
            <Button
              className="p-1 text-slate-600"
              variant={"ghost"}
              onClick={handleDelete}
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
                onClick={addSubTask}
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
