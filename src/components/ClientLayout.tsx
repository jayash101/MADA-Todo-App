"use client";

import Nav from "@/components/navbar/Nav";
import Side from "@/components/sidebar/Side";
import { useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(mode);
  }, [mode]);

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
