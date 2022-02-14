import React, { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle, FaCalendarCheck } from "react-icons/fa";
import { tokenContext } from "../App";
import { getUser } from "../utils/userService";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const { token, setToken } = useContext(tokenContext);

  useEffect(() => {
    getUser(token).then(
      (res) => {
        if (res.status) {
          setProfileData(res.data);
          console.log(res.data);
          return;
        }
        console.log("Error");
      },
      (error) => {
        console.log("Error occured");
      }
    );
  }, []);

  if (profileData) {
    return (
      <div className="container">
        <div className="box">
          <img src="/images/profile.jpeg" alt="profile img" className="photo" />
        </div>
        <div className="box-1">
          <h3>
            <strong>{profileData.fullName}</strong>
            <FaRegCheckCircle className="verify" />
          </h3>
          <br />
          <p className="id">{`@${profileData.username}`}</p>
          <br />
          <p>
            <FaCalendarCheck className="ic" /> joined February 2021
          </p>
          <br />
          <p>
            <strong>13k</strong> Following | <strong>3k</strong> follower
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="box">
        <img src="/images/profile.jpeg" alt="profile img" className="photo" />
      </div>
      <div className="box-1">
        <h3>
          <strong>User</strong>
          <FaRegCheckCircle className="verify" />
        </h3>
        <br />
        <p className="id">@saurabh</p>
        <br />
        <p>
          <FaCalendarCheck className="ic" /> joined February 2021
        </p>
        <br />
        <p>
          <strong>13k</strong> Following | <strong>3k</strong> follower
        </p>
      </div>
    </div>
  );
};

export default Profile;
