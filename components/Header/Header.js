import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderToggleThemeController from "./HeaderToggleThemeController/HeaderToggleThemeController";

const Header = () => {
  return (
    <header className='navbar bg-white'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/'>Accueil</Link>
            </li>
            <li>
              <Link href='/nos-services'>Nos services</Link>
            </li>
            <li>
              <Link href='/mon-futur-site'>Mon futur site</Link>
            </li>
            <li>
              <Link href='/nos-modeles'>Nos modèles</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost text-xl'>
          <Image
            src='/images/logo/logo-digi-house-mini.png'
            width={50}
            height={50}
            alt='logo initial'
            className='object-contain transition-transform duration-300 hover:scale-110'
          />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/nos-services'>Nos services</Link>
          </li>
          <li>
            <Link href='/mon-futur-site'>Mon futur site</Link>
          </li>
          <li>
            <Link href='/nos-modeles'>Nos modèles</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <HeaderToggleThemeController />
      </div>
    </header>
  );
};

export default Header;
