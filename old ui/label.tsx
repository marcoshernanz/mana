import { cn } from "@/lib/utils";

interface LabelProps {
  id: string;
  text: string;
  className?: string;
}

export default function Label({ id, text, className }: LabelProps) {
  return (
    <div className={cn(className)}>
      <input
        type="checkbox"
        id={id}
        value=""
        className="bg-red-900-300"
      ></input>
      <label htmlFor={id} className="bg-red-900-300">
        {text}
      </label>
    </div>
  );
}
