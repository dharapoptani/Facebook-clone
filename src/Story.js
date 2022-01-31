import { Avatar } from "@material-ui/core";
import React from "react";

const Story = ({ profileUrl, imageUrl, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        display: "flex",
      }}
      className="story"
    >
      <div className="story_avtar_block">
        <Avatar src={profileUrl} className="story_avtar" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
