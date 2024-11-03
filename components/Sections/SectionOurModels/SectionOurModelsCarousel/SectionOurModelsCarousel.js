"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./SectionOurModelscarousel.css";
import data from "./data";
import { ArrowBigLeft, ArrowBigRight, BookMarkedIcon } from "lucide-react";
import OurModelsCardCarousel from "./OurModelsCardCarousel/OurModelsCardCarousel";

const SectionOurModelsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const infoRef = useRef(null);
  const progressBarRef = useRef(null);
  const slideDuration = 5000;
  useEffect(() => {
    animateCard(activeIndex);
    startProgressBar();

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      startProgressBar();
    }, slideDuration);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const animateCard = (index) => {
    gsap.to(cardRefs.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(cardRefs.current[index], {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });
    animateInfo(index);
  };

  const animateInfo = (index) => {
    const item = data[index];
    gsap.to(infoRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
    });
    setTimeout(() => {
      infoRef.current.querySelector(".place").textContent = item.place;
      infoRef.current.querySelector(".title-1").textContent = item.title;
      infoRef.current.querySelector(".title-2").textContent = item.title2;
      infoRef.current.querySelector(".description").textContent =
        item.description;
      gsap.to(infoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }, 500);
  };

  const startProgressBar = () => {
    gsap.fromTo(
      progressBarRef.current,
      { width: "0%" },
      { width: "100%", duration: slideDuration / 1000, ease: "linear" }
    );
  };

  return (
    <div className='carousel-container'>
      <div className='cards'>
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className='card'
            style={{
              backgroundImage: `url(${item.image})`,
              opacity: index === activeIndex ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div className='info' ref={infoRef}>
        <div className='place'>{data[0].place}</div>
        <div className='title'>
          <span className='title-1'>{data[0].title}</span>
          <span className='title-2'>{data[0].title2}</span>
        </div>
        <p className='description'>{data[0].description}</p>
      </div>

      <OurModelsCardCarousel
        data={data}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <div className='progress-bar'>
        <div className='progress' ref={progressBarRef}></div>
      </div>
    </div>
  );
};

export default SectionOurModelsCarousel;
