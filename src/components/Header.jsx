import { daralogo } from "../images";
import { navLinks } from "../constants";

function Header() {
  return (
    <nav className="w-full bg-white text-black shadow-lg font-bold fixed top-0 left-0 z-100">
      <div className="max-w-7xl mx-auto p-[20px] md:p-[30px] flex justify-between md:items-center">
        <img src={daralogo} alt="logo" className="h-10" />
        <div className="md:flex flex-col text-lg space-y-5 md:space-y-0 md:space-x-10 md:flex-row hidden">
          {navLinks.map((nav, index) => (
            <a
              href={nav.id}
              className="hover:text-daraOrange cursor-pointer"
              key={index}
            >
              {nav.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
