import { useQuery, gql, QueryHookOptions } from '@apollo/client';

const GET_ALL_POKEMONS = gql`
  query GetAllPokemons($skip: Int!, $take: Int!) {
    pokemon_v2_pokemon(offset: $skip, limit: $take) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

interface GET_POKEMON_VARIABLES {
  skip: number;
  take: number;
}

export interface POKEMON_DATA {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonsprites: { sprites: string[] };
}
export interface GET_POKEMON_RESULT {
  pokemon_v2_pokemon: POKEMON_DATA[];
}

export const useGetAllPokemons = (
  options: QueryHookOptions<GET_POKEMON_RESULT, GET_POKEMON_VARIABLES>
) => useQuery(GET_ALL_POKEMONS, { ...options });
