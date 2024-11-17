"use client";

import Grid from "@/components/ui/Grid";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    src: "images/nos-modeles/GreenMoverz-model.png",
    title: "Nos créations",
    text: "Digi House crée des sites web dans le style qui vous correspond",
    btn: "découvrir",
    link: "/nos-modeles",
  },
  {
    src: "images/nos-modeles/impact-model.png",
    title: "Entretenir votre site",
    text: "Nous vous proposons de vous aider à faire evoluer votre site en prenant la main",
    btn: "En savoir +",
    link: "En savoir +",
  },
  {
    src: "images/nos-modeles/lecompte-architecture-model.png",
    title: "Nous contacter",
    text: "Pour faire connaissance et nous faire part de votre projet.",
    btn: "contact",
    link: "/contact",
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
      <h2 className='w-full py-16 text-center text-5xl text-black-500 sm:text-6xl'>
        Nos modeles
      </h2>
      <Grid>
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className='card card-compact w-96 overflow-hidden border-2 border-solid border-black-900 '
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
                  <button className='text-md bg- mr-4 mt-4  font-medium uppercase text-black  border-b-2 border-black  '>
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
