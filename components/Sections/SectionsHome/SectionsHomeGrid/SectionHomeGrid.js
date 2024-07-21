import React from "react";

const items = [
  {
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "Shoes",
    text: "If a dog chews shoes whose shoes does he choose?",
    btn: "Buy Now",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "wordl",
    text: "If a dog chews shoes whose shoes does he choose?",
    btn: "Buy Now",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    title: "world",
    text: "If a dog chews shoes whose shoes does he choose?",
    btn: "Buy Now",
  },
];

const SectionHomeGrid = () => {
  return (
    <>
    {items.map((item) => (
      <div key={item.title} className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <img src={item.src} alt='' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{item.title}</h2>
            <p>{item.text}</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>{item.btn}</button>
            </div>
          </div>
        </div>
  ))}
  </>
  );
};

export default SectionHomeGrid;
