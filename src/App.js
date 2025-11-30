// src/App.js
import React from 'react';
import ProductCard from './components/ProductCard'; // ajusta la ruta si lo tienes en /components

export default function App() {
  return (
    <div style={{ padding: 20, background: '#f5f6f8', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Demo ProductCard</h1>

      {/* Disponible */}
      <ProductCard initialSoldOut={false} />

      {/* Esgotat */}
      <ProductCard initialSoldOut={true} />
    </div>
  );
}
