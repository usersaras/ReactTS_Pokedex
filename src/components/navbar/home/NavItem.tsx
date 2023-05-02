import React from 'react';
import Pokeball from '../../../assets/pokeball.svg';
import { Link } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
  onClose: () => void;
}

const NavItem = ({ label, href, className, onClose }: NavItemProps) => {
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
      <Link
        to={href}
        className="text-md font-medium relative z-10"
        onClick={onClose}
      >
        {label}
      </Link>
    </button>
  );
};

export default NavItem;
