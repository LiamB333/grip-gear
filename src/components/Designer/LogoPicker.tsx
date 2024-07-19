import React from "react";
import { v4 as uuidv4 } from "uuid";
import { saveLogo } from "../../utils/indexedDB";

interface LogoPickerProps {
  onLogoSelect: (
    leftLogoId: string,
    rightLogoId: string,
    fullLogoId: string
  ) => void;
}

const LogoPicker: React.FC<LogoPickerProps> = ({ onLogoSelect }) => {
  const handleLogoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const fullId = uuidv4();
        await saveLogo(fullId, base64String);

        const image = new Image();
        image.src = base64String;
        image.onload = async () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const height = image.height;
            const width = image.width / 2; // Split image in half horizontally

            canvas.width = width;
            canvas.height = height;

            // Draw left half of the image
            ctx.drawImage(image, 0, 0, width, height, 0, 0, width, height);
            const leftDataURL = canvas.toDataURL("image/png");
            const leftId = uuidv4();
            console.log("Left half base64:", leftDataURL);
            await saveLogo(leftId, leftDataURL);

            // Clear canvas for drawing right half of the image
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw right half of the image
            ctx.drawImage(image, width, 0, width, height, 0, 0, width, height);
            const rightDataURL = canvas.toDataURL("image/png");
            const rightId = uuidv4();
            console.log("Right half base64:", rightDataURL);
            await saveLogo(rightId, rightDataURL);

            // Pass both halves to parent component
            onLogoSelect(leftId, rightId, fullId);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center">
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleLogoSelect}
        style={{ display: "none" }}
      />
      <label
        htmlFor="fileInput"
        className="p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-gray-100 hover:text-black transition duration-300"
      >
        Choose File
      </label>
    </div>
  );
};

export default LogoPicker;
