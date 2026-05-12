"use client";

import { TickSquare } from "iconsax-reactjs";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/libs/cn.util";

interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const Checkbox = ({
  label,
  checked,
  onCheckedChange,
  className,
  id,
  ...props
}: ICheckboxProps) => {
  const inputId = id ?? `checkbox-${label}`;

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "flex h-9 w-full cursor-pointer items-center gap-3 rounded-full border px-4 text-right transition",
        "border-black-100 bg-white hover:border-black-200",
        checked && "border-primary bg-primary/5",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-md border transition",
          checked ? "border-primary bg-primary" : "border-black-100 bg-gray-50",
        )}
        aria-hidden="true"
      >
        <TickSquare
          size={16}
          color={checked ? "#FFFFFF" : "#D4D4D8"}
          variant={checked ? "Bold" : "Outline"}
        />
      </span>
      <span className="text-xs font-semibold text-black-600">{label}</span>

      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={(event) => onCheckedChange(event.target.checked)}
        className="sr-only"
        {...props}
      />
    </label>
  );
};

export default Checkbox;
