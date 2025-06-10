import React from 'react';

function ProductCard({ nombre, precio, imagen }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '220px',
      textAlign: 'center'
    }}>
      <img
        src={imagen}
        alt={nombre}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
      <h3 style={{ margin: '0.5rem 0' }}>{nombre}</h3>
      <p style={{ margin: '0.5rem 0' }}>Precio: ${precio}</p>
      <button style={{
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;
