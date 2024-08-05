import React from "react";

interface FooterProps {
  price: string;
  quantity: number;
  onContinue: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Footer: React.FC<FooterProps> = ({ price, quantity, onContinue }) => {
  return (
    <div className="w-full fixed bottom-0 left-0 bg-white text-sm z-50 flex flex-row h-auto md:h-16 shadow-xl p-4">
      <div className="flex items-center justify-center w-1/2 text-xl font-semibold text-black">
        <span className="text-green-600">{price}</span>
        <span className="ml-2">for {quantity}</span>
      </div>
      <button
        className="bg-black text-white hover:bg-[#911d1d] font-semibold h-12 md:h-full transition-colors duration-300 ease-in-out w-1/2 flex items-center justify-center text-lg"
        onClick={onContinue}
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
      >
        Continue
      </button>
    </div>
  );
};

export default Footer;
