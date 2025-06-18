"use client";

import Nav from "@/components/navbar/Nav";
import Side from "@/components/sidebar/Side";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { initializeTheme } from "@/store/theme/themeSlice";
import React, { useEffect } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(mode);
  }, [mode]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      dispatch(initializeTheme(JSON.parse(stored)));
    }
  }, [dispatch]);

  return (
    <>
      <Nav />

      <section className="flex gap-4">
        <Side />
        {children}
      </section>
    </>
  );
};

export default ClientLayout;
