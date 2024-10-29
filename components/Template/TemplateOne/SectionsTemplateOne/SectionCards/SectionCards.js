import React, { useState } from "react";
import CardVariantOne from "./CardVariant/CardVariantOne/CardVariantOne";
import { Palette } from "lucide-react";
import CardVariantTwo from "./CardVariant/CardVariantTwo/CardVariantTwo";

const itemsCards = [
  {
    title: "Card title!",
    text: "If a dog chews shoes whose shoes does he choose?",
    btn: "See More",
  },
  {
    title: "Card title 2!",
    text: "If a dog chews shoes whose shoes does he choose?",
    btn: "See More",
  },
  {
    title: "Card title 3!",
    text: "If a dog chews shoes whose shoes does he choose?",
    btn: "See More",
  },
];

const SectionCards = ({
  colors,
  onMouseEnter,
  onMouseLeave,
  selectedColor,
}) => {
  const [isCardVariant, setIsCardVariant] = useState(false);
  const toggleCardVariant = () => {
    setIsCardVariant(!isCardVariant);
  };
  return (
    <section className='my-12'>
      <div className='my-12 flex justify-center'>
        <button
          onClick={toggleCardVariant}
          className='rounded border border-gray-400 bg-white p-2 shadow-md'
        >
          <Palette className='stroke-black' />
        </button>
      </div>
      <div className='mx-auto max-w-[1244px]'>
        {isCardVariant ? (
          <CardVariantOne
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            selectedColor={selectedColor}
            itemsCards={itemsCards}
            colors={colors}
          />
        ) : (
          <CardVariantTwo
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            selectedColor={selectedColor}
            itemsCards={itemsCards}
            colors={colors}
          />
        )}
      </div>
    </section>
  );
};

export default SectionCards;
