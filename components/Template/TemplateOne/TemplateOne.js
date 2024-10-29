import React, { useState } from "react";
import SectionHeader from "./SectionsTemplateOne/SectionHeader/SectionHeader";
import SectionBanner from "./SectionsTemplateOne/SectionBanner/SectionBanner";
import SectionCards from "./SectionsTemplateOne/SectionCards/SectionCards";
import SectionHeading from "./SectionsTemplateOne/SectionHeading/SectionHeading";
import SectionFooter from "./SectionsTemplateOne/SectionFooter/SectionFooter";
import ButtonColors from "../ui/ButtonColors/ButtonColors";

const TemplateOne = ({ imageUrl, colors }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedColors, setSelectedColors] = useState({
    header: colors.header || "#fff",
    banner: colors.banner || colors.vibrant,
    cards: colors.cards || colors.vibrant,
    heading: colors.heading || colors.darkVibrant,
    footer: colors.footer || "#fff",
  });

  const handleMouseEnter = (section) => {
    console.log(`Mouse entered ${section}`);
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    if (!isOpened) {
      // Ne réinitialise pas si la palette est ouverte
      setActiveSection(null);
    }
    console.log(`Mouse left ${activeSection}`);
  };

  const handleColorChange = (color) => {
    if (activeSection) {
      setSelectedColors((prevColors) => ({
        ...prevColors,
        [activeSection]: color,
      }));
      console.log(`Changed color of ${activeSection} to ${color}`);
    }
  };

  return (
    <div>
      <SectionHeader
        onMouseEnter={() => handleMouseEnter("header")}
        // onMouseLeave={handleMouseLeave}
        selectedColor={selectedColors.header}
        imageUrl={imageUrl}
        colors={colors}
      />
      <main>
        <SectionBanner
          onMouseEnter={() => handleMouseEnter("banner")}
          // onMouseLeave={handleMouseLeave}
          selectedColor={selectedColors.banner}
          colors={colors}
        />
        <SectionCards
          onMouseEnter={() => handleMouseEnter("cards")}
          // onMouseLeave={handleMouseLeave}
          selectedColor={selectedColors.cards}
          colors={colors}
        />
        <SectionHeading
          onMouseEnter={() => handleMouseEnter("heading")}
          // onMouseLeave={handleMouseLeave}
          selectedColor={selectedColors.heading}
          colors={colors}
        />
      </main>
      <SectionFooter
        onMouseEnter={() => handleMouseEnter("footer")}
        // onMouseLeave={handleMouseLeave}
        selectedColor={selectedColors.footer}
        colors={colors}
      />
      <ButtonColors
        onColorSelect={handleColorChange}
        colors={colors}
        activeSection={activeSection}
      />
    </div>
  );
};

export default TemplateOne;
