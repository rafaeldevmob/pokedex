import React from 'react';
import Style from './style_module/CardsPokemon.module.css';

const PokemonCard = (props) => {
  const { pokemon } = props;
  const styleBackground = pokemon.types[0].type.name;
  let imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  if (pokemon.id < 650) {
    return (
      <>
        <li className={styleBackground}>
          <div className="imagePokemon">
            <img src={imagePokemon} alt={pokemon.name} />
          </div>
          <div className={Style.pokemonCard_info_wrapper}>
            <div>
              <span className={Style.pokemonCard_id}>#{pokemon.id}</span>
              <strong className={Style.pokemonCard_text}>{pokemon.name}</strong>
            </div>
            <div className={Style.pokemonCard_icoType}>
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
  }
};

export default PokemonCard;
