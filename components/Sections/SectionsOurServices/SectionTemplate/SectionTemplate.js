import TemplateOne from "@/components/Template/TemplateOne/TemplateOne";
import Image from "next/image";
import React from "react";

const SectionTemplate = ({ imageUrl, colors }) => {
  return (
    <div
      className='mockup-window overflow-scroll border bg-base-300'
      style={{ color: colors.darkMuted }}
    >
      <TemplateOne imageUrl={imageUrl} colors={colors} />
    </div>
  );
};

export default SectionTemplate;
