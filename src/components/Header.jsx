import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../images/menu.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="w-full bg-daraBlack">
      <div className="max-w-7xl lg:container mx-auto p-5 md:p-10 flex justify-between md:items-center">
        <h1 className="text-3xl md:text-5xl text-daraOrange font-bold">
          Sodara
        </h1>
        <div className="flex flex-col text-xl md:text-2xl space-y-5 md:space-y-0 md:space-x-10 md:flex-row hidden md:block">
          <Link to="/" className="hover:text-daraOrange">
            Home
          </Link>
          <Link to="/about" className="hover:text-daraOrange">
            About
          </Link>
          <Link to="/project" className="hover:text-daraOrange">
            Project
          </Link>
          <Link to="/contact" className="hover:text-daraOrange">
            Contact
          </Link>
        </div>
        <div className="md:hidden sm:block flex items-center jusitfy-center">
          <img src={Menu} alt="menu" onClick={toggleMenu} />
        </div>
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-col p-6 bg-daraBlack absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl space-y-5`}
        >
          <Link to="/" className="hover:text-daraOrange">
            Home
          </Link>
          <Link to="/about" className="hover:text-daraOrange">
            About
          </Link>
          <Link to="/project" className="hover:text-daraOrange">
            Project
          </Link>
          <Link to="/contact" className="hover:text-daraOrange">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
