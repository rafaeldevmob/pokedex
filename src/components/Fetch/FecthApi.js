import React, { useState, useEffect } from 'react';
import StyleType from '../body/TypeSelector.module.css';
import StyleCardsPokemon from '../body/CardsPokemon.module.css';
import Pokemon1 from '../../img/pokemon/1.svg';
import IcoType from '../../img/poke-type/grass.svg';

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

export function PokemonApi() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    AllPokemons();
  }, []);

  const AllPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then((resp) => resp.json())
      .then((json) => setPokemon(json.results));
  };
  return (
    <>
      {pokemon.map((allPokemon, key) => (
        <li key={key}>
          <div className={StyleCardsPokemon.imagePokemon}>
            <img src={Pokemon1} alt="" />
          </div>
          <div className={StyleCardsPokemon.info}>
            <div>
              <span className={StyleCardsPokemon.id}>#001</span>
              <strong className={StyleCardsPokemon.PokemonName}>
                {allPokemon.name}
              </strong>
            </div>
            <div className={StyleCardsPokemon.icoType}>
              <img src={IcoType} alt="" />
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
