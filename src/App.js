import React from 'react';
import Pokemons from './components/body/Pokemons';
import Footer from './components/footer/Footer';
import Banner from './components/top/Banner';
import Header from './components/top/Header';
import Types from './components/body/TypesImage';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Pokemons {...Types} />
      <Footer />
    </div>
  );
}
