import React, { FC } from "react";
import { classNames } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea: FC<TextareaProps> = ({ className, error, value, ...props }) => {
  const textareaProps = {
    ...props,
    className: classNames(
      "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
      !error
        ? [
            "text-gray-900",
            "ring-gray-300",
            "placeholder:text-gray-400",
            "focus:ring-indigo-600",
          ]
        : [
            "text-red-900",
            "ring-red-300",
            "placeholder:text-red-300",
            "focus:ring-red-500",
          ],
      className
    ),
  };

  return value ? (
    <textarea {...textareaProps}>{value}</textarea>
  ) : (
    <textarea {...textareaProps} />
  );
};

export default Textarea;
