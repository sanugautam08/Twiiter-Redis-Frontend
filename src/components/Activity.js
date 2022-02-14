import React, { useContext, useEffect, useState } from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import { tokenContext } from "../App";
import { getUserActivity } from "../utils/tweetService";
// import Trendstweet from "./Trendstweet";

const Activity = () => {
  const [activityData, setActivityData] = useState([]);
  const { token, setToken } = useContext(tokenContext);
  useEffect(() => {
    getUserActivity(token).then(
      (res) => {
        if (res.status) {
          setActivityData(res.data);
          console.log("activity", res.data);
          return;
        }
        console.log("Error");
      },
      (error) => {
        console.log("Error occured");
      }
    );
  }, []);

  return (
    <div>
      {activityData.map((i) => (
        <div key={i.tweetId}>
          <div className="postss">
            <div className="postss__first">
              <div className="posts__first__img">
                <img src="/images/profile2.jpeg" alt="profile img" />
              </div>

              <div className="posts__first__name">
                <strong>{i.owner.fullName}</strong>{" "}
                <FaRegCheckCircle className="verify" />
              </div>
              <br />
              <div className="posts__first__username">
                {i.owner.username}
                <span>6m</span>
              </div>
            </div>
            <div className="postss__details">
              <div className="postss__details__msg">{i.tweet}</div>
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

export default Activity;
