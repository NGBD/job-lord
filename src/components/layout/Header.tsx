"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/config/menu";
import FacebookIcon from "../icons/FacebookIcon";
import GmailIcon from "../icons/GmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SearchIcon from "../icons/SearchIcon";

const Header = () => {
  return (
    <>
      <div className="h-10 bg-[#0D9251]">
        <div className="mx-auto px-4 h-full">
          <div className="flex md:justify-between justify-end items-center h-full text-white">
            <div className="hidden md:flex items-center gap-5">
              <div className="flex items-center gap-2">
                <FacebookIcon />
                <p>https://www.facebook.com/ifgfulfillment</p>
              </div>
              <div className="flex items-center gap-2">
                <GmailIcon />
                <p>ifg.contact.services@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link className="" href={"/"}>
                <PhoneIcon />
              </Link>
              <Link className="" href={"/"}>
                <FacebookIcon />
              </Link>
              <Link className="" href={"/"}>
                <YoutubeIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            <Link href="/" className="flex items-center overflow-hidden">
              <Image
                src="/images/main-logo.svg"
                alt="IFG Fulfillment Global"
                width={150}
                height={150}
                className="object-contain w-[100px] h-[100px]"
              />
            </Link>

            <nav className="hidden lg:flex justify-between items-center xl:w-[50%] gap-10">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm whitespace-nowrap"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-5">
              <SearchIcon />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
