import React from "react";

const StepCard = ({ number, title, description }) => (
  <div className='md:w-[calc(33.333% - 32px)] w-full rounded-lg bg-indigo-50 p-8 shadow-lg'>
    <h4 className='mb-3 text-xl font-bold text-black'>
      {number}. {title}
    </h4>
    <p className='text-black'>{description}</p>
  </div>
);

const SectionStepCreation = () => {
  const steps = [
    {
      number: 1,
      title: "Expliquez-nous votre projet",
      description:
        "Partagez avec nous vos idées, vos besoins et vos objectifs. Que vous souhaitiez un site vitrine, un e-commerce ou une plateforme sur mesure, nous sommes à l’écoute pour bien comprendre vos attentes.",
    },
    {
      number: 2,
      title: "Prise de rendez-vous",
      description:
        "Une fois vos besoins identifiés, nous fixons un rendez-vous pour discuter plus en détail des spécificités de votre projet. C’est l’occasion idéale pour poser toutes vos questions et affiner votre vision.",
    },
    {
      number: 3,
      title: "Établissement du devis",
      description:
        "Nous vous fournissons un devis clair et détaillé, adapté à vos exigences et à votre budget. Pas de surprise : vous savez exactement ce que vous payez et ce que vous obtiendrez.",
    },
    {
      number: 4,
      title: "Création de votre site",
      description:
        "Notre équipe se met au travail pour concevoir un site unique et professionnel. De la conception graphique au développement technique, chaque étape est réalisée avec soin pour répondre à vos attentes.",
    },
    {
      number: 5,
      title: "Formation back office",
      description:
        "Pour que vous soyez autonome, nous vous formons à l’utilisation du back-office de votre site. Vous pourrez ainsi mettre à jour vos contenus en toute simplicité et gérer votre site au quotidien.",
    },
    {
      number: 6,
      title: "Entretien de votre site",
      description:
        "Votre site évolue avec le temps, et nous sommes là pour vous accompagner. Mise à jour des contenus, sécurité, maintenance ou améliorations : nous assurons un suivi régulier pour que votre site reste performant et à jour.",
    },
  ];

  return (
    <div>
      <section className='relative z-20 overflow-hidden rounded-xl px-16 py-16'>
        <div className='mb-10 text-center'>
          <h3 className='text-5xl'>
            Comment ça marche ? Les étapes de votre site web
          </h3>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionStepCreation;
