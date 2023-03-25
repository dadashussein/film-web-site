import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ trailerKey }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const onReady = (event) => {
    event.target.playVideo();
  };

  const onEnd = () => {
    setIsVideoEnded(true);
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    },
  };

  return (
    <div className="relative">
      <YouTube
        videoId={trailerKey?.key}
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
      />
      {isVideoEnded && (
        <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
          <p className="text-white text-2xl font-bold">Video has ended</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
