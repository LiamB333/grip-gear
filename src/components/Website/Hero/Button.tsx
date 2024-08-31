import React from "react";
import Link from "next/link";

export const Button: React.FC = () => {
  return (
    <div className="flex mt-6 z-40">
      <Link href="/design">
        <button className="px-5 py-3 bg-[#C62828] hover:bg-[#911d1d] text-white text-2xl font-medium leading-9 rounded-[30px] cursor-pointer max-w-[400px]">
          Design Now
        </button>
      </Link>
    </div>
  );
};

export default Button;
