import React from "react";
import "./Navbar.css";
import facebook from "./images/facebook.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useUserContext } from "./StateProvider";

function Navbar() {
  const [{ user }, dispatch] = useUserContext();
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" />
        <div className="navbar_left_input">
          <SearchIcon />
          <input type="text" placeholder="search facebook" />
        </div>
      </div>

      <div className="navbar_center">
        <div className="navbar_center_option  navbar_center_option--active">
          <HomeIcon />
        </div>
        <div className="navbar_center_option">
          <FlagIcon />
        </div>
        <div className="navbar_center_option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="navbar_center_option">
          <StorefrontOutlinedIcon />
        </div>
        <div className="navbar_center_option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className="navbar_right">
        <div className="navbar_right_info">
          <Avatar src={user.photoURL} />
          <h3>{user.displayName}</h3>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
