import { Dialog, Transition } from '@headlessui/react';
import AllPokemonTypes from '../pokedex/AllPokemonTypes';
import { useContext } from 'react';
import {
  FilterContext,
  FilterContextType,
} from '../../context/PokedexFilterContext';
import { useGetPokemonDetail } from '../../api/hooks';
import getClassByType from '../../utils/getStyleClasses/getBgByType';
import { POKEMON_TYPES } from '../../types/PokemonTypes';
import TypeTag from '../pokedex/TypeTag';
import StatsTag from '../pokedex/StatsTag';
import { FaChevronRight } from 'react-icons/fa';
import PokemonButton from '../pokedex/PokemonButton';
import { Link } from 'react-router-dom';
import Icon from '../../assets/icons/Icon';
import Loader from '../loader/Loader';

interface FilterDrawerProps {
  className: string;
}

const FilterDrawer = ({ className }: FilterDrawerProps) => {
  const {
    showFilter,
    selectedPokemonId,
    setSelectedPokemonId,
    setShowFilterFalse,
  } = useContext<FilterContextType>(FilterContext);

  const { data, loading } = useGetPokemonDetail({
    variables: {
      id: selectedPokemonId,
      prevId: Number(selectedPokemonId) - 1,
      nextId: Number(selectedPokemonId) + 1,
    },
  });

  const collapseDrawer = () => {
    setShowFilterFalse();
  };

  return (
    <>
      <Transition
        show={showFilter}
        className={className}
        appear={true}
        enter="transition-all duration-200 ease-out"
        enterFrom="translate-x-full basis-0"
        enterTo="translate-x-0 basis-full xl:basis-1/3"
        leave="transition-all duration-200 ease-out"
        leaveFrom="translate-x-0 basis-full xl:basis-1/3"
        leaveTo="translate-x-full basis-0"
      >
        <div className="bg-white border-r p-5 rounded-start h-full justify-center">
          {loading || !data?.pokemon_v2_pokemon_by_pk ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <button
                  className="flex gap-2 items-center justify-end text-sm underline underline-offset-2 text-slate-500"
                  onClick={collapseDrawer}
                >
                  Collapse <FaChevronRight />
                </button>
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data?.pokemon_v2_pokemon_by_pk.id}.png`}
                    alt="Pokemon"
                    className="w-48 mx-auto"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 text-center">
                    #
                    {data?.pokemon_v2_pokemon_by_pk.id
                      .toString()
                      .padStart(3, '0')}
                  </p>
                  <p className="text-xl capitalize text-center font-semibold text-slate-900">
                    {data?.pokemon_v2_pokemon_by_pk.name}
                  </p>
                </div>
                <div className="flex gap-3 justify-center">
                  {data?.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemontypes.map(
                    (pokemonType) => {
                      return (
                        <TypeTag
                          typeName={
                            pokemonType.pokemon_v2_type.name as POKEMON_TYPES
                          }
                        />
                      );
                    }
                  )}
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <h6 className="font-semibold text-slate-900 uppercase text-sm">
                    Pokédex Entry
                  </h6>
                  <p className="text-sm font-medium text-gray-700 text-center">
                    {
                      data?.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonspecy
                        .pokemon_v2_pokemonspeciesflavortexts[0].flavor_text
                    }
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <StatsTag
                  attributeHeading="HEIGHT"
                  attributeValue={
                    (data?.pokemon_v2_pokemon_by_pk.height / 10).toFixed(1) +
                    ' meters'
                  }
                />

                <StatsTag
                  attributeHeading="WEIGHT"
                  attributeValue={
                    (data?.pokemon_v2_pokemon_by_pk.weight / 10).toFixed(1) +
                    ' kgs'
                  }
                />
              </div>
              <div className="flex justify-between gap-2">
                {data?.prevPokemon?.name && (
                  <PokemonButton
                    name={data?.prevPokemon?.name}
                    isNext={false}
                    argsForOnClick={data?.prevPokemon?.id}
                    onClick={(id) => setSelectedPokemonId(id as number)}
                  />
                )}
                {data?.nextPokemon?.name && (
                  <PokemonButton
                    name={data?.nextPokemon?.name}
                    isNext={true}
                    argsForOnClick={data?.nextPokemon?.id}
                    onClick={(id) => setSelectedPokemonId(id as number)}
                  />
                )}
              </div>
              <Link to={`./${data.pokemon_v2_pokemon_by_pk.id}`}>
                <button
                  className={`${getClassByType(
                    data?.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemontypes[0]
                      .pokemon_v2_type.name as POKEMON_TYPES
                  )} px-3 py-2 rounded text-white text-medium w-full mb-5`}
                >
                  View Details
                </button>
              </Link>
            </div>
          )}
        </div>
      </Transition>
    </>
  );
};

export default FilterDrawer;
