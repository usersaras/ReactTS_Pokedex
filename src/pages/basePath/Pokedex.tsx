import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import ListPage from '../../components/list-page/ListPage';
import { useGetAllPokemons } from '../../api/hooks';
import RenderPokemon from '../../utils/renderItems';
import SearchAndFilter from '../../components/pokedex/SearchAndFilter';
import FilterDrawer from '../../components/drawer/FilterDrawer';
import PokedexFilterContext from '../../context/PokedexFilterContext';

const Pokedex = () => {
  let take = 24;
  const skip = useRef(0);

  const { data, loading, error, fetchMore } = useGetAllPokemons({
    variables: { skip: 0, take },
  });

  const [hasMore, setHasMore] = useState(true);

  const totalCount = 1279;

  useEffect(() => {
    if (data?.pokemon_v2_pokemon) {
      if (data.pokemon_v2_pokemon.length === totalCount) {
        setHasMore(false);
      }
    }
  }, [data?.pokemon_v2_pokemon]);

  const loadMore = () => {
    skip.current = skip.current + 24;
    fetchMore({
      variables: { skip: skip.current, take },
      updateQuery: (previousResults, { fetchMoreResult }) => {
        const previousEntry = previousResults;
        const newProducts = fetchMoreResult;
        return {
          pokemon_v2_pokemon: [
            ...previousEntry.pokemon_v2_pokemon,
            ...newProducts.pokemon_v2_pokemon,
          ],
        };
      },
    });
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PokedexFilterContext>
      <div className="flex gap-5 overflow-y-hidden">
        <div className="basis-full flex flex-col gap-5 transition-all mt-3">
          <SearchAndFilter />
          <ListPage
            items={data!.pokemon_v2_pokemon}
            renderItems={RenderPokemon}
            loading={loading}
            hasMore={hasMore}
            fetchMore={loadMore}
            className="transition-all"
          />
        </div>
        <FilterDrawer className="basis-1/2 h-full mt-3" />
      </div>
    </PokedexFilterContext>
  );
};

export default Pokedex;
