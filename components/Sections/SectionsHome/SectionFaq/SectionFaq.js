import React, { useState } from "react";

const SectionFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      id: 1,
      question: "Quels types de sites web créez-vous ?",
      answer:
        "Nous créons tous types de sites web : vitrines, e-commerce, blogs, portfolios, sites institutionnels, ou encore applications web sur mesure. Chaque projet est personnalisé pour répondre à vos besoins et refléter votre identité, avec un design moderne et une optimisation multi-supports.",
    },
    {
      id: 2,
      question: "Combien coûte la création d’un site web ?",
      answer:
        "Le coût d’un site web varie en fonction de vos besoins spécifiques : type de site, fonctionnalités souhaitées, design personnalisé, et contenu. Chaque projet étant unique, nous vous proposons un devis adapté après avoir analysé vos attentes.",
    },
    {
      id: 3,
      question: "Est-ce que vous pouvez gérer mon site déjà en ligne ?",
      answer:
        "Oui, nous pouvons prendre en charge la gestion et la maintenance de votre site existant pour assurer son bon fonctionnement et le faire évoluer selon vos besoins.",
    },
    {
      id: 4,
      question:
        "Que se passe-t-il si j'ai besoin de modifications après le lancement ?",
      answer:
        "Nous restons disponibles après le lancement et proposons plusieurs services adaptés pour répondre à vos besoins de modifications ou d’évolutions.",
    },
  ];

  return (
    <div>
      <section className='relative z-20 overflow-hidden rounded-xl bg-indigo-100 px-16 py-16'>
        <h3 className='text-center'>FAQ</h3>
        <div className='mx-auto max-w-screen-md p-10 dark:bg-gray-800'>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className='border-b border-indigo-400 dark:border-gray-700'
            >
              <button
                type='button'
                className={`flex w-full items-center justify-between px-4 py-5 text-left text-2xl font-medium ${
                  openItem === item.id
                    ? "rounded-xl bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => toggleAccordion(item.id)}
              >
                <span>{item.question}</span>
                <svg
                  className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                    openItem === item.id ? "rotate-180" : ""
                  }`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openItem === item.id ? "max-h-40 ease-in" : "max-h-0 ease-out"
                }`}
              >
                <div className='px-4 py-5 text-gray-700 dark:text-gray-400'>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionFaq;
