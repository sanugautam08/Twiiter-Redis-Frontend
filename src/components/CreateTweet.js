import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { tokenContext, tweetContext } from "../App";
import { postTweet } from "../utils/tweetService";

const CreateTweet = () => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");
  const { token, setToken } = useContext(tokenContext);
  const { tweets, setTweets } = useContext(tweetContext);
  const navigate = useNavigate();

  // Handlers
  const handleTweetPost = (e) => {
    e.preventDefault();
    if (!tweet) return setError("empty fields");
    postTweet(token, tweet).then(
      (res) => {
        if (!res.status) {
          setError(res.message);
          console.log(res.message);
          return;
        }
        console.log(res.data);
        setTweet("");
        setError("");
        setTweets((tweets) => [{ ...res.data }, ...tweets]);
      },
      (err) => {
        setError("Error: Try again!");
      }
    );
  };

  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.jpeg" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            className="create__control"
            placeholder="What's happening?"
          />
        </div>
      </div>
      {error ? <p>{error}</p> : null}
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <Button onClick={handleTweetPost}>Tweet</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
