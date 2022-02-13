import React from "react";
import { FaRegCheckCircle, FaCalendarCheck } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="container">
      <div className="box">
        <img src="/images/profile.jpeg" alt="profile img" className="photo" />
      </div>
      <div className="box-1">
        <h3>
          <strong>saurabh balke</strong>
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
