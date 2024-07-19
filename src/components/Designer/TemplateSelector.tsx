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
    <div className="text-center mt-6">
      <select
        className="p-2 md:p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-blue-200 hover:text-black transition duration-300"
        value={selectedTemplate}
        onChange={handleTemplateChange}
      >
        <option value={1}>Design 1</option>
        <option value={2}>Design 2</option>
        <option value={3}>Design 3</option>
        <option value={4}>Design 4</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
