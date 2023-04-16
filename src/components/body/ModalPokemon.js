import React from 'react';
import Style from '../style_module/ModalPokemon.module.css';
import Background from '../style_module/CardsPokemon.module.css';
import { CloseIcon } from '../../img/icon/closeIcon';

const ModalPokemon = (props) => {
  const { setShowModal, pokemonStats } = props;
  const { id, name, types, abilities, sprites, stats } = pokemonStats;
  const styleBackground = types[0].type.name;

  console.log(types);

  function onClose() {
    setShowModal(false);
  }
  return (
    <section className={Style.cardsPokemon_modal}>
      <div className={Style.cardsPokemon_modal_context}>
        <div onClick={onClose} className={Style.cardsPokemon_modal_closeIcon}>
          <CloseIcon />
        </div>

        <div
          className={`${Style.cardsPokemon_modal_images} ${styleBackground}`}
        >
          <div className={`imagePokemon ${Style.modal_imagePokemon}`}>
            <img src={sprites.other.home.front_default} alt={name} />
          </div>
        </div>

        <div className={Style.cardsPokemon_modal_texts}>
          <div className={Style.cardsPokemon_modal_title}>
            <h2>{name}</h2>
            <span>
              #
              {id < 10
                ? `00${id}`
                : id > 10 && id < 100
                ? `0${id}`
                : id > 100
                ? `${id}`
                : null}
            </span>
          </div>
          <ul className={`${Style.cardsPokemon_modal_types} type_background`}>
            {types.map(({ type }, index) => {
              return (
                <li
                  key={index}
                  className={` ${Style.modal_types_text} ${type.name}`}
                >
                  {type.name}
                </li>
              );
            })}
          </ul>
          <ul>
            <h4 className={Style.cardsPokemon_modal_subtitle}>Abilities</h4>
            <div className={Style.cardsPokemon_modal_ability}>
              {abilities.map(({ ability }, index) => {
                return <li key={index}>{ability.name}</li>;
              })}
            </div>
          </ul>
          <ul>
            <h4 className={Style.cardsPokemon_modal_subtitle}>Stats</h4>
            <div className={Style.cardsPokemon_modal_stats}>
              <div>
                {stats.map((status, index) => {
                  return (
                    <div
                      key={index}
                      className={Style.cardsPokemon_modal_stats_text}
                    >
                      <li>{status.stat.name}</li>
                      <li>{status.base_stat}</li>
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModalPokemon;
