import { Check } from "lucide-react";
import React from "react";
import PriceCard from "./PriceCard/PriceCard";

const priceItem = [
  {
    title: "Débutant",
    description:
      "Pour les nouveaux créateurs qui veulent peaufiner et tester une idée.",
    price: 0,
    monthly: "/mois",
    buttonText: "Rejoindre en tant que Débutant",
    subTitle: "Ce qui est inclus",
    actions: [
      {
        title: "1 page d'atterrissage incluse",
      },
      {
        title: "1,000 visites/mois",
      },
      {
        title: "Accès à tous les blocs UI",
      },
      {
        title: "50 actions de conversion incluses",
      },
      {
        title: "Commission de paiement de 5%",
      },
      {
        title: "Analyses en temps réel",
      },
    ],
  },
  {
    title: "Supérieur",
    description:
      "Pour les créateurs ayant plusieurs idées qui souhaitent les tester et les affiner efficacement.",
    price: 8,
    monthly: "/mois",
    buttonText: "Rejoindre en tant que Débutant",
    subTitle: "Ce qui est inclus",
    actions: [
      {
        title: "Toutes les fonctionnalités gratuites",
      },
      {
        title: "5 pages d'atterrissage incluses",
      },
      {
        title: "50,000 visites/mois",
      },
      {
        title: "1,000 actions de conversion incluses",
      },
      {
        title: "Commission de paiement de 1%",
      },
    ],
  },
  {
    title: "Expéditeur",
    description:
      "Pour les expéditeurs productifs qui veulent travailler plus efficacement.",
    price: 15,
    monthly: "/mois",
    buttonText: "Rejoindre en tant que Débutant",
    subTitle: "Ce qui est inclus",
    actions: [
      {
        title: "Toutes les fonctionnalités standard",
      },
      {
        title: "20 pages d'atterrissage incluses",
      },
      {
        title: "200,000 visites/mois",
      },
      {
        title: "5,000 actions de conversion incluses",
      },
      {
        title: "Aucune commission de paiement",
      },
    ],
  },
];

const SectionPrice = () => {
  return (
    <div className='sm:align-center p-10 sm:flex sm:flex-col'>
      <h1 className='my-12 text-center text-4xl font-bold'>Nos Tarifs</h1>
      <div className='relative flex self-center rounded-lg bg-slate-200 p-0.5'>
        <button
          type='button'
          className='relative w-1/2 whitespace-nowrap rounded-md border-slate-50 bg-slate-50 py-2 text-sm font-medium text-slate-900 shadow-sm focus:outline-none sm:w-auto sm:px-8'
        >
          Facturation mensuelle
        </button>
        <button
          type='button'
          className='relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-slate-900 focus:outline-none sm:w-auto sm:px-8'
        >
          Facturation annuelle
        </button>
      </div>

      <div className='mt-12 space-y-3 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 md:mx-auto md:max-w-5xl xl:grid-cols-3'>
        <PriceCard priceItem={priceItem} />
      </div>
    </div>
  );
};

export default SectionPrice;
