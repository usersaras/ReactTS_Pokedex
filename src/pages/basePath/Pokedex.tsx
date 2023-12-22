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
import Loader from '../../components/loader/Loader';
import { useInfiniteLoading } from '../../hooks/useInfiniteLoading';
import useDebounce from '../../hooks/useDebounce';

const FilterDrawer = lazy(() => import('../../components/drawer/FilterDrawer'));

const Pokedex = () => {
  let take = 24;
  const skip = useRef(0);

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce<string>(searchQuery);

  const setSearchVariable = (query: string) => {
    setSearchQuery(query);
  };

  const { data, loading, error, fetchMore } = useGetAllPokemons({
    variables: { skip: 0, take, query: debouncedQuery || '' },
  });

  const [hasMore, setHasMore] = useState(true);

  const totalCount = 10275;

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

  const lastElementRef = useInfiniteLoading(loading, loadMore, hasMore);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return (
      <div className="h-screen w-screen right-0 top-0  absolute">
        <Loader />
      </div>
    );
  }

  return (
    <PokedexFilterContext>
      <div className="flex items-start relative gap-5 w-full ">
        <div className="basis-full flex flex-col gap-5 transition-all relative mt-3">
          <SearchAndFilter
            searchVariable={searchQuery}
            setSearchVariable={setSearchVariable}
          />
          <ListPage
            items={data!.pokemon_v2_pokemon}
            renderItems={RenderPokemon}
            loading={loading}
            hasMore={hasMore}
            fetchMore={loadMore}
            className="transition-all"
            lastElementRef={lastElementRef}
          />
        </div>
        <FilterDrawer className=" mt-3 rounded-md shadow-lg border overflow-y-scroll sticky z-20 top-28 h-[80vh]  hide-scrollbar" />
      </div>
    </PokedexFilterContext>
  );
};

export default Pokedex;
