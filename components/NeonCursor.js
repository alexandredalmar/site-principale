"use client";

import { useEffect } from "react";
import { neonCursor } from "threejs-toys";

const NeonCursor = () => {
  useEffect(() => {
    // Vérifie et nettoie le canvas existant avant de créer un nouveau
    const existingCanvas = document.querySelector("canvas");
    if (existingCanvas) {
      existingCanvas.remove();
    }

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
        sleepRadiusX: 300,
        sleepRadiusY: 300,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
      });
    }

    // Nettoyage pour éviter la création de nouveaux canvas à chaque montage
    return () => {
      const existingCanvas = document.querySelector("canvas");
      if (existingCanvas) {
        existingCanvas.remove();
      }
    };
  }, []); // Dépendance vide pour s'assurer que l'effet ne s'exécute qu'une seule fois

  return null; // Ne rend rien si c'est seulement pour l'animation
};

export default NeonCursor;
