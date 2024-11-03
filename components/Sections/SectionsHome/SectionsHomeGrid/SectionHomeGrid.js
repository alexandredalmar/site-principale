"use client";

import Grid from "@/components/ui/Grid";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    src: "/img-exemple.png",
    title: "Nos créations",
    text: "Digi House crée des sites web dans le style qui vous correspond",
    btn: "En savoir +",
  },
  {
    src: "/img-exemple.png",
    title: "Qui sommes nous ? ",
    text: "Notre experience, notre histoire..",
    btn: "En savoir +",
  },
  {
    src: "/img-exemple.png",
    title: "Nous contacter",
    text: "Pour faire connaissance et nous faire part de votre projet.",
    btn: "Par ici",
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
      <h2 className='w-full py-16 text-center text-5xl text-pink-500 sm:text-6xl'>
        Nos modeles
      </h2>
      <Grid>
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className='card card-compact w-96 overflow-hidden border-2 border-solid border-sky-200 bg-black text-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_2px_#08f,0_0_5px_#08f]'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            custom={index}
          >
            <Link href={item.link}>
              <figure>
                <img src={item.src} alt='' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{item.title}</h2>
                <p>{item.text}</p>
                <div className='card-actions justify-start'>
                  <button className='text-md bg- mr-4 mt-4 rounded-lg border-2 border-transparent px-4 py-2 font-bold uppercase text-pink-500 hover:text-sky-500'>
                    {item.btn}
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </Grid>
    </>
  );
};

export default SectionHomeGrid;
