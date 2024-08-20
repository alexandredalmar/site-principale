import SectionOurServicesBanner from "@/components/Sections/SectionsOurServices/SectionOurServicesBanner/SectionOurServicesBanner";
import SectionOurServicesCard from "@/components/Sections/SectionsOurServices/SectionOurServicesCard/SectionOurServicesCard";
import SectionOurServicesImageText from "@/components/Sections/SectionsOurServices/SectionOurServicesImageText/SectionOurServicesImageText";
import SectionPrice from "@/components/Sections/SectionsOurServices/SectionPrice/SectionPrice";
import { Section } from "lucide-react";
import React from "react";

const OurServicesPage = () => {
  return (
    <div>
      {/* <SectionOurServicesBanner /> */}
      <SectionOurServicesImageText />
      <SectionOurServicesCard />
      <SectionPrice />
    </div>
  );
};

export default OurServicesPage;
