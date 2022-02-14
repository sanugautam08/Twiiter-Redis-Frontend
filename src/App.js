import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/login";
import Signup from "./components/signup";
import { getTweets } from "./utils/tweetService";

export const toggleMenu = React.createContext();
export const authContext = React.createContext();
export const tokenContext = React.createContext();
export const tweetContext = React.createContext();

function App() {
  const userData = JSON.parse(localStorage.getItem("data"));
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("tweets changed", tweets);
  }, [tweets]);

  const [menu, setMenu] = useState(true);

  const [loggedIn, setLoggedIn] = useState(
    userData && userData.token ? true : false
  );

  const [token, setToken] = useState(userData && userData.token);

  // Handlers
  const toggleHeader = () => {
    setMenu((menu) => !menu);
  };

  useEffect(() => {
    getTweets().then(
      (res) => {
        if (res.status) {
          setTweets(res.data);
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
    <toggleMenu.Provider value={toggleHeader}>
      <authContext.Provider value={{ loggedIn, setLoggedIn }}>
        <tokenContext.Provider value={{ token, setToken }}>
          <tweetContext.Provider value={{ tweets, setTweets }}>
            <Router>
              <div className="twitter">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Sidebar />
                        <Twittes />
                        <Trends />
                      </>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  {loggedIn ? (
                    <>
                      <Route path="/profile" element={<ProfilePage />} />
                    </>
                  ) : null}
                </Routes>
              </div>
            </Router>
          </tweetContext.Provider>
        </tokenContext.Provider>
      </authContext.Provider>
    </toggleMenu.Provider>
  );
}

export default App;
