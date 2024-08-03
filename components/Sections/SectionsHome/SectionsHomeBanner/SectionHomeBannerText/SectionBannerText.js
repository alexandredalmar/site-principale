import React from "react";

const SectionBannerText = () => {
  return (
    <div className='video-content z-10 space-y-5 rounded-lg border-2 border-sky-200 p-20 text-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]'>
      <h1 className='mb-5 text-9xl font-medium'>
        <span className='text-sky-500 [text-shadow:_0_1px_0_rgb(235_0_0_/_40%)]'>
          D
        </span>
        igi<span className='text-pink-500'>H</span>ouse
      </h1>
      <p className='text-2xl font-medium'>La Maison digital</p>

      <p className='text-2xl font-medium'>
        Spécialisé dans la création de{" "}
        <span className='text-sky-500'>site </span>
        <span className='text-pink-500'>performant</span>
      </p>
    </div>
  );
};

export default SectionBannerText;
