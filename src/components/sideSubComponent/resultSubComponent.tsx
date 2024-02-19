import { VscGraph } from "react-icons/vsc";
import { RiEqualizerLine } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

function ResultSubComponent() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  function handleClick1() {
    setIsActive1(prevIsActive => !prevIsActive);
  }

  function handleClick2() {
    setIsActive2(prevIsActive => !prevIsActive);
  }

  function handleClick3() {
    setIsActive3(prevIsActive => !prevIsActive);
  }

	function handleClick4() {
    setIsActive4(prevIsActive => !prevIsActive);
  }

  return (
    <div className="flex flex-col gap-1">
      {/*Result Checker*/}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick1}
            className={`p-1 gap-2 h-12 ${
              isActive1 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
           <div className="flex felx-row items-center gap-2 text-sm text-black">
              <RiContactsBookLine size={15} />
              <div className="text-slate-500 flex flex-row items-center justify-start"> Results Checker</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300 ">
            Student Result Checker
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Class Result Checker
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Exams */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick2}
            className={`p-1 gap-2 h-12 ${
              isActive2 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <VscGraph size={15} />
              <div className="text-slate-500 flex flex-row items-center justify-start"> Results /Grade Book</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-start justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Academic Semesters / Periods
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Examination
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Exams Timetable
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Schedule Exam: Add To Timetable
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* RESULT SETTING  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick3}
            className={`p-1 gap-2 h-12 ${
              isActive3 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <RiEqualizerLine size={15} />
              <div className="text-slate-500">Result Setting</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Question Bank
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem]  hover:border-l-4 hover:border-indigo-300">
            Instruction Set
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Schedule
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Score
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Practice
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* result card checker  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick4}
            className={`p-1 gap-2 h-12 ${
              isActive4 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <FaBarcode size={15} />
              <div className="text-slate-500">Result Scratch Cards</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Question Bank
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem]  hover:border-l-4 hover:border-indigo-300">
            Instruction Set
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Schedule
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Score
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Practice
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}


export default ResultSubComponent