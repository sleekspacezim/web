import React from "react";
import { BiLoader } from "react-icons/bi";

import { IVoidFunc } from "../../GlobalTypes/Types";
import { primaryColor } from "../../Colors/colors";

type Props = {
  text: string;
  bgColor?: string;
  width?: string;
  height?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  onClickFunc: IVoidFunc;
};

const Button: React.FC<Props> = ({
  text,
  bgColor,
  width,
  height,
  icon,
  isLoading,
  onClickFunc,
}) => {
  return (
    <button
      className="rounded-[7px] hover:cursor-pointer border-none flex items-center justify-center gap-2"
      onClick={onClickFunc}
      disabled={isLoading ? isLoading : false}
      style={{
        backgroundColor: bgColor ? bgColor : primaryColor,
        width: width ? width : "100%",
        height: height ? height : "40px",
      }}
    >
      {icon ? icon : null}
      {isLoading ? (
        <div className="flex animate-spin">
          <BiLoader size={17} color="white" />
        </div>
      ) : (
        <span className="font-sans text-[13px] text-white">{text}</span>
      )}
    </button>
  );
};

export default Button;
