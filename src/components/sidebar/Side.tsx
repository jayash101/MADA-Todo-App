"use client";

import React from "react";
import Profile from "./Profile";
import Menu from "./Menu";
import Status from "./Status";
import { usePathname } from "next/navigation";

const Side = () => {
  const pathname = usePathname();

  return (
    <section
      className={`flex flex-col w-full lg:w-fit justify-center gap-8 lg:gap-16 dark:bg-gray-400 bg-black dark:text-black text-gray-400 rounded p-8 h-fit lg:max-h-166 lg:h-166 font-semibold
      ${pathname === "/about" ? "hidden" : ""}
    `}
    >
      <Profile />

      <Menu />

      <Status />
    </section>
  );
};

export default Side;
