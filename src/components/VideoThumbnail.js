import React from 'react';

function VideoThumbnail({ video }) {
  // Extract the YouTube video ID from the URL
  const videoId = getYouTubeVideoId(video.videoUrl);

  // Function to extract the YouTube video ID
  function getYouTubeVideoId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=|watch\?v=))([\w-]{11})/);
    return match && match[1];
  }

  // If a valid YouTube video ID is found, create the embed URL
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 mb-5 mx-7">
      {embedUrl ? (
        <iframe
          width="100%"
          height="315"
          src={embedUrl}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <img src={video.thumbnail} alt={video.title} className="w-full h-auto" />
      )}
      <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
      <p className="text-gray-600">{video.description}</p>
    </div>
  );
}

export default VideoThumbnail;
