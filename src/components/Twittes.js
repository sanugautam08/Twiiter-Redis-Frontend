import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Profile from "./profile";
const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts__home">Home</div>
      <CreateTweet />
      {/* <Profile/> */}
      <Posts />
    </div>
  );
};

export default Twittes;
