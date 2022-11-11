import React from 'react';
import StyleCardsPokemon from './CardsPokemon.module.css';
import { PokemonApi } from '../Fetch/FecthApi';

export default function CardsPokemon() {
  return (
    <>
      <ul className={StyleCardsPokemon.cardsContainer}>
        <PokemonApi />
      </ul>
    </>
  );
}
