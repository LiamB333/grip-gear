import React, { useRef, useEffect } from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
  onBlur: () => void;
  onClose: () => void; // Add this line
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onChange, onBlur, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSlideChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 50 && value <= 500) {
      onChange(value);
    }
  };

  const handleDecrement = () => {
    if (quantity > 50) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 500) {
      onChange(quantity + 1);
    }
  };

  return (
    <div ref={ref} className="bg-white p-4 shadow-lg rounded-lg fixed bottom-16 right-4 w-64">
      <label htmlFor="quantity" className="block text-sm font-medium text-black">
        Quantity
      </label>
      <div className="flex items-center mt-2">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-300 text-black px-2 py-1 rounded-l focus:outline-none"
        >
          -
        </button>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleInputChange}
          onBlur={onBlur}
          className="w-16 text-center border border-gray-300 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-300 text-black px-2 py-1 rounded-r focus:outline-none"
        >
          +
        </button>
      </div>
      <input
        type="range"
        id="quantity-range"
        name="quantity-range"
        min="50"
        max="500"
        value={quantity}
        onChange={handleSlideChange}
        onBlur={onBlur}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
      />
    </div>
  );
};

export default QuantitySelector;
