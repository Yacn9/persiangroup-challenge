import type { Icon } from "iconsax-reactjs";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/libs/cn.util";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: Icon;
  error?: string;
}

const Input = ({
  label,
  icon: Icon,
  error,
  className,
  id,
  ...props
}: IInputProps) => {
  const inputId = id ?? `input-${label}`;

  return (
    <div className="w-full space-y-3" dir="rtl">
      <label
        htmlFor={inputId}
        className="block text-right text-xs font-semibold text-black-700 md:text-sm"
      >
        {label}
      </label>

      <div
        className={cn(
          "flex h-10 w-full items-center gap-2 rounded-full border bg-white px-4 transition",
          "border-black-100 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10",
          error && "border-red-500 focus-within:border-red-500",
          className,
        )}
      >
        {Icon ? (
          <Icon
            size={18}
            color="#F0182D"
            variant="Outline"
            className="shrink-0"
          />
        ) : null}

        <input
          id={inputId}
          className="h-full min-w-0 flex-1 bg-transparent text-right text-xs text-black-700 outline-none placeholder:text-black-300"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      </div>

      {error ? (
        <p id={`${inputId}-error`} className="text-right text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
