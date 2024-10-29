import { Palette } from "lucide-react";
import React from "react";

const BannerVideo = ({ toggleBannerVariant }) => {
  return (
    <div className='relative mb-12 flex h-[800px] items-center justify-center overflow-hidden'>
      <div class='relative z-30 rounded-xl bg-white bg-opacity-70 p-5 text-4xl text-black'>
        <button
          onClick={toggleBannerVariant}
          className='rounded border border-gray-400 bg-white p-2 shadow-md'
        >
          <Palette className='stroke-black' />
        </button>
        Template One
      </div>
      <video
        autoPlay
        loop
        muted
        className='absolute z-10 h-svh w-auto min-w-full max-w-none'
      >
        <source src='/videoBanner.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default BannerVideo;
