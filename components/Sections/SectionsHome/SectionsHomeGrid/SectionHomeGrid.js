"use client";

import Grid from "@/components/ui/Grid";
import React from "react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

const SectionHomeGrid = () => {
  return (
    <>
      <h2 className='w-full py-16 text-center text-5xl sm:text-6xl'>
        Nos modeles
      </h2>
      <Grid>
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className='card card-compact w-96 border-2 border-solid border-white bg-black p-5 shadow-xl'
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <figure>
              <img src={item.src} alt='' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{item.title}</h2>
              <p>{item.text}</p>
              <div className='card-actions justify-start'>
                <button className='text-md hover:bg-pink-400 mr-4 mt-4 rounded-lg border-2 border-transparent bg-pink-500 px-4 py-2 uppercase text-white'>
                  {item.btn}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </Grid>
    </>
  );
};

export default SectionHomeGrid;