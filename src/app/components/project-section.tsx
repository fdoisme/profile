import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { content } from "./propsVariable";

export const ProjectSection = () => {
  return (
    <section id="project" className="bg-white h-screen">
      <StickyScroll content={content} />
    </section>
  );
};
