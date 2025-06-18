"use client";
import Action from "@/components/home/action/Action";
import List from "@/components/home/list/List";
import Info from "@/components/home/Info";
import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { todos, activeTab } = useAppSelector((state) => state.todos);
  const [data, setData] = useState([{}]);

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

  return (
    <section className="px-4 pt-2 flex flex-col gap-8">
      <h1 className="text-4xl font-bold uppercase tracking-wide">All Tasks</h1>

      <section className="flex gap-16">
        <Action />

        <List data={data} />
      </section>

      <Info />
    </section>
  );
};

export default Home;
