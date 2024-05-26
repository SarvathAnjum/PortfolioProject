import React, { useState, useRef } from "react";
import VideoPlayer from "react-video-js-player";
import Project_implementation_video from "../Assets/ProjectPics/Project_implementation_video.mp4";
import bg3 from "../Assets/bg3.jpg";
import ProjectsPageStyles from "../Classes/ProjectsPageStyles";

function FinalYearProjectVideo() {
	const classes = ProjectsPageStyles()
  const playerRef = useRef(null);

  const video = {
    src: Project_implementation_video,
    poster: bg3,
  };

  const onPlayerReady = (player) => {
    console.log("Player is ready: ", player);
    playerRef.current = player;
  };

  return (
    <div>
      {/* <VideoPlayer
                controls={true}
                src={video.src}
                poster={video.poster}
                width="720"
                height="420"
                onReady={onPlayerReady}
            /> */}
      <video id="my-video" class={classes.finalYearProjectVideo} controls preload="auto"  poster={bg3}>
        <source src={Project_implementation_video} type="video/mp4" />
      </video>
    </div>
  );
}

export default FinalYearProjectVideo;
