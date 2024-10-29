import React from "react";

const CardVariantTwo = ({
  itemsCards,
  colors,
  onMouseEnter,
  onMouseLeave,
  selectedColor,
}) => {
  return (
    <div
      className='flex flex-wrap justify-center gap-8'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {itemsCards.map((item, index) => (
        <div key={index} className='card w-96 bg-base-100 shadow-xl'>
          <figure>
            <img
              src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title text-black'>{item.title}</h2>
            <p className='text-black'>{item.text}</p>
            <div className='card-actions justify-end'>
              <button
                className='btn text-white'
                style={{ backgroundColor: selectedColor }}
              >
                {item.btn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardVariantTwo;
