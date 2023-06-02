import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Input = () => {
  return (
    <div className="border w-full bg-white inline-flex items-center rounded-md overflow-hidden">
      <input
        id="search"
        className="focus:outline-none w-full px-3 py-2"
        placeholder="Search"
      />{' '}
      <label htmlFor="search" className="cursor-pointer p-3">
        <FaSearch />
      </label>
    </div>
  );
};

export default Input;
