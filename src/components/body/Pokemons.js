import React from 'react';
import StylePokemon from '../body/Pokemons.module.css';
import Search from './Search';

export default function Pokemons() {
  return (
    <>
      <section className={StylePokemon.top}>
        <Search />
      </section>
    </>
  );
}
