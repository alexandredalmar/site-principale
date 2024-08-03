import Image from "next/image";
import React from "react";

const SectionHeader = ({ imageUrl, colors }) => {
  return (
    <header style={{ backgroundColor: colors.lightVibrant }}>
      <div className='flex items-center justify-between p-4'>
        <Image
          src={imageUrl}
          alt='Uploaded'
          width={500}
          height={500}
          className='h-auto w-28'
        />
        <nav>
          <ul className='flex flex-row items-center gap-8'>
            <li className=''>Accueil</li>
            <li className=''>Services</li>
            <li className=''>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SectionHeader;
