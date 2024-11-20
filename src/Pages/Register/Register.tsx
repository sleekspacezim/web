import { useEffect, useState } from "react";
import { INoPropsReactComponent } from "../../GlobalTypes/Types";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import GoogleAuth from "../../Components/GoogleAuth/GoogleAuth";
import InputField from "../../Components/InputField/InputField";
import Page from "../../Components/Page/Page";
import {
  passwordValidator,
  emailValidator,
  passwordGuideLines,
} from "../../Utils/Funcs";
import logo from "../../Assets/icon.png";

const Register: INoPropsReactComponent = () => {
  const [signUpData, setSignUpData] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const [isGivenNameValidationError, setIsFirstNameValidationError] =
    useState(false);
  const [isFamilyNameValidationError, setIsLastNameValidationError] =
    useState(false);
  const navigate = useNavigate();

  const handleOnChangeFirstName = (value: string) => {
    setSignUpData({
      ...signUpData,
      givenName: value,
    });
  };

  const handleOnChangeLastName = (value: string) => {
    setSignUpData({
      ...signUpData,
      familyName: value,
    });
  };

  const handleOnChangePassword = (value: string) => {
    setSignUpData({
      ...signUpData,
      password: value,
    });
  };
  const handleOnChangeEmail = (value: string) => {
    setSignUpData({
      ...signUpData,
      email: value,
    });
  };
  const handleSignUp = () => {
    if (
      !isEmailValidationError &&
      !isPasswordValidationError &&
      !isGivenNameValidationError &&
      !isFamilyNameValidationError
    ) {
      setIsLoading(true);
      if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName !== ""
      ) {
        const userData = {
          FirstName: signUpData.givenName,
          LastName: signUpData.familyName,
          Email: signUpData.email,
          Password: signUpData.password,
        };
        //request
        setSignUpData({
          ...signUpData,
          email: "",
          password: "",
          givenName: "",
          familyName: "",
        });
      } else if (
        signUpData.email === "" &&
        signUpData.password !== "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName !== ""
      ) {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password === "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName !== ""
      ) {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.givenName === "" &&
        signUpData.familyName !== ""
      ) {
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName === ""
      ) {
        setIsLastNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" &&
        signUpData.password === "" &&
        signUpData.givenName === "" &&
        signUpData.familyName === ""
      ) {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLastNameValidationError(true);
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" ||
        signUpData.password === "" ||
        signUpData.givenName === "" ||
        signUpData.familyName === ""
      ) {
        if (signUpData.email === "") setIsEmailValidationError(true);
        if (signUpData.password === "") setIsPasswordValidationError(true);
        if (signUpData.givenName === "") setIsFirstNameValidationError(true);
        if (signUpData.familyName === "") setIsLastNameValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (signUpData.password !== "") {
      passwordValidator(setIsPasswordValidationError, signUpData.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [signUpData.password]);

  useEffect(() => {
    if (signUpData.email !== "") {
      emailValidator(setIsEmailValidationError, signUpData.email);
    } else setIsEmailValidationError(false);
  }, [signUpData.email]);

  useEffect(() => {
    if (signUpData.givenName !== "") {
      if (signUpData.givenName.length < 4) {
        setIsFirstNameValidationError(true);
      } else {
        setIsFirstNameValidationError(false);
      }
    } else {
      setIsFirstNameValidationError(false);
    }
  }, [signUpData.givenName]);

  useEffect(() => {
    if (signUpData.familyName !== "") {
      if (signUpData.familyName.length < 4) {
        setIsLastNameValidationError(true);
      } else {
        setIsLastNameValidationError(false);
      }
    } else setIsLastNameValidationError(false);
  }, [signUpData.familyName]);

  return (
    <Page>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col h-fit bg-white w-[90%] md:w-[450px] rounded-[10px] shadow-custom px-3 pb-6">
          <div className="flex flex-col w-full md:w-[90%] self-center gap-2 mt-4">
            <div className="flex gap-3 items-center mt-4 w-full justify-between">
              <span className="font-sans text-black text-[20px] font-semibold  mt-4">
                Register
              </span>
              <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
            </div>
            <InputField
              label={"Given name"}
              placeHolder="given name"
              onChangeFunc={handleOnChangeFirstName}
              value={signUpData.givenName}
              handleOnKeyEnter={undefined}
              type="text"
              valueType="givenName"
              borderColor={isGivenNameValidationError ? "red" : undefined}
            />
            {isGivenNameValidationError && (
              <span className="font-sans text-red-500 text-[12px] mt-[-10px]">
                {"please enter more than 3 characters"}
              </span>
            )}
            <InputField
              label={"Family name"}
              placeHolder="family name"
              onChangeFunc={handleOnChangeLastName}
              value={signUpData.familyName}
              handleOnKeyEnter={undefined}
              type="text"
              valueType="familyName"
              borderColor={isFamilyNameValidationError ? "red" : undefined}
            />
            {isFamilyNameValidationError && (
              <span className="font-sans text-red-500 text-[12px] mt-[-10px]">
                {"please enter more than 3 characters"}
              </span>
            )}
            <InputField
              label={"Email"}
              placeHolder="email"
              onChangeFunc={handleOnChangeEmail}
              value={signUpData.email}
              borderColor={isEmailValidationError ? "red" : undefined}
              handleOnKeyEnter={undefined}
              type="text"
              valueType="email"
            />
            {isEmailValidationError && (
              <span className="font-sans text-red-500 text-[12px] mt-[-10px]">
                {"please enter valid email address"}
              </span>
            )}
            <InputField
              label={"Password"}
              placeHolder="password"
              onChangeFunc={handleOnChangePassword}
              value={signUpData.password}
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
            <GoogleAuth type="register" setIsLoading={setIsLoading} />
            <div className="flex flex-col gap-2">
              <p className="font-sans text-textGray text-[13px]">
                you already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="font-sans text-primaryColor text-[14px] hover:cursor-pointer underline"
                >
                  please login here
                </span>
              </p>
              <Button
                onClickFunc={() => console.log("clicked")}
                text="register"
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Register;
