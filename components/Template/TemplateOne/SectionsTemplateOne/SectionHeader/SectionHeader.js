import React from "react";
import Image from "next/image";

const SectionHeader = ({
  imageUrl,
  selectedColor,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <header
      className='relative'
      style={{ backgroundColor: selectedColor }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='flex items-center justify-between p-4'>
        <Image
          src={imageUrl}
          alt='Uploaded Logo'
          width={500}
          height={500}
          className='h-auto w-28'
        />
        <nav>
          <ul className='flex flex-row items-center gap-8'>
            <li>
              <span className='text-white'>Accueil</span>
            </li>
            <li>
              <span className='text-white'>Services</span>
            </li>
            <li>
              <span className='text-white'>Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SectionHeader;
