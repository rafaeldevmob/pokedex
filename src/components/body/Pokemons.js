import React from 'react';
import StylePokemon from '../body/Pokemons.module.css';
import Filter from './FilterPokemon';
import Search from './Search';
import TypeSelector from './TypeSelector';
export default function Pokemons({ type, pokemon }) {
  return (
    <>
      <section className={StylePokemon.top}>
        <Search />
        <div className={StylePokemon.grid}>
          <TypeSelector {...type} {...pokemon} />
          <Filter />
        </div>
      </section>
    </>
  );
}
