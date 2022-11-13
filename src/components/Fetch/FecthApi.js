import React, { useState, useEffect } from 'react';
import StyleType from '../body/TypeSelector.module.css';
// import StyleCardsPokemon from '../body/CardsPokemon.module.css';

export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('search error', error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('search error', error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('search error', error);
  }
};

export function TypeApi() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    TypeSelect();
  }, []);

  const TypeSelect = () => {
    fetch('https://pokeapi.co/api/v2/type/')
      .then((resp) => resp.json())
      .then((json) => setTypes(json.results));
  };

  return (
    <>
      {types.map((typePokemon, key) => (
        <li key={key} className={typePokemon.name}>
          <button className={StyleType.type}>
            <img
              src={`https://codeboost.com.br/projetos/pokeapi/img/${typePokemon.name}.svg`}
              alt={typePokemon.name}
              className={StyleType.icon}
            />
            <span className={StyleType.text}>{typePokemon.name}</span>
          </button>
        </li>
      ))}
    </>
  );
}
