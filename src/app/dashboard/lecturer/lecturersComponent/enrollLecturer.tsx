"use client";
import Image from "next/image";
import { MdAddCircle } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import OnSelectSectionComponent from "@/components/selectedSection";
import { DepartmentType } from "@/utils/types";
import { useSelector } from "react-redux";

function EnrollLecturer() {
  const allDepartment: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const [imageIsSet, setImage] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string | ArrayBuffer>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string[]>([]);
  const [selectedDepartmentValue, setSelectedDepartmrnyValue] =
    useState<string>("");
  const [gender, setGender] = useState<string[]>(["male", "female"]);
  const [selectedGender, setSelectedGender] = useState<string>("");

  useEffect(() => {
    const departmentName = allDepartment.map(
      (data: DepartmentType) => data.name
    );

    setSelectedDepartment(departmentName);
  }, [allDepartment]);

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
    }
  }

  return (
    <div className="flex flex-col items-start justify-start w-full gap-4">
      <div className="flex flex-row justify-start gap-5">
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
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col item-start justify-start">
              <h4 className="text-slate-500 font-semibold text-sm">
                First Name
              </h4>
              <Input placeholder="E.g Samuel" />
            </div>
            <div className="flex flex-col item-start justify-start">
              <h4 className="text-slate-500 font-semibold text-sm">
                Other Name
              </h4>
              <Input placeholder="E.g David Solomn" />
            </div>
            <div className="flex flex-col item-start justify-start w-[200px]">
              <h4 className="text-slate-500 font-semibold text-sm">
                Department
              </h4>
              <OnSelectSectionComponent
                placeHolder="Select"
                onGetSelectedValueHandeler={setSelectedDepartmrnyValue}
                options={selectedDepartment}
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col item-start justify-start">
              <h4 className="text-slate-500 font-semibold text-sm">
                Lecturers Id Number
              </h4>
              <Input placeholder="NS/12/2309" />
            </div>
            <div className="flex flex-col item-start justify-start w-[170px]">
              <h4 className="text-slate-500 font-semibold text-sm">Gender</h4>
              <OnSelectSectionComponent
                placeHolder="Gender"
                options={gender}
                onGetSelectedValueHandeler={setSelectedGender}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-9">
        <div className="flex flex-col item-start justify-start">
          <h4 className="text-slate-500 font-semibold text-sm">Email</h4>
          <Input
            placeholder="E.g Samuel@mail.com"
            type="email"
            className="flex flex-col w-[240px]"
          />
        </div>
        <div className="flex flex-col item-start justify-start">
          <h4 className="text-slate-500 font-semibold text-sm">Password</h4>
          <Input
            placeholder=""
            type="password"
            className="flex flex-col w-[240px]"
          />
        </div>
        <div className="flex flex-col item-start justify-start">
          <h4 className="text-slate-500 font-semibold text-sm">
            Confirm Password
          </h4>
          <Input
            placeholder=""
            type="password"
            className="flex flex-col w-[240px]"
          />
        </div>
      </div>
      <div className="flex flex-row w-full justify-end items-center mt-6">
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default EnrollLecturer;
