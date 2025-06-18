"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMode } from "@/store/theme/themeSlice";
import { NAV_BAR } from "@/util/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiMoon } from "react-icons/bi";
import { CgSun } from "react-icons/cg";

interface Navbar {
  slug: string;
  text: string;
  ref: string;
}

const Nav = () => {
  const pathname = usePathname();

  const { mode } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <section className="dark:bg-gray-400 bg-black dark:text-black font-semibold text-gray-400 p-4 rounded flex justify-between items-center mb-4">
      <span className="text-3xl dark:text-blue-200 tracking-wider [text-shadow:0_0_1vw_black] [font-family:Calibri]">
        MADA
      </span>

      <ul className="flex gap-8">
        {NAV_BAR &&
          NAV_BAR.length > 0 &&
          NAV_BAR.map((item: Navbar) => (
            <Link
              key={item.slug}
              href={item.ref}
              className={`${
                pathname === item.ref
                  ? "dark:text-gray-700 text-blue-400 underline underline-offset-2"
                  : ""
              }`}
            >
              {item.text}
            </Link>
          ))}
      </ul>

      <button
        className="text-2xl dark:bg-black bg-white dark:text-white text-black font-medium p-2 rounded-full cursor-pointer hover:brightness-150 dark:hover:bg-white dark:hover:text-black hover:bg-gray-600 hover:text-white"
        onClick={handleToggle}
      >
        {mode === "light" ? <BiMoon /> : <CgSun />}
      </button>
    </section>
  );
};

export default Nav;
