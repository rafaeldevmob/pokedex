import React from 'react';
import StyleFilter from './FilterPokemon.module.css';
import ImgPokeball from '../../img/icon-poke-red.svg';
import CardsPokemon from './CardsPokemon';

export default function Filter() {
  return (
    <>
      <div className={StyleFilter.rightContainer}>
        <div>
          <div className={StyleFilter.top}>
            <img src={ImgPokeball} alt="Pokeball" />
            <span className={StyleFilter.spanCountPokemons}>
              <strong className={StyleFilter.jsCountPokemons}>1154</strong>
              Pokemons
            </span>
          </div>
        </div>
        <div>
          <CardsPokemon />
        </div>
      </div>
    </>
  );
}
