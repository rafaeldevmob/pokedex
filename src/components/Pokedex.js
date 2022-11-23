import React from 'react';
import PokemonCard from './PokemonCards';
import CountPokemon from './CountPokemon';
import TypeSelector from './TypeSelector';
import StyleCardsPokemon from './style_module/CardsPokemon.module.css';
const Pokedex = (props) => {
  const { pokemons, loading, types } = props;

  return (
    <>
      <main className="pokedex contain">
        <TypeSelector types={types} />
        <div className={StyleCardsPokemon.pokedex_right_wrapper}>
          <CountPokemon />
          {loading ? (
            <div>loading...</div>
          ) : (
            <ul className={StyleCardsPokemon.pokedex_cardsPokemon}>
              {pokemons &&
                pokemons.map((pokemon, index) => {
                  return <PokemonCard pokemon={pokemon} key={index} />;
                })}
            </ul>
          )}
        </div>
      </main>
    </>
  );
};

export default Pokedex;
