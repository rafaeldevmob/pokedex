import React from 'react';

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt={pokemon.name}
        />
        <div>#{pokemon.id}</div>
        <div>{pokemon.name}</div>
        <div className="type">
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
    </>
  );
};

export default Pokemon;
