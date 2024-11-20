import React, { useState } from "react";
import logo from "../../Assets/icon.png";
import Button from "../../Components/Button/Button";
import GoogleAuth from "../../Components/GoogleAuth/GoogleAuth";
import InputField from "../../Components/InputField/InputField";
import Page from "../../Components/Page/Page";
import { passwordGuideLines } from "../../Utils/Funcs";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHttpError, setHttpError] = useState<string>("");
  return (
    <Page>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col h-fit bg-white w-[90%] md:w-[450px] rounded-[10px] shadow-custom px-3 pb-6">
          <div className="flex flex-col w-full md:w-[90%] self-center gap-4 mt-4">
            <div className="flex gap-3 items-center mt-4 w-full justify-between">
              <span className="font-sans text-black text-[20px] font-semibold  mt-4">
                Verification
              </span>
              <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
            </div>
            <InputField
              label={"Code"}
              placeHolder="code"
              onChangeFunc={(value: string) => setVerificationCode(value)}
              value={verificationCode}
              handleOnKeyEnter={undefined}
              type="text"
              valueType="verification"
              borderColor={verificationCode && verificationCode.length < 4?"red":undefined}
            />
            {verificationCode && verificationCode.length < 4 && (
              <span className="font-sans text-red-500 text-[12px] mt-[-15px]">
                {"verification code should have 4 characters or more"}
              </span>
            )}
            <p className="font-sans underline text-[14px] text-primaryColor hover:cursor-pointer">
              resend code
            </p>

            <Button
              onClickFunc={() => console.log("clicked")}
              text="verify"
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Verification;
