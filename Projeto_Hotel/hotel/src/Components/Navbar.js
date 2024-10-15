import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container md:max-w-xl lg:max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-black text-2xl font-bold">
          LOGO
        </a>

        {/* Menu de Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLink className="text-black hover:text-gray-600" to="/">
            Home
          </NavLink>

          <NavLink className="text-black hover:text-gray-600" to="/about">
            Sobre nós
          </NavLink>

          <NavLink className="text-black hover:text-gray-600" to="/info">
            Informações
          </NavLink>

          <NavLink className="text-black hover:text-gray-600" to="/contact">
            Contato
          </NavLink>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <NavLink
          className="block text-black px-4 py-2 hover:bg-yellow-800 hover:text-white"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="block text-black px-4 py-2 hover:bg-yellow-800 hover:text-white"
          to="/about"
        >
          Sobre nós
        </NavLink>

        <NavLink
          className="block text-black px-4 py-2 hover:bg-yellow-800 hover:text-white"
          to="/info"
        >
          Informações
        </NavLink>

        <NavLink
          className="block text-black px-4 py-2 hover:bg-yellow-800 hover:text-white"
          to="/contact"
        >
          Contato
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
