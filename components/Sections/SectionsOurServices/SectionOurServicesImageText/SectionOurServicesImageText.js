import Image from "next/image";
import React from "react";

const SectionOurServicesImageText = () => {
  return (
    <div className='hero h-auto'>
      <div className='hero-content flex-col gap-8 lg:flex-row'>
        <Image
          src='/images/nos-services/informatique.webp'
          width={1001}
          height={1500}
          priority
          alt='Informatique'
          className='my-12 max-w-sm rounded-lg shadow-sm-light grayscale md:max-w-2xl'
        />
        <div>
          <h1 className='my-8 border-l-8 pl-4 text-7xl font-bold md:text-9xl'>
            <span className='text-sky-500 [text-shadow:_0_1px_0_rgb(235_0_0_/_40%)]'>
              N
            </span>
            os <br /> <span className='text-pink-500'>S</span>ervices
          </h1>
          <h2 className='text-3xl text-white'>
            Création de Sites Internet Performants
          </h2>
          <p className='py-6'>
            Nous sommes spécialisés dans la création de sites internet
            performants en utilisant la plateforme Payload. Notre équipe
            d'experts travaille avec vous pour concevoir et développer des sites
            web qui répondent parfaitement à vos besoins et à ceux de votre
            entreprise. Que vous ayez besoin d'un site vitrine, d'une boutique
            en ligne ou d'un portail personnalisé, nous avons les compétences
            pour transformer vos idées en réalité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOurServicesImageText;
