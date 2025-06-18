"use client";

import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { saveTodos, updateTodo } from "@/store/todos/todoSlice";

const Action = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    datePosted: new Date().toLocaleDateString(),
    isCompleted: false,
  });

  // to handle duplicate titles
  const [isDuplicate, setIsDuplicate] = useState(false);

  const dispatch = useAppDispatch();

  const { todos, currentTodo, isEdited } = useAppSelector(
    (state) => state.todos
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { title, description, datePosted, isCompleted } = formData;

    const filterTodo = todos.find((todo) => todo.title === title);

    if (filterTodo) {
      if (!isEdited) {
        setIsDuplicate(true);
        return;
      }
    }

    setFormData({
      title: "",
      description: "",
      datePosted: new Date().toLocaleDateString(),
      isCompleted: false,
    });

    if (isEdited) {
      dispatch(
        updateTodo({
          title: title,
          newTodo: { description, datePosted },
        })
      );
    } else {
      dispatch(saveTodos({ title, description, datePosted, isCompleted }));
      setIsDuplicate(false);
    }
  };

  useEffect(() => {
    if (isEdited && currentTodo) {
      setFormData({
        title: currentTodo.title as string,
        description: currentTodo.description as string,
        datePosted:
          (currentTodo.datePosted as string) ||
          (new Date().toLocaleDateString() as string),
        isCompleted: false,
      });
    }
  }, [isEdited, currentTodo]);

  useEffect(() => {
    if (!isEdited) {
      setFormData({
        title: "",
        description: "",
        datePosted: new Date().toLocaleDateString(),
        isCompleted: false,
      });
    }
  }, [isEdited]);

  return (
    <section className="lg:w-100 lg:h-80 p-6 dark:bg-gray-400 bg-black rounded dark:text-gray-800 text-white flex flex-col gap-8">
      <Input
        title="Title"
        placeholder="Task Title"
        name="title"
        onChange={handleInputChange}
        value={formData.title}
        disabled={isEdited}
        isDuplicate={isDuplicate}
      />

      <Input
        title="Description"
        placeholder="Enter task description..."
        name="description"
        onChange={handleInputChange}
        value={formData.description}
      />

      <button
        className="cursor-pointer font-medium dark:bg-black bg-white dark:text-white text-black border border-black py-3 rounded hover:border-none hover:brightness-125 hover:bg-green-800 hover:text-white hover:font-normal disabled:brightness-50 dark:disabled:hover:bg-black disabled:hover:bg-white dark:disabled:hover:text-white disabled:hover:text-black disabled:font-medium disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={!formData.title || !formData.description}
      >
        {isEdited ? "Edit Task" : "Add Task"}
      </button>
    </section>
  );
};

export default Action;
