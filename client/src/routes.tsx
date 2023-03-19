import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingsPage from "./pages/listings";
import ListingPage from "./pages/listing";
import ProfilePage from "./pages/profile";
import LoginForm from "./pages/login";
import RegisterForm from "./pages/register";
import { CreateEditPage } from "./pages/createEditPage";

const Routes: React.FC = () => {
  return (
    <AppRoutes>
      <Route path="/" Component={Home} />
      <Route path="/profile/:id" Component={ProfilePage} />
      <Route path="/listing/:id" Component={ListingPage} />
      <Route path="/listings" Component={ListingsPage} />
      <Route path="/login" Component={LoginForm} />
      <Route path="/register" Component={RegisterForm} />
      <Route path="/create" Component={() => CreateEditPage(false)} />
      <Route path="/edit" Component={() => CreateEditPage(true)} />
    </AppRoutes>
  );
};

export default Routes;
