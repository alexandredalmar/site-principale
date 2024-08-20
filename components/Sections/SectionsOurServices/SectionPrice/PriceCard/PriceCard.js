import { Check } from "lucide-react";
import React from "react";

const PriceCard = (props) => {
  return (
    <>
      {props.priceItem.map((item) => (
        <div className='divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm'>
          <div className='p-6'>
            <h2 className='text-xl font-bold leading-6 text-white'>
              {item.title}
            </h2>
            <p className='mt-2 text-base leading-tight text-white'>
              {item.description}
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold tracking-tighter text-white'>
                {item.price}€
              </span>

              <span className='text-base font-medium text-white'>
                {item.monthly}
              </span>
            </p>
            <a
              href='/sign-up'
              className='mt-8 block w-full rounded-md bg-blue-500 py-2 text-center text-sm font-semibold text-white'
            >
              {item.buttonText}
            </a>
          </div>
          <div className='px-6 pb-8 pt-6'>
            <h3 className='text-sm font-bold uppercase tracking-wide text-white'>
              {item.subTitle}
            </h3>
            <ul role='list' className='mt-4 space-y-3'>
              {item.actions.map((action) => (
                <li className='flex space-x-3'>
                  <Check className='h-5 w-5 flex-shrink-0 stroke-green-400' />

                  <span className='text-base text-white'>{action.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
