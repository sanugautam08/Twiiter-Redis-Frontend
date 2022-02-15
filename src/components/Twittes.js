import React, { useContext } from "react";
import { authContext } from "../App";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Profile from "./profile";
const Twittes = () => {
  const { loggedIn, setLoggedIn } = useContext(authContext);

  return (
    <div className="posts">
      {loggedIn ? <CreateTweet /> : null}
      {/* <Profile/> */}
      <Posts />
    </div>
  );
};

export default Twittes;
