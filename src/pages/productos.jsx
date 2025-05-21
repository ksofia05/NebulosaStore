import React from "react";
import productos from '../data/productos';
import ProductoCard from '../components/productos/ProductoCard'
import Titulo from '../components/titulos/tituloPrincipal'

const Productos = () => {
     return (
    <div>
        <Titulo children="Nuestros Productos" className="text-black text-center pb-5"/>
      <div className="flex flex-wrap gap-8 justify-center">
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
export default Productos;