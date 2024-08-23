import React from "react";

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, placeholder }) => {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <label htmlFor={name} className="text-white max-md:max-w-full">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="flex-1 shrink px-3 pt-3 pb-28 mt-2 w-full border border-black border-solid bg-zinc-100 min-h-[10px] text-stone-500 max-md:pb-24 max-md:max-w-full"
      />
    </div>
  );
};

export default TextArea;
