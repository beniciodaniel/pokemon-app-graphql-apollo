import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components//Pokemons';
import './styles.css';

export const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {}, loading, error } = useQuery(GET_POKEMONS, {
    variables: { first: 151 }
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container">
      {
        pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
      }
    </div>
  )
}