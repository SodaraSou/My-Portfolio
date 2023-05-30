import { daralogo } from "../images";
import { navLinks } from "../constants";

function Header() {
  return (
    <nav className="w-full bg-white text-black shadow-lg font-bold fixed top-0 left-0 z-100">
      <div className="max-w-7xl mx-auto p-[30px] px-10 flex justify-between md:items-center">
        <img src={daralogo} alt="logo" className="h-10" />
        <div className="flex flex-col text-lg space-y-5 md:space-y-0 md:space-x-10 md:flex-row hidden md:block">
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
