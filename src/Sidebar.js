import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
import GroupIcon from "@material-ui/icons/Group";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import TextsmsIcon from "@material-ui/icons/Textsms";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useUserContext } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";

const Sidebar = () => {
  const [{ user }, dispatch] = useUserContext();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.UNSET_USER,
          user: "",
        });
        alert("Signout Successfully");
      })
      .catch((err) => alert("Signout Failed"));
  };

  return (
    <div className="sidebar">
      <div className="sidebar_option">
        <Avatar src={user.photoURL} />
        <h3>{user.displayName}</h3>
      </div>
      <div className="sidebar_option">
        <LocalHospitalIcon />
        <h3>COVID-19 Information Center</h3>
      </div>
      <div className="sidebar_option">
        <EmojiFlagsIcon />
        <h3>Pages</h3>
      </div>
      <div className="sidebar_option">
        <GroupIcon />
        <h3>Pages</h3>
      </div>
      <div className="sidebar_option">
        <TextsmsIcon />
        <h3>Messenger</h3>
      </div>
      <div className="sidebar_option">
        <StorefrontIcon />
        <h3>Marketplace</h3>
      </div>
      <div className="sidebar_option">
        <VideoLibraryIcon />
        <h3>Videos</h3>
      </div>
      <div className="sidebar_option">
        <ExpandMoreIcon />
        <h3>More Options</h3>
      </div>
      <div className="sidebar_option">
        <button className="sidebar_btn" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
