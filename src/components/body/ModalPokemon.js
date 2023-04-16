import React from 'react';
import Style from '../style_module/ModalPokemon.module.css';
import { CloseIcon } from '../../img/icon/closeIcon';

const ModalPokemon = (props) => {
  const { setShowModal, pokemonStats } = props;
  const { id, name, types, ability, sprites, stats } = pokemonStats;

  function onClose() {
    setShowModal(false);
  }
  return (
    <section className={Style.cardsPokemon_modal}>
      <div className={Style.cardsPokemon_modal_context}>
        <div onClick={onClose} className={Style.cardsPokemon_modal_closeIcon}>
          <CloseIcon />
        </div>
        <div className={Style.cardsPokemon_modal_title}>
          <h2>{name}</h2>
        </div>
      </div>
    </section>
  );
};

export default ModalPokemon;
