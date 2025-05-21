import react from 'react';

const tituloPrincipal = ({ children, className }) => {
    return (
        <h3 className={`text-9xl font-bold  ${className}`}>
            {children}
        </h3>
    );
}

export default tituloPrincipal;