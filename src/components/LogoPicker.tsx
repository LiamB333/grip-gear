// components/LogoAdditionComponent.tsx
import React, { useState } from "react";

interface LogoAdditionComponentProps {
  onLogoSelect: (leftLogoUrl: string, rightLogoUrl: string, fullLogoUrl: string) => void;
}

const LogoAdditionComponent: React.FC<LogoAdditionComponentProps> = ({
  onLogoSelect,
}) => {
  const [FullLogoUrl, setFullLogoUrl] = useState<string>("");
  const [leftLogoUrl, setLeftLogoUrl] = useState<string>("");
  const [rightLogoUrl, setRightLogoUrl] = useState<string>("");

  const handleLogoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFullLogoUrl(base64String); // Save full image URL

        const image = new Image();
        image.src = base64String;
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const aspectRatio = image.width / image.height;
            const height = image.height;
            const width = image.width / 2; // Split image in half horizontally

            canvas.width = width;
            canvas.height = height;

            // Draw left half of the image
            ctx.drawImage(image, 0, 0, width, height, 0, 0, width, height);
            const leftDataURL = canvas.toDataURL();
            setLeftLogoUrl(leftDataURL);

            // Clear canvas for drawing right half of the image
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw right half of the image
            ctx.drawImage(
              image,
              width,
              0,
              width,
              height,
              0,
              0,
              width,
              height
            );
            const rightDataURL = canvas.toDataURL();
            setRightLogoUrl(rightDataURL);

            // Pass both halves to parent component
            onLogoSelect(leftDataURL, rightDataURL, base64String);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center mt-2">
      <h2 className="text-xl font-semibold mb-2">Add Logo</h2>
      {/* Hidden input for file selection */}
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleLogoSelect}
        style={{ display: "none" }}
      />
      {/* Styled label acting as a button */}
      <label
        htmlFor="fileInput"
        className="p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-gray-100 hover:text-black transition duration-300"
      >
        Choose File
      </label>
    </div>  
  );
};

export default LogoAdditionComponent;
