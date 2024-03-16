import Image, { StaticImageData } from "next/image";
import thumbnail from "../../../public/pp.png";
import logo from "../../../public/logo.png";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  acak_1,
  acak_2,
  acak_3,
  acak_4,
  donation_1,
  donation_2,
  donation_3,
  donation_4,
  donation_5,
  disneyCloning_1,
  disneyCloning_2,
  choreChart_1,
  choreChart_2,
  choreChart_3,
  choreChart_4,
} from "../../../public/index";

export const testimonials = {
  acak: [
    { name: "acak1", data: acak_1 },
    { name: "acak2", data: acak_2 },
    { name: "acak3", data: acak_3 },
    { name: "acak4", data: acak_4 },
  ],
  donation: [
    { name: "donation_1", data: donation_1 },
    { name: "donation_2", data: donation_2 },
    { name: "donation_3", data: donation_3 },
    { name: "donation_4", data: donation_4 },
    { name: "donation_5", data: donation_5 },
  ],
  disneyCloning: [
    { name: "disneyCloning_1", data: disneyCloning_1 },
    { name: "disneyCloning_2", data: disneyCloning_2 },
  ],
  choreChart: [
    { name: "choreChart_1", data: choreChart_1 },
    { name: "choreChart_2", data: choreChart_2 },
    { name: "choreChart_3", data: choreChart_3 },
    { name: "choreChart_4", data: choreChart_4 },
  ],
};

export const content = [
  {
    title: "Acak-Nama-Negara",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    link: "https://github.com/fdoisme/Acak-Nama-Negara",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <InfiniteMovingCards
          items={testimonials.acak}
          direction="left"
          speed="normal"
        />
        {/* Acak */}
      </div>
    ),
  },
  {
    content: <div className="h-full w-full"></div>,
  },
  {
    title: "Donations",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <InfiniteMovingCards
          items={testimonials.donation}
          direction="left"
          speed="normal"
        />
        {/* Donations */}
      </div>
    ),
  },
  {
    content: <div className="h-full w-full"></div>,
  },
  {
    title: "Disney Cloning",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <InfiniteMovingCards
          items={testimonials.disneyCloning}
          direction="left"
          speed="normal"
        />
        {/* Disney Cloning */}
      </div>
    ),
  },
  {
    content: <div className="h-full w-full"></div>,
  },
  {
    title: "Chore Chart",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center">
        <InfiniteMovingCards
          items={testimonials.choreChart}
          direction="left"
          speed="normal"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(360%_+_4px)]"
          container="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 border-slate-700 px-8 py-6 md:w-[140px] h-[300px] object-cover"
        />
      </div>
    ),
  },
];

export const people = [
  {
    id: 1,
    name: "Fernando",
    designation: "Linkedin",
    link: "https://www.linkedin.com/in/fernando-sianipar/",
    reactIcon: (
      <a
        href="https://www.linkedin.com/in/fernando-sianipar/"
        target="_blank"
        className="w-full h-full flex justify-center items-center bg-gray-700 rounded-full"
      >
        <FaLinkedin size={50} color="white" />
      </a>
    ),
  },
  {
    id: 2,
    name: "Fernando",
    designation: "Github",
    link: "https://github.com/fdoisme",
    reactIcon: (
      <a
        href="https://github.com/fdoisme"
        target="_blank"
        className="w-full h-full flex justify-center items-center bg-gray-700 rounded-full"
      >
        <FaGithub size={50} color="white" />
      </a>
    ),
  },
  {
    id: 3,
    name: "Fernando",
    designation: "Whatsapp",
    reactIcon: (
      <a
        href="https://github.com/fdoisme"
        target="_blank"
        className="w-full h-full flex justify-center items-center bg-gray-700 rounded-full"
      >
        <FaWhatsapp size={50} color="white" />
      </a>
    ),
  },
];

export const blogContent = {
  slug: "fernando-profile",
  author: "Fernando",
  image: thumbnail,
  authorAvatar: logo,
};

export const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: StaticImageData;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
