import React from 'react';
import StyleFooter from './Footer.module.css';
import ImageLogo from '../../img/logo.svg';
import ImagePokeball from '../../img/img-pokeball.png';

export default function Footer() {
  return (
    <>
      <footer>
        <div className={StyleFooter.wrapper}>
          <div className={StyleFooter.logo}>
            <img src={ImageLogo} alt="logo" />
            <img
              src={ImagePokeball}
              alt="logo"
              className={StyleFooter.pokeball}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
