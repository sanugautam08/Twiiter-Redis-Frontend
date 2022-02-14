import React, { useContext } from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import { authContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  const { loggedIn, setLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  // handlers
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("data");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <Link to="/">
            <FaHome className="icons logo" />
            Home
          </Link>
        </li>
        <li>
          <a href="">
            <FaHashtag className="icons" /> Explore
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBell className="icons" /> Notifications
          </a>
        </li>
        <li>
          <a href="">
            <FaRegEnvelope className="icons" /> Messages
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> Bookmarks
          </a>
        </li>
        <li>
          <a href="">
            <FaClipboardList className="icons" /> Lists
          </a>
        </li>
        <li>
          <Link to="/profile">
            <FaUserAlt className="icons" /> Profile
          </Link>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" /> More
          </a>
        </li>
        <div className="sidebar__Btn">
          {loggedIn ? (
            <>
              <a onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <>
              <a href="/login">Log in</a>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
