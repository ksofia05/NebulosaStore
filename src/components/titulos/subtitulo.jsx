import React from "react";

const subtitulo = ({ children, className }) => {
    return (
        <h3 className={`text-3xl font-bold  ${className}`}>
            {children}
        </h3>
    );
}
export default subtitulo;