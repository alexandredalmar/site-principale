import Grid from "@/components/ui/Grid";
import React from "react";

const SectionCards = ({ colors }) => {
  return (
    <section className='my-12'>
      <div className='flex flex-wrap justify-center gap-8'>
        <div
          className='card w-96 bg-primary text-primary-content'
          style={{ backgroundColor: colors.darkVibrant }}
        >
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div
          className='card w-96 bg-primary text-primary-content'
          style={{ backgroundColor: colors.darkVibrant }}
        >
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div
          className='card w-96 bg-primary text-primary-content'
          style={{ backgroundColor: colors.darkVibrant }}
        >
          <div className='card-body'>
            <h2 className='card-title'>Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
