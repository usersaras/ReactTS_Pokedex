import React, { Suspense } from 'react';
import ListPage from '../components/list-page/ListPage';
import {
  GET_POKEMON_RESULT,
  POKEMON_DATA,
  useGetAllPokemons,
} from '../api/hooks';
interface Person {
  name: string;
  age: number;
  gender: string;
}

//
const Pokedex = () => {
  const { data, loading, error } = useGetAllPokemons({
    variables: { skip: 800, take: 25 },
  });

  const people = [{ name: 'bhenry', age: 21, gender: 'male' }];

  const count = 1279;

  const pages = 1279 / 5;
  if (error) {
    return <div>{error.message}</div>;
  }

  const renderItem = (item: POKEMON_DATA): React.ReactNode => {
    console.log('Render');

    return (
      <div
        key={item.id}
        className="bg-white shadow border border-gray-100 rounded-md  flex gap-5"
      >
        <div className="bg-gray-50 px-5 py-7 w-full">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`}
            alt={item.name}
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full px-5 py-7">
          <h3>{item.name}</h3>
          {item.pokemon_v2_pokemontypes.map((type) => {
            return <p>{type.pokemon_v2_type.name}</p>;
          })}
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ListPage items={data!.pokemon_v2_pokemon} renderItems={renderItem} />;
};

export default Pokedex;
