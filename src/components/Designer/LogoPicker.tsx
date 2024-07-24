import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { saveLogo } from "../../utils/indexedDB";
import NextImage from "next/image";
import Cropper from "react-easy-crop";
import { MdCrop } from "react-icons/md";

interface LogoPickerProps {
  onLogoSelect: (
    leftLogoId: string,
    rightLogoId: string,
    fullLogoId: string
  ) => void;
  fullLogoId?: string;
  cropperHeight?: string; // Optional prop to control the height of the cropper
}

const LogoPicker: React.FC<LogoPickerProps> = ({ onLogoSelect, cropperHeight = "h-48" }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number, height: number } | null>(null);

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: { x: number, y: number, width: number, height: number }) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleLogoSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null); // Clear any previous error message
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
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageSrc(result);
        const img = new Image();
        img.src = result;
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
          if (img.width <= 600 && img.height <= 600) {
            handleDirectUpload(result);
          }
        };
      };
      reader.onerror = () => {
        setErrorMessage("Failed to read file. Please try again.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDirectUpload = async (base64String: string) => {
    const fullId = uuidv4();
    await saveLogo(fullId, base64String);

    const img = new Image();
    img.src = base64String;
    img.onload = async () => {
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
      setIsLoading(false);
      setImageSrc(null);
    };
  };

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.src = url;
    });

  const getCroppedImg = async (imageSrc: string, pixelCrop: { x: number, y: number, width: number, height: number }): Promise<string> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 600;

    if (ctx) {
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        const fileUrl = URL.createObjectURL(blob);
        resolve(fileUrl);
      }, "image/png");
    });
  };

  const handleCropComplete = async () => {
    if (!croppedAreaPixels || !imageSrc) {
      return;
    }

    try {
      setIsLoading(true);
      const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
      const response = await fetch(croppedImageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;

        const fullId = uuidv4();
        await saveLogo(fullId, base64String);

        const img = new Image();
        img.src = base64String;
        img.onload = async () => {
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
          setIsLoading(false);
          setImageSrc(null);
        };
      };
      reader.onerror = () => {
        setErrorMessage("Failed to read file. Please try again.");
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Failed to crop image:", error);
      setErrorMessage("Failed to crop image. Please try again.");
      setIsLoading(false);
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setErrorMessage(null); // Clear any previous error message
    const file = event.dataTransfer.files[0];
    if (file) {
      await handleLogoSelect({ target: { files: [file] } } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="text-center p-4 border border-gray-300 rounded bg-white text-black cursor-pointer hover:bg-blue-100 transition duration-300"
      style={{ display: "block", textAlign: "center" }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        accept=".png,.jpeg,.jpg"
        id="fileInput"
        onChange={handleLogoSelect}
        style={{ display: "none" }}
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer"
        style={{ display: "block", textAlign: "center" }}
      >
        <div className="flex flex-col items-center">
          <NextImage
            src="/icons/upload-simple.svg"
            alt="Logo"
            width={20}
            height={20}
            className="mb-2"
          />
          <div className="text-sm">Choose File or Drag & Drop Here</div>
          <div className="text-xs text-gray-500">(Max size: 10MB)</div>
          <div className="text-xs text-gray-500">
            We accept file types like png / jpg
          </div>
        </div>
      </label>
      {imageSrc && imageDimensions && (imageDimensions.width > 600 || imageDimensions.height > 600) && (
        <div className="relative">
          <div className={`relative mt-4 ${cropperHeight} w-full`}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button
              className="bg-black text-white p-1 rounded"
              onClick={handleCropComplete}
            >
              <MdCrop size={24} />
            </button>
            <button
              className="bg-black text-white p-1 rounded"
              onClick={() => setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3))}
            >
              +
            </button>
            <button
              className="bg-black text-white p-1 rounded"
              onClick={() => setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1))}
            >
              -
            </button>
          </div>
        </div>
      )}
      {isLoading && <div className="text-sm">Uploading...</div>}
      {errorMessage && (
        <div className="text-red-500 text-xs mt-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default LogoPicker;
