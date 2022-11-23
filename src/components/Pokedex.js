import React from 'react';
import Pokemon from './Pokemon';
import CountPokemon from './CountPokemon';
import TypeSelector from './TypeSelector';
import StyleCardsPokemon from './style_module/CardsPokemon.module.css';
const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <>
      <main className="pokedex contain">
        <TypeSelector />
        <div className={StyleCardsPokemon.pokedex_right_wrapper}>
          <CountPokemon />
          {loading ? (
            <div>loading...</div>
          ) : (
            <ul className={StyleCardsPokemon.pokedex_cardsPokemon}>
              {pokemons &&
                pokemons.map((pokemon, index) => {
                  return <Pokemon pokemon={pokemon} key={index} />;
                })}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Pokedex;
