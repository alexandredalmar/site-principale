"use client";

import Grid from "@/components/ui/Grid";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/button/Button";

const items = [
  {
    src: "images/nos-modeles/model-greenmoverz.png",
    title: "Green Moverz",
    text: "Un site de location de voiture spécialisée dans l'énergie verte",
    btn: "Découvrir",
    link: "https://greenmoverz.com/",
  },
  {
    src: "images/nos-modeles/model-impact.png",
    title: "CBD shope",
    text: "E-commer spécialisé dans le vente de cbd ",
    btn: "Découvrir",
    link: "https://www.impact-cbd.fr/",
  },
  {
    src: "images/nos-modeles/model-leconte.png",
    title: "Lecomte Architecture",
    text: "Artchitect d'intérieur et de décoration",
    btn: "Decouvrir",
    link: "https://lecomtearchitecture.com/",
  },
  {
    src: "images/nos-modeles/model-ponteil.png",
    title: "Hôtel Le Ponteil",
    text: "Hotel de charme provencal",
    btn: "Découvrir",
    link: "https://leponteil.com/",
  },
  {
    src: "images/nos-modeles/model-djl.png",
    title: "DJL - rénovation",
    text: "Entreprise de rénovation interieur et exterieur",
    btn: "Découvrir",
    link: "https://leponteil.com/",
  },

  {
    src: "images/nos-modeles/model-excellium.png",
    title: "Excellium nutrition",
    text: "E-commerce de de complément alimentaire sportive",
    btn: "Découvrir",
    link: "https://www.excellium-nutrition.com/",
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
      <div className='rounded-xl py-16'>
        <h2 className='text-black-500 mb-10 w-full text-center text-5xl sm:text-6xl'>
          Inspirez-vous
        </h2>
        <Grid>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className='border-black-900 w-[calc(33.333% - 32px)] card card-compact overflow-hidden border-2 border-solid'
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              custom={index}
            >
              <Link href={item.link}>
                <figure className='bg-indigo-50 p-4'>
                  <img src={item.src} alt='' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{item.title}</h2>
                  <p>{item.text}</p>
                  <div className='card-actions justify-start'>
                    <button className='text-md bg- mr-4 mt-4 border-b-2 border-black font-medium uppercase text-black'>
                      {item.btn}
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default SectionHomeGrid;
