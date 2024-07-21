import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-auto bg-slate-500 flex items-center flex-row justify-around">
      <div className="h-24 flex items-center">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul className="flex flex-row gap-8">
          <li>
            <Link
              className="p-2 bg-orange-500 hover:bg-orange-300 transition-all text-white rounded-sm"
              href="#"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="p-2 bg-orange-500 hover:bg-orange-300 transition-all  text-white rounded-sm"
              href="#"
            >
              Nos prestations
            </Link>
          </li>
          <li>
            <Link
              className="p-2 bg-orange-500 hover:bg-orange-300 transition-all text-white rounded-sm"
              href="#"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
