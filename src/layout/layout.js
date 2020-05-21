import React from "react";
import Nav from "./nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

// Global
import ConfirmationModal from "../components/common/confirmationModal";

// Routes
import ItemsPage from "../layout/pages/itemsPage";
import ItemPage from "./pages/itemDetailsPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "../layout/pages/registerPage";
import AboutPage from "../layout/pages/aboutPage";
import HomePage from "../layout/pages/homePage";
import ProfilePage from "../layout/pages/profilePage";

// auth
import * as userActions from "../store/actions/userActions";
import PrivateRoute from "../components/auth/privateRoute";
import NewItemPage from "./pages/newItemPage";

const Layout = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  dispatch(userActions.setUserToken(token));

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute exact path="/items">
            <ItemsPage />
          </PrivateRoute>
          <PrivateRoute exact path="/items/new">
            <NewItemPage />
          </PrivateRoute>
          <PrivateRoute path="/items/:id">
            <ItemPage />
          </PrivateRoute>
          <PrivateRoute path="/about">
            <AboutPage />
          </PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
        <ConfirmationModal />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
