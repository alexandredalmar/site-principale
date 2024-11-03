"use client";

import SectionsHomeBannerVideo from "@/components/Sections/SectionsHome/SectionsHomeBanner/SectionsHomeBannerVideo";
import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import SectionHomeIntro from "@/components/Sections/SectionsHome/SectionsHomeIntro/SectionHomeIntro";
import NeonCursorDisplay from "@/components/NeonCursorDisplay";


import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 5 } },

};

const HomePage = () => {
  return (
 
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
          
      <SectionsHomeBannerVideo />
      <SectionHomeIntro />

      <SectionHomeGrid />
   
      <h3 className='w-full py-16 text-center text-5xl sm:text-6xl'>
        Ils nous ont fait confiance
      </h3>

 
      
    
     
    </motion.div>
  );
};

export default HomePage;