import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="contaier mx-auto px-4 h-24 flex items-center justify-between">

      <div className="font-black">LOGO</div>
      
      <nav className="space-x-4">
        <NavLink className="text-sm hover:underline" to="/">Home</NavLink>

        <NavLink className="text-sm hover:underline" to="/about">Sobre nós</NavLink>

        <NavLink className="text-sm hover:underline" to="/info">Informações</NavLink>

        <NavLink className="text-sm hover:underline" to="/contact">Contato</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
