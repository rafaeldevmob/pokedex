import React from 'react';
import StyleType from './style_module/TypeSelector.module.css';
// import { TypeApi } from '../Fetch/FecthApi';
import All from '../img/poke-type/icon-all.svg';

export default function TypeSelector() {
  return (
    <>
      <div className={StyleType.leftContainer}>
        <ul>
          <li className="All">
            <button className={StyleType.type}>
              <img src={All} alt="all" className={StyleType.icon} />
              <span className={StyleType.text}>All</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
