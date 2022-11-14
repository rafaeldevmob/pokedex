import React from 'react';
import Pokemon from '../Fetch/FilterApi';

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <>
      {loading ? (
        <div>carregando...</div>
      ) : (
        <>
          {pokemons &&
            pokemons.map((pokemon, id) => {
              return <Pokemon pokemon={pokemon} key={id} />;
            })}
        </>
      )}
    </>
  );
};

export default Pokedex;
