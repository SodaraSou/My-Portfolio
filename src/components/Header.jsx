import { daralogo } from "../images";
import { navLinks } from "../constants";

function Header() {
  return (
    <header className="w-full bg-white text-black shadow-lg fixed z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 xl:px-0 xl:py-4">
        {/* <img src={daralogo} alt="Logo" className="w-10" /> */}
        <h1 className="text-2xl md:text-4xl font-bold">
          <span className="text-daraOrange">Sodara</span> Sou
        </h1>
        <nav className="hidden md:flex gap-10">
          {navLinks.map((nav, index) => (
            <a
              href={nav.id}
              className="hover:text-daraOrange cursor-pointer font-bold"
              key={index}
            >
              {nav.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
