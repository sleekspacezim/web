import React, { useLayoutEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../Redux/Hooks/CustomHooks";
import { setScreenSize } from "../Redux/Slices/ScreenSizeSlice";
import MobileView from "./Mobile/MobileView";
import WebView from "./Web/WebView";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useAppDispatch();
  const screenSize = useAppSelector((state) => state.screenSize.value);

  useLayoutEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  useLayoutEffect(() => {
    if (screenSize) {
      if (screenSize <= 1024) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    }
  }, [screenSize]);

  return (
    <div className="flex w-full min-h-[99.5vh]">
      {mobileMenu ? (
        <MobileView children={children} />
      ) : (
        <WebView children={children} />
      )}
    </div>
  );
};

export default Layout;
