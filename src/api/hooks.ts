import { useQuery, gql } from '@apollo/client';

const GET_ALL_POKEMONS = gql`
query GetAllPokemons {
  pokemon_v2_pokemon {
    id
    name
    pokemon_v2_pokemontypes {
      id
      pokemon_v2_type {
        name
      }
    }
  }
}
`;

export const useGetAllPokemons = () => useQuery(GET_ALL_POKEMONS);