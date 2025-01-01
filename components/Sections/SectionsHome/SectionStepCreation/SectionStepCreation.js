import React from "react";

const StepCard = ({ number, title, subTitle, description, image }) => (
  <div className='md:w-[calc(33.333% - 32px)] flex w-full flex-col gap-4 rounded-lg bg-indigo-50 p-6'>
    <div className='flex items-center gap-6'>
      <figure className='rounded-lg bg-white p-4'>
        <img src={image} alt={title} className='h-auto w-[100px]' />
      </figure>
      <div>
        <h4 className='text-2xl font-bold text-black'>{title}</h4>
        {subTitle && (
          <h5 className='text-l font-semibold text-gray-600'>{subTitle}</h5>
        )}
      </div>
    </div>
    <div className='flex flex-col gap-2'>
      <p className='text-black'>{description}</p>
    </div>
  </div>
);

const SectionStepCreation = () => {
  const steps = [
    {
      number: 1,
      title: "Votre projet",
      subTitle: "On en parle",
      image: "/images/accueil/step-creation/explication.svg",
      description:
        "Partagez avec nous vos idées, vos besoins et vos objectifs. Que vous souhaitiez un site vitrine, un e-commerce ou une plateforme sur mesure, nous sommes à l’écoute pour bien comprendre vos attentes.",
    },
    {
      number: 2,
      title: "Rendez-vous",
      subTitle: "On s'organise",
      image: "/images/accueil/step-creation/rdv.svg",
      description:
        "Une fois vos besoins identifiés, nous fixons un rendez-vous pour discuter plus en détail des spécificités de votre projet. C’est l’occasion idéale pour poser toutes vos questions et affiner votre vision.",
    },
    {
      number: 3,
      title: "Devis",
      subTitle: "Transparent",
      image: "/images/accueil/step-creation/devis.svg",
      description:
        "Nous vous fournissons un devis clair et détaillé, adapté à vos exigences et à votre budget. Pas de surprise : vous savez exactement ce que vous payez et ce que vous obtiendrez.",
    },
    {
      number: 4,
      title: "Création",
      subTitle: "Sur mesure",
      image: "/images/accueil/step-creation/creation.svg",
      description:
        "Notre équipe se met au travail pour concevoir un site unique et professionnel. De la conception graphique au développement technique, chaque étape est réalisée avec soin pour répondre à vos attentes.",
    },
    {
      number: 5,
      title: "Formation",
      subTitle: "Autonomie",
      image: "/images/accueil/step-creation/formation.svg",
      description:
        "Pour que vous soyez autonome, nous vous formons à l’utilisation du back-office de votre site. Vous pourrez ainsi mettre à jour vos contenus en toute simplicité et gérer votre site au quotidien.",
    },
    {
      number: 6,
      title: "Support",
      subTitle: "Suivi régulier",
      image: "/images/accueil/step-creation/support.svg",
      description:
        "Votre site évolue avec le temps, et nous sommes là pour vous accompagner. Mise à jour des contenus, sécurité, maintenance ou améliorations : nous assurons un suivi régulier pour que votre site reste performant et à jour.",
    },
  ];

  return (
    <div>
      <section className='relative z-20 overflow-hidden rounded-xl px-16 py-16'>
        <div className='mb-10 text-center'>
          <h3 className='flex flex-col gap-3 text-5xl'>
            <span>Comment ça marche ?</span>
            <span>Les étapes de votre site web</span>
          </h3>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              subTitle={step.subTitle} // Transmission du sous-titre ici
              description={step.description}
              image={step.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionStepCreation;
