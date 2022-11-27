import React, { useEffect, useState } from 'react';
import {
  getPokemonData,
  getPokemons,
  searchPokemon,
  getTypesPokemons,
  getFilterTypesPokemons,
} from '../api';
import Logo from '../img/logo.svg';
import Banner from './Banner';
import { NotFound } from './LoadFound';
import Pokedex from './Pokedex';
import SearchBar from './SearchBar';
import Style from './style_module/Header.module.css';

export default function Header() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [filterButton, setFilterButton] = useState([]);
  const [showMore, setShowMore] = useState([]);

  const loadMorePokemon = 9;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(loadMorePokemon + showMore, 0);
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
    fetchTypesPokemon();
  }, [showMore]);

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

  const filterTypesPokemon = async () => {
    try {
      setLoading(true);
      const data = await getFilterTypesPokemons(filterButton);
      const promises = data.pokemon.map((pokemons) => {
        return pokemons.pokemon.name;
      });
      setFilterTypes(promises);
      const filteredPokemon = promises.map(async (pokemon) => {
        return await searchPokemon(pokemon);
      });
      const results = await Promise.all(filteredPokemon);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log('filterPokemons', error);
    }
  };
  useEffect(() => {
    if (filterButton.length !== 0) filterTypesPokemon();
  }, [filterButton]);
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
        <NotFound />
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          types={types}
          setFilterButton={setFilterButton}
          setShowMore={setShowMore}
          showMore={showMore}
          fetchPokemons={fetchPokemons}
        />
      )}
    </>
  );
}
