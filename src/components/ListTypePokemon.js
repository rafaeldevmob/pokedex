import React from 'react';
import Style from './style_module/Pokemons.module.css';

const ListTypePokemon = (props) => {
  const { type } = props;
  return (
    <>
      <li className={type}>
        <button className={Style.pokedex_typePokemon}>
          <img src="" alt={type} className={Style.pokedex_typePokemon_icon} />
          <span className={Style.pokedex_typePokemon_text}>{type}</span>
        </button>
      </li>
    </>
  );
};

export default ListTypePokemon;
