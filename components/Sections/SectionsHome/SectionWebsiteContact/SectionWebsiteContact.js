import { ArrowDown } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

const SectionWebsiteContact = () => {
  return (
    <div>
      <section className='relative z-20 overflow-hidden rounded-xl bg-indigo-50 p-16 transition-all duration-500'>
        <div className='flex w-full gap-10'>
          <div className='relative z-20 flex w-[60%] flex-col justify-center'>
            <h3 className='flex flex-col text-5xl dark:text-white sm:text-6xl'>
              Chez Digital House, votre vision prend vie
            </h3>

            <div className='mt-8 flex flex-col gap-5'>
              <p>
                Vous avez une idée précise pour votre futur site web ? Ou vous
                collaborez déjà avec des spécialistes du marketing ou une
                agence ?
              </p>
              <p>
                {" "}
                Chez <span className='font-bold'> Digital House </span>, nous
                faisons équipe avec vous pour transformer vos inspirations en
                une solution web sur mesure. Qu’il s’agisse de vos croquis,
                d’une maquette ou des directives de vos prestataires, notre
                expertise nous permet de concrétiser vos idées et d’en faire un
                site unique, performant et fidèle à votre vision. Ensemble,
                construisons votre succès digital !
              </p>

              <p className='text-2xl font-medium'>
                Contactez-nous dès aujourd'hui et transformons vos idées en
                réalité
              </p>
              <div>
                <Button link='#' styleType='secondary' text='Contactez-nous' />
              </div>
            </div>
          </div>
          <figure className='flex h-auto w-[40%] justify-center rounded-lg bg-white object-contain p-5'>
            <Image
              src='/images/accueil/websiteContact.svg'
              alt='Image section contact '
              width={500}
              height={500}
              className='w-full object-contain'
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default SectionWebsiteContact;
