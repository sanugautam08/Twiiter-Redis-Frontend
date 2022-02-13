import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from "./components/profile";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
        <div className="twitter">
            
                
            <Routes>
            <Route 
              path='/' 
              element={<>
                <Sidebar /> 
                <Twittes />
                <Trends />
                </> } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </div>
        {/* <ProfilePage /> */}
        {/* <Login /> */}
        {/* <Signup /> */}
    </Router>
  );
}

export default App;