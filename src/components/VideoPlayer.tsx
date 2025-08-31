import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { stopVideo } from "../features/videoSlice";

const VideoPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const videoUrl = useSelector((state: RootState) => state.video.currentVideo);

  if (!videoUrl) return null;

  return (
    <div className="player">
      <div className="player-wrapper" >
        <video className="player-control" src={videoUrl} controls autoPlay />
        <div className="player-button" >
          <button onClick={() => dispatch(stopVideo())}>CLose</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
