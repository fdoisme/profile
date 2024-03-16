"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import Image from "next/image";
import NavLink from "./navlink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border-b border-[#575a6d] top-0 left-0 right-0 z-30 bg-[#121212]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-white text-5xl font-semibold">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-sm"
          />
        </Link>
        <div className="block mobile-menu md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <FaBars color="white" size={30} />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <FaWindowClose color="white" size={30} />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {navOpen ? <DropdownMenu links={navLinks} /> : null} */}
    </nav>
  );
};

export default Navbar;
