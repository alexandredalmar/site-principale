import React from "react";
import SectionHeader from "./SectionsTemplateOne/SectionHeader/SectionHeader";
import SectionBanner from "./SectionsTemplateOne/SectionBanner/SectionBanner";
import SectionCards from "./SectionsTemplateOne/SectionCards/SectionCards";
import SectionHeading from "./SectionsTemplateOne/SectionHeading/SectionHeading";
import SectionFooter from "./SectionsTemplateOne/SectionFooter/SectionFooter";
import BannerVideo from "./SectionsTemplateOne/SectionBanner/BannerVideo/BannerVideo";

const TemplateOne = ({ imageUrl, colors }) => {
  return (
    <div>
      <SectionHeader imageUrl={imageUrl} colors={colors} />
      <main>
        {/* <SectionBanner colors={colors} /> */}
        <BannerVideo />
        <SectionCards colors={colors} />
        <SectionHeading colors={colors} />
      </main>
      <SectionFooter colors={colors} />
    </div>
  );
};

export default TemplateOne;
