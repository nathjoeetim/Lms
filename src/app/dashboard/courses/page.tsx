"use client";
import { Card } from "@/components/ui/card";
import { IoFilterOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { InnerOptions, OnSelectSectionComponent } from "../admission/page";
import { SubTitleComponent } from "../page";
import SelectedDepartmentCourse from "@/components/selectedCourses";

function CoursesComponent() {
  const [level, _setLevels] = useState<InnerOptions[]>([
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
  const [sessionValue, setSectionValue] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedStatusValue, setSelectedStatusValue] = useState<string>("");
  const [determineSemester, setDeterminedSemester] = useState<InnerOptions[]>([
    {
      content: "All",
    },
    {
      content: "First Semester",
    },
    {
      content: "Semester Semester",
    },
  ]);

  // not by dfault the value will be All 

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar ">
      <SubTitleComponent
        pageIdentifier="> Departmental Courses"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto">
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-2">
              {" "}
              <div className="flex flex-rol items-center gap-3 w-full p-2 box-border">
                <IoFilterOutline size={19} />
                <h5 className="font-normal text-xl">Select Options</h5>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-rol items-center justify-start gap-3  w-full p-4 box-border">
                <div className="w-[100%] flex flex-row items-center gap-4 justify-between">
                  <div className="flex flex-col items-start text-slate-500">
                    <h4 className="text-[.8rem] font-semibold ">
                      Department Option
                    </h4>
                    <OnSelectSectionComponent
                      placeHolder="Department"
                      options={department}
                      onGetSelectedValueHandeler={setSelectedDepartment}
                    />
                  </div>
                  <div className="flex flex-col items-start text-slate-500">
                    <h4 className="text-[.8rem] font-semibold">Level</h4>
                    <OnSelectSectionComponent
                      placeHolder="Level"
                      options={level}
                      onGetSelectedValueHandeler={setSectionValue}
                    />
                  </div>{" "}
                  <div className="flex flex-col items-start text-slate-500">
                    <h4 className="text-[.8rem] font-semibold">Semester</h4>
                    <OnSelectSectionComponent
                      options={determineSemester}
                      placeHolder="Semester"
                      onGetSelectedValueHandeler={setSelectedStatusValue}
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
      <div className="w-full">
        <SelectedDepartmentCourse />
      </div>
    </div>
  );
}
export default CoursesComponent;
