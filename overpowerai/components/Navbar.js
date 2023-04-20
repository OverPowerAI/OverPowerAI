import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Saira } from "next/font/google";
import logo from "../public/assets/logoop.png";
import { ArrowUpRight } from "react-feather";

const saira = Saira({ weight: "600", subsets: ["latin"] });

function MobileNav({ open, setOpen }) {
  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return (
    <div
      className={`  flex  dark:border-1 mt-24 absolute top-0 right-0 h-screen border-l border-[#FFFFFF26] w-64 bg-transparent backdrop-blur-lg transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col font-bold text-end w-full bg-[#ffffff33] backdrop-blur-[15px]  ">
        <div className=" flex flex-col  items-center text-white  py-4">
          <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
          <div className={saira.className}>
            <span
              className="text-xl font-normal cursor-pointer"
              onClick={() => goToSection("#home")}
            >
              <div className="pb-2 px-6 py-2">Home</div>
            </span>
            <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
            <span
              className="text-xl font-normal cursor-pointer"
              onClick={() => goToSection("#about")}
            >
              <div className="pb-2 px-6 py-2">About</div>
            </span>
            <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
            <span
              className="text-xl font-normal cursor-pointer"
              onClick={() => goToSection("#vision")}
            >
              <div className="pb-2 px-6 py-2">Concept</div>
            </span>
            <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
            <span
              className="text-xl font-normal cursor-pointer"
              onClick={() => goToSection("#token")}
            >
              <div className=" px-6 py-2">Tokenomics</div>
            </span>
            <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
            <span
              className="text-xl font-normal cursor-pointer"
              onClick={() => goToSection("#roadmap")}
            >
              <div className=" px-6 py-2">Roadmap</div>
            </span>
            <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
            <span className="text-xl font-normal cursor-pointer">
              <Link href="https://overpowerai.gitbook.io/overpowerai-whitepaper-v1/overpowerai-op-solutions/overview">
                <div className=" px-6 py-2">Whitepaper</div>
              </Link>
            </span>
            

            <span
              className="text-xl font-normal  "
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            ></span>
            <div className="w-64 h-[1px] bg-[#FFFFFF26]"></div>
            <div className={saira.className}>
                  <Link href="https://app.overpowerai.com/">
                    <div className="w-full flex justify-center pt-4">
                <div className="w-28 h-10 rounded-lg bg-[#36d2cd] text-white flex justify-center items-center text-sm hover:text-lg ease-in-out duration-200">
                  Auditor App
                </div></div></Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <nav className="z-50  fixed min-w-full h-24 flex bg-transparent backdrop-blur-sm  px-4 lg:px-16 py-4 lg:py-6   items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex w-full justify-between ">
      <div className="w-3/12 flex items-center gap-3 ">
        <Image width={50} height={50} src={logo}></Image>
        <div className={saira.className}>
          <div className="text-white text-lg">OverPowerAI</div>
        </div>
      </div>
        <div className={saira.className}>
          <div className="w-9/12  md:w-10/12 flex justify-end md:justify-end items-center pl-8 lg:pl-0">
            <div
              className=" z-50 flex relative w-16 h-8 flex-col justify-between items-center md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full bg-white  rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-3.5" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-white  rounded-lg transition-all duration-300 ease-in-out ${
                  open ? "w-[0px]" : "w-full"
                }`}
              />
              <span
                className={`h-1 w-full bg-white  rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-3.5" : ""
                }`}
              />
            </div>

            <div className="flex w-full justify-between ">
              <div className="hidden md:flex items-center mt-2">
                <span
                  onClick={() => goToSection("#home")}
                  className="cursor-pointer tracking-wide text-sm block py-2 pl-3 mx-1 lg:mx-4 pr-3  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#36d2dc] md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </span>
                <span
                  onClick={() => goToSection("#about")}
                  className="cursor-pointer tracking-wide  text-sm block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#36d2dc]  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </span>

                <span
                  onClick={() => goToSection("#concept")}
                  className="cursor-pointer tracking-wide text-sm block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#36d2dc]  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Concept
                </span>

                <span
                  onClick={() => goToSection("#token")}
                  className="cursor-pointer tracking-wide  text-sm block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#36d2dc] md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Tokenomics
                </span>
                <span
                  onClick={() => goToSection("#roadmap")}
                  className="cursor-pointer tracking-wide  text-sm block py-2 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#36d2dc] md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Roadmap
                </span>
                <span className="cursor-pointer tracking-wide  text-sm block py-2 mt-1 pl-3 mx-1 lg:mx-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#36d2dc] md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <Link href="https://overpowerai.gitbook.io/overpowerai-whitepaper-v1/overpowerai-op-solutions/overview" className="flex">
                    <div className=" ">Docs</div>
                    <ArrowUpRight width={18}></ArrowUpRight>
                  </Link>
                </span>
                <div className={saira.className}>
                  <Link href="https://app.overpowerai.com/">
                <div className="w-28 h-10 rounded-lg bg-[#36d2cd] text-white flex justify-center items-center text-sm hover:text-lg ease-in-out duration-200">
                  Auditor App
                </div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </nav>
  );
}
