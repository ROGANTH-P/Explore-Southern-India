import React, { useState } from 'react';
import VideoThumbnail from './VideoThumbnail';
import { HashLink as Link } from 'react-router-hash-link';

function VideoGrid({ videos }) {


  const [clicked, setClicked] = useState(false);

  const handleToggleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
 
    
    <div className="flex flex-wrap justify-center">
      {videos.map((video, index) => (
        <VideoThumbnail key={index} video={video} />
      ))}
    </div>
    </>
  );
}

export default VideoGrid;