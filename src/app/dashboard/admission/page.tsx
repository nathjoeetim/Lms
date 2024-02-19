"use client";

import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { DepartmentType } from "@/utils/types";
import OnSelectSectionComponent from "@/components/selectedSection";
import DataTable from "@/components/dataTake";
import SubTitleComponent from "@/components/subTitle";

type TableAlises = {
  regNumber: string | any;
  semester: string;
  section: string;
  applicationReason: string | boolean;
  amount: string | number | any;
};

type TableHeaderAlises = {
  RegNumber: string;
  semester: string;
  section: string;
  amount: string;
  purpose: string;
};

function AdmissionComponent() {
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const dispatch = useDispatch();

  const [options, _setOptions] = useState<string[]>([
    "2019-2020",
    "2020-2021",
    "2021-2022",
    "2022-2023",
    "2023-2024",
  ]);
  const [department, setDepartment] = useState<string[]>([]);
  const [sessionValue, setSectionValue] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedStatusValue, setSelectedStatusValue] = useState<string>("");
  const [determinedApplication, _setDeterminedApplication] = useState<string[]>(
    [
      "All",
      "Suspension of Studies",
      "Change Of Course",
      "Request For Transcript",
    ]
  );

  useEffect(() => {
    FetchData(dispatch);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );
    setDepartment(allDepartment);
  }, [dispatch, getDepartmentHandeler]);

  const header: TableHeaderAlises = {
    amount: "Amount(₦)",
    RegNumber: "Reg No.",
    section: "Section",
    semester: "Semester",
    purpose: "Application Purpose",
  };

  const [applicationTable, _setApplicationTable] = useState<TableAlises[]>([
    {
      regNumber: "SOS001",
      semester: "First Semester",
      section: "2013-2014",
      applicationReason: "Change Of Course",
      amount: "25,000",
    },
    {
      regNumber: "SOS002",
      semester: "First Semester",
      section: "2012-2013",
      applicationReason: "Suspension Of Studies",
      amount: "5,000",
    },
    {
      regNumber: "SOS010",
      semester: "Second Semester",
      section: "2012-2013",
      applicationReason: "Late Course Registration",
      amount: "2,000",
    },
  ]);

  return (
    <div className="flex flex-col gap-4  overflow-y-scroll overflow-x-hidden custom-scrollbar ">
      <SubTitleComponent
        pageIdentifier="> Admission"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto py-3 ">
        <div className="flex flex-rol items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 box-border">
          <IoFilterOutline size={19} />
          <h5 className="font-normal text-xl">Filter Applications To View</h5>
        </div>
        <div className="flex flex-col items-start p-3  w-full gap-2">
          <div className="w-[100%] flex flex-row items-center gap-4 justify-between">
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">
                Application Session
              </h4>
              <OnSelectSectionComponent
                placeHolder="Session"
                options={options}
                onGetSelectedValueHandeler={setSectionValue}
              />
            </div>
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">Department Option</h4>
              <OnSelectSectionComponent
                placeHolder="Department"
                options={department}
                onGetSelectedValueHandeler={setSelectedDepartment}
              />
            </div>{" "}
            <div className="flex flex-col items-start w-[240px]">
              <h4 className="text-[.8rem] font-semibold">Application Status</h4>
              <OnSelectSectionComponent
                options={determinedApplication}
                placeHolder="Status To View"
                onGetSelectedValueHandeler={setSelectedStatusValue}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-end p-3 py-3 w-full">
            <Button>View Admission Application</Button>
          </div>
          {/* <ScaleSpinner/> */}
          <DataTable header={header} tableContent={applicationTable} />
        </div>
      </Card>
    </div>
  );
}

export default AdmissionComponent;
