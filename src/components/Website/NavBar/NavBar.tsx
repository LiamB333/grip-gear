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
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="flex justify-center items-center px-16 py-4 text-base leading-6 max-md:px-5">
        {/* Left side navigation links */}
        <div className="flex gap-6 items-center text-black font-medium mr-16">
          <Link href="/">
            <div className="hover:text-[#C62828]" aria-label="Design">
              Home
            </div>
          </Link>
        </div>

        {/* Centered Logo */}
        <Link href="/">
          <Image
            src="/logo-1200x1200-2.svg"
            alt="Grip Gear logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Right side navigation links */}
        <div className="flex gap-6 items-center text-black font-medium ml-16">
        <Link href="/design">
            <div className="hover:text-[#C62828]" aria-label="Design">
              Design
            </div>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden ml-4">
          <FaBars
            className="text-white w-6 h-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default NavBar;