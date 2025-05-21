import react from 'react';

const Imagen = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`rounded-3xl ${className}`}
        />
    );
}

export default Imagen;