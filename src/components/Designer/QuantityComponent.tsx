import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onChange }) => {
  const handleSlideChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg fixed bottom-16 right-4 w-64">
      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
        Quantity
      </label>
      <input
        type="range"
        id="quantity"
        name="quantity"
        min="50"
        max="1000"
        value={quantity}
        onChange={handleSlideChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="mt-2 text-center text-lg font-semibold text-gray-700">{quantity}</div>
    </div>
  );
};

export default QuantitySelector;
