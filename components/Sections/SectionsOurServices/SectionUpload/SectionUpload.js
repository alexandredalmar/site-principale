"use client";

import React, { useState } from "react";

import ImagePicker from "@/components/ImagePicker/ImagePicker";
import SectionTemplate from "../SectionTemplate/SectionTemplate";

const SectionUpload = () => {
  const [colors, setColors] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setColors(data.colors);
      setImageUrl(URL.createObjectURL(file));
    } else {
      const errorData = await res.json();
      console.error("Error:", errorData);
    }
  };

  return (
    <section className='px-4'>
      <div className='my-4'>
        <h1 className='text-2xl'>
          Charger votre logo pour que nous puissions recuperer les couleurs
        </h1>
      </div>
      <ImagePicker onUpload={handleUpload} />
      {colors && (
        <div className='w-full'>
          <h2 className='my-12'>Couleur extraites</h2>
          <div className='flex w-fit flex-row gap-8 rounded-md border border-black p-4'>
            <div className='flex flex-col items-center gap-4'>
              {colors.vibrant}
              <div
                style={{ backgroundColor: colors.vibrant }}
                className='h-24 w-24 rounded-full'
              ></div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              {colors.darkVibrant}
              <div
                style={{ backgroundColor: colors.darkVibrant }}
                className='h-24 w-24 rounded-full'
              ></div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              {colors.lightVibrant}
              <div
                style={{ backgroundColor: colors.lightVibrant }}
                className='h-24 w-24 rounded-full'
              ></div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              {colors.muted}
              <div
                style={{ backgroundColor: colors.muted }}
                className='h-24 w-24 rounded-full'
              ></div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              {colors.darkMuted}
              <div
                style={{ backgroundColor: colors.darkMuted }}
                className='h-24 w-24 rounded-full'
              ></div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              {colors.lightMuted}
              <div
                style={{ backgroundColor: colors.lightMuted }}
                className='h-24 w-24 rounded-full'
              ></div>
            </div>
          </div>
        </div>
      )}
      <div className='my-12 p-4'>
        {colors && <SectionTemplate imageUrl={imageUrl} colors={colors} />}
      </div>
    </section>
  );
};
export default SectionUpload;
