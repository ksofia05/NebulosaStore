import react from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="text-center fixed top-0 left-0 backdrop-blur-xl bg-white/10 ml-5 p-6 my-5 shadow-lg rounded-3xl text-black ">
            <ul className="flex flex-col text-center">
                <li className="mb-4 pt-63 font-bold">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mb-4 font-bold">
                    <Link to="/productos" >Productos</Link>
                </li>
                <li className="mb-4 pb-63 font-bold">
                    <Link to="/pasarela">Pasarela</Link>
                </li>
                <p>
                &copy;Nebula
            </p>
            </ul>
            
    </nav>
    );
}

export default Navbar;  