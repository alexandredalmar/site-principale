import Image from "next/image";
import React from "react";

const SectionBannerText = () => {
  return (
    <div className='z-10 flex items-center justify-around gap-4 space-y-5 rounded-xl bg-gradient-to-r from-indigo-200 to-indigo-400 px-8 py-44'>
      <div className='max-w-[700px]'>
        <p className='mb-3 text-6xl font-medium'>
          La Maison <span className='text-white'>Digital</span>
        </p>

        <p className='mb-3 text-5xl font-medium'>Découvrez nos créations</p>
        <p>Vous avez besoin de renseignement ? </p>
        <p>
          Nous sommes la pour vous aider <span>Contactez-nous</span>
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
