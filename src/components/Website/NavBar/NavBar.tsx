"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex flex-col justify-center px-16 py-4 text-base leading-6 bg-white border-0 border-black border-solid max-md:px-5">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <Link href="/">
            <Image
              src="/logo-removed-bg.svg"
              alt="Grip Gear logo"
              width={180}
              height={60}
              priority
            />
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:flex gap-5 text-black">
              <Link href="/design">
                <div aria-label="Design">Design</div>
              </Link>
              <Link href="/about">
                <div aria-label="About">About</div>
              </Link>
              <Link href="/contact">
                <div aria-label="Help">Help</div>
              </Link>
            </div>
            <Link href="/design">
              <div aria-label="Design Now" className="hidden lg:block px-5 py-3 font-medium text-white whitespace-nowrap bg-[#C62828] hover:bg-[#911d1d] rounded-[30px] cursor-pointer ml-10">
                Get Started
              </div>
            </Link>
            <div className="lg:hidden">
              <FaBars
                className="text-black w-6 h-6 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default NavBar;
