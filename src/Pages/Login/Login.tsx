import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Page from "../../Components/Page/Page";
import { INoPropsReactComponent } from "../../GlobalTypes/Types";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "../../Utils/Funcs";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import GoogleAuth from "../../Components/GoogleAuth/GoogleAuth";
import logo from "../../Assets/icon.png";

type ILoginData = {
  email: string;
  password: string;
};

const Login: INoPropsReactComponent = () => {
  const [loginUserData, setLoginUserData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const navigate = useNavigate();

  const handleOnChangePassword = (value: string) => {
    setLoginUserData({
      ...loginUserData,
      password: value,
    });
  };

  const handleOnChangeEmail = (value: string) => {
    setLoginUserData({
      ...loginUserData,
      email: value,
    });
  };

  const handlePost = () => {
    //e.preventDefault();
    if (!isEmailValidationError && !isPasswordValidationError) {
      setIsLoading(true);
      if (loginUserData.email !== "" && loginUserData.password !== "") {
        const userData = {
          Email: loginUserData.email,
          Password: loginUserData.password,
        };
        //request
        setLoginUserData({ ...loginUserData, email: "", password: "" });
      } else if (loginUserData.email === "" && loginUserData.password !== "") {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email !== "" && loginUserData.password === "") {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email === "" && loginUserData.password === "") {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (loginUserData.password !== "") {
      passwordValidator(setIsPasswordValidationError, loginUserData.password);
    } else setIsPasswordValidationError(false);
  }, [loginUserData.password]);

  useEffect(() => {
    if (loginUserData.email !== "") {
      emailValidator(setIsEmailValidationError, loginUserData.email);
    } else setIsEmailValidationError(false);
  }, [loginUserData.email]);

  return (
    <Page>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col h-fit bg-white w-[90%] md:w-[450px] rounded-[10px] shadow-custom px-3 pb-6">
          <div className="flex flex-col w-full md:w-[90%] self-center gap-4 mt-4">
            <div className="flex gap-3 items-center mt-4 w-full justify-between">
              <span className="font-sans text-black text-[20px] font-semibold  mt-4">
                Login
              </span>
              <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
            </div>
            <InputField
              label={"Email"}
              placeHolder="email"
              onChangeFunc={handleOnChangeEmail}
              value={loginUserData.email}
              handleOnKeyEnter={undefined}
              type="text"
              valueType="email"
              borderColor={isEmailValidationError ? "red" : undefined}
            />
            {isEmailValidationError && (
              <span className="font-sans text-red-500 text-[12px] mt-[-15px]">
                {"please enter valid email address"}
              </span>
            )}
            <InputField
              label={"Password"}
              placeHolder="password"
              onChangeFunc={handleOnChangePassword}
              value={loginUserData.password}
              type="password"
              valueType="password"
              borderColor={isPasswordValidationError ? "red" : undefined}
            />
            {isPasswordValidationError && (
              <div className="flex flex-col gap-1">
                <span className="font-sans font-bold text-red-500 text-[14px]">
                  {"password guidelines:"}
                </span>
                {passwordGuideLines.map((guideline) => (
                  <li
                    className="font-sans text-[14px] text-red-500"
                    key={guideline}
                  >
                    <span className="font-sans text-[13px] text-red-500">
                      {guideline}
                    </span>
                  </li>
                ))}
              </div>
            )}
            <GoogleAuth type="login" setIsLoading={setIsLoading} />
            <p className="font-sans underline text-[14px] text-primaryColor hover:cursor-pointer">
              forgot password
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-textGray text-[13px]">
                you don't have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="font-sans text-primaryColor text-[14px] hover:cursor-pointer underline"
                >
                  please signup here
                </span>
              </p>
              <Button
                onClickFunc={() => console.log("clicked")}
                text="login"
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login;
