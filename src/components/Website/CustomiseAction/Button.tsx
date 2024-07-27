import React from 'react';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center my-auto text-2xl font-medium leading-9 text-white">
      <button className="px-6 py-3 bg-red-800 hover:bg-red-600 rounded-[30px] max-md:px-5">
        {text}
      </button>
    </div>
  );
};

export default Button;