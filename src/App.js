import React from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh',
  });

  return (
    <ApolloProvider client={client}>
      <h1>151 POKEMONS</h1>
      <PokemonsContainer />
    </ApolloProvider>
  );
}

export default App;
