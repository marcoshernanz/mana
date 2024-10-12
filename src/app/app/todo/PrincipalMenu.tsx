import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrderByType, useTodo } from "@/contexts/TodoContext";
import { EllipsisVerticalIcon } from "lucide-react";

export default function PrincipalMenu() {
  const { orderBy, setOrderBy } = useTodo();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm active:shadow-none dark:text-slate-200 dark:hover:bg-slate-700">
        <EllipsisVerticalIcon className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative w-52" align="end">
        <DropdownMenuLabel>Order By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={orderBy}
          onValueChange={(value) => setOrderBy(value as OrderByType)}
        >
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
