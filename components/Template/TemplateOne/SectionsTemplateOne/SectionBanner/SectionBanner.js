import React from "react";

const SectionBanner = ({ colors }) => {
  return (
    <section
      className='hero h-[800px]'
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className='btn'
            style={{ backgroundColor: colors.lightVibrant }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
