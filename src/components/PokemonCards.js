import React from 'react';
import StyleCardsPokemon from './style_module/CardsPokemon.module.css';

const PokemonCard = (props) => {
  const { pokemon } = props;
  const styleBackground = pokemon.types[0].type.name;
  return (
    <>
      <li className={styleBackground}>
        <div className="imagePokemon">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
          />
        </div>
        <div className={StyleCardsPokemon.pokemonCard_info_wrapper}>
          <div>
            <span className={StyleCardsPokemon.pokemonCard_id}>
              #{pokemon.id}
            </span>
            <strong className={StyleCardsPokemon.pokemonCard_text}>
              {pokemon.name}
            </strong>
          </div>
          <div className={StyleCardsPokemon.pokemonCard_icoType}>
            {pokemon.types.map((types, index) => {
              return (
                <div key={index}>
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

export default PokemonCard;
