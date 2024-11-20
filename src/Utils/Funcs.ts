export const passwordValidator = (
  setIsPasswordValidationError: React.Dispatch<React.SetStateAction<boolean>>,
  passwordValue: string
) => {
  const regexPasswordValidator = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (regexPasswordValidator.test(passwordValue)) {
    setIsPasswordValidationError(false);
  } else {
    setIsPasswordValidationError(true);
  }
};

export const emailValidator = (
  setIsEmailValidationError: React.Dispatch<React.SetStateAction<boolean>>,
  emailValue: string
) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailValue
    )
  ) {
    setIsEmailValidationError(true);
  } else {
    setIsEmailValidationError(false);
  }
};

export const passwordGuideLines = [
  "longer than 8 characters",
  "have atleast 1 special character",
  "have atleast 1 number",
  "have atleast 1 capital letter",
];

export const shortenString = (text: string, maxNumberOfWords: number) => {
  const maxWords = maxNumberOfWords + 1;
  if (text.length > maxNumberOfWords)
    return `${text.substring(0, maxWords)}...`;
  else return text;
};

export const cleanTextSnippets = (snippet: string) => {
  if (snippet) return snippet.replace(/(https?|ftp):\/\/[.[a-zA-Z0-9/-]+/, " ");
  else return "";
};
