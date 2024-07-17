import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  onBlur: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onChange,
  onBlur,
}) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="text-center">
      <h2 className="text-lg md:text-lg font-semibold">
        Choose Quantity (min 50)
      </h2>
      <input
        type="number"
        min="50"
        value={quantity}
        onChange={handleQuantityChange}
        onBlur={onBlur}
        className="p-1 md:p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-gray-100 hover:text-black transition duration-300 w-24"
      />
    </div>
  );
};

export default QuantitySelector;
