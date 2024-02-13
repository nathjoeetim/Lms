"use client";
import { SubTitleComponent } from "../../page";
import { Card } from "@/components/ui/card";

function BulkImportEnrolment() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier="> Enroll student"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <div className=" relative flex flex-row justify-start items-start h-[320px]  w-[97%] mx-auto px-2 transition-height duration-300 gap-4 p-2 "></div>
    </div>
  );
}

export default BulkImportEnrolment;
