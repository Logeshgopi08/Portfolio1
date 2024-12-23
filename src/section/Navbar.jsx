import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onClick = () => {} }) => {
    <ul className="nav-ul">
  
     
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>;
  };



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 z-10">
      <div className="mx-auto max-w-7xl">
        <div className="py-5 flex justify-between items-center mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Logeshh
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            onClick={toogleMenu}
          >
            <img
              className="w-6 h-6"
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toogle-menu"
            />
          </button>

          
        </div>
      </div>

     
    </header>
  );
};

export default Navbar;
