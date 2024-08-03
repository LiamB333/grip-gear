import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center my-auto text-2xl font-medium leading-9 text-white">
      <Link href="/design">
        <button className="px-6 py-3 bg-[#C62828] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#911d1d] duration-300 rounded-[30px] cursor-pointer max-md:px-5">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
