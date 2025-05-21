import React from 'react';
import Navbar from '../components/navbar/navbar'
import background from '../../public/background.png';

const Layout = ({ children }) => {
  return (
    <div className="relative flex h-screen overflow-hidden pl-41 py-5 pr-5 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}
      ></div>
      <div className="relative flex h-full w-full">
        <Navbar />
        <main className="flex-1 pl-5 pt-5 pb-5 pr-5   overflow-auto bg-white/10 backdrop-blur-md rounded-3xl text-white">
          {children}
        </main>
      </div>
    </div>
  );
};


export default Layout;
