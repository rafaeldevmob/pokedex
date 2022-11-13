import React from 'react';
import StyleType from '../body/TypeSelector.module.css';
import StyleCardsPokemon from '../body/CardsPokemon.module.css';
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
