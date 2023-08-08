import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom";
import Header from './modules/Header/components/Header'
import Footer from './modules/Footer/components/Footer'
import Home from './modules/Home/components/Home';
import AboutUs from './modules/AboutUs/components/AboutUs';
import UserProfile from './modules/UserProfile/components/UserProfile'
import './less/main.css'

function App() {
    return (
    
        <Router >
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/profile" element={<UserProfile/>} />
                </Routes>
                <Footer />
            </div>
        </Router>

    );
}

export default App;
