"use client";
import { IoFilterOutline } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import { SubTitleComponent } from "../page";
import { InnerOptions, OnSelectSectionComponent } from "../admission/page";
import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchedStudentComponent from "./searchedStudent";

function Student() {
  const [options, _setOptions] = useState<InnerOptions[]>([
    {
      content: "All",
    },
    {
      content: "100",
    },
    {
      content: "200",
    },
    {
      content: "300",
    },
    {
      content: "400",
    },
  ]);
  const [department, _setDepartment] = useState<InnerOptions[]>([
    {
      content: "Business Management ",
    },
    {
      content: "Law",
    },
    {
      content: "Political Sci",
    },
    {
      content: "Music",
    },
    {
      content: "Clinical Sci",
    },
    {
      content: "Computer Engr.",
    },
  ]);
  const [status, _setBatch] = useState<InnerOptions[]>([
    {
      content: "All",
    },
    {
      content: "Active",
    },
    {
      content: "InActive",
    },
  ]);
  const [program, _setProgram] = useState<InnerOptions[]>([
    {
      content: "All",
    },
    {
      content: "Under-Graduate",
    },
    {
      content: "Post-Graduate",
    },
  ]);

  const [onselectedDepertmentValue, setSelectedDepartmentValue] =
    useState("All");
  const [onselectedLevelValue, setSelectedLevelValue] = useState("All");
  const [onselectedStatusValue, setSelectedStatusValue] = useState("All");
  const [onselectedProgramValue, setSelectedProgramValue] = useState("All");

  return (
    <div className="w-full flex flex-col items-start   gap-4  overflow-y-scroll overflow-x-hidden custom-scrollbar  box-border">
      <SubTitleComponent
        pageIdentifier="> Student Information System"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto py-3 ">
        <div className="flex flex-rol items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 box-border">
          <IoFilterOutline size={19} />
          <h5 className="font-normal text-xl">Select Department to view</h5>
        </div>
        <div className="flex flex-col items-start p-3  w-full gap-4">
          <div className="w-[100%] flex flex-row items-center gap-4 justify-evenly">
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">
                {" "}
                Select Department{" "}
              </h4>
              <OnSelectSectionComponent
                placeHolder="Department"
                options={department}
                onGetSelectedValueHandeler={setSelectedDepartmentValue}
              />
            </div>{" "}
            <div className="flex flex-col items-start w-[140px]">
              <h4 className="text-[.8rem] font-semibold">Select Level</h4>
              <OnSelectSectionComponent
                placeHolder="Level"
                options={options}
                onGetSelectedValueHandeler={setSelectedLevelValue}
              />
            </div>
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">Account Status</h4>
              <OnSelectSectionComponent
                options={status}
                placeHolder="Status"
                onGetSelectedValueHandeler={setSelectedStatusValue}
              />
            </div>
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">Program</h4>
              <OnSelectSectionComponent
                options={program}
                placeHolder="Select Program"
                onGetSelectedValueHandeler={setSelectedProgramValue}
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start w-[180px] pl-2">
            <Input placeholder="Registration number" />
          </div>
          <div className="flex flex-row items-center justify-center p-3 py-3 w-full">
            <Button> View Student</Button>
          </div>
        </div>
      </Card>
      <SearchedStudentComponent />
    </div>
  );
}

export default Student;
