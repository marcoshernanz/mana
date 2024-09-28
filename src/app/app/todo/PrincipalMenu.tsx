import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { useState } from "react";

export default function PrincipalMenu() {
  const [orderBy, setOrderBy] = useState("My Order");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm active:shadow-none">
        <EllipsisVerticalIcon className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-52" align="end">
        <DropdownMenuLabel>Order By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={orderBy} onValueChange={setOrderBy}>
          <DropdownMenuRadioItem value="myOrder">
            My Order
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="starred">Starred</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
