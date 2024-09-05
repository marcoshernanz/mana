import { cn } from "@/lib/utils";

interface AlertDialogProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AlertDialog({ className, children }: AlertDialogProps) {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center rounded-lg border shadow-2xl",
      )}
    >
      <div className="fixed h-screen w-screen bg-black/80 backdrop-blur-[2px]"></div>
      <div
        className={cn(
          "relative flex max-w-2xl flex-col rounded-md border border-slate-100 bg-slate-50 p-6 shadow-sm",
          className,
        )}
      >
        {/* <div className="font-bold">{title}</div>
        <div>{Message}</div>
        <div className="flex w-full items-end justify-end gap-2">
          <div>
            <Button text="Cancel" type="tonal" size="small" />
          </div>
          <div>
            <Button text="Continue" type="filled" size="small" />
          </div>
        </div> */}
        {children}
      </div>
    </div>
  );
}
