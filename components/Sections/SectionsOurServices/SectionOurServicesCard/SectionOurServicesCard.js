"use client";
import { Globe, Palette, ThumbsUp, Wrench } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const itemsServices = [
  {
    title: "Création de Sites Internet Performants",
    description:
      "Nous sommes spécialisés dans la création de sites internet performants en utilisant la plateforme Payload. Notre équipe d'experts travaille avec vous pour concevoir et développer des sites web qui répondent parfaitement à vos besoins et à ceux de votre entreprise. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'un portail personnalisé, nous avons les compétences pour transformer vos idées en réalité.",
    icon: <Globe className='h-24 w-24 stroke-blue-500' />,
  },
  {
    title: "Service d'Entretien",
    description:
      "Pour garantir la pérennité et le bon fonctionnement de votre site internet, nous proposons un service d'entretien complet. Ce service inclut la mise à jour régulière du site, la correction de bugs éventuels, l'optimisation des performances et la sécurité renforcée. Ainsi, vous pouvez vous concentrer sur votre activité principale, en toute sérénité.",
    icon: <Wrench className='h-24 w-24 stroke-green-500' />,
  },
  {
    title: "Personnalisation de Templates",
    description:
      "Nous savons que chaque entreprise est unique, c'est pourquoi nous avons mis en place un système innovant sur notre site web. Ce système permet à nos clients de placer leur logo sur les différents templates que nous proposons. Grâce à cette fonctionnalité, vous pouvez visualiser en temps réel le rendu de votre site web avec vos couleurs et votre identité visuelle. Cette personnalisation vous aide à faire le meilleur choix pour refléter l'image de votre entreprise sur internet.",
    icon: <Palette className='h-24 w-24 stroke-purple-500' />,
  },
  {
    title: "Pourquoi Choisir Notre Service ?",
    description:
      "En choisissant nos services, vous bénéficiez d'une expertise reconnue et d'un accompagnement personnalisé tout au long de votre projet. Nous mettons tout en œuvre pour que votre site internet soit un véritable atout pour votre entreprise, reflétant parfaitement votre identité et répondant aux attentes de vos clients. Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs en ligne.",
    icon: <ThumbsUp className='h-24 w-24 stroke-yellow-500' />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (i) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
};

const SectionOurServicesCard = () => {
  return (
    <div className='h-auto'>
      <div className='grid grid-cols-1 gap-4 p-10 pt-28 sm:grid-cols-2'>
        {itemsServices.map((item, index) => (
          <motion.div
            className='flex flex-col items-center gap-4 rounded-xl border border-gray-800 p-4'
            initial='hidden'
            animate='visible'
            custom={index}
            variants={cardVariants}
            key={index}
          >
            <span className='inline-block rounded-lg p-3'>
              <div className='inline-flex select-none items-center justify-center align-middle text-white'>
                {item.icon}
              </div>
            </span>

            <h2 className='mt-2 text-base font-semibold text-white sm:text-2xl'>
              {item.title}
            </h2>
            <p className='block text-sm text-gray-300 sm:mt-1 sm:text-base'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionOurServicesCard;
