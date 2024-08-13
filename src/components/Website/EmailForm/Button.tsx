import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
  return (
    <div className="flex justify-start mt-6">
      <button
        type={type}
        className="px-6 py-3 bg-[#C62828] hover:bg-[#911d1d] text-white rounded-[30px] cursor-pointer w-48 max-md:px-5" // Fixed width
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
