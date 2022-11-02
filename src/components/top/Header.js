import React from 'react';
import Logo from '../../img/logo.svg';
import StyleHeader from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={StyleHeader.header}>
        <div className="contain">
          <img src={Logo} alt="logo Pokemon" />
        </div>
      </header>
    </>
  );
}
