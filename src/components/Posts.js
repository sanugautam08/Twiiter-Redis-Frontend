import React, { useContext, useEffect, useState } from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import { tweetContext } from "../App";
// import Trendstweet from "./Trendstweet";

const Posts = () => {
  const { tweets, setTweets } = useContext(tweetContext);
  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.tweetId}>
          <div className="postss">
            <div className="postss__first">
              <div className="posts__first__img">
                <img src="/images/profile2.jpeg" alt="profile img" />
              </div>

              <div className="posts__first__name">
                <strong>{tweet.author}</strong>{" "}
                <FaRegCheckCircle className="verify" />
              </div>
              <br />
              <div className="posts__first__username">
                {tweet.profile}
                <span>6m</span>
              </div>
            </div>
            <div className="postss__details">
              <div className="postss__details__msg">{tweet.tweet}</div>
              <div className="postss__details__img">
                {/* <img src="/images/post.jpeg" alt="post" /> */}
              </div>
              <div className="reactions">
                <span>
                  <FaComment className="re" /> 45
                </span>
                <span>
                  <FaRegChartBar className="re" /> 4
                </span>
                <span>
                  <FaHeart className="re" /> 345
                </span>
                <span>
                  <FaLeaf className="re" /> 234
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
