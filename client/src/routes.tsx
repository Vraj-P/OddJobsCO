import React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Routes: React.FC = () => {
    return (
        <AppRoutes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
        </AppRoutes>
    );
};

export default Routes;
