import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='flex h-auto flex-row items-center justify-around bg-slate-500'>
      <div className='flex h-24 items-center'>
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul className='flex flex-row gap-8'>
          <li>
            <Link
              className='rounded-sm bg-orange-500 p-2 text-white transition-all hover:bg-orange-300'
              href='#'
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className='rounded-sm bg-orange-500 p-2 text-white transition-all hover:bg-orange-300'
              href='#'
            >
              Nos prestations
            </Link>
          </li>
          <li>
            <Link
              className='rounded-sm bg-orange-500 p-2 text-white transition-all hover:bg-orange-300'
              href='#'
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
