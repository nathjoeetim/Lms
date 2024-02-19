"use client";
import React, { useEffect, useState } from "react";
import OnSelectSectionComponent from "@/components/selectedSection";
import { DepartmentType } from "@/utils/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";

function ImportContentField() {
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const dispatch = useDispatch();
  const [department, setDepartment] = useState<string[]>([]);
  const [level, _setLevel] = useState<string[]>(["100", "200", "300", "400"]);
  const [academicSession, setAcademicSession] = useState<string[]>([
    "Current Section",
  ]);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  const [onSelectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedAcademicSession, setSelectedacademicSession] =
    useState<string>("");

  useEffect(() => {
    FetchData(dispatch);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );
    setDepartment(allDepartment);
  }, [dispatch, getDepartmentHandeler]);

  return (
    <div className="flex flex-col items-center justify-start gap-9 w-full">
      <div className="flex flex-row items-center justify-start gap-9 w-full">
        <div className="flex flex-col gap-0 justify-start items-start w-[180px]">
          <label className="text-sm font-medium text-slate-700">
            Department
          </label>
          <OnSelectSectionComponent
            placeHolder="Select"
            options={department}
            onGetSelectedValueHandeler={setSelectedDepartment}
          />
        </div>
        <div className="flex flex-col gap-0 justify-start items-start w-[90px]">
          <label className="text-sm font-medium text-slate-700">Level</label>
          <OnSelectSectionComponent
            placeHolder="Select"
            options={level}
            onGetSelectedValueHandeler={setSelectedLevel}
          />
        </div>{" "}
        <div className="flex flex-col gap-0 justify-start items-start w-[190px]">
          <label className="text-sm font-medium text-slate-700">
            {" "}
            Academic Session
          </label>
          <OnSelectSectionComponent
            placeHolder="Select"
            options={academicSession}
            onGetSelectedValueHandeler={setSelectedacademicSession}
          />
        </div>
        <div className="flex flex-col gap-0 justify-start items-start w-[190px]">
          <label className="text-sm font-medium text-slate-700">
            {" "}
            General Password
          </label>
          <Input placeholder="Password" type="password" />
        </div>
      </div>
      <div className="file-input">
        <input
          type="file"
          id="upload"
          className=""
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default ImportContentField;
