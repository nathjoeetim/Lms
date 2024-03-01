`use client`;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaGraduationCap } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { subContentItem } from "./admissionSubComponent";
import { NavLink } from "@/components/ui/navLink";

function PeopleSubComponent() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const pathname = usePathname();
  const [contents, _setContent] = useState<subContentItem[]>([
    {
      tittle: "View Student",
      link: "/dashboard/students",
    },
    {
      tittle: "Enroll Student",
      link: "/dashboard/students/add",
    },
    {
      tittle: " Students Bulk Enrollment",
      link: "/dashboard/students/import_student",
    },
    {
      tittle: "Graduated (Aluami)",
      link: "/dashboard/students/graduate",
    },
  ]);

  const [parents, _setParents] = useState<subContentItem[]>([
    {
      tittle: "Parents / Sponsors",
      link: "/dashboard/students#",
    },
    {
      tittle: " Families",
      link: "#",
    },
  ]);

  const [employees, _setEmployees] = useState<subContentItem[]>([
    {
      tittle: "Lectures",
      link: "/dashboard/lecturer",
    },
    {
      tittle: "Bursary Officer/ Accountant",
      link: "#",
    },
    {
      tittle: "Librarian",
      link: "#",
    },
    {
      tittle: "Register / Admission Officer",
      link: "#",
    },
    {
      tittle: "Hostel Manager",
      link: "#",
    },
    {
      tittle: "Administrator",
      link: "#",
    },
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
      {/* Student area  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick1}
            className={`p-2 gap-2 h-12 ${
              isActive1 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-slate-900">
              <FaGraduationCap size={15} />
              <div className="text-slate-500">Student</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="relative pl-2">
            <input
              type="text"
              placeholder="Search Student"
              className="border mr-4 border-gray-300 w-[90%] rounded-sm mt-4 py-2 pr-1 pl-5 focus:outline-none focus:ring focus:border-blue-100 transition duration-300 ease-in-out "
            />
            <div className="absolute left-3 top-6">
              <FaSearch size={15} className="text-gray-500" />
            </div>
          </AccordionContent>
          {contents.map((element, index) => {
            const sideItemIsActive = pathname === element.link;
            return (
              <NavLink key={index} href={element.link}>
                <AccordionContent
                  className={`flex flex-row items-center justify-start p-2 mb-2 h-12 hover:bg-[#F0F2F5] font-medium text-[.8rem] hover:text-indigo-400 text-slate-400 hover:border-l-4 hover:border-indigo-300 ${
                    sideItemIsActive
                      ? "border-indigo-300 text-indigo-400 border-l-4 bg-[#F0F2F5]"
                      : ""
                  }`}
                >
                  {element.tittle}
                </AccordionContent>
              </NavLink>
            );
          })}
        </AccordionItem>
      </Accordion>

      {/* parenet holder */}
      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick2}
            className={`p-2 gap-2 h-12 ${
              isActive2 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <FaPeopleGroup size={15} />
              <div className="text-slate-500"> Parents</div>
            </div>
          </AccordionTrigger>
          {parents.map((element, index) => {
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
      </Accordion> */}

      {/* Staff / employees section  */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            onClick={handleClick3}
            className={`p-2 gap-2 h-12 ${
              isActive3 ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
            } text-sm font-sans cursor-pointer text-[#33353F]`}
          >
            <div className="flex felx-row items-center gap-2 text-sm text-black">
              <IoPerson size={15} />
              <div className="text-slate-500">Staffs / Employees</div>
            </div>
          </AccordionTrigger>
          {employees.map((element, index) => {
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
    </div>
  );
}

export default PeopleSubComponent;
