"use client";

import { Card } from "@/components/ui/card";
import { SubTitleComponent } from "../page";
import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export type OptionAlieses = {
  placeHolder: string;
  options: InnerOptions[];
  onGetSelectedValueHandeler: (selectedValue: string) => void;
};

export type InnerOptions = {
  content: string;
};

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
  const [options, _setOptions] = useState<InnerOptions[]>([
    {
      content: "2019-2020",
    },
    {
      content: "2020-2021",
    },
    {
      content: "2021-2022",
    },
    {
      content: "2022-2023",
    },
    {
      content: "2023-2024",
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
  const [sessionValue, setSectionValue] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedStatusValue, setSelectedStatusValue] = useState<string>("");
  const [determinedApplication, _setDeterminedApplication] = useState<
    InnerOptions[]
  >([
    {
      content: "All",
    },
    {
      content: "Suspension of Studies",
    },
    {
      content: "Change Of Course",
    },
    {
      content: "Request For Transcript",
    },
    {
      content: "Pending Approval",
    },
  ]);

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

export function OnSelectSectionComponent({
  options,
  placeHolder,
  onGetSelectedValueHandeler,
}: OptionAlieses) {
  // State to store the selected value
  const [selectedValue, setSelectedValue] = useState<string>("");

  // Event handler for when the value changes
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    onGetSelectedValueHandeler(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleSelectChange}>
      <SelectTrigger className=" w-full h-[2.2rem] text-[.8rem] flex flex-row items-center">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((data, index) => {
            return (
              <SelectItem key={index} value={data.content}>
                {data.content}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function DataTable({
  header,
  tableContent: tableData,
}: {
  header: TableHeaderAlises;
  tableContent: TableAlises[];
}) {
  return (
    <Table>
      {/* <TableCaption>A list of applications.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">{header.RegNumber}</TableHead>
          <TableHead>{header.semester}</TableHead>
          <TableHead>{header.section}</TableHead>
          <TableHead>{header.purpose}</TableHead>
          <TableHead className="text-right">{header.amount}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((element, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{element.regNumber}</TableCell>
              <TableCell>{element.semester}</TableCell>
              <TableCell>{element.section}</TableCell>
              <TableCell>{element.applicationReason}</TableCell>
              <TableCell className="text-right">{element.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
