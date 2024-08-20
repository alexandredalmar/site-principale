import { ArrowDown } from "lucide-react";
import React from "react";

const SectionBannerScroll = () => {
  return (
    <div class='left-50 absolute bottom-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20'>
      <ArrowDown className='h-12 w-12 stroke-pink-500' />
    </div>
  );
};

export default SectionBannerScroll;
