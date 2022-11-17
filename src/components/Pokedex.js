import React from 'react';
import Pokemon from './Pokemon';
import TypeSelector from './TypeSelector';

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <>
      <main className="pokedex contain">
        <TypeSelector />
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="gridPokemon">
            {pokemons &&
              pokemons.map((pokemon, index) => {
                return <Pokemon pokemon={pokemon} key={index} />;
              })}
          </div>
        )}
      </main>
    </>
  );
};

export default Pokedex;
