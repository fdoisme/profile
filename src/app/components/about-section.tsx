import Image from "next/image";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { TitleComponent, blogContent, people } from "./propsVariable";
import { FollowerPointerCard } from "./ui/following-pointer";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="absolute flex flex-row items-center justify-center gap-[5%]">
        <div className="w-[30%] flex flex-col gap-10">
          <p className="text-white font-bold text-[20px] text-justify">
            Career Shifter with a strong interest in programming, especially in
            web and mobile application development. Seeing the potential of
            digitalization during COVID-19 opened my eyes to how the web or
            mobile apps can change culture and increase efficiency. Realizing
            that the world of IT has a big influence in moving industry is my
            motivation to change careers.
          </p>
          <div className="flex justify-center">
            <AnimatedTooltip iniProps={people} />
            {/* <FaLinkedin size={50} color="white" />
            <FaGithub size={50} color="white" />
            <FaWhatsapp size={50} color="white" /> */}
          </div>
        </div>

        {/* Card Profile */}
        <a href="https://www.google.com/" target="_blank">
          <div className="w-70">
            <FollowerPointerCard
              title={
                <TitleComponent
                  title={blogContent.author}
                  avatar={blogContent.authorAvatar}
                />
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div
                  className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative
               h-60"
                >
                  <Image
                    src={blogContent.image}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className={`group-hover:scale-95 group-hover:rounded-2xl transform object-top transition duration-200`}
                  />
                </div>
                <div className=" p-4">
                  <h2 className="font-bold p-1 text-lg text-zinc-700 text-center">
                    👋 Hello, I’m Fernando
                  </h2>
                  <p className="font-normal px-5 text-sm text-zinc-500">
                    🌍 I'm based in Indonesia
                    <br /> 🧠 I’m currently learning Go Lang
                  </p>
                  <div className="flex flex-row justify-center items-center pt-4">
                    <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                      Download CV
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </a>
      </div>
    </section>
  );
};
