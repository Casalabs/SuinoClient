import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faB, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" px-2 sm:px-4 py-3 fixed w-full z-10 flex bg-[rgba(0,0,0,0.5);]">
      <div className="container flex flex-wrap items-center justify-between mx-auto opacity-100 z-60">
        <Link href="#Home" className="flex items-center opacity-100 z-60">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            className="opacity-100 z-60"
            alt=" Logo"
          />
          <span className="self-center text-[30px] font-bold text-white px-2 opacity-100 z-60">
            Suino
          </span>
        </Link>
        <div className="flex">
          <div className="flex md:order-2">
            <div className="2xl:hidden lg:ml-5 lg:min-w-0 lg:justify-end lg:hidden md:hidden sm:flex opacity-100 z-60">
              <Link
                href="game"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 bg-yellow-600 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-yellow-800"
              >
                Launch app
              </Link>
              <div className="w-11/12 flex justify-end items-center">
                <div
                  className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-white text-2xl px-3 py-1.5"
                  />
                  <span
                    className={`h-1 w-full bg-black rounded-lg group-hover:text-black cursor-pointer transform transition duration-300 ease-in-out ${
                      open ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`h-1 w-full bg-black rounded-lg group-hover:text-black cursor-pointer transform transition duration-300 ease-in-out ${
                      open ? "w-0" : "w-full"
                    }`}
                  ></span>
                  <span
                    className={`h-1 w-full bg-black rounded-lg group-hover:text-black cursor-pointer transform transition duration-300 ease-in-out ${
                      open ? "rotate-45 -translate-y-2.5" : ""
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        {" "}
        <div className="flex md:order-2">
          <div className="lg:flex lg:ml-5 lg:min-w-0 lg:justify-end">
            <Link
              href="game"
              className="flex justify-center items-center rounded-lg  w-[120px] px-4 py-1  text-m font-semibold leading-6 bg-yellow-600 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-yellow-800"
            >
              Launch app
            </Link>
          </div>
          <div onClick={() => alert("Comming Soon!")}>
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-white text-[30px] px-3 py-1 cursor-pointer hover:text-gray-600"
            />
          </div>
          <div onClick={() => alert("Comming Soon!")}>
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white  text-[30px] px-3 py-1 cursor-pointer hover:text-gray-600"
            />{" "}
          </div>
          <div onClick={() => alert("Comming Soon!")}>
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white  text-[30px] px-3  py-1 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
        <ul className="flex flex-col p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li>
            <Link
              href="#Home"
              className="block py-4 pl-3 pr-4 text-white hover:text-gray-600 md:p-0 text-[18px]"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#Story"
              className="block py-4 pl-3 pr-4 text-white  hover:text-gray-600   md:p-0  text-[18px] "
            >
              Story
            </Link>
          </li>
          <li>
            <Link
              href="#Roadmap"
              className="block py-4 pl-3 pr-4 text-white  hover:text-gray-600   md:p-0 text-[18px] "
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              href="#Seven"
              className="block py-4 pl-3 pr-4 text-white  hover:text-gray-600   md:p-0 text-[18px] "
            >
              Commandments
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="block py-4 pl-3 pr-4 text-white  hover:text-gray-600   md:p-0 text-[18px] "
            >
              FAQ
            </Link>
          </li>{" "}
          <li>
            <Link
              href="#faq"
              className="block py-2 pl-3 pr-4 text-white  hover:text-gray-600   md:p-0 text-[18px] "
            >
              Docs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
