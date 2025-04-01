"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/config/menu";
import SearchIcon from "../icons/SearchIcon";

const Header = () => {
  return (
    <>
      {/* <div className="h-10 bg-[#0D9251]">
        <div className="mx-auto px-4 h-full">
          <div className="flex md:justify-between justify-end items-center h-full text-white">
            <div className="hidden md:flex items-center gap-5">
              <Link
                className="flex items-center gap-2"
                href="https://www.facebook.com/share/1945z3YzkM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
                <p>https://www.facebook.com/ifgfulfillment</p>
              </Link>
              <Link
                href="mailto:ifg.contact.services@gmail.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <GmailIcon />
                <p>ifg.contact.services@gmail.com</p>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link className="" href="tel:+84977587736">
                <PhoneIcon />
              </Link>
              <Link
                className=""
                href={
                  "https://www.facebook.com/share/1945z3YzkM/?mibextid=wwXIfr"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>
              <Link
                className=""
                href="https://zalo.me/84977587736"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ZaloIcon width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div> */}

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
