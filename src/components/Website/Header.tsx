"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="w-full sticky-nav">
      <div className="flex items-center justify-between max-w-5xl p-4 md:p-3 mx-auto">
        {/* Logo */}
        <Link href="/" aria-label="Go to Grip Gear homepage">
          <Image
            src="/logo-white.svg"
            alt="Grip Gear Logo"
            width={160}
            height={160}
            className="hover:opacity-80 transition duration-300"
            priority={true}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex mr-8 space-x-8">
          <Link
            href="/design"
            className="text-black transition duration-300 hover:text-[#CB3A3A]"
            aria-label="Go to Grip Gear designer tool"
          >
            Designer
          </Link>
          <Link
            href="/blog"
            className="text-black transition duration-300 hover:text-[#CB3A3A]"
            aria-label="Read our blog for more information on grip socks"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-black transition duration-300 hover:text-[#CB3A3A]"
            aria-label="Contact us with any questions"
          >
            Contact
          </Link>
        </nav>

        {/* Get Started Button */}
        <Link href="/design">
          <button
            className="hidden md:block px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-[#CB3A3A] transition duration-300"
            aria-label="Get started with Grip Gear designer tool"
          >
            Get Started
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black outline-none"
          type="button"
          aria-label="Toggle Menu"
          aria-expanded={navbarOpen ? "true" : "false"}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            role="img"
            aria-hidden="true"
          >
            <line x1="3" y1="6" y2="6" x2="21" />
            <line x1="3" y1="12" y2="12" x2="21" />
            <line x1="3" y1="18" y2="18" x2="21" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {navbarOpen && (
          <nav className="md:hidden flex flex-col mt-4 space-y-2">
            <Link
              href="/design"
              className="text-black transition duration-300 hover:text-[#CB3A3A]"
              aria-label="Go to Grip Gear designer tool"
            >
              Designer
            </Link>
            <Link
              href="/blog"
              className="text-black transition duration-300 hover:text-[#CB3A3A]"
              aria-label="Read our blog for more information on grip socks"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-black transition duration-300 hover:text-[#CB3A3A]"
              aria-label="Contact us with any questions"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
