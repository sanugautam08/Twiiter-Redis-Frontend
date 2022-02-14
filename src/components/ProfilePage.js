import React, { useContext, useEffect, useState } from "react";
import CreateTweet from "./CreateTweet";
import Sidebar from "./Sidebar";
import Activity from "./Activity";
import Trends from "./Trends";
import Profile from "./profile";

const ProfilePage = () => {
  return (
    <div className="posts">
      <Sidebar />
      <Profile />
      <Activity />
      <Trends />
    </div>
  );
};

export default ProfilePage;
