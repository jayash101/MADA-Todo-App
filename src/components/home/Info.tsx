"use client";

import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <section className="absolute font-medium bottom-8 right-6 flex gap-2 dark:text-white text-black">
      <span>Created by</span>

      <Link
        href={"https://github.com/jayash101"}
        className="dark:text-red-300 text-red-600 hover:underline hover:underline-offset-2"
      >
        Jayash Basnet
      </Link>
    </section>
  );
};

export default Info;
