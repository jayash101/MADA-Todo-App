"use client";
import Action from "@/components/home/action/Action";
import List from "@/components/home/list/List";
import Info from "@/components/home/Info";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import { initializeTodos } from "@/store/todos/todoSlice";

const Home = () => {
  const { todos, activeTab } = useAppSelector((state) => state.todos);
  const [data, setData] = useState([{}]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!todos) {
      return;
    }

    if (activeTab === "all") {
      setData(todos);
    }

    if (activeTab === "progress") {
      const progressData = todos.filter((item) => !item.isCompleted);

      if (progressData) setData(progressData);
    }

    if (activeTab === "completed") {
      const completeData = todos.filter((item) => item.isCompleted);

      if (completeData) setData(completeData);
    }
  }, [todos, activeTab]);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      dispatch(initializeTodos(JSON.parse(stored)));
    }
  }, [dispatch]);

  return (
    <section className="px-4 pt-2 flex flex-col gap-8">
      <h1 className="text-4xl font-bold uppercase tracking-wide">
        {activeTab === "all" && "All Tasks"}
        {activeTab === "progress" && "In Progress"}
        {activeTab === "completed" && "Completed"}
      </h1>

      <section className="flex flex-col lg:flex-row gap-16">
        <Action />

        <List data={data} />
      </section>

      <Info />
    </section>
  );
};

export default Home;
