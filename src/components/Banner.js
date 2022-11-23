import React from 'react';
import Style from './style_module/Header.module.css';
import Stars from '../img/luzes.svg';
import Pokeball from '../img/img-pokeball.png';

export default function Banner() {
  return (
    <>
      <div className={Style.header_banner}>
        <div className={Style.header_banner_background}>
          <div className={Style.header_banner_text}>
            <h1 className={Style.header_title}>Who is that Pokémon?</h1>
            <p className={Style.header_paragraph}>
              The perfect guide for those who want to hunt Pokémons around the
              world
            </p>
            <div className={Style.header_banner_pokeball}>
              <img
                src={Stars}
                className={Style.header_banner_star}
                alt="lights"
              />
              <img src={Pokeball} alt="pokeball" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
