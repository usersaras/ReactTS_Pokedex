import { LegacyRef, useContext } from 'react';
import { POKEMON_DATA } from '../../api/hooks';
import getClassByType from '../getStyleClasses/getBgByType';
import { Link, Navigate } from 'react-router-dom';
import { FilterContext } from '../../context/PokedexFilterContext';
import TypeTag from '../../components/pokedex/TypeTag';

const RenderPokemon = <T extends POKEMON_DATA>(
  item: T,
  ref?: LegacyRef<HTMLDivElement>
): React.ReactNode => {
  const wrapperDivClasses = `shadow-lg bg-white border border-gray-100 rounded-md flex flex-col items-center h-full relative`;
  const imageWrapperClass =
    'px-5 flex items-center content-center bottom-3/4 pt-2 pb-4 absolute';

  const imageClasses = ' mx-auto object-contain';

  const { setSelectedPokemonId, setShowFilterTrue, setShowFilterFalse } =
    useContext(FilterContext);

  const showPokemonInfo = (item: T) => {
    return (
      <>
        {' '}
        <div className={imageWrapperClass}>
          <img
            src={`https://projectpokemon.org/images/normal-sprite/${item.name.replace(
              '-',
              '_'
            )}.gif`}
            alt={item.name}
            className={imageClasses}
            loading="lazy"
          />
        </div>
        <div className="w-full px-5 pb-7 pt-10 flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-xs text-slate-500 font-semibold text-center">
              #{item.id.toString().padStart(3, '0')}
            </p>
            <h3 className="first-letter:uppercase text-center text-lg font-bold text-gray-600">
              {item.name}
            </h3>
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            {item.pokemon_v2_pokemontypes.map((type, idx) => {
              return <TypeTag key={idx} typeName={type.pokemon_v2_type.name} />;
            })}
          </div>
        </div>
      </>
    );
  };

  if (ref) {
    return (
      <div
        key={item.id}
        className={wrapperDivClasses}
        ref={ref}
        onClick={() => {
          setSelectedPokemonId(item.id);
          setShowFilterTrue();
        }}
      >
        {showPokemonInfo(item)}
      </div>
    );
  } else {
    return (
      <div
        key={item.id}
        className={wrapperDivClasses}
        onClick={() => {
          setSelectedPokemonId(item.id);
          setShowFilterTrue();
        }}
      >
        {showPokemonInfo(item)}
      </div>
    );
  }
};

export default RenderPokemon;
