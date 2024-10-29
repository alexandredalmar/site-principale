import { Palette } from "lucide-react";
import React from "react";

const BannerImage = ({
  colors,
  toggleBannerVariant,
  selectedColor,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className='hero h-[800px]'
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <button
            onClick={toggleBannerVariant}
            className='rounded border border-gray-400 bg-white p-2 shadow-md'
          >
            <Palette className='stroke-black' />
          </button>
          <h1 className='mb-5 text-5xl font-bold'>Template One</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn' style={{ backgroundColor: selectedColor }}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
