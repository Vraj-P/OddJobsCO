import { Routes as AppRoutes, Route } from "react-router-dom";
import {Listings} from "./components/pages/listings/Listings";
import {Login} from "./components/pages/login/Login";
import {Register} from "./components/pages/register/Register";
import {ForgotPassword} from "./components/pages/forgotPassword/ForgotPassword";

export const Routes = () => {
  return (
    <AppRoutes>
      <Route path={'/'} Component={Listings} />
      <Route path={'/login'} Component={Login} />
      <Route path={'/register'} Component={Register} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </AppRoutes>
  )
}