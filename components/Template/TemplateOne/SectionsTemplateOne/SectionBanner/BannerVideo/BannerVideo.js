import React from "react";

const BannerVideo = () => {
  return (
    <div className='relative mb-12 flex h-svh items-center justify-center overflow-hidden'>
      <div class='relative z-30 rounded-xl bg-purple-300 bg-opacity-50 p-5 text-2xl text-white'>
        Hello World
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
