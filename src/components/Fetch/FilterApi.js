import React, { useState, useEffect } from 'react';
import StyleType from '../body/TypeSelector.module.css';
import StyleCardsPokemon from '../body/CardsPokemon.module.css';

const Pokemon = (props) => {
  const { pokemon } = props;
  const [pokemonType, setPokemonType] = useState([]);
  const styleBackground = pokemon.types[0].type.name;

  useEffect(() => {
    AllPokemonsType();
  }, []);

  const AllPokemonsType = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
      .then((resp) => resp.json())
      .then((json) => setPokemonType(json.types));
  };
  return (
    <>
      <li className={styleBackground}>
        <div className="imagePokemon">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
        </div>
        <div className={StyleCardsPokemon.info}>
          <div>
            <span className={StyleCardsPokemon.id}>#{pokemon.id}</span>
            <strong className={StyleCardsPokemon.PokemonName}>
              {pokemon.name}
            </strong>
          </div>
          <div className={StyleCardsPokemon.icoType}>
            {pokemon.types.map((types, index) => {
              return (
                <div key={index} className={StyleCardsPokemon.icoGrid}>
                  <img
                    src={`https://codeboost.com.br/projetos/pokeapi/img/${types.type.name}.svg`}
                    alt={types.type.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </li>
    </>
  );
};

export default Pokemon;
