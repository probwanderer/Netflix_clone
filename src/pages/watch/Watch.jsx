import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className="video" autoPlay onProgress controls 
      src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"/>
    </div>
  );
}

export default Watch;
