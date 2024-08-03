import React from "react";

const Grid = (props) => {
  return (
    <div className='mx-auto w-[1240px] max-w-full'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {props.children}
      </div>
    </div>
  );
};

export default Grid;
