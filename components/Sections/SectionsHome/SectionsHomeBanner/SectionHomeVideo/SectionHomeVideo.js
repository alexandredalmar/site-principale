import React from "react";

const SectionHomeVideo = () => {
  return (
    <div className='video-docker absolute left-0 top-0 h-full w-full overflow-hidden'>
      <video
        className='absolute min-h-full min-w-full object-cover'
        src='https://cdn.pixabay.com/video/2016/08/22/4760-179739327_large.mp4'
        type='video/mp4'
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default SectionHomeVideo;
