'use client';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="text-xl font-bold text-regalBlue">
          <Link href="/">
            <span className="cursor-pointer">LOGO</span>
          </Link>
        </div>

        {/* Links a la derecha */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <Link href="#nosotros">
            <span className="hover:text-gold-butter cursor-pointer">Nosotros</span>
          </Link>
          <Link href="#contacto">
            <span className="hover:text-gold-butter cursor-pointer">Contáctanos</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
