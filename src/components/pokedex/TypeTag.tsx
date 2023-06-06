import React from 'react';
import getClassByType from '../../utils/getStyleClasses/getBgByType';
import { POKEMON_TYPES } from '../../types/PokemonTypes';

const pokemonTypeClass =
  'rounded-md text-white font-medium capitalize px-3 text-xs py-2';

interface TypeTagProps {
  typeName: POKEMON_TYPES;
}

const TypeTag = ({ typeName }: TypeTagProps) => {
  return (
    <p
      key={typeName}
      className={pokemonTypeClass + ' ' + getClassByType(typeName)}
    >
      {typeName}
    </p>
  );
};

export default TypeTag;
