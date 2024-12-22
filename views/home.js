"use client";

import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import SectionHomeIntro from "@/components/Sections/SectionsHome/SectionsHomeIntro/SectionHomeIntro";
import NeonCursorDisplay from "@/components/NeonCursorDisplay";
import SectionBannerText from "@/components/Sections/SectionsHome/SectionsHomeBanner/SectionHomeBannerText/SectionBannerText.js";
import SectionHomeContact from "@/components/Sections/SectionsHome/SectionHomeContact/SectionHomeContact.js";
import SectionStepCreation from "@/components/Sections/SectionsHome/SectionStepCreation/SectionStepCreation.js";
import SectionFaq from "@/components/Sections/SectionsHome/SectionFaq/SectionFaq.js";

import React from "react";

import SectionHomeTrustPartners from "@/components/Sections/SectionsHome/SectionHomeTrustPartners/SectionHomeTrustPartners";

const HomePage = () => {
  return (
    <div className='mx-auto flex max-w-96 flex-col gap-20 md:max-w-screen-md lg:max-w-screen-xl 2xl:max-w-screen-2xl'>
      <SectionBannerText />
      <SectionHomeContact />
      {/* <SectionHomeIntro />*/}
      <SectionHomeGrid />
      <SectionStepCreation />
      <SectionFaq />
      <SectionHomeTrustPartners />
    </div>
  );
};

export default HomePage;
