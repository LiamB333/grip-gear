import { BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";
import React from "react";
import Image from "next/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
  alt: string; // Added alt text for accessibility
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo?: ImageProps;
  columnLinks?: ColumnLinks[];
  socialMediaLinks?: SocialMediaLinks[];
  footerText?: string;
  footerLinks?: FooterLink[];
};

const Footer4: React.FC<Props> = ({
  logo = {
    url: "/",
    src: "logo-1200x1200-2.svg",
    alt: "Grip Gear logo",
  },
  columnLinks = [
    {
      links: [
        { title: "Design", url: "/design" },
        { title: "About Us", url: "/about" },
        { title: "Contact Us", url: "/contact" },
        { title: "Shipping", url: "#" },
      ],
    },
  ],
  socialMediaLinks = [
    {
      url: "https://www.instagram.com/gripgear__uk/",
      icon: <BiLogoInstagram className="size-6" />,
      alt: "Grip Gear Instagram", // Added alt text
    },
    {
      url: "https://www.tiktok.com/@ne.stud",
      icon: <BiLogoTiktok className="size-6" />,
      alt: "Grip Gear TikTok", // Added alt text
    },
  ],
  footerText = "© 2024 Grip Gear. All rights reserved.",
  footerLinks = [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
  ],
}) => {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a
            href={logo.url}
            aria-label="Grip Gear Logo"
            className="lg:justify-self-start"
          >
            <Image
              src={logo.src}
              alt={logo.alt || "Grip Gear logo"}
              width={100}
              height={100}
              className="inline-block"
            />
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={index}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="font-semibold">
                  <a
                    href={link.url}
                    className="focus-visible:outline-none"
                    aria-label={link.title}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="focus-visible:outline-none"
                aria-label={link.alt} // Added aria-label for social media links
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-3 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-3 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="focus-visible:outline-none"
                  aria-label={link.title} // Added aria-label for footer links
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
