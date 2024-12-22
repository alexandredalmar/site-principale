import { ArrowDown } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

const SectionHomeContact = () => {
  return (
    <div>
      <section className='relative z-20 overflow-hidden rounded-xl bg-indigo-50 px-16 py-16 transition-all duration-500 hover:shadow-lg'>
        <div className='flex gap-10'>
          <div className='relative z-20 flex flex-col justify-center'>
            <h3 className='flex flex-col text-5xl dark:text-white sm:text-6xl'>
              Une solution sur-mesure pour votre projet
            </h3>

            <div className='mt-8 flex flex-col gap-5'>
              <p>
                <span className='font-bold'>Vous avez un projet en tête ?</span>
                Confiez-nous la création de votre site internet ! Que vous soyez
                une entreprise, un particulier ou une association, nous
                concevons des sites web adaptés à vos besoins et à vos
                ambitions.
              </p>
              <p className='text-2xl font-medium'>
                Contactez-nous dès aujourd'hui et transformons vos idées en
                réalité
              </p>
              <div>
                <Button link='#' styleType='secondary' text='En savoir +' />
              </div>
            </div>
          </div>
          <Image
            src='/images/accueil/lecompte_architecture.png'
            alt='Image section contact '
            width={500}
            height={500}
            className='flex h-auto w-[600px] justify-center rounded-lg object-contain'
          />
        </div>
      </section>
    </div>
  );
};

export default SectionHomeContact;
