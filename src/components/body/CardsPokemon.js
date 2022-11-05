import React from 'react';
import StyleCardsPokemon from './CardsPokemon.module.css';
import Pokemon1 from '../../img/pokemon/1.svg';
import IcoType from '../../img/poke-type/grass.svg';

export default function CardsPokemon() {
  return (
    <>
      <ul className={StyleCardsPokemon.cardsContainer}>
        <li>
          <div className={StyleCardsPokemon.imagePokemon}>
            <img src={Pokemon1} alt="" />
          </div>
          <div className={StyleCardsPokemon.info}>
            <div>
              <span className={StyleCardsPokemon.id}>#001</span>
              <strong className={StyleCardsPokemon.PokemonName}>
                Bulbasaur
              </strong>
            </div>
            <div className={StyleCardsPokemon.icoType}>
              <img src={IcoType} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
