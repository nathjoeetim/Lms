"use client";
import { IoFilterOutline } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
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
import OnSelectSectionComponent from "@/components/selectedSection";
import { SubTitleComponent } from "../page";
import SearchedStudentComponent from "@/components/searchedStudent";
import { useSelector } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { DepartmentType, StudentType } from "@/utils/types";

function Student() {
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const getAllStudentHandeler: StudentType[] = useSelector(
    (store: any) => store.currentUserGetter.allStudents
  );

  console.log(getAllStudentHandeler);

  const dispatch = useDispatch();
  const [options, _setOptions] = useState<string[]>([
    "All",
    "100",
    "200",
    "300",
    "400",
  ]);
  const [department, setDepartment] = useState<string[]>([]);

  const [status, _setBatch] = useState<string[]>(["All", "Active", "InActive"]);
  const [program, _setProgram] = useState<string[]>([
    "All",
    "Under-Graduate",
    "Post-Graduate",
  ]);

  useEffect(() => {
    FetchData(dispatch);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );
    setDepartment(allDepartment);
  }, [dispatch, getDepartmentHandeler]);

  const [onselectedDepertmentValue, setSelectedDepartmentValue] = useState("");
  const [onselectedLevelValue, setSelectedLevelValue] = useState("All");
  const [onselectedStatusValue, setSelectedStatusValue] = useState("All");
  const [onselectedProgramValue, setSelectedProgramValue] = useState("All");

  // const studentInSelectedDepartment = getAllStudentHandeler.map(element => {
  //   const trimesStudentDepartment = element.student_department
  //     .replace(/\((.*?)\)/g, "")
  //     .trim();
  //   return trimesStudentDepartment === onselectedDepertmentValue;
  // });

  // console.log(studentInSelectedDepartment);

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
        <div className="flex flex-col items-start p-3 w-full gap-4">
          <div className="w-full flex flex-row items-center gap-4 justify-evenly">
            <div className="w-60">
              <h4 className="text-sm font-semibold">Select Department</h4>
              <OnSelectSectionComponent
                placeHolder="Department"
                options={department}
                onGetSelectedValueHandeler={setSelectedDepartmentValue}
              />
            </div>
            <div className="w-40">
              <h4 className="text-sm font-semibold">Select Level</h4>
              <OnSelectSectionComponent
                placeHolder="Level"
                options={options}
                onGetSelectedValueHandeler={setSelectedLevelValue}
              />
            </div>
            <div className="w-60">
              <h4 className="text-sm font-semibold">Account Status</h4>
              <OnSelectSectionComponent
                placeHolder="Status"
                options={status}
                onGetSelectedValueHandeler={setSelectedStatusValue}
              />
            </div>
            <div className="w-60">
              <h4 className="text-sm font-semibold">Program</h4>
              <OnSelectSectionComponent
                placeHolder="Select Program"
                options={program}
                onGetSelectedValueHandeler={setSelectedProgramValue}
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start w-48">
            <Input placeholder="Registration number" />
          </div>
          <div className="flex items-center justify-center p-3 w-full">
            <Button>View Student</Button>
          </div>
        </div>
      </Card>
      <SearchedStudentComponent />
    </div>
  );
}

export default Student;
