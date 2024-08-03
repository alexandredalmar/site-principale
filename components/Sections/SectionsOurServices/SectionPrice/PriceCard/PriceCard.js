import { Check } from "lucide-react";
import React from "react";

const PriceCard = (props) => {
  return (
    <div className='divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm'>
      <div className='p-6'>
        <h2 className='text-xl font-bold leading-6 text-slate-900'>Débutant</h2>
        <p className='mt-2 text-base leading-tight text-slate-700'>
          Pour les nouveaux créateurs qui veulent peaufiner et tester une idée.
        </p>
        <p className='mt-8'>
          <span className='text-4xl font-bold tracking-tighter text-slate-900'>
            0€
          </span>

          <span className='text-base font-medium text-slate-500'>/mois</span>
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

            <span className='text-base text-slate-700'>1,000 visites/mois</span>
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
  );
};

export default PriceCard;
