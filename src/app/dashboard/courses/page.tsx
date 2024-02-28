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
import OnSelectSectionComponent from "@/components/selectedSection";
import SubTitleComponent from "@/components/subTitle";
import SelectedDepartmentCourse from "@/components/selectedCourses";
import { useSelector } from "react-redux";
import { auth_token } from "@/utils/constant";
import {
  FetchData,
  onGetSpecificDepartmentCourses,
} from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { DepartmentType, FindCourseByDepartment } from "@/utils/types";
import useAxios from "@/hooks/useAxios";
import { BASE_URL, CoursesInDepartment, getCourses } from "@/utils/network";
import CoursesByDepartment from "@/components/Courses";
import { Button } from "@/components/ui/button";

function CoursesComponent() {
  const allDepartment: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const { axiosHandler } = useAxios(router);

  const [level, _setLevels] = useState<string[]>(["All"]);
  const [department, setDepartment] = useState<string[]>([]);
  const [determineSemester, setDeterminedSemester] = useState<string[]>([
    "All",
  ]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [sessionValue, setSectionValue] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedStatusValue, setSelectedStatusValue] = useState<string>("");
  const [isDepartmentSelected, setDepartmentSelected] =
    useState<Boolean>(false);
  const [SelectedCourse, setSelectedCourse] =
    useState<FindCourseByDepartment>();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem(auth_token)) {
      const departmentName = allDepartment.map(
        (data: DepartmentType) => data.name
      );
      FetchData(dispatch, router);
      setDepartment(departmentName);
    } else {
      router.push("/login");
    }
  }, [
    allDepartment,
    dispatch,
    router,
    selectedDepartment,
    isDepartmentSelected,
  ]);

  type CoursesData = {
    id: number | undefined;
  };

  function findCourseHandelerFn() {
    setIsLoading(true);
    if (selectedDepartment.trim() !== "") {
      const departmentSelected = allDepartment.find(
        (data: DepartmentType) => data.name === selectedDepartment
      );
      axiosHandler<FindCourseByDepartment>(
        `${BASE_URL}/course/dept/${departmentSelected?.id}`,
        "GET",
        null,
        true
      )
        .then(req => {
          if (req) {
            onGetSpecificDepartmentCourses(req);
            setSelectedCourse(req);
            setIsSelected(true);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Error fetching courses:", error);
          setIsLoading(false);
        });

      setIsLoading(false);

      return;
    }
  }

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar ">
      <SubTitleComponent
        pageIdentifier=" > Departmental Courses"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto">
        <Accordion type="single" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-2">
              {" "}
              <div className="flex flex-rol items-center gap-3 w-full p-2 box-border">
                <IoFilterOutline size={19} />
                <h5 className="font-normal text-xl">Select Options</h5>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-center justify-start gap-3  w-full p-4 box-border">
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
                <Button onClick={findCourseHandelerFn}>Search </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
      {isSelected && (
        <CoursesByDepartment
          data={SelectedCourse?.data ?? []} // Ensure that it's of type CoursesInDepartment[]
          message={SelectedCourse?.message ?? ""}
        />
      )}
    </div>
  );
}
export default CoursesComponent;
