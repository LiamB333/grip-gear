import Link from "next/link";
import { FaTimes } from "react-icons/fa";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <FaTimes
          className="text-black w-6 h-6 cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col items-center gap-6 mt-10">
        <Link href="/">
          <div aria-label="Home" onClick={onClose}>
            Home
          </div>
        </Link>
        <Link href="/design">
          <div aria-label="Design" onClick={onClose}>
            Design
          </div>
        </Link>
        <Link href="/about">
          <div aria-label="About Us" onClick={onClose}>
            About Us
          </div>
        </Link>
        <Link href="/contact">
          <div aria-label="Contact Us" onClick={onClose}>
            Contact Us
          </div>
        </Link>
        <Link href="/design">
          <div
            aria-label="Design Now"
            className="px-5 py-3 font-medium text-white whitespace-nowrap bg-[#C62828] border hover:bg-[#911d1d] rounded-[30px] cursor-pointer"
            onClick={onClose}
          >
            Get Started
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
