import React from "react";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Chats from "../Pages/Chats/Chats";
import PostProperty from "../Pages/PostProperty.tsx/PostProperty";
import Account from "../Pages/Account/Account";
import Favorites from "../Pages/Favorites/Favorites";
import Settings from "../Pages/Settings/Settings";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Verification from "../Pages/Verification/Verification";

export type IRoute = {
  path: string;
  page: React.ReactNode;
};

export const routesList: IRoute[] = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/register",
    page: <Register />,
  },
  {
    path: "/verification",
    page: <Verification />,
  },
  {
    path: "/chats",
    page: <Chats />,
  },
  {
    path: "/post",
    page: <PostProperty />,
  },
  {
    path: "/account",
    page: <Account />,
  },
  {
    path: "/dashboard",
    page: <Dashboard />,
  },
  {
    path: "/favorites",
    page: <Favorites />,
  },
  {
    path: "/settings",
    page: <Settings />,
  },
];
