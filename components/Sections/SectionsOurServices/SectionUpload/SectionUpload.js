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
      setImageUrl(URL.createObjectURL(file)); // Stocker l'URL de l'image
    } else {
      const errorData = await res.json();
      console.error("Error:", errorData);
    }
  };

  return (
    <div>
      <h1>
        Charger votre logo pour que nous puissions recuperer les couleurs{" "}
      </h1>
      <ImagePicker onUpload={handleUpload} />
      {colors && (
        <div>
          <h2>Couleur extraites</h2>
          <div style={{ backgroundColor: colors.vibrant }}>
            Vibrant: {colors.vibrant}
          </div>
          <div style={{ backgroundColor: colors.darkVibrant }}>
            Dark Vibrant: {colors.darkVibrant}
          </div>
          <div style={{ backgroundColor: colors.lightVibrant }}>
            Light Vibrant: {colors.lightVibrant}
          </div>
          <div style={{ backgroundColor: colors.muted }}>
            Muted: {colors.muted}
          </div>
          <div style={{ backgroundColor: colors.darkMuted }}>
            Dark Muted: {colors.darkMuted}
          </div>
          <div style={{ backgroundColor: colors.lightMuted }}>
            Light Muted: {colors.lightMuted}
          </div>
        </div>
      )}
      <div className='my-12 p-8'>
        {colors && <SectionTemplate imageUrl={imageUrl} colors={colors} />}
      </div>
    </div>
  );
};
export default SectionUpload;
