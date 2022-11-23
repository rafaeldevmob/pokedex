import React from 'react';
import PokemonCard from './PokemonCards';
import CountPokemon from './CountPokemon';
import TypeSelector from './TypeSelector';
import Style from './style_module/CardsPokemon.module.css';
const Pokedex = (props) => {
  const { pokemons, loading, types } = props;

  return (
    <>
      <main className="pokedex contain">
        <TypeSelector types={types} />
        <div className={Style.pokedex_right_wrapper}>
          <CountPokemon />
          {loading ? (
            <div>loading...</div>
          ) : (
            <ul className={Style.pokedex_cardsPokemon}>
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
