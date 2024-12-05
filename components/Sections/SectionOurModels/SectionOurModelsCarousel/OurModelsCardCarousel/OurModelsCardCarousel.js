// import React from "react";

// const OurModelsCardCarousel = (props) => {
//   return (
//     <div className='thumbnails'>
//       {props.data.map((item, index) => (
//         <div key={index} className='container__thumbnails'>
//           <img
//             src={item.image}
//             alt={item.place}
//             className={`thumbnail ${index === props.activeIndex ? "active" : ""}`}
//             onClick={() => props.setActiveIndex(index)}
//           />
//           <div
//             className='content'
//             onClick={() => props.setActiveIndex(index)}
//             style={{
//               opacity: index === props.activeIndex ? 1 : 0,
//             }}
//           >
//             <h2>{item.title}</h2>
//             <h3>{item.title2}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OurModelsCardCarousel;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OurModelsCardCarousel = (props) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".container__thumbnails", {
        xPercent: -100 * (props.activeIndex % props.data.length),
        ease: "power3.inOut",
        duration: 0.5,
        stagger: 0.1,
      });
    }, carouselRef);

    return () => ctx.revert();
  }, [props.activeIndex, props.data.length]);

  return (
    <div className='thumbnails' ref={carouselRef}>
      {props.data.map((item, index) => (
        <div key={index} className='container__thumbnails'>
          <img
            src={item.image}
            alt={item.place}
            className={`thumbnail ${index === props.activeIndex ? "active" : ""}`}
            onClick={() => props.setActiveIndex(index)}
          />
          <div
            className='content'
            onClick={() => props.setActiveIndex(index)}
            style={{
              opacity: index === props.activeIndex ? 1 : 0,
            }}
          >
            <h2>{item.title}</h2>
            <h3>{item.title2}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurModelsCardCarousel;
