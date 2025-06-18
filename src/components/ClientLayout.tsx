"use client";

import Nav from "@/components/navbar/Nav";
import Side from "@/components/sidebar/Side";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { initializeTheme } from "@/store/theme/themeSlice";
import React, { useEffect, useState } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme);
  const [mounted, setMounted] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("light", "dark");

      document.documentElement.classList.add(mode);
    }
  }, [mode, mounted]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      dispatch(initializeTheme(JSON.parse(stored)));
      setMounted(true);
    }
  }, [dispatch]);

  if (!mounted) return null;

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
