import Button from "@/components/ui/button/Button";
import { Check } from "lucide-react";
import React from "react";

const PriceCard = (props) => {
  return (
    <>
      {props.priceItem.map((item) => (
        <div className='divide-y divide-slate-200 rounded-lg border border-slate-200 shadow-sm odd:scale-90 even:border-sky-500 even:shadow-2xl even:shadow-sky-500'>
          <div className='p-6'>
            <h2 className='text-xl font-bold leading-6 text-white'>
              {item.title}
            </h2>
            <p className='mt-2 text-base leading-tight text-white'>
              {item.description}
            </p>
            <p className='my-8'>
              <span className='text-4xl font-bold tracking-tighter text-white'>
                {item.price}€
              </span>

              <span className='text-base font-medium text-white'>
                {item.monthly}
              </span>
            </p>
            <Button link='#' styleType='secondary' text={item.buttonText} />
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
