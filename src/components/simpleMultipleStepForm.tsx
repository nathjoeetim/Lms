"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import useInputValidator, {
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
} from "@/screens/inputAuth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { HashSpinner } from "@/components/loader";
import { useRouter } from "next/navigation";
import OnSelectSectionComponent from "@/components/selectedSection";
import useAxios from "@/hooks/useAxios";
import { SignupStudemtUrl } from "@/utils/network";

function SimpleMultipleStepForm() {
  const router = useRouter();
  // const { axiosHandler } = useAxios(router);
  const [department, _setDepartment] = useState<string[]>([
    "Business Management ",
    "Law",
    "Political Sci",
    "Music",
    "Clinical Sci",
    "Computer Engr.",
  ]);
  const [courseDuration, _setCourseDuration] = useState<string[]>([
    "4 Year",
    "5 years",
  ]);
  const [gender, _setGender] = useState<string[]>(["Male", "Female"]);
  const [imageIsSet, setImage] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string | ArrayBuffer>("");

  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedDepartmemnt, setSelectedDepartment] = useState<string>("");
  const [selectedCourseDuration, setSelectedCourseDuration] =
    useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  function onSetSelectedHandelerFn(value: string) {
    setSelectedGender(value);
  }

  const {
    inputState: imagePathString,
    inputIsValid: imageIsValid,
    onChangeHandlerFn: changeImageHandlerFn,
    clearInputValue: clearImagePath,
  } = useInputValidator(
    () => imagePath && imagePath.toString().trim().length >= 1
  );

  const {
    inputState: firstNameInputValue,
    hasNoError: firstNameHasNoError,
    inputIsBlur: firstNameIsBlured,
    inputIsBlurFn: firstNameIsBlurHandelerFn,
    inputIsValid: firstNameInputIsValid,
    clearInputValue: onClearfirstNameFieldHandeler,
    onChangeHandlerFn: onChangefirstNameHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: otherNameInputValue,
    inputIsBlur: otherNameInputIsBlur,
    inputIsBlurFn: otherNameInputHandelerFn,
    hasNoError: otherNameHasNoError,
    inputIsValid: otherNameInputIsValid,
    clearInputValue: onClearotherNameFieldHandeler,
    onChangeHandlerFn: onChangeotherNameHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: admissionDateInputValue,
    inputIsBlur: admissionDateInputIsBlur,
    inputIsBlurFn: admissionDateBlurInputHandelerFn,
    hasNoError: admissionDateHasNoError,
    inputIsValid: admissionDateInputIsValid,
    clearInputValue: onClearadmissionDateFieldHandeler,
    onChangeHandlerFn: admissionDateInputHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: emailInputValue,
    hasNoError: emailHasNoError,
    inputIsValid: emailInputIsValid,
    inputIsBlur: emailInputIsBlur,
    inputIsBlurFn: emailIsBluredFunction,
    clearInputValue: onClearemailFieldHandeler,
    onChangeHandlerFn: onChangeemailHandelerFn,
  } = useInputValidator(isEmail);

  const {
    inputState: passwordInputValue,
    hasNoError: passwordHasNoError,
    inputIsValid: passwordInputIsValid,
    inputIsBlurFn: passWordIsBluredFn,
    inputIsBlur: passWordIsBlured,
    clearInputValue: onClearpasswordFieldHandeler,
    onChangeHandlerFn: onChangepasswordHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: confirmPasswordInputValue,
    hasNoError: confirmPasswordHasNoError,
    inputIsValid: confirmPasswordInputIsValid,
    clearInputValue: onClearconfirmPasswordFieldHandeler,
    onChangeHandlerFn: onChangeconfirmPasswordHandelerFn,
  } = useInputValidator(isEqualToOtherValue);

  function onUploadFileHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const imagePath = event.target?.result;
        setImage(true);
        setImagePath(imagePath!);
      };
      reader.readAsDataURL(file);
    } else {
      const message = (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">No File Selected</code>
        </div>
      );
      toast.error(message);
    }
  }

  type signUpSheme = {
    passport_path: string | ArrayBuffer;
    first_name: string;
    email: string;
    other_name: string;
    password: string;
    gender: string;
    course: string;
    duration: string;
    admissionDate: string;
  };
  const userInput: signUpSheme = {
    passport_path: imagePath,
    admissionDate: admissionDateInputValue,
    course: selectedDepartmemnt,
    duration: selectedCourseDuration,
    email: emailInputValue,
    password: passwordInputValue,
    first_name: firstNameInputValue,
    other_name: otherNameInputValue,
    gender: selectedGender,
  };
  async function onSubmitFormHandeler(data: signUpSheme) {
    setIsLoading(true);
    const isValid =
      emailInputIsValid &&
      passwordInputIsValid &&
      firstNameInputIsValid &&
      admissionDateInputIsValid &&
      otherNameInputIsValid;

    const signupData = {
      name: data.first_name + data.other_name,
      email: data.email,
      password: data.password,
      gender: data.gender,
      course: data.course,
      passportPath: data.passport_path,
      course_duration: data.duration,
      admissionDate: new Date(data.admissionDate).toISOString(),
      program: "Under-graduate",
      level: "100 level",
    };

    if (isValid && confirmPasswordInputValue === passwordInputValue) {
      console.log("Deatailed is Valid");

      // const response = await axiosHandler<signUpSheme, typeof signupData>(
      //   SignupStudemtUrl,
      //   "post",
      //   signupData
      // );
      // if (response) {
      //   router.push("/login");
      // } else {
      //   console.log("failed to push");
      // }
    }

    console.log("is Submitted");
  }

  function AlertDialogFunction() {
    return (
      <AlertDialog>
        <AlertDialogTrigger>Next</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Terms & Conditions</AlertDialogTitle>
            <AlertDialogDescription>
              {`
              A mail containing your password and reg number will be sent to ${emailInputValue}`}{" "}
              <br />
              <br />
              By proceeding, you&apos;ve accepted our{" "}
              <span className="text-blue-400 underline cursor-pointer">
                Terms & Conditions
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => onSubmitFormHandeler(userInput)}>
              Proceed
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <div className="w-[600px] max-w-full px-6 py-3 mx-auto rounded-lg border-2 border-dotted border-sky-300 gap-8 ">
      <div className="flex flex-col justify-end w-full gap-3 ">
        <div className="flex flex-row gap-7">
          <div>
            {!imageIsSet && (
              <label
                htmlFor="upload"
                className="flex flex-col items-center justify-center w-[200px] h-[200px] border-2 border-dotted rounded-lg cursor-pointer"
              >
                <span className="text-slate-600 font-medium text-base">
                  Upload Passport
                </span>
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={onUploadFileHandler}
                />
              </label>
            )}

            {imageIsSet && (
              <Image
                alt="passport"
                src={imagePath as string}
                height={200}
                width={200}
                style={{ width: "190px", height: "200px" }}
              />
            )}
            {!imageIsSet && (
              <div className="text-red-500">
                Please upload a passport photo.
              </div>
            )}
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-0">
              <Input
                placeholder="First Name"
                type="text"
                value={firstNameInputValue}
                onBlur={firstNameIsBlurHandelerFn}
                onChange={onChangefirstNameHandelerFn}
              />
              {firstNameIsBlured && !firstNameInputIsValid && (
                <span className="text-red-500 text-xs">
                  {" "}
                  Name field can&apos;t be left empty
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0">
              <Input
                placeholder="Other name"
                type="text"
                value={otherNameInputValue}
                onChange={onChangeotherNameHandelerFn}
                onBlur={otherNameInputHandelerFn}
              />
              {otherNameInputIsBlur && !otherNameInputIsValid && (
                <span className="text-red-500 text-xs">
                  {" "}
                  This field can&apos;t be left empty
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0">
              <Input
                placeholder="Email"
                type="email"
                value={emailInputValue}
                onBlur={emailIsBluredFunction}
                onChange={onChangeemailHandelerFn}
              />
              {emailInputIsBlur && !emailInputIsValid && (
                <span className="text-red-500 text-xs">
                  {" "}
                  Enter A Valid Email
                </span>
              )}
            </div>
            <OnSelectSectionComponent
              placeHolder="Gender"
              options={gender}
              onGetSelectedValueHandeler={onSetSelectedHandelerFn}
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col w-[250px]">
              <OnSelectSectionComponent
                placeHolder="Department"
                options={department}
                onGetSelectedValueHandeler={setSelectedDepartment}
              />
            </div>
            <div className="bg-slate-400 w-[170px] h-9 flex flex-row item-center justify-start p-2 rounded-md cursor-not-allowed text-[14px]">
              {" "}
              100 Level{" "}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col w-[250px]">
              <OnSelectSectionComponent
                placeHolder="Course Duration"
                options={courseDuration}
                onGetSelectedValueHandeler={setSelectedCourseDuration}
              />
            </div>
            <div className="bg-slate-400 w-[130px] h-9 flex flex-row item-center justify-start p-2 rounded-md cursor-not-allowed text-[14px]">
              {" "}
              Under-graduate{" "}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-5 w-full">
            <Input
              placeholder="Password"
              type="password"
              className="w-[200px]"
              value={passwordInputValue}
              onChange={onChangepasswordHandelerFn}
              onBlur={passWordIsBluredFn}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              className="w-[200px]"
              value={confirmPasswordInputValue}
              onChange={onChangeconfirmPasswordHandelerFn}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h6 className="text-slate-600 font-medium text-sm">
              Date of Birth (DOB)
            </h6>
            <input
              type="date"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              value={admissionDateInputValue}
              onChange={admissionDateInputHandelerFn}
              onBlur={admissionDateBlurInputHandelerFn}
            />
          </div>
          <div className="flex flex-row items-center justify-end w-full">
            <div>{isLoading ? <HashSpinner /> : <AlertDialogFunction />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleMultipleStepForm;
