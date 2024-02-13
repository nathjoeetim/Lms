"use client";
import React from "react"; // Added React import statement
import { SubTitleComponent } from "../../page"; // Fixed relative path
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BiCloudDownload } from "react-icons/bi";

function BulkImportEnrolment() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier="Enroll student" // Removed extra ">" symbol
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <div className=" flex flex-row justify-start items-start w-[97%] mx-auto transition-height duration-300 gap-4 h-fit ">
        <Card className="flex flex-col gap-2 w-[50%] h-[300px]">
          <div className="flex flex-row items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 h-[100px] box-border">
            <h5 className="font-normal text-xl">Upload student</h5>
          </div>
          <div className="flex flex-col items-center justify-center p-9 w-full gap-3 h-[100%]">
            <span className="font-bold text-lg text-slate-700">
              Ready to upload?
            </span>
            <Button className="flex flex-row items-center justify-center gap-3">
              Import Student List <BiCloudDownload size={18} />
            </Button>
          </div>
        </Card>
        <Card className="flex flex-col gap-2 w-[50%] h-[300px]">
          <div className="flex flex-row items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 h-[100px] box-border">
            <h5 className="font-normal text-xl">
              Download Spreadsheet Template
            </h5>
          </div>
          <div className="flex flex-col items-center justify-start p-3 w-full gap-5 h-[100%]">
            <span className="font-normal text-sm text-slate-700">
              An alternative to registering one student at a time, this enables
              you prepare the list of students to be enrolled into a class (in
              an Excel Spreadsheet) and import the list into the class.
            </span>
            <Button className="flex flex-row items-center justify-center gap-3">
              Download Excel Template <BiCloudDownload size={18} />
            </Button>
          </div>
        </Card>
      </div>
      <Card className="relative flex flex-col justify-start items-start w-[97%] mx-auto transition-height duration-300 gap-4 h-fit">
        <div className="flex flex-col items-start gap-3 border-b border-b-slate-400 pb-1 w-full p-4 h-[100px] box-border">
          <h5 className="font-normal text-xl">
            Students Bulk Enroll - Import List
          </h5>
        </div>
        <div className="flex flex-row p-3"></div>
      </Card>
    </div>
  );
}

export default BulkImportEnrolment;
