import React from 'react';

const Pasarela = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-lg ">
      <img 
        src="/soon.png" 
        alt="Pasarela Nebula" 
        className="w-full h-full object-cover bg-white/10 backdrop-blur-md rounded-3xl shadow-lg animate-pulse"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-lg animate-pulse">
          SOON
        </h2>
      </div>
    </div>
  );
};

export default Pasarela;
