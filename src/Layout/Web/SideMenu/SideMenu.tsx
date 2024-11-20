import MenuList from "../../MenuList/MenuList";
import menuLogo from "../../../Assets/menuLogo.png";
import { INoPropsReactComponent } from "../../../GlobalTypes/Types";

const SideMenu: INoPropsReactComponent = () => {
  return (
    <div className="bg-white text-white w-[220px] flex flex-col fixed h-[100vh]">
      <div className="flex pl-2">
        <img src={menuLogo} alt="logo" className="w-[100px] h-[90px]" />
      </div>
      <MenuList />
    </div>
  );
};

export default SideMenu;
