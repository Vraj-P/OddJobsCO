import React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Profile from "./pages/Profile";

const Routes: React.FC = () => {
    return (
        <AppRoutes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/profile" Component={Profile} />
            <Route path="/listings" Component={Listings} />
        </AppRoutes>
    );
};

export default Routes;
