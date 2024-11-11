import { ArrowDown } from "lucide-react";
import React from "react";

const SectionBannerScroll = () => {
  function scrollAfter100vh() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className='left-50 absolute bottom-20 flex h-10 w-10 animate-bounce cursor-pointer items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20'>
      <ArrowDown
        onClick={scrollAfter100vh}
        className='h-12 w-12 stroke-pink-500'
      />
    </div>
  );
};

export default SectionBannerScroll;
