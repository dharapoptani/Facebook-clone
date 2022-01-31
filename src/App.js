import React, { useState } from "react";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "./Login";
import "./App.css";
import { useUserContext } from "./StateProvider";

const App = () => {
  const [{ user }, dispatch] = useUserContext();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <div className="app_body">
            <div className="body_left">
              <Sidebar />
            </div>

            <div className="body_center">
              <Feed />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
