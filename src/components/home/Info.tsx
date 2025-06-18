"use client";

import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <section className="lg:absolute mx-auto font-medium bottom-8 right-6 flex gap-2 dark:text-white text-black">
      <span className="mb-8 lg:mb-0">Created by</span>

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
