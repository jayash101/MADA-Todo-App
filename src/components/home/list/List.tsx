"use client";

import React from "react";
import Card from "./Card";

const List = ({ data }: { data: Record<string, string | boolean>[] }) => {
  return (
    <section
      className={
        "p-2 grid grid-cols-3 gap-8 lg:max-h-[60vh] overflow-x-hidden overflow-y-auto"
      }
    >
      {data &&
        data.length > 0 &&
        data.map((item: Record<string, string | boolean>, index: number) => (
          <Card
            key={index}
            title={item.title as string}
            description={item.description as string}
            datePosted={item.datePosted as string}
            isCompleted={item.isCompleted as boolean}
          />
        ))}
    </section>
  );
};

export default List;
