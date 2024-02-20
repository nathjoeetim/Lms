"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import Image from "next/image";
// import { toast } from "sonner";
import { MdAddCircle } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { DepartmentType, EnrollStudentType } from "@/utils/types";
import useInputValidator, { isEmail, isNotEmpty } from "@/screens/inputAuth";
import SubTitleComponent from "@/components/subTitle";
import OnSelectSectionComponent from "@/components/selectedSection";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import { SignupStudemtUrl } from "@/utils/network";
import { ScaleSpinner } from "@/components/loader";
import { toast } from "sonner";
// import { useToast } from "@/components/ui/use-toast";

function EnrollStudentComponent() {
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  // const { toast } = useToast();

  const dispatch = useDispatch();
  const router = useRouter();
  const { axiosHandler } = useAxios(router);
  useEffect(() => {
    FetchData(dispatch, router);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );

    const allDepartmentid = getDepartmentHandeler.map(
      (data: DepartmentType) => data.id
    );

    setDepartmentIndex(allDepartmentid);
    setDepartment(allDepartment);
  }, [dispatch, getDepartmentHandeler, router]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [imageIsSet, setImage] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string | ArrayBuffer>("");
  const [gender, _setGender] = useState<string[]>(["male", "female"]);
  const [department, setDepartment] = useState<string[]>([]);
  const [genotype, _setGenotype] = useState<string[]>([
    "AA",
    "AS",
    "SS",
    "AC",
    "SC",
  ]);
  const [allDepartmentIndex, setDepartmentIndex] = useState<number[]>([]);
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
      // toast({
      //   title: "Message",
      //   description: message,
      //   color: "red",
      // });
      // toast.error(message);
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
  } = useInputValidator(isNotEmpty);

  const {
    inputState: matricNumberInputValue,
    onChangeHandlerFn: matricNumberValurHandelerFn,
    hasNoError: matricNumberHasNoError,
    inputIsBlur: matricNumberIsBlur,
    inputIsBlurFn: matricNumberIsBlurHandelerFn,
    inputIsValid: matricNumberInputIsValid,
    clearInputValue: clearmatricNumberInputHandelerFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: contactNumberInputValue,
    onChangeHandlerFn: contactNumberValurHandelerFn,
    hasNoError: contactNumberHasNoError,
    inputIsBlur: contactNumberIsBlur,
    inputIsBlurFn: contactNumberIsBlurHandelerFn,
    inputIsValid: contactNumberInputIsValid,
    clearInputValue: clearcontactNumberInputHandelerFn,
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
  const setDepartmentValue = getDepartmentHandeler.find(
    element => element.name === departmentValue
  );
  const [level, setLevel] = useState<string[]>(["1", "2", "3", "4"]);

  const registrationScheme = {
    email: emailInputValue,
    first_name: firstNameInputValueHolder,
    gender: selectedGender,
    last_name: surnameInputValueHolder,
    level: 1,
    matric_no: matricNumberInputValue,
    password: passwordInputValueHolder,
    phone: +contactNumberInputValue,
    role: "student",
    student_department:
      setDepartmentValue != undefined ? setDepartmentValue?.id : 0,
  };

  function onValidateStudentEnrollment() {
    const formOneIsValid =
      emailInputIsValid &&
      passwordInputIsValid &&
      firstnameInputIsValid &&
      surnameInputIsValid &&
      imagePath.toString().trim().length >= 1;

    const formTwoIsValid =
      departmentValue.trim().length >= 1 &&
      levelValue.trim().length >= 1 &&
      matricNumberInputIsValid;

    if (formOneIsValid || formTwoIsValid) {
      if (formIndex === 3) {
        return;
      } else {
        setFormIndex(previous => previous + 1);
        return;
      }
    }
    return;
  }

  async function onSubmitFormFn(data: EnrollStudentType) {
    setIsLoading(true);
    const formData = {
      email: data.email,
      first_name: data.first_name,
      gender: data.gender,
      last_name: data.last_name,
      level: data.level,
      matric_no: data.matric_no,
      password: data.password,
      phone: data.phone,
      role: data.role,
      student_department: data.student_department,
    };

    const response = await axiosHandler<EnrollStudentType, typeof formData>(
      SignupStudemtUrl,
      "POST",
      formData,
      true
    );
    if (response) {
      toast.message(
        `${data.first_name} with the matric number of ${data.matric_no} enrollment was successful`
      );
      setIsLoading(false);
      // router.push("/dashboard/students");
    }
    setIsLoading(false);
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
              </div>
              <div className="flex flex-row items-start gap-2 justify-start w-full">
                <div className="flex flex-col gap-0 justify-start items-start w-[220px]">
                  <label className="text-sm font-medium text-slate-700">
                    Matric Number
                  </label>
                  <Input
                    placeholder="Matric or Jamb number"
                    value={matricNumberInputValue}
                    onChange={matricNumberValurHandelerFn}
                    onBlur={matricNumberIsBlurHandelerFn}
                  />
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
                  <Input
                    placeholder="+234"
                    type="tel"
                    value={contactNumberInputValue}
                    onChange={contactNumberValurHandelerFn}
                    onBlur={contactNumberIsBlurHandelerFn}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center absolute right-[50%] left-[50%] bottom-[2px] gap-3">
          {formIndex > 1 && (
            <Button className="w-[120px]" onClick={onGoToPreviousPageHandeler}>
              previous
            </Button>
          )}
          {formIndex === 3 ? (
            isloading ? (
              <ScaleSpinner />
            ) : (
              <Button
                className="w-[120px]"
                onClick={() => onSubmitFormFn(registrationScheme)}
              >
                Submit
              </Button>
            )
          ) : (
            <Button className="w-[120px]" onClick={onValidateStudentEnrollment}>
              Next
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default EnrollStudentComponent;
