import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { saveLogo } from "../../utils/indexedDB";
import NextImage from "next/image";

interface LogoPickerProps {
  onLogoSelect: (
    leftLogoId: string,
    rightLogoId: string,
    fullLogoId: string
  ) => void;
}

const LogoPicker: React.FC<LogoPickerProps> = ({ onLogoSelect }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogoSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ["image/png", "image/jpeg"];
      if (!validTypes.includes(file.type)) {
        setErrorMessage("Please upload a .png or .jpeg file");
        return;
      }

      const maxSizeInBytes = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSizeInBytes) {
        setErrorMessage("Please upload a file smaller than 10MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const img = new Image();
        img.src = base64String;

        img.onload = async () => {
          if (img.width > 600 || img.height > 600) {
            setErrorMessage("Image dimensions must be 600x600 pixels or less");
            return;
          }

          const fullId = uuidv4();
          await saveLogo(fullId, base64String);

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const height = img.height;
            const width = img.width / 2; // Split image in half horizontally

            canvas.width = width;
            canvas.height = height;

            // Draw left half of the image
            ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height);
            const leftDataURL = canvas.toDataURL("image/png");
            const leftId = uuidv4();
            await saveLogo(leftId, leftDataURL);

            // Clear canvas for drawing right half of the image
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw right half of the image
            ctx.drawImage(img, width, 0, width, height, 0, 0, width, height);
            const rightDataURL = canvas.toDataURL("image/png");
            const rightId = uuidv4();
            await saveLogo(rightId, rightDataURL);

            // Pass both halves and full logo to parent component
            onLogoSelect(leftId, rightId, fullId);
          }
        };

        img.onerror = () => {
          setErrorMessage("Failed to load image. Please try again.");
        };
      };

      reader.onerror = () => {
        setErrorMessage("Failed to read file. Please try again.");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center">
      <input
        type="file"
        accept=".png,.jpeg,.jpg"
        id="fileInput"
        onChange={handleLogoSelect}
        style={{ display: "none" }}
      />
      <label
        htmlFor="fileInput"
        className="p-4 border border-gray-300 rounded bg-white text-black cursor-pointer hover:bg-blue-100 transition duration-300 inline-block"
      >
        <div className="flex flex-col items-center">
          <NextImage
            src="/icons/upload-simple.svg"
            alt="Logo"
            width={20}
            height={20}
            className="mb-2"
          />
          <div className="text-sm">Choose File</div>
          <div className="text-xs text-gray-500">(Max size: 10MB)</div>
          <div className="text-xs text-gray-500">
            We accept file types like png / jpg
          </div>
        </div>
      </label>
      {errorMessage && (
        <div className="text-red-500 text-xs mt-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default LogoPicker;
