import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokenos($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`