import React, { useEffect, useState } from "react";
import Story from "./Story";
import Comment from "./Comment";
import Post from "./Post";
import { data } from "./storyData";

import "./Feed.css";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snaps) => {
      const arr = snaps.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data(),
        };
      });
      console.log("hello dhara", arr);

      setPosts(arr);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed_container">
        <div className="feed_stories">
          {data.map((story) => {
            return (
              <Story
                profileUrl={story.profileUrl}
                imageUrl={story.imageUrl}
                title={story.title}
              />
            );
          })}
        </div>
        <Comment />
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              description={post.data.description}
              username={post.data.username}
              profile={post.data.profile}
              postUrl={post.data.postUrl}
              timeStamp={post.data.timeStamp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
