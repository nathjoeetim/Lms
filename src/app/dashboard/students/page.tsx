"use client";
import { IoFilterOutline } from "react-icons/io5";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OnSelectSectionComponent from "@/components/selectedSection";
import SubTitleComponent from "@/components/subTitle";
import SearchedStudentComponent from "@/components/searchedStudent";
import { useSelector } from "react-redux";
import {
  FetchData,
  onGetAllStudentDataMethos,
} from "@/redux/fetchCurrentUserData";
import { useDispatch } from "react-redux";
import {
  DepartmentType,
  FindStudentByDepartment,
  StudentType,
} from "@/utils/types";
import { useRouter } from "next/navigation";
import { BASE_URL, StudentUrl } from "@/utils/network";
import { HashSpinner } from "@/components/loader";
import useAxios from "@/hooks/useAxios";

function Student() {
  const getDepartmentHandeler: DepartmentType[] = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const getStudent: StudentType[] = useSelector(
    (store: any) => store.currentUserGetter.allStudents
  );

  const router = useRouter();
  const dispatch = useDispatch();
  const { axiosHandler } = useAxios(router);
  const [options, _setOptions] = useState<string[]>([
    "100",
    "200",
    "300",
    "400",
    "500",
  ]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isSearched, setIsSearched] = useState<Boolean>(false);
  const [getDepartmentDetails, setDepartmentDetails] =
    useState<DepartmentType>();
  const [department, setDepartment] = useState<string[]>([]);
  const [searchedStudent, setSearchedStudent] =
    useState<FindStudentByDepartment>();
  // const { axiosHandler } = useAxios(router);

  useEffect(() => {
    FetchData(dispatch, router);

    const allDepartment = getDepartmentHandeler.map(
      (data: DepartmentType) => data.name
    );

    setDepartment(allDepartment);
  }, [dispatch, getDepartmentHandeler, router]);

  // get selected department
  const [onselectedDepertmentValue, setSelectedDepartmentValue] = useState("");
  const [CantSearch, setCantSearch] = useState(false);
  // get selected level
  const [onselectedLevelValue, setSelectedLevelValue] = useState("All");

  async function onViewSelectedStudent() {
    setIsLoading(true);
    const selectedDepartment = getDepartmentHandeler.find(
      element => element.name === onselectedDepertmentValue
    );

    if (onselectedDepertmentValue == "" || onselectedDepertmentValue === "") {
      setCantSearch(true);
      setIsLoading(false);
      setIsSearched(false);
      return;
    }

    const response = await axiosHandler<FindStudentByDepartment>(
      `${BASE_URL}/dept/students/${selectedDepartment?.id}`,
      "GET",
      null,
      true
    );

    if (response && onselectedDepertmentValue !== "") {
      setCantSearch(false);
      const byLevel = response.data.filter(element => {
        return element.level === +onselectedLevelValue;
      });

      setSearchedStudent({
        data: byLevel,
        message: response.message,
      });
      setTimeout(() => {
        setIsLoading(false); // Setting isLoading to false after 3 seconds
        setIsSearched(true);
      }, 3000);
      return;
    }

    setTimeout(() => {
      setIsLoading(false); // Setting isLoading to false after 3 seconds
    }, 3000);
  }

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
            {/* <h4 className="text-sm font-semibold h-full flex flex-col items-center justify-center text-red-400">
              or
            </h4>

            <div className="flex flex-col items-start justify-start w-48">
              <h4 className="text-sm font-semibold">Input Matric Number</h4>
              <Input placeholder="Registration number" />
            </div> */}

            <div className="flex items-end justify-center p-3 h-full">
              <Button onClick={() => onViewSelectedStudent()}>
                View Student
              </Button>
            </div>
          </div>
          {CantSearch && (
            <h4 className="flex flex-row w-full items-center justify-center text-red-400 font-semibold text-base">
              ERROR: Ensure Department and Level Is Selected
            </h4>
          )}
        </div>
      </Card>
      {isLoading ? (
        <HashSpinner />
      ) : isSearched && !CantSearch ? (
        <SearchedStudentComponent searchedStudent={searchedStudent} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Student;
