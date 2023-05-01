import React from 'react';
import Pokeball from '../../../assets/pokeball.svg';

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}

const NavItem = ({ label, href, className }: NavItemProps) => {
  return (
    <button
      className={`p-3 px-6 border rounded-md overflow-hidden relative  ${
        className ? className : ' '
      } `.trim()}
    >
      <img
        src={Pokeball}
        alt="Pokeball"
        className="w-12 absolute right-0 top-1/4 opacity-20"
      />
      <a href={href} className="text-md font-medium relative z-10">
        {label}
      </a>
    </button>
  );
};

export default NavItem;
