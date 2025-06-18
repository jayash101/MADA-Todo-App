"use client";

import React from "react";

const AboutCard = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <section className="grid grid-rows-2 gap-2 border-2 border-cyan-800 bg-gray-300 dark:border-none bg-gradient-to-bl dark:bg-gradient-to-br dark:from-gray-900 dark:to-cyan-600 px-4 py-8 rounded min-w-40 min-h-40">
      <h3 className="font-semibold uppercase text-center dark:text-amber-200 text-cyan-800">
        {heading}
      </h3>

      <p className="text-center text-base dark:ext-white w-3/4 mx-auto">
        {content}
      </p>
    </section>
  );
};

export default AboutCard;
