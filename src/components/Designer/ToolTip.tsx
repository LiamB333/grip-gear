import React from "react";
import Portal from "./Portal";

interface TooltipProps {
  message: string;
  isVisible: boolean;
  position: { top: number; left: number };
}

const Tooltip: React.FC<TooltipProps> = ({ message, isVisible, position }) => {
  return isVisible ? (
    <Portal>
      <div
        className="absolute bg-white text-black text-sm p-2 border border-gray-300 rounded shadow-lg z-50"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
        {message}
      </div>
    </Portal>
  ) : null;
};

export default Tooltip;
