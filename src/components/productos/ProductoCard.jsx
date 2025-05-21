import React from 'react';

const ProductoCard = ({ producto }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:scale-105 transition-transform duration-300">
      <img src={producto.imagen} alt={producto.nombre} className="h-48 w-full object-cover" />
      <div className="p-4 text-black">
        <h3 className="text-xl font-semibold mb-1">{producto.nombre}</h3>
        <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
        <p className="text-lg font-bold text-purple-500">${producto.precio.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductoCard;
