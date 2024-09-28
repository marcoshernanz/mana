import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { EllipsisVerticalIcon, Trash2Icon } from "lucide-react";

interface MenuProps {
  OnDeleteAll: () => void;
  className?: string;
  orderBy: (order: string) => void;
}

export default function PrincipalMenu({
  OnDeleteAll,
  className,
  orderBy,
}: MenuProps) {
  // const handleDeleteAll = async () => {
  //   const response = await fetch("/api/todo/deleteAllTodos", {
  //     method: "DELETE",
  //   });

  //   if (response.ok) {
  //     OnDelete();
  //   }
  // };

  // const orders = ["My Order", "Date", "Stared"];

  return (
    <div className={cn("z-200 relative flex", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <EllipsisVerticalIcon className="h-5 w-5 text-slate-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3 flex w-full max-w-4xl flex-col items-stretch px-1 py-3">
          <DropdownMenuLabel>Order By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* {orders.map((order, index) => (
            <> */}
          <DropdownMenuItem className="gap-3 pl-2">
            <Button
              className="p-1 text-slate-600"
              variant={"ghost"}
              onClick={() => orderBy("My Order")}
            >
              {/* {order} */}
              My Order
            </Button>
          </DropdownMenuItem>
          {/* </> */}
          {/* ))} */}
          <DropdownMenuItem className="gap-3 pl-2">
            <Button
              className="p-1 text-slate-600"
              variant={"ghost"}
              onClick={() => orderBy("Date")}
            >
              {/* {order} */}
              Date
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-3 pl-2">
            <Button
              className="p-1 text-slate-600"
              variant={"ghost"}
              onClick={() => orderBy("Stared")}
            >
              {/* {order} */}
              Stared
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-3 pl-2">
            <Trash2Icon className="h-5 w-5 text-slate-600" />
            <Button className="p-1 text-slate-600" variant={"ghost"}>
              Delete All
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
