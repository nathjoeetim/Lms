"use client";
import SubTitleComponent from "@/components/subTitle";
import { Card } from "@/components/ui/card";
import AllLecturersListComponent from "./lecturersComponent/AllLecturers";
import { useState } from "react";
import EnrollLecturer from "./lecturersComponent/enrollLecturer";
import BulkEnrollment from "./lecturersComponent/BulkEnrollment";

function LecturerComponent() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier=" > Lecturers List"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto px-2 transition-height duration-300">
        <div className="flex flex-row items-center justify-evenly w-full border-b border-b-slate-400 h-16">
          <div
            className={`flex flex-col items-center justify-start text-lg font-semibold  cursor-pointer hover:text-indigo-400 w-[190px] ${
              currentIndex === 0 ? "text-indigo-400" : " text-slate-600"
            } `}
            style={{ borderRight: "1px solid grey" }}
            onClick={() => setCurrentIndex(0)}
          >
            Lecturers
          </div>
          <div
            className={`flex flex-col items-center justify-start text-lg font-semibold  cursor-pointer hover:text-indigo-400 w-[190px] ${
              currentIndex === 1 ? "text-indigo-400" : " text-slate-600"
            } `}
            style={{ borderRight: "1px solid grey" }}
            onClick={() => setCurrentIndex(1)}
          >
            Enroll Lecturer
          </div>
          <div
            className={`flex flex-col items-center justify-start text-lg font-semibold  cursor-pointer hover:text-indigo-400 w-[190px] ${
              currentIndex === 2 ? "text-indigo-400" : " text-slate-600"
            } `}
            style={{ borderRight: "1px solid grey" }}
            onClick={() => setCurrentIndex(2)}
          >
            Bulk-Enroll
          </div>
        </div>
        <div className="flex flex-col w-full p-6">
          {currentIndex == 0 ? (
            <AllLecturersListComponent />
          ) : currentIndex == 1 ? (
            <EnrollLecturer />
          ) : currentIndex == 2 ? (
            <BulkEnrollment />
          ) : (
            ""
          )}
        </div>
      </Card>
    </div>
  );
}

export default LecturerComponent;
