"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import Image from "next/image";
import { toast } from "sonner";
import { MdAddCircle } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { DepartmentType } from "@/utils/types";
import useInputValidator, { isEmail, isNotEmpty } from "@/screens/inputAuth";
import { SubTitleComponent } from "@/app/dashboard/page";
import OnSelectSectionComponent from "@/components/selectedSection";

function EnrollStudentComponent() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    FetchData(dispatch);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );
    setDepartment(allDepartment);
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        const countriesData = jsonData.map((el: any) => el.name.common);

        setCountries(countriesData);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch countries data");
      }
    };

    fetchCountryData();
  }, [dispatch, getDepartmentHandeler]);

  const [imageIsSet, setImage] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string | ArrayBuffer>("");
  const [gender, _setGender] = useState<string[]>(["Male", "Female"]);
  const [department, setDepartment] = useState<string[]>([]);
  const [level, _setLevel] = useState<string[]>(["100", "200", "300", "400"]);
  const [genotype, setGenotype] = useState<string[]>([
    "AA",
    "AS",
    "SS",
    "AC",
    "SC",
  ]);
  const [selectedGenoType, setSelectedGenotype] = useState<string>("");
  const [departmentValue, setSelectedDepartment] = useState<string>("");
  const [levelValue, setSelectedLevel] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [formIndex, setFormIndex] = useState(1);

  function onSetSelectedHandelerFn(value: string) {
    setSelectedGender(value);
  }

  function onChangeImageHandler() {
    setImagePath("");
    setImage(false);
    // Pass a dummy event argument or null if you're not using it
  }

  function onUploadFileHandler(e?: React.ChangeEvent<HTMLInputElement>) {
    const file = e?.target.files?.[0];
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

  const { hasNoError: imageHasNoError } = useInputValidator(
    () => imagePath && imagePath.toString().trim().length >= 1
  );
  //  the surname value
  const {
    inputState: surnameInputValueHolder,
    onChangeHandlerFn: surnameinputValueHandelerFunction,
    hasNoError: surnameHasNoError,
    inputIsBlur: surnameIsTouched,
    inputIsBlurFn: surnameIsTouchedFunction,
    inputIsValid: surnameInputIsValid,
    clearInputValue: clearSurnameInputHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: firstNameInputValueHolder,
    onChangeHandlerFn: firstnameValurHandelerFn,
    hasNoError: firstnameHasNoError,
    inputIsBlur: firstNameIsBlur,
    inputIsBlurFn: firstnameIsBlurHandelerFn,
    inputIsValid: firstnameInputIsValid,
    clearInputValue: clearFirstnameInputHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: passwordInputValueHolder,
    onChangeHandlerFn: passwordValurHandelerFn,
    hasNoError: passwordHasNoError,
    inputIsBlur: passwordIsBlur,
    inputIsBlurFn: passwordIsBlurHandelerFn,
    inputIsValid: passwordInputIsValid,
    clearInputValue: clearPasswordInputHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: othernameInputValueHolder,
    onChangeHandlerFn: othernameValurHandelerFn,
    hasNoError: othernameHasNoError,
    inputIsBlur: othernameIsBlur,
    inputIsBlurFn: othernameIsBlurHandelerFn,
    inputIsValid: othernameInputIsValid,
    clearInputValue: clearothernameInputHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: emailInputValue,
    hasNoError: emailHasNoError,
    inputIsValid: emailInputIsValid,
    inputIsBlur: emailInputIsBlur,
    inputIsBlurFn: emailIsBluredFunction,
    clearInputValue: onClearemailFieldHandeler,
    onChangeHandlerFn: onChangeEmailHandelerFn,
  } = useInputValidator(isEmail);

  function onGoToPreviousPageHandeler() {
    if (formIndex > 1) {
      setFormIndex(currentState => currentState - 1);
    }
    return;
  }

  function onSubmitFormInputHandelerFn() {
    const formOneIsValid =
      emailInputIsValid &&
      passwordInputIsValid &&
      firstnameInputIsValid &&
      surnameInputIsValid;

    if (formOneIsValid) {
      if (formIndex === 3) {
        return;
      } else {
        setFormIndex(previous => previous + 1);
        return;
      }
    }
    console.log("error");
    return;
  }

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar ">
      <SubTitleComponent
        pageIdentifier="> Enroll student"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className=" relative flex flex-row justify-start items-start h-[320px]  w-[97%] mx-auto px-2 transition-height duration-300 gap-4 p-2 ">
        <div className="flex flex-col gap-2 items-start justify-start bg-indigo-500 p-3 shadow-md rounded-md">
          <span className="flex flex-row gap-3 items-center text-base text-white font-semibold justify-between w-full">
            Basic BioData{" "}
            {formIndex > 1 || formIndex == 1 ? (
              <MdRadioButtonChecked size={19} />
            ) : (
              <MdOutlineRadioButtonUnchecked size={19} />
            )}{" "}
          </span>
          <span className="flex flex-row gap-3 items-center text-base text-white font-semibold justify-between w-full">
            Department{" "}
            {formIndex > 2 || formIndex == 2 ? (
              <MdRadioButtonChecked size={19} />
            ) : (
              <MdOutlineRadioButtonUnchecked size={19} />
            )}{" "}
          </span>
          <span className="flex flex-row gap-3 items-center text-base text-white font-semibold justify-between w-full">
            More Information{" "}
            {formIndex === 3 ? (
              <MdRadioButtonChecked size={19} />
            ) : (
              <MdOutlineRadioButtonUnchecked size={19} />
            )}{" "}
          </span>
        </div>
        <div className="flex flex-row justify-start gap-2">
          <div className="felx flex-col justify-start gap-2">
            <div>
              {!imageIsSet && (
                <label
                  htmlFor="upload"
                  className="flex flex-col items-center justify-center w-[150px] h-[150px] border-2 border-dotted rounded-lg cursor-pointer"
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
                <div className="flex flex-col">
                  <Image
                    alt="passport"
                    src={imagePath as string}
                    height={150}
                    width={150}
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5
                    className="flex flex-rol gap-1 items-center justify-center text-indigo-500 text-sm h-12 border-2  cursor-pointer w-[151px]"
                    onClick={onChangeImageHandler}
                  >
                    <MdAddCircle size={19} />
                    Change Passport
                  </h5>
                </div>
              )}
              {!imageIsSet && (
                <div className="text-red-500 text-[10px]">
                  Please upload a passport photo.
                </div>
              )}
            </div>
          </div>
          {formIndex === 1 && (
            <div className="flex flex-col gap-2">
              <h5 className="text-slate-600 font-semibold text-sm mb-2 underline ">
                {" "}
                Student Bio-Data information{" "}
              </h5>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start">
                  <label className="text-sm font-medium text-slate-700">
                    Surname
                  </label>
                  <Input
                    placeholder="Surname"
                    type="text"
                    value={surnameInputValueHolder}
                    onChange={surnameinputValueHandelerFunction}
                    onBlur={surnameIsTouchedFunction}
                  />
                  {surnameIsTouched && !surnameInputIsValid && (
                    <span className="text-red-500 text-xs">
                      {" "}
                      This Field is Required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-0 justify-start items-start">
                  <label className="text-sm font-medium text-slate-700">
                    First Name
                  </label>
                  <Input
                    placeholder="E.g David"
                    type="text"
                    value={firstNameInputValueHolder}
                    onChange={firstnameValurHandelerFn}
                    onBlur={firstnameIsBlurHandelerFn}
                  />
                  {firstNameIsBlur && !firstnameInputIsValid && (
                    <span className="text-red-500 text-xs">
                      {" "}
                      This Field is Required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start">
                  <label className="text-sm font-medium text-slate-700">
                    Other Names{" "}
                    <span className="text-red-500 text-xs">(If Any)</span>
                  </label>
                  <Input
                    placeholder="OtherName"
                    type="text"
                    value={othernameInputValueHolder}
                    onChange={othernameValurHandelerFn}
                  />
                </div>
                <div className="flex flex-col gap-0 justify-start items-start">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={passwordInputValueHolder}
                    onChange={passwordValurHandelerFn}
                    onBlur={passwordIsBlurHandelerFn}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 justify-start w-full">
                <div className="flex flex-col gap-0">
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={emailInputValue}
                    onBlur={emailIsBluredFunction}
                    onChange={onChangeEmailHandelerFn}
                  />
                  {emailInputIsBlur && !emailInputIsValid && (
                    <span className="text-red-500 text-xs">
                      {" "}
                      Enter A Valid Email
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-0 justify-start items-start">
                  <label className="text-sm font-medium text-slate-700">
                    Gender (M/F)
                  </label>
                  <div className="w-[130px]">
                    <OnSelectSectionComponent
                      placeHolder="Gender"
                      options={gender}
                      onGetSelectedValueHandeler={onSetSelectedHandelerFn}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {formIndex === 2 && (
            <div className="flex flex-col gap-4">
              <h5 className="text-slate-600 font-semibold text-sm mb-2 underline ">
                {" "}
                Student&apos;s Department / Academic Data
              </h5>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start w-[250px]">
                  <label className="text-sm font-medium text-slate-700">
                    Department
                  </label>
                  <OnSelectSectionComponent
                    options={department}
                    placeHolder="Departments"
                    onGetSelectedValueHandeler={setSelectedDepartment}
                  />
                </div>
                <div className="flex flex-col gap-0 justify-start items-start w-[100px]">
                  <label className="text-sm font-medium text-slate-700">
                    Level
                  </label>
                  <OnSelectSectionComponent
                    options={level}
                    placeHolder="Select Level"
                    onGetSelectedValueHandeler={setSelectedLevel}
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h6 className="text-slate-600 font-medium text-sm">
                    Date of Birth (DOB)
                  </h6>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 h-9"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start w-[250px]">
                  <label className="text-sm font-medium text-slate-700">
                    Academic Session
                  </label>
                  <div className="bg-slate-400 w-[170px] h-9 flex flex-row item-center justify-start p-2 rounded-md cursor-not-allowed text-[14px]">
                    2023/2324
                  </div>
                </div>
                <div className="flex flex-col gap-0 justify-start items-start w-[220px]">
                  <label className="text-sm font-medium text-slate-700">
                    Matric Number
                  </label>
                  <Input placeholder="Matric or Jamb number" />
                </div>
              </div>
            </div>
          )}
          {formIndex === 3 && (
            <div className="flex flex-col gap-4">
              <h5 className="text-slate-600 font-semibold text-sm mb-2 underline ">
                {" "}
                Additional Profile Information
              </h5>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start w-[180px]">
                  <label className="text-sm font-medium text-slate-700">
                    Contact Number
                  </label>
                  <Input placeholder="+234" type="tel" />
                </div>
                <div className="flex flex-col gap-0 justify-start items-start w-[90px]">
                  <label className="text-sm font-medium text-slate-700">
                    Genotype
                  </label>
                  <OnSelectSectionComponent
                    options={genotype}
                    placeHolder="Select"
                    onGetSelectedValueHandeler={setSelectedGenotype}
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h6 className="text-slate-600 font-medium text-sm">
                    Date of Birth (DOB)
                  </h6>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 h-9"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start w-[250px]">
                  <label className="text-sm font-medium text-slate-700">
                    Religion
                  </label>
                  <Input type="text" />
                </div>
                <div className="flex flex-col gap-0 justify-start items-start w-[220px]">
                  <label className="text-sm font-medium text-slate-700">
                    Matric Number
                  </label>
                  <Input placeholder="Matric or Jamb number" />
                </div>
              </div>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start w-[220px]">
                  <label className="text-sm font-medium text-slate-700">
                    Select Country
                  </label>
                  <OnSelectSectionComponent
                    options={countries}
                    onGetSelectedValueHandeler={setSelectedCountry}
                    placeHolder="Select Country"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row absolute right-[50%] left-[50%] bottom-[2px] gap-3">
          {formIndex > 1 && (
            <Button className="w-[120px]" onClick={onGoToPreviousPageHandeler}>
              previous
            </Button>
          )}
          {formIndex === 3 ? (
            <Button className="w-[120px]">Submit</Button>
          ) : (
            <Button className="w-[120px]" onClick={onSubmitFormInputHandelerFn}>
              Next
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default EnrollStudentComponent;
