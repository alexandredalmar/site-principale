"use client";
import SectionOurModelsCarousel from "@/components/Sections/SectionOurModels/SectionOurModelsCarousel/SectionOurModelsCarousel";
import SectionOurModelsGrid from "@/components/Sections/SectionOurModels/SectionsOurModelsGrid/SectionOurModelsGrid.js";
import SectionBannerText from "@/components/Sections/SectionOurModels/SectionModelsBanner/SectionModelsBanner.js";
import SectionOurModelsContact from "@/components/Sections/SectionOurModels/SectionOurModelsContact/SectionOurModelsContact.js";
import SectionFaq from "@/components/Sections/SectionFaq/SectionFaq.js";

import React from "react";

const OurModelsPage = () => {
  return (
    <div className='mx-auto flex max-w-96 flex-col gap-20 md:max-w-screen-md lg:max-w-screen-xl 2xl:max-w-screen-2xl'>
      <SectionBannerText />
      <SectionOurModelsGrid />
      <SectionOurModelsContact />
      <SectionFaq />
    </div>
  );
};

export default OurModelsPage;
