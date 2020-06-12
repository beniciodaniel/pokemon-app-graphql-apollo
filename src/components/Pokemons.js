import React from 'react';

export const Pokemon = ( { pokemon }) => {
  const { id, name, image, maxHP, maxCP, attacks } = pokemon;

  return (
    <div className="pokemon">
      <div className="pokemon-name">
         <p>{name}</p>
      </div>
      <div className="pokemon-meta">
        <span>{maxHP}</span>
        <span>{maxCP}</span>
      </div>
      <div className="pokemon-image">
         <img src={image} alt="Pokemin"/>         
      </div>
      <div className="pokemon-attacks">
         {
           pokemon && 
           pokemon.attacks &&
           attacks.special
            .slice(0, 3)
            .map(attack => (
              <span key={`${attack.name}-${attack.damage}`}>
                {attack.name}
              </span>
            ))
         }
      </div>
    </div>
  )
}