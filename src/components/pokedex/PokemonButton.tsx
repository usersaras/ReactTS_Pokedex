import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PokemonButtonProps {
  name: string;
  isNext: boolean;
  argsForOnClick: number;
  onClick?: <T>(args: T) => void;
}

const PokemonButton = ({
  argsForOnClick,
  name,
  isNext,
  onClick,
}: PokemonButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 bg-slate-100 p-3 rounded w-full justify-center ${
        isNext ? 'flex-row-reverse' : ' '
      }`}
      onClick={() => {
        onClick && onClick<typeof argsForOnClick>(argsForOnClick);
      }}
    >
      {!isNext ? <FaChevronLeft /> : <FaChevronRight />}
      <img
        src={`https://projectpokemon.org/images/normal-sprite/${name}.gif`}
        alt={name}
        className="w-7"
      />
      <p className="text-sm font-medium capitalize">{name}</p>
    </button>
  );
};

export default PokemonButton;
