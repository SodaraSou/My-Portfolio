import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full mb-5 hidden md:block">
      <nav className="max-w-7xl mx-auto md:p-10 flex flex-col md:flex-row justify-center items-center md:justify-between space-y-5 md:space-y-0">
        <h1 className="text-5xl text-daraOrange font-bold">Sodara</h1>
        <div className="flex flex-col text-xl md:text-2xl space-y-5 md:space-y-0 md:space-x-10 md:flex-row items-center">
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
      </nav>
    </div>
  );
}

export default Header;
