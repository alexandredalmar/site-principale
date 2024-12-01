"use client";

import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import SectionHomeIntro from "@/components/Sections/SectionsHome/SectionsHomeIntro/SectionHomeIntro";
import NeonCursorDisplay from "@/components/NeonCursorDisplay";
import SectionBannerText from "@/components/Sections/SectionsHome/SectionsHomeBanner/SectionHomeBannerText/SectionBannerText.js";
import SectionHomeContact from "@/components/Sections/SectionsHome/SectionHomeContact/SectionHomeContact.js";

import React from "react";
import { motion } from "framer-motion";
import SectionHomeTrustPartners from "@/components/Sections/SectionsHome/SectionHomeTrustPartners/SectionHomeTrustPartners";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 5 } },
};

const HomePage = () => {
  return (
    <motion.div
      className='mx-auto flex max-w-96 flex-col gap-20 md:max-w-screen-md lg:max-w-screen-xl 2xl:max-w-screen-2xl'
      initial='initial'
      animate='animate'
      variants={pageVariants}
    >
      <SectionBannerText />
      <SectionHomeIntro />
      <SectionHomeGrid />
      <SectionHomeTrustPartners />
      <SectionHomeContact />
    </motion.div>
  );
};

export default HomePage;
