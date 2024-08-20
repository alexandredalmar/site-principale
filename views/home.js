import SectionsHomeBannerVideo from "@/components/Sections/SectionsHome/SectionsHomeBanner/SectionsHomeBannerVideo";
import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import SectionHomeIntro from "@/components/Sections/SectionsHome/SectionsHomeIntro/SectionHomeIntro";
import Button from "@/components/ui/button/Button";
import Grid from "@/components/ui/Grid";
import React from "react";

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='wrapper'>
        <div className='mainContainer'>
          <SectionsHomeBannerVideo />

          <SectionHomeIntro />

          <SectionHomeGrid />

          <h3 className='w-full py-16 text-center text-5xl sm:text-6xl'>
            Ils nous ont fait confiance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
