import React from 'react';
import Style from './style_module/Pokemons.module.css';
import All from '../img/poke-type/icon-all.svg';

export default function TypeSelector() {
  return (
    <>
      <div className={Style.pokedex_left_wrapper}>
        <ul>
          <li className="All">
            <button className={Style.pokedex_typePokemon}>
              <img
                src={All}
                alt="all"
                className={Style.pokedex_typePokemon_icon}
              />
              <span className={Style.pokedex_typePokemon_text}>All</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
