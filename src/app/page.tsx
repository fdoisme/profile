// "use client";
import { Metadata } from "next";
import { AboutSection } from "./components/about-section";
import { ProjectSection } from "./components/project-section";
import { ContactSection } from "./components/contact-section";
import Navbar from "./components/navbar";
// Ganti title dan favicon
export const metadata: Metadata = {
  title: "Fernando",
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
