import React, { useState } from 'react';
import StylePokemon from '../body/Pokemons.module.css';
import SearchIcon from '../../img/lupa.svg';
import { searchPokemon } from '../Fetch/FecthApi';

export default function Search() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState('');
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <>
      <div className="contain">
        <div className={StylePokemon.searchBar}>
          <h2>Select your Pokémon</h2>
          <div className={StylePokemon.search}>
            <input
              type="text"
              placeholder="Search name our pokemon"
              onChange={onChangeHandler}
            />
            <button
              type="button"
              className={StylePokemon.icon}
              onClick={onButtonClickHandler}
            >
              <img src={SearchIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
