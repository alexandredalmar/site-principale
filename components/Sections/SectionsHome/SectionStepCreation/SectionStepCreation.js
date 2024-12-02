import { ArrowDown } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button/Button";
import Image from "next/image";

const SectionStepCreation = () => {
  return (
    <div>
      <section className='relative z-20 overflow-hidden rounded-xl bg-indigo-100 px-16 py-16'>
        <div className='mb-8 text-center'>
          <h3 className='text-5xl'>
            Comment ça marche ? Les étapes de votre site web
          </h3>
        </div>

        <div className='flex flex-wrap gap-[32px]'>
          <div className='w-[calc((100%-2*32px)/3)] rounded-lg bg-indigo-500 p-8'>
            <h4 className='mb-3 text-xl font-bold text-white'>
              1. Expliquez-nous votre projet
            </h4>
            <p className='text-white'>
              Partagez avec nous vos idées, vos besoins et vos objectifs. Que
              vous souhaitiez un site vitrine, un e-commerce ou une plateforme
              sur mesure, nous sommes à l’écoute pour bien comprendre vos
              attentes.
            </p>
          </div>
          <div className='w-[calc((100%-2*32px)/3)] rounded-lg bg-indigo-500 p-8'>
            <h4 className='mb-3 text-xl font-bold text-white'>
              2. Prise de rendez-vous
            </h4>
            <p className='text-white'>
              Une fois vos besoins identifiés, nous fixons un rendez-vous pour
              discuter plus en détail des spécificités de votre projet. C’est
              l’occasion idéale pour poser toutes vos questions et affiner votre
              vision.
            </p>
          </div>
          <div className='w-[calc((100%-2*32px)/3)] rounded-lg bg-indigo-500 p-8'>
            <h4 className='mb-3 text-xl font-bold text-white'>
              3. Établissement du devis
            </h4>
            <p className='text-white'>
              Nous vous fournissons un devis clair et détaillé, adapté à vos
              exigences et à votre budget. Pas de surprise : vous savez
              exactement ce que vous payez et ce que vous obtiendrez.
            </p>
          </div>
          <div className='w-[calc((100%-2*32px)/3)] rounded-lg bg-indigo-500 p-8'>
            <h4 className='mb-3 text-xl font-bold text-white'>
              4. Création de votre site
            </h4>
            <p className='text-white'>
              Notre équipe se met au travail pour concevoir un site unique et
              professionnel. De la conception graphique au développement
              technique, chaque étape est réalisée avec soin pour répondre à vos
              attentes.
            </p>
          </div>
          <div className='w-[calc((100%-2*32px)/3)] rounded-lg bg-indigo-500 p-8'>
            <h4 className='mb-3 text-xl font-bold text-white'>
              5. Formation back office
            </h4>
            <p className='text-white'>
              Pour que vous soyez autonome, nous vous formons à l’utilisation du
              back-office de votre site. Vous pourrez ainsi mettre à jour vos
              contenus en toute simplicité et gérer votre site au quotidien.
            </p>
          </div>

          <div className='w-[calc((100%-2*32px)/3)] rounded-lg bg-indigo-500 p-8'>
            <h4 className='mb-3 text-xl font-bold text-white'>
              6. Entretien de votre site
            </h4>
            <p className='text-white'>
              Votre site évolue avec le temps, et nous sommes là pour vous
              accompagner. Mise à jour des contenus, sécurité, maintenance ou
              améliorations : nous assurons un suivi régulier pour que votre
              site reste performant et à jour.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionStepCreation;
