"use client";

import React from "react";

interface Input {
  title?: string;
  placeholder: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  isDuplicate?: boolean;
  disabled?: boolean;
}

const Input = ({
  title,
  placeholder,
  name,
  onChange,
  value,
  isDuplicate,
  disabled = false,
}: Input) => {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-2xl font-medium">{title}</h3>

      <input
        type="text"
        placeholder={placeholder}
        className={`border-none outline-2 rounded indent-2 py-2 pr-2 dark:placeholder:text-gray-600 dark:disabled:bg-gray-600 disabled:bg-gray-600
          ${
            isDuplicate
              ? "outline-red-600"
              : "dark:focus:outline-gray-800 focus:outline-gray-300"
          }
          `}
        name={name}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </section>
  );
};

export default Input;
