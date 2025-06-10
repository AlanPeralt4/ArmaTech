import React from 'react';
import ProductCard from '../components/ProductCard';
import laptopImg from '../assets/laptop.jpg';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Catálogo de Computadoras</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <ProductCard nombre="Laptop Gamer Ryzen 7" precio="850" imagen={laptopImg} />
        <ProductCard nombre="PC de Escritorio Intel i5" precio="620" imagen={laptopImg} />
      </div>
    </div>
  );
}

export default Home;
