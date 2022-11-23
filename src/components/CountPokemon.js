import React from 'react';
import Style from './style_module/Pokemons.module.css';
import ImgPokeball from '../img/icon-poke-red.svg';

export default function CountPokemon() {
  return (
    <>
      <div className={Style.pokemonCount_wrapper}>
        <div>
          <div className={Style.pokemonCount_top}>
            <img src={ImgPokeball} alt="Pokeball" />
            <span className={Style.pokemonCount_text}>
              <strong className={Style.pokemonCount_number}>1154</strong>
              Pokemons
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
