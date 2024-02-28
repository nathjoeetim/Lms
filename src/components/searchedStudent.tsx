import { Card } from "@/components/ui/card";
import Image from "next/image";
// import { useState } from "react";
import image from "@/assets/profileImg.jpeg";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FindStudentByDepartment, FindStudentInDartment } from "@/utils/types";
import DisplayUserDetailsHandeler from "./StudentDetails";

function SearchedStudentComponent({
  searchedStudent,
}: {
  searchedStudent: FindStudentByDepartment | undefined;
}) {
  return (
    <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto py-3 mb-3">
      <div className="flex flex-row items-center w-full justify-center font-semibold text-slate-500 text-lg">{`${searchedStudent?.message}`}</div>
      <div className="flex flex-row items-center w-full justify-center font-semibold text-slate-500 text-lg">{`Number of Student In Department: ${searchedStudent?.data.length}`}</div>
      {searchedStudent?.data.length === 0 ? (
        <h5 className="w-full flex flex-col items-center justify-center text-slate-500 text-lg font-semibold p-16">
          No Student Found{" "}
        </h5>
      ) : (
        searchedStudent?.data.map((element, index) => {
          console.log(element);
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-between border-b border-slate-400 pb-2 mb-2  p-3 w-full"
            >
              <div className="flex flex-row items-center gap-6">
                <Image
                  alt="student img"
                  src={image.src} // Assuming image is defined somewhere
                  height={150}
                  width={70}
                  style={{ borderRadius: "5px" }}
                />
                <div className="flex flex-col items-start justify-start w-[180px]">
                  <h4 className="text-lg font-semibold">{element.user}</h4>
                  <span className="text-sm">{element.matric_no}</span>
                </div>
                <div>
                  <h5 className="font-semibold">
                    current Level :{" "}
                    <span className="font-normal">{element.level}</span>{" "}
                  </h5>
                  <h5 className="font-semibold">
                    Department :{" "}
                    <span className="font-normal">
                      {element.student_department}
                    </span>
                  </h5>
                </div>
              </div>
              <div>
                <DisplayUserDetailsHandeler
                  studentData={element as FindStudentInDartment}
                />
              </div>
            </div>
          );
        })
      )}
    </Card>
  );
}

export default SearchedStudentComponent;
