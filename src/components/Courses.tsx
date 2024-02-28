"use client";
import { useSelector } from "react-redux";
import { Card } from "./ui/card";
import { FindCourseByDepartment } from "@/utils/types";

function CoursesByDepartment(
  selectedCourse: FindCourseByDepartment | undefined
) {
  return (
    <Card className="flex flex-col justify-start items-start p-3 w-[97%] mx-auto mb-6">
      <div className="flex flex-col justify-start gap-2 w-full">
        <h3 className="flex flex-row items-center text-slate-400 h-10 font-semibold ">
          {selectedCourse?.message}
        </h3>
        {selectedCourse?.data?.map(element => {
          return (
            <span
              key={element.id}
              className="flex flex-col w-full border-around border rounded-sm p-3"
              style={{ borderColor: "grey" }}
            >
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="flex flex-col items-start justify-start gap-0">
                  <h4 className="text-slate-600 font-semibold text-sm">
                    Course Name{" "}
                  </h4>
                  <span className="text-slate-600 font-semibold text-lg">
                    {element.course_name}
                  </span>
                </div>
                <div className="flex felx-row items-center gap-8">
                  <div className="flex flex-col items-start justify-start gap-0 ">
                    <h4 className="text-slate-600 font-semibold text-sm">
                      Course Credit{" "}
                    </h4>
                    <span className="text-slate-600 font-semibold text-lg">
                      {element.course_credit}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start ">
                    <h4 className="text-slate-600 font-semibold text-sm">
                      Course Created{" "}
                    </h4>
                    <span className="text-slate-600 font-semibold text-lg">
                      27th November 2023
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-start ">
                    <h4 className="text-slate-600 font-semibold text-sm">
                      Last Updated{" "}
                    </h4>
                    <span className="text-slate-600 font-semibold text-lg">
                      30th November 2023
                    </span>
                  </div>
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </Card>
  );
}

export default CoursesByDepartment;
