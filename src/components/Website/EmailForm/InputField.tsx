import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
}) => {
  return (
    <div className="flex flex-col mt-6 w-full text-black whitespace-nowrap max-md:max-w-full">
      <label htmlFor={name} className="max-md:max-w-full">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="flex gap-2 py-3 mt-2 w-full border border-black border-solid bg-zinc-100 min-h-[48px] max-md:max-w-full"
      />
    </div>
  );
};

export default InputField;
