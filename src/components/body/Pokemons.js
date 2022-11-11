import React from 'react';
import StylePokemon from '../body/Pokemons.module.css';
import Filter from './FilterPokemon';
import Search from './Search';
import TypeSelector from './TypeSelector';

export default function Pokemons() {
  return (
    <>
      <section className={StylePokemon.top}>
        <Search />
        <div className={StylePokemon.grid}>
          <TypeSelector />
          <Filter />
        </div>
      </section>
    </>
  );
}
