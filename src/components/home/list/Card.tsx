"use client";

import React from "react";
import CardButton from "./CardButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  cancelEdit,
  deleteTodo,
  fetchCurrentTodo,
  toggleCompleted,
  toggleEdit,
} from "@/store/todos/todoSlice";

interface CardProps {
  title: string;
  description: string;
  datePosted: string;
  isCompleted: boolean;
}

const Card = ({ title, description, datePosted, isCompleted }: CardProps) => {
  const dispatch = useAppDispatch();

  const { isEdited } = useAppSelector((state) => state.todos);

  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(fetchCurrentTodo({ title }));
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ title }));
  };

  const handleTodoComplete = () => {
    dispatch(toggleCompleted({ title }));
  };

  console.log(isCompleted, "curr");

  return (
    <section
      className={`
        ${isCompleted ? "outline-4 outline-green-500" : ""}
        dark:bg-gray-400 bg-black dark:text-black text-white rounded w-60 p-6 flex flex-col gap-6 h-[30vh]
    
    `}
    >
      <h3 className="text-2xl dark:text-gray-800 text-gray-400 font-semibold capitalize">
        {title}
      </h3>

      <section className="flex items-center gap-2 text-lg">
        <input
          type="checkbox"
          className="accent-green-500 cursor-pointer"
          onChange={handleTodoComplete}
          checked={isCompleted}
        />

        <p className={`${isCompleted ? "line-through" : ""}`}>{description}</p>
      </section>

      <span className="text-sm font-medium text-gray-600 -mt-4">
        {datePosted}
      </span>

      <section className="flex gap-4">
        <CardButton
          color="edit"
          text={"Edit"}
          onClick={handleEdit}
          disabled={isEdited || isCompleted}
        />
        <CardButton
          color="delete"
          text={isEdited ? "Cancel" : "Delete"}
          onClick={isEdited ? () => handleCancel() : () => handleDelete()}
          disabled={isCompleted}
        />
      </section>
    </section>
  );
};
export default Card;
