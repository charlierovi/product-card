// src/ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ initialSoldOut = false }) => {
  // 1) Estat de producte esgotat
  const [isSoldOut] = useState(initialSoldOut);

  // 2) Classe BEM amb modificador quan isSoldOut === true
  const cardClassName = `product-card${isSoldOut ? ' product-card--sold-out' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="product-image">
        {/* Pots deixar la URL que vulguis aquí */}
        <img
          src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_145332170?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
          alt="Producte Genèric"
        />
      </div>

      <div className="product-info">
        <h2 className="product-title">Auriculars Inalàmbrics Pro</h2>

        <p className="product-description">
          Cancel·lació de soroll avançada, 30 hores de bateria i so d'alta fidelitat.
          El disseny ergonòmic garanteix la màxima comoditat.
        </p>

        <div className="product-price-section">
          <span className="current-price">99,99 €</span>
          <span className="old-price">149,99 €</span>

          {/* Element separador invisible que creix i empeny l'etiqueta a la dreta */}
          <span className="price-spacer" aria-hidden="true"></span>

          {/* Etiqueta de descompte */}
          <span className="discount-badge">OFERTA</span>
      </div>


        {/* 4) Deshabilitar el botó i canviar el text quan estigui esgotat */}
        <button
          className="add-to-cart-btn"
          disabled={isSoldOut}
        >
          {isSoldOut ? 'Esgotat' : 'Afegir a la cistella'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
