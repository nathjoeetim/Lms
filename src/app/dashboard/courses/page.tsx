"use client";
import { Card } from "@/components/ui/card";
import { IoFilterOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { OnSelectSectionComponent } from "../admission/page";
import { SubTitleComponent } from "../page";
import SelectedDepartmentCourse from "@/components/selectedCourses";
import { useSelector } from "react-redux";
import { auth_token } from "@/utils/constant";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { DepartmentType } from "@/utils/types";

function CoursesComponent() {
  const allDepartment: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [level, _setLevels] = useState<string[]>(["All"]);
  const [department, setDepartment] = useState<string[]>([]);
  const [determineSemester, setDeterminedSemester] = useState<string[]>([
    "All",
  ]);
  const [sessionValue, setSectionValue] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedStatusValue, setSelectedStatusValue] = useState<string>("");
  const [isDepartmentSelected, setDepartmentSelected] =
    useState<Boolean>(false);
  const [selectedDetailedValue, setSelectedDetailValue] =
    useState<DepartmentType | null>(null);

  useEffect(() => {
    if (localStorage.getItem(auth_token)) {
      const departmentName = allDepartment.map(
        (data: DepartmentType) => data.name
      );
      FetchData(dispatch);
      setDepartment(departmentName);
    } else {
      router.push("/login");
    }
    setSelectedStatusValue("All");
    setSectionValue("All");
    setDepartmentSelected(selectedDepartment.trim() !== "");

    if (isDepartmentSelected) {
      const getSelectedDepartmentDetails = allDepartment.find(
        (data: DepartmentType) => data.name === selectedDepartment
      );
      if (getSelectedDepartmentDetails) {
        setSelectedDetailValue(getSelectedDepartmentDetails!);
      }
    } else {
      setSelectedDetailValue(null);
    }

    //
  }, [
    allDepartment,
    dispatch,
    router,
    selectedDepartment,
    isDepartmentSelected,
  ]);

  console.log(selectedDetailedValue);
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
                  <div className="flex flex-col items-start text-slate-500 w-[200px]">
                    <h4 className="text-[.8rem] font-semibold ">
                      Department Option
                    </h4>
                    <OnSelectSectionComponent
                      placeHolder="Department"
                      options={department}
                      onGetSelectedValueHandeler={setSelectedDepartment}
                    />
                  </div>
                  <div className="flex flex-col items-start text-slate-500 w-[150px]">
                    <h4 className="text-[.8rem] font-semibold">Level</h4>
                    <OnSelectSectionComponent
                      placeHolder="Level"
                      options={level}
                      onGetSelectedValueHandeler={setSectionValue}
                    />
                  </div>{" "}
                  <div className="flex flex-col items-start text-slate-500 w-[180px]">
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
        {isDepartmentSelected && (
          <SelectedDepartmentCourse deptCourse={selectedDetailedValue!} />
        )}
      </div>
    </div>
  );
}
export default CoursesComponent;
