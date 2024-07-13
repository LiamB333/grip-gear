// pages/color-selection.tsx
"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ColorPicker from '@/components/ColorPicker'; // Assuming ColorPicker component is created

const ColorSelectionPage = () => {
  const router = useRouter();
  const template = router.searchParams?.template as string; // Access template from searchParams

  const handleColorSelect = (color: string) => {
    // Handle color selection logic (e.g., save to state, local storage, etc.)
    console.log(`Selected color: ${color}`);
  };

  const navigateToDetailsPage = () => {
    if (template) {
      router.push(`/details-input?template=${template}`);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-semibold">Choose Sock Color</h1>
      <ColorPicker onSelect={handleColorSelect} />
      <div className="mt-4">
        <button onClick={navigateToDetailsPage} className="text-blue-500 hover:text-blue-700">
          Next: Enter Details
        </button>
      </div>
    </div>
  );
};

export default ColorSelectionPage;
