import React, { useEffect, useState } from "react";
import {
  IoAddCircleOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { FaCrown } from "react-icons/fa";

import { textGray } from "../../Colors/colors";
import { INoPropsReactComponent } from "../../GlobalTypes/Types";

const MenuList: INoPropsReactComponent = () => {
  const [currentRoute, setCurrentRoute] = useState<string>("/");
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string>("");
  const iconSize = 25;
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = false;

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const list: {
    name: string;
    route: string;
    icon: (route: string, name: string) => React.ReactNode;
  }[] = [
    {
      name: "Home",
      route: "/",
      icon: (route: string, name: string) => (
        <IoHomeOutline
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
    {
      name: "Favorites",
      route: "/favorites",
      icon: (route: string, name: string) => (
        <MdFavoriteBorder
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
    {
      name: "Chat",
      route: "/chat",
      icon: (route: string, name: string) => (
        <IoChatboxOutline
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
    {
      name: "Add Property",
      route: "/post",
      icon: (route: string, name: string) => (
        <IoAddCircleOutline
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: (route: string, name: string) => (
        <RxDashboard
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
    {
      name: "Account",
      route: "/account",
      icon: (route: string, name: string) => (
        <BsPerson
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
    {
      name: "Settings",
      route: "/settings",
      icon: (route: string, name: string) => (
        <IoSettingsOutline
          size={iconSize}
          color={
            route === currentRoute || name === hoveredMenuItem
              ? "white"
              : textGray
          }
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-1 w-full items-center pt-2 flex-1">
      <div className="flex w-[100%] flex-1 flex-col gap-1 items-center">
        {list.map(({ name, route, icon }) => (
          <div
            className={`flex w-[90%] gap-2 items-center pl-2 rounded-[5px] hover: cursor-pointer h-[40px] ${
              route === currentRoute ? "bg-primaryColor" : "bg-white"
            } hover:bg-lightPrimary`}
            onMouseEnter={() => setHoveredMenuItem(name)}
            onMouseLeave={() => setHoveredMenuItem("")}
            key={name}
            onClick={() => navigate(route)}
          >
            {icon(route, name)}
            <span
              className={`text-[14px] font-sans ${
                name === hoveredMenuItem || route === currentRoute
                  ? "text-white"
                  : "text-textGray"
              }`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[100%] items-center justify-center mb-2 gap-2">
        <div className="bg-purple-black h-[150px] w-[90%] rounded-[10px] flex flex-col p-1">
          <div className="text-iceWhite text-[14px] font-sans flex flex-1">
            Subscribe to get more premium features in your search
          </div>
          <div className="flex h-[40px] w-[100%] mb-1 bg-primaryColor hover:cursor-pointer self-center rounded-[5px] items-center justify-center gap-2">
            <FaCrown size={21} color="gold" />
            <span className="font-sans text-[13px] text-iceWhite">Premium</span>
          </div>
        </div>
        <div
          className={`flex w-[90%] gap-2 items-center pl-2 rounded-[5px] hover: cursor-pointer h-[40px] ${
            "/login" === currentRoute ? "bg-primaryColor" : "bg-white"
          } hover:bg-lightPrimary`}
          onMouseEnter={() => setHoveredMenuItem("login/out")}
          onMouseLeave={() => setHoveredMenuItem("")}
          onClick={() => navigate("/login")}
        >
          {isLogin ? (
            <IoIosLogOut
              size={iconSize}
              color={"login/out" === hoveredMenuItem ? "white" : textGray}
            />
          ) : (
            <IoIosLogIn
              size={iconSize}
              color={
                "login/out" === hoveredMenuItem || currentRoute === "/login"
                  ? "white"
                  : textGray
              }
            />
          )}
          <span
            className={`text-[14px] font-sans mt-[7px] ${
              "login/out" === hoveredMenuItem || currentRoute === "/login"
                ? "text-white"
                : "text-textGray"
            }`}
          >
            {isLogin ? "Logout" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
