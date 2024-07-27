import React from "react";
import Link from "next/link";

export const Button: React.FC = () => {
  return (
    <Link href="/design">
      <div className="flex flex-col pt-4 mt-6 justify-center my-auto text-2xl font-medium leading-9 text-white">
        <button className="w-full max-w-[200px] px-5 py-3 bg-red-800 hover:bg-red-600 rounded-[30px] max-md:px-5">
          Design Now
        </button>
      </div>
    </Link>
  );
};

export default Button;
