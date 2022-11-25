import React from 'react';
import Style from './style_module/CardsPokemon.module.css';

const ButtonShowMore = (props) => {
  const { ShowMorePokemon } = props;
  return (
    <div className="contain">
      <button onClick={ShowMorePokemon} className={Style.pokedex_button}>
        Load more
      </button>
    </div>
  );
};

export default ButtonShowMore;
