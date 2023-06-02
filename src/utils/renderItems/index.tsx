import { LegacyRef } from 'react';
import { POKEMON_DATA } from '../../api/hooks';

const RenderPokemon = <T extends POKEMON_DATA>(
  item: T,
  ref?: LegacyRef<HTMLDivElement>
): React.ReactNode => {
  const wrapperDivClasses = `shadow border border-gray-100 rounded-md flex gap-5`;
  const imageWrapperClass = 'px-5 py-7 w-full';
  const pokemonTypeClass = 'rounded-full bg-slate-100 px-4 text-sm py-2';
  const imageClasses = 'w-full object-contain';

  const showPokemonInfo = (item: T) => {
    return (
      <>
        {' '}
        <div className={imageWrapperClass}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`}
            alt={item.name}
            className={imageClasses}
            loading="lazy"
          />
        </div>
        <div className="w-full px-5 py-7 flex flex-col gap-2 ">
          <h3 className="first-letter:uppercase text-lg font-bold text-gray-600">
            {item.name}
          </h3>
          <div className="flex gap-2">
            {item.pokemon_v2_pokemontypes.map((type, idx) => {
              return (
                <p key={idx} className={pokemonTypeClass}>
                  {type.pokemon_v2_type.name}
                </p>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  if (ref) {
    return (
      <div key={item.name} className={wrapperDivClasses} ref={ref}>
        {showPokemonInfo(item)}
      </div>
    );
  } else {
    return (
      <div key={item.name} className={wrapperDivClasses}>
        {showPokemonInfo(item)}
      </div>
    );
  }
};

export default RenderPokemon;
