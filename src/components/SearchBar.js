import React, { useState } from 'react';
import StylePokemon from './style_module/Pokemons.module.css';
import SearchIcon from '../img/lupa.svg';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <>
      <section className="contain">
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
      </section>
    </>
  );
};

export default SearchBar;
