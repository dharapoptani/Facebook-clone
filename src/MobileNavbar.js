import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useUserContext } from "./StateProvider";
import "Navbar.css";

const MobileNavbar = () => {
  const [{ user }, dispatch] = useUserContext();
  return (
    <div className="m_navbar">
      <Avatar src={user.photoURL} />
      <div className="m_navbar_input">
        <SearchIcon />
        <input placeholder="Search Facebook" />
      </div>
    </div>
  );
};

export default MobileNavbar;
