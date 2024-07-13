"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavIcons from "./NavIcons";
import Menu from "./Menu";

interface Menu {
  title: string;
  titleHref: string;
  links: { href: string; label: string }[];
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMenuEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMenuLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const menus: Menu[] = [
    {
      title: "Help",
      titleHref: "/about",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        { href: "/faqs", label: "FAQs" },
      ],
    },
  ];

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative z-50">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-white.svg"
            alt="Grip Gear logo"
            width={220}
            height={60}
          />
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full z-50">
        {/* LEFT */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-white.svg"
              alt="Grip Gear logo"
              width={220}
              height={60}
            />
          </Link>
        </div>
        {/* CENTER */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <Link href="/">Design</Link>

          {menus.map((menu) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => handleMenuEnter(menu.title)}
              onMouseLeave={handleMenuLeave}
            >
              {/* Title link */}
              <div className="flex items-center gap-1">
                <Link href={menu.titleHref}>
                  <span>{menu.title}</span>
                </Link>
                <Image
                  src="/down.svg"
                  alt="Dropdown Icon"
                  width={18}
                  height={18}
                  className="mt-1"
                />
              </div>
              {activeDropdown === menu.title && (
                <div
                  className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={() => handleDropdownEnter(menu.title)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {menu.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* RIGHT */}
        <div className="flex items-center gap-8 ml-auto">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
