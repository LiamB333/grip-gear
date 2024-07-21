import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";

interface FooterComponentProps {
  price: string;
  savings: string | null;
  quantity: number;
  onQuantityChange: (value: number) => void;
  onQuantityBlur: () => void;
  onContinue: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FooterComponent: React.FC<FooterComponentProps> = ({
  price,
  quantity,
  onQuantityChange,
  onQuantityBlur,
  onContinue,
}) => {
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const toggleQuantitySelector = () => {
    setShowQuantitySelector(!showQuantitySelector);
  };

  const closeQuantitySelector = () => {
    setShowQuantitySelector(false);
  };

  return (
    <div className="w-full fixed bottom-0 left-0 bg-white text-sm z-50 flex flex-col md:flex-row md:justify-end items-center h-auto md:h-16 shadow-xl p-4 md:p-2">
      <div
        className="flex items-center text-lg font-semibold text-black cursor-pointer mb-2 md:mb-0 md:mr-4"
        onClick={toggleQuantitySelector}
      >
        <span>Quantity: {quantity}</span>
        <img src="/icons/down.svg" alt="Down" className="ml-2 w-4 h-4" />
      </div>
      <p className="text-lg font-semibold text-black mb-2 md:mb-0 md:mr-4">{price}</p>
      <button
        className="bg-black text-white hover:bg-blue-500 font-semibold h-12 md:h-full transition-colors duration-300 ease-in-out w-full md:w-32 lg:w-48 xl:w-64"
        onClick={onContinue}
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}
      >
        Continue
      </button>
      {showQuantitySelector && (
        <QuantitySelector
          quantity={quantity}
          onChange={onQuantityChange}
          onBlur={onQuantityBlur}
          onClose={closeQuantitySelector}
        />
      )}
    </div>
  );
};

export default FooterComponent;
