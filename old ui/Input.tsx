import { cn } from "@/lib/utils";

const sizes = {
  large: "w-96 pt-2 pb-2",
  medium: "w-72 pt-1.5 pb-1.5",
  small: "w-52 pt-1 pb-1",
};

interface InputPorps {
  label?: string;
  placeholder?: string;
  // type?: string;
  // id?: string;
  size: "large" | "medium" | "small";
  className?: string;
}

export default function Input({
  label,
  placeholder,
  // type,
  // id,
  size,
  className,
}: InputPorps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1.5",
        sizes[size],
        className,
      )}
    >
      <label
        className="text-sm font-semibold text-slate-950 dark:text-slate-50"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="rounded-md border border-orange-200/65 bg-white px-3.5 py-2 text-sm placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
        placeholder={placeholder}
        type={label}
        id={label}
      />
    </div>
  );
}
