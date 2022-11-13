import React, { useState, useEffect } from 'react';
import Pokemons from './components/body/Pokemons';
import Footer from './components/footer/Footer';
import Banner from './components/top/Banner';
import Header from './components/top/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Pokemons />
      <Footer />
    </div>
  );
}
