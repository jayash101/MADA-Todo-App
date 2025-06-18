import AboutCard from "@/components/home/about/AboutCard";
import { FEATURES } from "@/util/blog";
import React from "react";

interface FeatureProps {
  id: number;
  title: string;
  description: string;
}

const About = () => {
  return (
    <section className="px-10 py-6 text-lg flex flex-col items-center gap-16 w-full text-black dark:text-white">
      {/* Starting Content */}
      <article className="flex flex-col gap-6 text-center">
        <h1 className="text-5xl font-semibold">About This App</h1>

        <p>
          Welcome to our{" "}
          <span className="font-medium dark:text-blue-400 text-blue-600">
            MADA - Todo List Application
          </span>{" "}
          - a clean, simple and powerful productivity tool designed to help you
          stay organized and focused.
        </p>
      </article>

      <hr className="border w-full border-gray-500" />

      {/* Features Content */}
      <article className="flex flex-col items-center gap-16">
        <h2 className="text-4xl font-medium text-center">Core Features</h2>

        <section className="grid grid-cols-4 gap-6 px-16">
          {FEATURES &&
            FEATURES.length > 0 &&
            FEATURES.map((feature: FeatureProps) => (
              <AboutCard
                key={feature.id}
                heading={feature.title}
                content={feature.description}
              />
            ))}
        </section>
      </article>

      <hr className="border w-full border-gray-500" />

      {/* Main Content */}
      <article className="flex flex-col items-center gap-8 mb-4">
        <h2 className="text-4xl font-medium text-center">
          Why Use This Todo App?
        </h2>

        <p className="w-3/4 text-center">
          Simple, intuitive, and user-friendly — this app is perfect for
          individuals who want to boost productivity without the clutter.
          Whether you&apos;re a student, professional, or just someone who likes
          staying organized, our Todo App helps you get things done effectively.
          <br />
          Start organizing your day the smart way. Happy tasking!
        </p>
      </article>
    </section>
  );
};

export default About;
