import React from "react";

const OurModelsCardCarousel = (props) => {
  return (
    <div className='thumbnails'>
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
