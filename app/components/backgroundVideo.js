import React from 'react';
import { VideosPath } from '../utils/assetsPath';

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className="background-video">
      <source src={VideosPath.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
