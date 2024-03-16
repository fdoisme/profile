import React from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-900 h-screen relative">
      <div className="w-full absolute top-[10%] left-[50%] -translate-x-2/4">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-white">Let's Connect</h1>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-1xl text-white">
              Feel free to contact me, just to make friends or just to keep in
              touch. I'm very open to connecting and discussing interesting
              opportunities, be it collaborations, projects, or innovative
              ideas. If you're looking for someone who is passionate, creative,
              and ready to make a significant contribution, let's talk!
              Currently, I am actively seeking full-time job opportunities that
              will allow me to grow with and provide the best value to your
              team.
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
