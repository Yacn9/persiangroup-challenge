import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  wrapperClassName?: string;
}

const Textarea = ({
  label,
  error,
  id,
  className,
  wrapperClassName,
  ...props
}: TextareaProps) => {
  const textareaId = id ?? `ta-${label}`;
  const errorId = `${textareaId}-error`;

  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={textareaId}
        className="block text-right text-xs font-semibold text-black-700 md:text-sm"
      >
        {label}
      </label>

      <textarea
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={[
          "mt-3 min-h-36 w-full resize-none rounded-xl border border-black-100 bg-white px-4 py-4 text-right text-sm text-black-700 outline-none transition",
          "placeholder:text-black-300 focus:border-primary focus:ring-2 focus:ring-primary/10",
          "aria-invalid:border-red-500",
          className ?? "",
        ].join(" ")}
        {...props}
      />

      {error ? (
        <p id={errorId} className="mt-2 text-right text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Textarea;
