"use client";

import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";

const Status = () => {
  const { todos } = useAppSelector((state) => state.todos);

  const [todo, setTodo] = useState([{}]);

  useEffect(() => {
    if (!todos) {
      return;
    }

    const filteredTodo = todos.filter((todo) => !todo.isCompleted);

    if (filteredTodo) {
      setTodo(filteredTodo);
    }
  }, [todos]);

  return (
    <section className="flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br dark:from-black from-white dark:to-gray-500 to-gray-800 text-black dark:text-white rounded select-none">
      <span className="text-6xl">{todo.length}</span>

      <span className="text-center">Tasks Remaining</span>
    </section>
  );
};

export default Status;
