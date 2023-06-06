import React, {
  SetStateAction,
  lazy,
  useEffect,
  useRef,
  useState,
} from 'react';
import ListPage from '../../components/list-page/ListPage';
import { useGetAllPokemons } from '../../api/hooks';
import RenderPokemon from '../../utils/renderItems';
import SearchAndFilter from '../../components/pokedex/SearchAndFilter';
import PokedexFilterContext from '../../context/PokedexFilterContext';
import './Pokedex.css';

const FilterDrawer = lazy(() => import('../../components/drawer/FilterDrawer'));

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
      <div className="flex gap-5 w-full relative h-screen overflow-y-scroll hide-scrollbar">
        <div
          className="basis-full flex flex-col gap-5 transition-all mt-3"
          style={{ scrollbarWidth: 'none' }}
        >
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
        <FilterDrawer className="h-[80%] mt-3 sticky top-0 rounded-md shadow-lg overflow-hidden" />
      </div>
    </PokedexFilterContext>
  );
};

export default Pokedex;
