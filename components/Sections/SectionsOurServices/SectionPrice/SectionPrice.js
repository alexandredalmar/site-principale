import { Check } from "lucide-react";
import React from "react";
import PriceCard from "./PriceCard/PriceCard";

const priceItem = [
  {
    title: "Débutant",
    description:
      "Pour les nouveaux créateurs qui veulent peaufiner et tester une idée.",
    price: 0,
    visits: 1000,
    conversion: 50,
    commission: 5,
    actions: [
      "1 page d'atterrissage incluse",
      "1,000 visites/mois",
      "Accès à tous les blocs UI",
      "50 actions de conversion incluses",
      "Commission de paiement de 5%",
      "Analyses en temps réel",
    ],
  },
  {
    title: "Supérieur",
    description:
      "Pour les créateurs ayant plusieurs idées qui souhaitent les tester et les affiner efficacement.",
    price: 8,
    visits: 50000,
    conversion: 1000,
    commission: 1,
    actions: [
      "Toutes les fonctionnalités gratuites",
      "5 pages d'atterrissage incluses",
      "50,000 visites/mois",
      "1,000 actions de conversion incluses",
      "Commission de paiement de 1%",
    ],
  },
  {
    title: "Expéditeur",
    description:
      "Pour les expéditeurs productifs qui veulent travailler plus efficacement.",
    price: 15,
    visits: 200000,
    conversion: 5000,
    commission: 0,
    actions: [
      "Toutes les fonctionnalités standard",
      "20 pages d'atterrissage incluses",
      "200,000 visites/mois",
      "5,000 actions de conversion incluses",
      "Aucune commission de paiement",
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
        <div className='divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm'>
          <div className='p-6'>
            <h2 className='text-xl font-bold leading-6 text-slate-900'>
              Débutant
            </h2>
            <p className='mt-2 text-base leading-tight text-slate-700'>
              Pour les nouveaux créateurs qui veulent peaufiner et tester une
              idée.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold tracking-tighter text-slate-900'>
                0€
              </span>

              <span className='text-base font-medium text-slate-500'>
                /mois
              </span>
            </p>
            <a
              href='/sign-up'
              className='mt-8 block w-full rounded-md bg-slate-900 py-2 text-center text-sm font-semibold text-white'
            >
              Rejoindre en tant que Débutant
            </a>
          </div>
          <div className='px-6 pb-8 pt-6'>
            <h3 className='text-sm font-bold uppercase tracking-wide text-slate-900'>
              Ce qui est inclus
            </h3>
            <ul role='list' className='mt-4 space-y-3'>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  1 page d'atterrissage incluse
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  1,000 visites/mois
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  Accès à tous les blocs UI
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  50 actions de conversion incluses
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  Commission de paiement de 5%
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  Analyses en temps réel
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm'>
          <div className='p-6'>
            <h2 className='text-xl font-bold leading-6 text-slate-900'>
              Supérieur
            </h2>
            <p className='mt-2 text-base leading-tight text-slate-700'>
              Pour les créateurs ayant plusieurs idées qui souhaitent les tester
              et les affiner efficacement.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold tracking-tighter text-slate-900'>
                8€
              </span>

              <span className='text-base font-medium text-slate-500'>
                /mois
              </span>
            </p>
            <a
              href='/sign-up'
              className='mt-8 block w-full rounded-md bg-slate-900 py-2 text-center text-sm font-semibold text-white'
            >
              Rejoindre en tant que Supérieur
            </a>
          </div>
          <div className='px-6 pb-8 pt-6'>
            <h3 className='text-sm font-bold uppercase tracking-wide text-slate-900'>
              Ce qui est inclus
            </h3>
            <ul role='list' className='mt-4 space-y-3'>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  Toutes les fonctionnalités gratuites
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  5 pages d'atterrissage incluses
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  50,000 visites/mois
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  1,000 actions de conversion incluses
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  Commission de paiement de 1%
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm'>
          <div className='p-6'>
            <h2 className='text-xl font-bold leading-6 text-slate-900'>
              Expéditeur
            </h2>
            <p className='mt-2 text-base leading-tight text-slate-700'>
              Pour les expéditeurs productifs qui veulent travailler plus
              efficacement.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold tracking-tighter text-slate-900'>
                15€
              </span>

              <span className='text-base font-medium text-slate-500'>
                /mois
              </span>
            </p>
            <a
              href='/sign-up'
              className='mt-8 block w-full rounded-md bg-slate-900 py-2 text-center text-sm font-semibold text-white'
            >
              Rejoindre en tant qu'Expéditeur
            </a>
          </div>
          <div className='px-6 pb-8 pt-6'>
            <h3 className='text-sm font-bold uppercase tracking-wide text-slate-900'>
              Ce qui est inclus
            </h3>
            <ul role='list' className='mt-4 space-y-3'>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  Toutes les fonctionnalités standard
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  20 pages d'atterrissage incluses
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  200,000 visites/mois
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />

                <span className='text-base text-slate-700'>
                  5,000 actions de conversion incluses
                </span>
              </li>
              <li className='flex space-x-3'>
                <Check className='h-5 w-5 flex-shrink-0 text-green-400' />
                <span className='text-base text-slate-700'>
                  Aucune commission de paiement
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPrice;
