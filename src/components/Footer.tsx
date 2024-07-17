import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-gray-100 text-sm mt-24">
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start text-center lg:text-left gap-8">
        <div className="flex flex-col items-center lg:items-center">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image
              src="/logo-removed-bg.svg"
              alt="Grip Gear logo"
              width={180}
              height={50}
            />
          </Link>
          <p className="text-sm leading-none text-gray-800 dark:text-black mt-2">
            © {currentYear} Grip Gear
          </p>
          <p className="text-sm leading-none text-gray-800 dark:text-black mt-1">
            All rights reserved
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-center">
          <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-black mb-4">
            Company
          </h2>
          <Link
            href="/"
            className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-2 text-gray-800 dark:text-black cursor-pointer"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-2 text-gray-800 dark:text-black cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-2 text-gray-800 dark:text-black cursor-pointer"
          >
            Pricing
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-center">
          <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-black mb-4">
            Help
          </h2>
          <Link
            href="/list?cat=all-products"
            className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-2 text-gray-800 dark:text-black cursor-pointer"
          >
            Legal policy
          </Link>
          <Link
            href="/"
            className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-2 text-gray-800 dark:text-black cursor-pointer"
          >
            Status policy
          </Link>
          <Link
            href="/"
            className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-2 text-gray-800 dark:text-black cursor-pointer"
          >
            Privacy policy
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-center">
          <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-black mb-4">
            Socials
          </h2>
          <div className="flex gap-5">
            <Link
              href="https://www.instagram.com/gripgear__uk/"
              className="flex items-center"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@ne.stud"
              className="flex items-center"
            >
              <Image src="/tik-tok.svg" alt="Tik Tok" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
