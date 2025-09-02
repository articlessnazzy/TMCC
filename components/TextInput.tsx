import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-stone-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-3 bg-[#F8F5F0] border ${error ? 'border-red-500' : 'border-stone-300'} rounded-md focus:ring-2 focus:ring-[#949664] focus:outline-none transition`}
    />
    {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
  </div>
);

export default TextInput;
