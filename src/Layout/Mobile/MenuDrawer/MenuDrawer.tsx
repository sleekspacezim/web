import React, { useState } from "react";
import reactDom from "react-dom";

import MenuList from "../../MenuList/MenuList";
import menuLogo from "../../../Assets/icon.png";
import { DrawerOverlay, DrawerContainer } from "./Styles";

type Props = {
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDrawer: React.FC<Props> = ({ setOpenMobileMenu }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setOpenMobileMenu((value) => !value);
    }, 500);
  };
  
  return reactDom.createPortal(
    <>
      <DrawerOverlay onClick={toggleDrawer} />
      <DrawerContainer isOpen={isDrawerOpen}>
        <img
          src={menuLogo}
          alt="logo"
          className="w-[100px] h-[90px] mt-1 ml-1"
        />
        <MenuList />
      </DrawerContainer>
    </>,
    document.getElementById("drawer")!
  );
};

export default MenuDrawer;
