import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { stopVideo } from "../features/videoSlice";

const VideoPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const videoUrl = useSelector((state: RootState) => state.video.currentVideo);

  if (!videoUrl) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "#fff", padding: 20, borderRadius: 10 }}>
        <video src={videoUrl} controls width="600" autoPlay />
        <div style={{ textAlign: "right", marginTop: 10 }}>
          <button onClick={() => dispatch(stopVideo())}>Закрити</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
