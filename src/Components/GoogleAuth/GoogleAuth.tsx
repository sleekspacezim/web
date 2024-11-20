import { GoogleLogin } from "@react-oauth/google";
import React from "react";

type Props = {
  type: "login" | "register";
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const GoogleAuth: React.FC<Props> = ({ type, setIsLoading }) => {
  return (
    <div className="flex">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          setIsLoading(true);
          //handleAuth(credentialResponse);
        }}
        onError={() => {
          console.log("error");
        }}
        text={type === "login" ? "signin_with" : "signup_with"}
        shape="pill"
      />
    </div>
  );
};

export default GoogleAuth;
