import { useQuery, gql, QueryHookOptions } from '@apollo/client';
import { POKEMON_TYPES } from '../types/PokemonTypes';

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

const GET_POKEMON_DETAIL = gql`
  query getPokemonDetail($id: Int!, $prevId: Int!, $nextId: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      base_experience
      height
      order
      pokemon_species_id
      weight
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(limit: 1) {
          flavor_text
          id
        }
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            id
            name
          }
        }
      }
    }
    prevPokemon: pokemon_v2_pokemon_by_pk(id: $prevId) {
      id
      name
    }
    nextPokemon: pokemon_v2_pokemon_by_pk(id: $nextId) {
      id
      name
    }
  }
`;

interface PREV_NEXT_POKEMON_TYPE {
  id: number;
  name: string;
}

interface GET_POKEMON_VARIABLES {
  skip: number;
  take: number;
}

interface GET_POKEMON_DETAIL_VARIABLES {
  id: number;
  prevId: number;
  nextId: number;
}

export interface POKEMON_DETAIL {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: {
    id: number;
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemonspeciesflavortexts: {
      flavor_text: string;
      id: number;
    }[];
    pokemon_v2_evolutionchain: {
      pokemon_v2_pokemonspecies: {
        id: number;
        name: string;
      };
    };
  };
}

export interface POKEMON_DATA {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: POKEMON_TYPES;
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

export const useGetPokemonDetail = (
  options: QueryHookOptions<
    {
      pokemon_v2_pokemon_by_pk: POKEMON_DETAIL;
      prevPokemon: PREV_NEXT_POKEMON_TYPE;
      nextPokemon: PREV_NEXT_POKEMON_TYPE;
    },
    GET_POKEMON_DETAIL_VARIABLES
  >
) => useQuery(GET_POKEMON_DETAIL, { ...options });
