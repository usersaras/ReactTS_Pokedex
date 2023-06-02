import { POKEMON_TYPES } from '../../api/hooks';

export const getClassesByType = (type: POKEMON_TYPES) => {
  switch (type) {
    case 'normal':
      return `bg-[#A8A77A] text-white`;
    case 'fire':
      return `bg-[#EB7F2F] text-white`;
    case 'water':
      return 'bg-[#6390F0] text-white';
    case 'electric':
      return 'bg-[#F7D02C] text-white';
    case 'grass':
      return 'bg-grass text-white';
    case 'ice':
      return 'bg-[#96D9D6] text-white';
    case 'fighting':
      return 'bg-[#C22E28] text-white';
    case 'poison':
      return 'bg-[#A33EA1] text-white';
    case 'ground':
      return 'bg-[#E2BF65] text-white';
    case 'flying':
      return 'bg-[#A98FF3] text-white';
    case 'psychic':
      return 'bg-[#F95587] text-white';
    case 'bug':
      return 'bg-[#A6B91A] text-white';
    case 'rock':
      return 'bg-[#B6A136] text-white';
    case 'ghost':
      return 'bg-[#735797] text-white';
    case 'dragon':
      return 'bg-[#6F35FC] text-white';
    case 'dark':
      return 'bg-[#705746] text-white';
    case 'steel':
      return 'bg-[#B7B7CE] text-white';
    case 'fairy':
      return 'bg-[#D685AD] text-white';
  }
};
