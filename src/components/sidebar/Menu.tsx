"use client";

import { useAppDispatch } from "@/store/hooks";
import { updateActiveTab } from "@/store/todos/todoSlice";
import { MENU } from "@/util/constants";
import React, { useState } from "react";

interface Menu {
  slug: string;
  text: string;
}

const Menu = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const dispatch = useAppDispatch();

  const handleCurrentTab = (id: string) => {
    setCurrentTab(id);
    dispatch(updateActiveTab(id));
  };

  return (
    <ul className="flex flex-col gap-4">
      {MENU &&
        MENU.length > 0 &&
        MENU.map((item: Menu) => (
          <button
            key={item.slug}
            className={`${
              currentTab === item.slug
                ? "dark:bg-gray-600 bg-slate-600 text-white"
                : ""
            } cursor-pointer dark:bg-black bg-gray-100 dark:text-white text-black hover:brightness-125 py-3 rounded`}
            onClick={() => handleCurrentTab(item.slug)}
          >
            {item.text}
          </button>
        ))}
    </ul>
  );
};

export default Menu;
