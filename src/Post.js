import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import "./Post.css";

const Post = ({ profile, postUrl, description, timeStamp, username }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={profile} />
        <div className="post_header_info">
          <h3>{username}</h3>
          <p>{new Date(timeStamp && timeStamp.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_description">
        <p>{description}</p>
      </div>
      <div className="post_image">
        <img src={postUrl} />
      </div>
      <div className="post_footer">
        <div className="post_option">
          <ThumbUpIcon />
          <h4>Like</h4>
        </div>
        <div className="post_option">
          <ChatBubbleOutlineIcon />
          <h4>Comment </h4>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <h4>Share</h4>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <h4>More</h4>
        </div>
      </div>
    </div>
  );
};

export default Post;
