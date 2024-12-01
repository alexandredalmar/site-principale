"use client";

import Grid from "@/components/ui/Grid";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/button/Button";

const items = [
  {
    src: "images/nos-modeles/GreenMoverz-model.png",
    title: "Green Moverz",
    text: "Un site de location de voiture spécialisée dans l'énergie verte",
    btn: "découvrir",
    link: "/nos-modeles",
  },
  {
    src: "images/nos-modeles/impact-model.png",
    title: "CBD shope",
    text: "E-commer spécialisé dans le vente de cbd ",
    btn: "En savoir +",
    link: "En savoir +",
  },
  {
    src: "images/nos-modeles/lecompte-architecture-model.png",
    title: "Lecomte Architecture",
    text: "Artchitect d'intérieur et de décoration",
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
      <div className='rounded-xl bg-indigo-100 px-5 py-16'>
        <h2 className='text-black-500 mb-8 w-full text-center text-5xl sm:text-6xl'>
          Inspirez-vous de nos créations
        </h2>
        <Grid>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className='border-black-900 card card-compact w-96 overflow-hidden border-2 border-solid'
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
                    <button className='text-md bg- mr-4 mt-4 border-b-2 border-black font-medium uppercase text-black'>
                      {item.btn}
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Grid>
        <div className='mt-8 flex-1 text-center'>
          <p className='mb-4 w-full'>
            Vous avez besoin d'un conseil ou vous souhaitez tout simplement nous
            poser une question ?
          </p>
          <Button
            className='w-full'
            link='#'
            styleType='primary'
            text='Contactez-nous'
          />
        </div>
      </div>
    </>
  );
};

export default SectionHomeGrid;
