import SectionFuturWebsiteBanner from "@/components/Sections/SectionFuturWebsite/SectionFuturWebsiteBanner/SectionFuturWebsiteBanner";
import SectionFuturWebsiteText from "@/components/Sections/SectionFuturWebsite/SectionFuturWebsiteText/SectionFuturWebsiteText";
import SectionUpload from "@/components/Sections/SectionFuturWebsite/SectionFuturWebsiteUpload/SectionUpload/SectionUpload";

import React from "react";

const FuturSitePage = () => {
  return (
    <div>
      <SectionFuturWebsiteBanner />
      <SectionFuturWebsiteText />
      <SectionUpload />
    </div>
  );
};

export default FuturSitePage;
