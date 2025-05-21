import React from 'react';
import TituloPrincipal from '../components/titulos/tituloPrincipal.jsx';
import Subtitulo from '../components/titulos/subtitulo.jsx';
import Imagen from '../components/imagenes/imagen.jsx';
import ImagenHome from '../../public/homeImage.png';
import ImagenExtra from '../../public/homeImageSaco.png';
import Imagenbuso from '../../public/imagebuso.png';


const Inicio = () => {
    return (
        <div className="relative">
            <div className="z-0">
                <TituloPrincipal children="HOME" className="text-black text-center"/>
                <Subtitulo children="Bienvenido a Nebula Store" className="text-black text-center py-5"/>
                <p className="text-center pb-5 text-black">Aquí encontrarás una amplia variedad de productos para satisfacer todas tus necesidades</p>
                <Imagen 
                    src={ImagenExtra} 
                    className="shadow-lg hover:scale-101 transition-transform duration-300"
                />
            </div>
            <div className="absolute top-62 left-180 w-135">
                <Imagen
                    src={ImagenHome}
                    className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 "
                />
                <Subtitulo children="Nuestras Ofertas" className="text-black text-center pt-5"/>
                <Imagen
                    src={Imagenbuso}
                    className="rounded-3xl hover:scale-105 transition-transform duration-300 pt-2 "
                />
            </div>
        </div>
    );
};

export default Inicio;