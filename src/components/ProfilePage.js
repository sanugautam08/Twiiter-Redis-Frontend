import React from "react";
import CreateTweet from "./CreateTweet";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Trends from "./Trends";
import Profile from "./profile";
const ProfilePage = () => {
  return (
    <div className="posts">
      <div className="posts__home">saurabh</div>
      <Sidebar />
      <Profile/>
      <Posts />
      {/* <Posts />
      <Posts /> */}
      <Trends />
    </div>
  );
};

export default ProfilePage;