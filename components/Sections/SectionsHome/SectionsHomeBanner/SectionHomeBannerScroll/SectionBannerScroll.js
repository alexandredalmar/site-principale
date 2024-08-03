import React from "react";

const SectionBannerScroll = () => {
  return (
    <div class='left-50 absolute bottom-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20'>
      <svg
        class='h-6 w-6'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path className='text-pink-500' d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
      </svg>
    </div>
  );
};

export default SectionBannerScroll;
