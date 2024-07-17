import React from "react";

interface TemplateSelectorProps {
  selectedTemplate: number;
  onChange: (selectedTemplate: number) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onChange,
}) => {
  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="text-center">
      <h2 className="text-lg md:text-lg font-semibold mb-2">Choose Pattern</h2>
      <select
        className="p-1 md:p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-gray-100 hover:text-black transition duration-300"
        value={selectedTemplate}
        onChange={handleTemplateChange}
      >
        <option value={1}>Pattern 1</option>
        <option value={2}>Pattern 2</option>
        <option value={3}>Pattern 3</option>
        <option value={4}>Pattern 4</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
