import { Palette } from "lucide-react";
import React, { useState } from "react";
import BannerImage from "./BannerImage/BannerImage";
import BannerVideo from "./BannerVideo/BannerVideo";

const SectionBanner = ({
  colors,
  selectedColor,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isBannerVariant, setIsBannerVariant] = useState(false);
  const toggleBannerVariant = () => {
    setIsBannerVariant(!isBannerVariant);
  };
  return (
    <section>
      {isBannerVariant ? (
        <BannerVideo
          selectedColor={selectedColor}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          toggleBannerVariant={toggleBannerVariant}
        />
      ) : (
        <BannerImage
          selectedColor={selectedColor}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          toggleBannerVariant={toggleBannerVariant}
          colors={colors}
        />
      )}
    </section>
  );
};

export default SectionBanner;
