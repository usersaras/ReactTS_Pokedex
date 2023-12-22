import React from 'react';

interface ButtonProps {
  children: string | JSX.Element;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`py-2 px-4 rounded font-sm font-medium ${
        className ? className : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
