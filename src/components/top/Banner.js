import React from 'react';
import StyleBanner from './Banner.module.css';

export default function Banner() {
  return (
    <>
      <section className={StyleBanner.bannerArea}>
        <div className={StyleBanner.backgroundRed}></div>
        <h1>Test</h1>
      </section>
    </>
  );
}
