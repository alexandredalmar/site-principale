"use client";
import TemplateOne from "@/components/Template/TemplateOne/TemplateOne";
import { Laptop, Smartphone } from "lucide-react";
import React, { useState } from "react";

const SectionTemplate = ({ imageUrl, colors }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleView = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-full flex-row justify-end gap-4'>
        <button
          onClick={toggleView}
          className='my-12 rounded-full bg-gray-200 p-2'
        >
          <Smartphone />
        </button>
        <button
          onClick={toggleView}
          className='my-12 rounded-full bg-gray-200 p-2'
        >
          <Laptop />
        </button>
      </div>

      {isMobileView ? (
        <div className='mockup-phone border-primary'>
          <div className='camera'></div>
          <div className='display'>
            <div className='artboard artboard-demo phone-3 box-border overflow-scroll'>
              <div className='h-full max-w-md'>
                <TemplateOne
                  className='h-[932px] w-full'
                  imageUrl={imageUrl}
                  isMobileView={isMobileView}
                  colors={colors}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='mockup-window w-full overflow-scroll border bg-base-300'
          style={{ color: colors.darkMuted }}
        >
          <TemplateOne
            isMobileView={isMobileView}
            imageUrl={imageUrl}
            colors={colors}
          />
        </div>
      )}
    </div>
  );
};

export default SectionTemplate;
