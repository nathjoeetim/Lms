import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { subContentItem } from "./admissionSubComponent";
import Link from "next/link";

function AcademicsSubContent() {
  const pathname = usePathname();
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [contents, _setContent] = useState<subContentItem[]>([
    {
      tittle: "Department",
      link: "/dashboard/academics",
    },
    {
      tittle: "Courses",
      link: "/dashboard/courses",
    },
    {
      tittle: "Course Registration",
      link: "#",
    },
    // {
    //   tittle: "Virtual Classroom",
    //   link: "#",
    // },
    // {
    //   tittle: "TimeTable / Schedule",
    //   link: "#",
    // },
    // {
    //   tittle: "Contents / Resource Library",
    //   link: "#",
    // },
  ]);

  function handleClick1() {
    setIsActive1(prevIsActive => !prevIsActive);
  }

  function handleClick2() {
    setIsActive2(prevIsActive => !prevIsActive);
  }

  function handleClick3() {
    setIsActive3(prevIsActive => !prevIsActive);
  }

  return (
    <div className="flex flex-col gap-1">
      {/* Academics / Learning*/}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick1}
            className={`p-1 gap-2 h-12 ${
              isActive1 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-1 text-[.8rem] text-slate-900">
              <PiTreeStructureDuotone size={15} />
              <div className="text-slate-500 w-full">Academics / Learning</div>
            </div>
          </AccordionTrigger>
          {contents.map((element, index) => {
            const sideItemIsActive = pathname === element.link;
            return (
              <Link key={index} href={element.link}>
                <AccordionContent
                  className={`flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300 ${
                    sideItemIsActive
                      ? "border-l-4 border-indigo-300 text-indigo-400 bg-[#F0F2FF5] bg-[#F0F2F5]"
                      : ""
                  }`}
                >
                  {element.tittle}
                </AccordionContent>
              </Link>
            );
          })}
        </AccordionItem>
      </Accordion>

      {/* Exams */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick2}
            className={`p-2 gap-2 h-12 ${
              isActive2 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <FaQuestionCircle size={15} />
              <div className="text-slate-500"> Exams</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Academic Semesters / Periods
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Examination
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Exams Timetable
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Schedule Exam: Add To Timetable
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* CBT  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick3}
            className={`p-2 gap-2 h-12 ${
              isActive3 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <FaComputer size={15} />
              <div className="text-slate-500">CBT</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Question Bank
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem]  hover:border-l-4 hover:border-indigo-300">
            Instruction Set
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400 font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Schedule
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5]font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Score
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5]font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Practice
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AcademicsSubContent;
