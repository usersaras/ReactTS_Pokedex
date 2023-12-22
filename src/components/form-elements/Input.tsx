import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ value, setValue }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <input
        id="search"
        className=" w-full px-3 py-2 border rounded pr-10"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />{' '}
      <label htmlFor="search">
        <FaSearch className="absolute text-cyan-800 top-1/2 right-3 -translate-y-1/2" />
      </label>
    </div>
  );
};

export default Input;
