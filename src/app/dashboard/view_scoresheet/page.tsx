"use client";
import { Card } from "@/components/ui/card";
import { IoFilterOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { OnSelectSectionComponent } from "../admission/page";
import { SubTitleComponent } from "../page";
import { useSelector } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { DepartmentType } from "@/utils/types";

function ExamsResultComponent() {
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const dispatch = useDispatch();
  const [selectedSectionValue, setSelectedSectionValue] = useState<string>();
  const [selectedDepartmentValue, setselectedDepartmentValue] =
    useState<string>();
  const [selectedBatchValue, setselectedBatchValue] = useState<string>();
  const [options, _setOptions] = useState<string[]>([
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
    "2023-2024",
  ]);
  const [department, setDepartment] = useState<string[]>([]);
  const [batch, _setBatch] = useState<string[]>(["Batch A", "Batch B"]);

  useEffect(() => {
    FetchData(dispatch);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );
    setDepartment(allDepartment);
  }, [dispatch, getDepartmentHandeler]);

  return (
    <div className="flex flex-col gap-4">
      <SubTitleComponent
        pageIdentifier="> Exams Results"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto py-3 ">
        <div className="flex flex-rol items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 box-border">
          <IoFilterOutline size={19} />
          <h5 className="font-normal text-xl">Select Score To Review</h5>
        </div>
        <div className="flex flex-col items-start p-3  w-full gap-2">
          <div className="w-[100%] flex flex-row items-center gap-4 justify-between">
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">Select Session</h4>
              <OnSelectSectionComponent
                placeHolder="Session"
                options={options}
                onGetSelectedValueHandeler={setSelectedSectionValue}
              />
            </div>
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">
                {" "}
                Select Department{" "}
              </h4>
              <OnSelectSectionComponent
                placeHolder="Department"
                options={department}
                onGetSelectedValueHandeler={setselectedDepartmentValue}
              />
            </div>{" "}
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">Exams Batch</h4>
              <OnSelectSectionComponent
                options={batch}
                placeHolder="Exams Batch"
                onGetSelectedValueHandeler={setselectedBatchValue}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-3 py-3 w-full">
            <Button>View Results</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ExamsResultComponent;
