import React from "react";

const Grid = (props) => {
  return (
    <div className='max-w-full'>
      <div className='grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3'>
        {props.children}
      </div>
    </div>
  );
};

export default Grid;
