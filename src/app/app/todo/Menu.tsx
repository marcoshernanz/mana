import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CornerDownRightIcon,
  EllipsisVerticalIcon,
  Trash2Icon,
} from "lucide-react";
import AddTodo from "./AddTodo";
import { useState } from "react";

interface MenuProps {
  id: string;
  OnDelete: (id: string) => void;
  handleReply?: (reply: boolean) => void;
}

export default function Menu({ id, OnDelete, handleReply }: MenuProps) {
  const handleDelete = async () => {
    const response = await fetch("/api/todo/deleteTodo", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      OnDelete(id);
    }
  };

  const addSubTask = () => {
    handleReply && handleReply(true);
  };

  return (
    <div className="z-200 relative flex">
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
          {handleReply ? (
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
