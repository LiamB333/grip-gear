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
      <div className="flex justify-between items-center px-4 py-4 text-base leading-6 max-w-6xl mx-auto">
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Left side navigation links (hidden on mobile) */}
          <div className="hidden md:flex gap-6 items-center text-black font-medium mr-12">
            <Link href="/">
              <div className="hover:text-[#C62828]" aria-label="Home">
                Home
              </div>
            </Link>
          </div>
        </div>

        {/* Centered Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo-1200x1200-2.svg"
              alt="Grip Gear logo"
              width={70}
              height={70}
              priority
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          {/* Right side navigation links (hidden on mobile) */}
          <div className="hidden md:flex gap-6 items-center text-black font-medium ml-12">
            <Link href="/design">
              <div className="hover:text-[#C62828]" aria-label="Design">
                Design
              </div>
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden ml-24">
            <FaBars
              className="text-black w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default NavBar;
