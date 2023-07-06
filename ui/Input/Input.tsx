import React from "react";
import { FC } from "react";
import { classNames } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: FC<InputProps> = ({ className, error, ...props }) => {
  return (
    <input
      className={classNames(
        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
        ...(!error
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
            ]),
        className
      )}
      {...props}
    />
  );
};

export default Input;
