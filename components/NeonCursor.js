// components/NeonCursor.js
"use client";

import { useEffect } from "react";

const NeonCursor = () => {
  useEffect(() => {
    const loadNeonCursor = async () => {
      // Vérifie si le canvas est déjà présent
      if (document.querySelector(".neon-cursor-canvas")) return;

      try {
        const { neonCursor } = await import("threejs-toys");
        const appElement = document.getElementById("app");
        if (appElement) {
          neonCursor({
            el: appElement,
            shaderPoints: 16,
            curvePoints: 80,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 30,
            velocityTreshold: 10,
            sleepRadiusX: 100,
            sleepRadiusY: 100,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025,
          });
        }
      } catch (error) {
        console.error("Erreur lors du chargement de neonCursor:", error);
      }
    };

    loadNeonCursor();

    // Optionnel : Nettoyage pour éviter la création de nouveaux canvas à chaque montage
    return () => {
      const existingCanvas = document.querySelector(".neon-cursor-canvas");
      if (existingCanvas) {
        existingCanvas.remove();
      }
    };
  }, []);

  return null; // Ne rend rien si c'est seulement pour l'animation
};

export default NeonCursor;
