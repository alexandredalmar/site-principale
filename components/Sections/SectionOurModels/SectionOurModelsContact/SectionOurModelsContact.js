import { ArrowDown } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

const SectionHomeContact = () => {
  return (
    <div>
      <section className='relative z-20 grid grid-cols-3 gap-10 overflow-hidden transition-all duration-500'>
        <div className='col-span-2 flex flex-col gap-10 rounded-xl bg-indigo-50 px-16 py-16'>
          <div className='relative z-20 flex flex-col justify-center'>
            <h3 className='flex flex-col text-5xl dark:text-white sm:text-6xl'>
              Aucun site ne vous convient ? <br />
              Pas de panique !
            </h3>

            <div className='mt-8 flex flex-col gap-5'>
              <p>
                <span className='font-bold'>
                  Nous sommes là pour vous aider, La Maison digitale offre
                  également une prestation sur-mesure pour être certain de
                  répondre à vos attentes.
                </span>
                Confiez-nous la création de votre site internet ! Que vous soyez
                une entreprise, un particulier ou une association, nous
                concevons des sites web adaptés à vos besoins et à vos
                ambitions.
              </p>
              <p className='text-2xl font-medium'>
                Contactez-nous dès aujourd'hui et transformons vos idées en
                réalité.
              </p>
              <div>
                <Button link='#' styleType='secondary' text='En savoir +' />
              </div>
            </div>
          </div>
          <Image
            src='/nos-models-contact.svg'
            alt='Image section contact'
            width={500}
            height={500}
            className='flex h-auto w-[600px] justify-center rounded-lg object-contain'
          />
        </div>

        <div className='col-span-1 flex flex-col gap-10 rounded-xl bg-indigo-50 px-16 py-16'>
          <h3>Prenez rendez-vous</h3>
        </div>
      </section>
    </div>
  );
};

export default SectionHomeContact;
