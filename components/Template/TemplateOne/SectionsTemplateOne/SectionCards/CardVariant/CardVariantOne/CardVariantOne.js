import React from "react";

const CardVariantOne = ({
  colors,
  itemsCards,
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
        <div
          key={index}
          className='card w-96 bg-white text-primary-content shadow-lg'
        >
          <div className='card-body'>
            <h2 className='card-title text-black'>{item.title}</h2>
            <p class='text-black'>{item.text}</p>
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

export default CardVariantOne;
