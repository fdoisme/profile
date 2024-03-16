import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { content } from "./propsVariable";

export const ProjectSection = () => {
  return (
    <section id="project" className="bg-slate-900 h-screen relative">
      <h1 className="font-bold text-4xl text-white absolute top-[10%] left-[50%] -translate-x-2/4">
        My Project
      </h1>
      <StickyScroll content={content} />
    </section>
  );
};
