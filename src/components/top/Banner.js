import React from 'react';
import StyleBanner from './Banner.module.css';
import Stars from '../../img/luzes.svg';
import Pokeball from '../../img/img-pokeball.png';

export default function Banner() {
  return (
    <>
      <section className={StyleBanner.bannerArea}>
        <div className={StyleBanner.backgroundRed}>
          <div className={StyleBanner.contentArea}>
            <h1 className={StyleBanner.title}>Who is that Pokémon?</h1>
            <p className={StyleBanner.paragraph}>
              The perfect guide for those who want to hunt Pokémons around the
              world
            </p>
            <div className={StyleBanner.pokeballGrid}>
              <img src={Stars} className={StyleBanner.star} alt="lights" />
              <img src={Pokeball} alt="pokeball" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
