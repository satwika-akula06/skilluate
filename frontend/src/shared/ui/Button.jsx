import { cn } from "@/shared/lib/utils";

export default function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}) {
  const variants = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white",

    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",

    outline: "border border-slate-300 hover:bg-slate-100",

    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800",

    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      className={cn(
        "h-11 rounded-xl px-5 font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
