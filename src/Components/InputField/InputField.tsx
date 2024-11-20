import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsEye, BsEyeSlash, BsPerson } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

import { textGray } from "../../Colors/colors";
import { IVoidFunc } from "../../GlobalTypes/Types";

type Props = {
  label?: string;
  value: string;
  height?: string;
  width?: string;
  placeHolder?: string;
  type: "number" | "text" | "password";
  borderColor?: string;
  handleOnKeyEnter?: IVoidFunc;
  valueType?:
    | "password"
    | "givenName"
    | "familyName"
    | "search"
    | "email"
    |"verification"
    | "default";
  onChangeFunc: (value: string) => void;
};

const InputField: React.FC<Props> = ({
  label,
  value,
  onChangeFunc,
  handleOnKeyEnter,
  height,
  width,
  type,
  valueType,
  borderColor,
  placeHolder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const iconSize = 24;
  const iconColor = textGray;

  const passwordVisibility = (label: string) => {
    if (label.toLowerCase() === "password") {
      if (showPassword) return undefined;
      else return "password";
    } else return undefined;
  };

  return (
    <div className="flex flex-col gap-1 relative">
      {label && (
        <span className="font-sans text-[14px] text-black">{label}</span>
      )}
      {valueType === "email" && (
        <div className="absolute bottom-2 right-1">
          <AiOutlineMail size={iconSize} color={iconColor} />
        </div>
      )}
      {valueType === "familyName" && (
        <div className="absolute bottom-2 right-1">
          <IoPeopleOutline size={iconSize} color={iconColor} />
        </div>
      )}
      {valueType === "givenName" && (
        <div className="absolute bottom-2 right-1">
          <BsPerson size={iconSize} color={iconColor} />
        </div>
      )}

      {valueType?.toLowerCase() === "password" &&
        (showPassword ? (
          <div className="absolute bottom-2 right-1">
            <BsEyeSlash
              fontSize={iconSize}
              color={iconColor}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        ) : (
          <div className="absolute bottom-2 right-1">
            <BsEye
              fontSize={iconSize}
              color={iconColor}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        ))}
      <input
        className="font-sans text-[14px] text-textGray outline-none "
        style={{
          border: `1px solid ${borderColor ? borderColor : textGray}`,
          borderRadius: 7,
          paddingLeft: 7,
          paddingRight: 30,
          width: width ? width : "100%",
          height: height ? height : 40,
        }}
        type={passwordVisibility(type)}
        placeholder={placeHolder ? placeHolder : ""}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeFunc(e.target.value)
        }
      />
    </div>
  );
};

export default InputField;
