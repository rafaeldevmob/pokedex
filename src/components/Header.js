import React, { useEffect, useState } from 'react';
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
  getTypesPokemons,
} from '../api';
import Logo from '../img/logo.svg';
import Banner from './Banner';
import Pokedex from './Pokedex';
import SearchBar from './SearchBar';
import Style from './style_module/Header.module.css';

export default function Header() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('fetchPokemons', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
    }
    setLoading(false);
  };

  const fetchTypesPokemon = async () => {
    try {
      const data = await getTypesPokemons();
      const promises = data.results.map((type) => {
        return type.name;
      });
      setTypes(promises);
    } catch (error) {
      console.log('TypePokemons', error);
    }
  };

  useEffect(() => {
    fetchTypesPokemon();
  }, []);

  return (
    <>
      <header>
        <nav className={Style.header_navbar}>
          <img src={Logo} alt="Pokemon" />
        </nav>
        <Banner />
      </header>
      <SearchBar onSearch={onSearchHandler} />
      {notFound ? (
        <div>Pokemon Not Exist</div>
      ) : (
        <Pokedex pokemons={pokemons} loading={loading} types={types} />
      )}
    </>
  );
}
