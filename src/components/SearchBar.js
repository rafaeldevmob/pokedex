import React, { useState } from 'react';
import Style from './style_module/Header.module.css';
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
        <div className={Style.search_wrapper}>
          <h2>Select your Pokémon</h2>
          <div className={Style.search_input}>
            <input
              type="text"
              placeholder="Search name our pokemon"
              onChange={onChangeHandler}
            />
            <button
              type="button"
              className={Style.search_input_icon}
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
