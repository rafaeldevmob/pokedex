import React from 'react';
import PokemonCard from './PokemonCards';
import CountPokemon from './CountPokemon';
import TypeSelector from './TypeSelector';
import Style from './style_module/CardsPokemon.module.css';
import ButtonShowMore from './ButtonShowMore';

const Pokedex = (props) => {
  const { pokemons, loading, types, showMore, setShowMore, setFilterButton } =
    props;
  const ShowMorePokemon = (event) => {
    event.preventDefault();
    setShowMore(Number(showMore + 9));
  };
  const FilterTypePokemon = (event) => {
    let nameType = event.target.innerHTML;
    if (nameType !== '' && nameType !== 'All') setFilterButton(nameType);
  };

  return (
    <>
      <main className="pokedex contain">
        <TypeSelector types={types} FilterTypePokemon={FilterTypePokemon} />
        <div className={Style.pokedex_right_wrapper}>
          <CountPokemon />
          {loading ? (
            <div>loading...</div>
          ) : (
            <ul className={Style.pokedex_cardsPokemon}>
              {pokemons &&
                pokemons.map((pokemon, index) => {
                  return <PokemonCard pokemon={pokemon} key={index} />;
                })}
            </ul>
          )}

          <ButtonShowMore ShowMorePokemon={ShowMorePokemon} />
        </div>
      </main>
    </>
  );
};

export default Pokedex;
