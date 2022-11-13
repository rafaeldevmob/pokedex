import React, { useEffect, useState } from 'react';
import StyleCardsPokemon from './CardsPokemon.module.css';
import { getPokemonData, getPokemons, PokemonApi } from '../Fetch/FecthApi';
import Pokedex from './createPokemonCards';

export default function CardsPokemon() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('cardsPokemon', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <ul className={StyleCardsPokemon.cardsContainer}>
        <Pokedex pokemons={pokemons} loading={loading} />
      </ul>
    </>
  );
}
