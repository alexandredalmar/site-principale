import Image from "next/image";
import React from "react";

const SectionBannerText = () => {
  return (
    <div className='z-10 flex items-center justify-center gap-4 space-y-5 rounded-md bg-gradient-to-r from-indigo-200 to-indigo-400 px-8 py-44'>
      <div className='max-w-[700px]'>
        <p className='mb-3 text-6xl font-medium'>La Maison digital</p>

        <p className='text-5xl font-medium'>
          Spécialisé dans la création de <span>site </span>
          <span>performant</span>
        </p>
      </div>

      <div className='flex justify-center'>
        <Image
          src='/images/logo/logo-digi-house.png'
          alt='logo Digitale House'
          width={500}
          height={500}
          className='flex h-auto w-[300px] justify-center object-contain'
        />
      </div>
    </div>
  );
};

export default SectionBannerText;
