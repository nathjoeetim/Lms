
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { IoTimer } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

function FinanceSubComponent() {
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
      {/*Fee AND Bussery*/}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick1}
            className={`p-1 gap-2 h-12 ${
              isActive1 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <LiaMoneyBillWaveSolid size={15} />
              <div className="text-slate-500 flex flex-row items-center justify-start">
                {" "}
                Fees / Bursary
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-1 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300 ">
            Invoice / Payment Collection
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Verify Payment
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-1 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Publish / Manange Fees
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-1 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Fees Notification / Reminder
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/*  Logs & Report */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick2}
            className={`p-1 gap-2 h-12 ${
              isActive2 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <IoTimer size={15} />
              <div className="text-slate-500 flex flex-row items-center justify-start">
                {" "}
                Logs & Report{" "}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-start justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            All Payment Attempt Logs
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Successful Payments Log
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Fees Debtors
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Finance bookkeeping */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick3}
            className={`p-1 h-12 ${
              isActive3 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <BiSolidPieChartAlt2 size={15} />
              <div className="text-slate-500">Finance Bookkeeping</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Cash Request
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem]  hover:border-l-4 hover:border-indigo-300">
            Expendetures
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Incomes
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* HRM / Payroll */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick4}
            className={`p-1 gap-2 h-12 ${
              isActive4 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <FaBriefcase size={15} />
              <div className="text-slate-500">HRM / Payroll</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-row items-center justify-start p-1 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Processing Monthly Salary
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-1 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem]  hover:border-l-4 hover:border-indigo-300">
            Salary Payslips
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] hover:text-indigo-400 text-slate-400  font-medium text-[.8rem] hover:border-l-4 hover:border-indigo-300">
            Salary Payment Schedule
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Exams / Quiz Score
          </AccordionContent>
          <AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Grade Levels And Steps
          </AccordionContent>
					<AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Basic Salaries & Banks
          </AccordionContent>
					<AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Leave Application 
          </AccordionContent>
					<AccordionContent className="flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300">
            Leave Categories 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FinanceSubComponent;
