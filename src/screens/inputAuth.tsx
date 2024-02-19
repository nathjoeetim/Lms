import { useState } from "react";

const useInputValidator = (validInput: any) => {
  const [inputState, setInputState] = useState("");
  const [inputIsBlur, setInputIsBlur] = useState(false);

  const hasNoError = validInput(inputState);
  const inputIsValid = hasNoError && inputIsBlur;

  const onChangeHandlerFn = (e: any) => {
    setInputState(e.target.value);
  };

  const inputIsBlurFn = () => {
    setInputIsBlur(true);
  };

  const clearInputValue = () => {
    setInputState("");
    setInputIsBlur(false);
  };

  return {
    inputState,
    hasNoError,
    inputIsBlurFn,
    inputIsBlur,
    inputIsValid,
    onChangeHandlerFn,
    clearInputValue,
  };
};

export default useInputValidator;
export function isEmail(value: string) {
  if (!value || typeof value !== "string") {
    return false; // Handle null, undefined, or non-string values
  }
  return value.includes("@");
}

export function isNotEmpty(value: any) {
  if (!value && value !== 0) {
    return false; // Handle null, undefined, or empty values
  }
  return value.toString().trim() !== "";
}

export function hasMinLength(value: any, minLength: any) {
  if (!value || typeof value !== "string") {
    return false; // Handle null, undefined, or non-string values
  }
  return value.length >= minLength;
}

export function isEqualToOtherValue(value: string, otherValue: string) {
  if (
    value === null ||
    value === undefined ||
    otherValue === null ||
    otherValue === undefined
  ) {
    return false; // Handle null or undefined values
  }
  return value === otherValue;
}
