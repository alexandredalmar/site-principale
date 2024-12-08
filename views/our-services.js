import SectionOurServicesBanner from "@/components/Sections/SectionsOurServices/SectionOurServicesBanner/SectionOurServicesBanner";
import SectionOurServicesCard from "@/components/Sections/SectionsOurServices/SectionOurServicesCard/SectionOurServicesCard";
import SectionOurServicesImageText from "@/components/Sections/SectionsOurServices/SectionOurServicesImageText/SectionOurServicesImageText";
import SectionPrice from "@/components/Sections/SectionsOurServices/SectionPrice/SectionPrice";
import { Section } from "lucide-react";
import React from "react";

const OurServicesPage = () => {
  return (
    <div className='mx-auto flex max-w-96 flex-col gap-20 transition-all md:max-w-screen-md lg:max-w-screen-xl 2xl:max-w-screen-2xl'>
      {/* <SectionOurServicesBanner /> */}
      <SectionOurServicesImageText />
      <SectionOurServicesCard />
      <SectionPrice />
    </div>
  );
};

export default OurServicesPage;
