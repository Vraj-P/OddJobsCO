import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingsPage from "./pages/listings";
import ListingPage from "./pages/listing";
import ProfilePage from "./pages/profile";

const Routes: React.FC = () => {
  return (
    <AppRoutes>
      <Route path="/" Component={Home} />
      <Route path="/profile" Component={ProfilePage} />
      <Route path="/listing" Component={ListingPage} />
      <Route path="/listings" Component={ListingsPage} />
    </AppRoutes>
  );
};

export default Routes;
