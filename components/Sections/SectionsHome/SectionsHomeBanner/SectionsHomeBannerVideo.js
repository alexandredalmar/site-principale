import React from "react";
import SectionHomeVideo from "./SectionHomeVideo/SectionHomeVideo";
import SectionBannerText from "./SectionHomeBannerText/SectionBannerText";
import SectionBannerScroll from "./SectionHomeBannerScroll/SectionBannerScroll";

const SectionsHomeBannerVideo = () => {
  return (
    <section className='relative flex h-screen flex-col items-center justify-center text-center text-white'>
      <SectionHomeVideo />
      <SectionBannerText />
      <SectionBannerScroll />
    </section>
  );
};

export default SectionsHomeBannerVideo;
