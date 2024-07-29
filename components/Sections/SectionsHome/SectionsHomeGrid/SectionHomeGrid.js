import React from "react";

const items = [
  {
    src: "/img-exemple.png",
    title: "Agence LLinares 1",
    text: "Créateur de la Maison LLinares, il propose un réel-savoir faire sur tous types de produits.",
    btn: "Voir le site",
  },
  {
    src: "/img-exemple.png",
    title: "Agence LLinares Immobilier 2",
    text: "Créateur de la Maison LLinares, il propose un réel-savoir faire sur tous types de produits.",
    btn: "Voir le site",
  },
  {
    src: "/img-exemple.png",
    title: "Agence LLinares Immobilier 3",
    text: "Créateur de la Maison LLinares, il propose un réel-savoir faire sur tous types de produits.",
    btn: "Voir le site",
  },
];

const SectionHomeGrid = () => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.title}
          className='card card-compact w-96 border-2 border-solid border-white bg-black p-5 shadow-xl'
        >
          <figure>
            <img src={item.src} alt='' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{item.title}</h2>
            <p>{item.text}</p>
            <div className='card-actions justify-start'>
              <button className='text-md hover:bg-pink-400" mr-4 mt-4 rounded-lg border-2 border-transparent bg-pink-500 px-4 py-2 uppercase text-white'>
                {item.btn}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionHomeGrid;
