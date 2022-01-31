import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React, { useState } from "react";
import { useUserContext } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";

const Comment = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [{ user }, dispatch] = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      profile: user.photoURL,
      username: user.displayName,
      postUrl: imgUrl,
      description: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setImgUrl("");
  };

  return (
    <div className="comment">
      <div className="comment_upper">
        <Avatar src={user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's new in your mind?`}
          />
          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="Image Url"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="comment_lower">
        <div className="comment_lower_option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="comment_lower_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photos/Videos</h4>
        </div>
        <div className="comment_lower_option">
          <InsertEmoticonIcon style={{ color: "blue" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default Comment;
