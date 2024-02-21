"use client";
import { RiUserAddLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type subContentItem = {
  tittle: string;
  link: string;
};

function AdmissionSubComponent() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [contents, _setContent] = useState<subContentItem[]>([
    {
      tittle: "Application Received",
      link: "/dashboard/admission",
    },
    {
      tittle: "Entry Examination Result",
      link: "/dashboard/view_scoresheet",
    },
  ]);

  function handleClick() {
    setIsActive(prevIsActive => !prevIsActive);
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={handleClick}
          className={`p-2 gap-2 h-12 ${
            isActive ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"
          } text-sm font-sans cursor-pointer text-[#33353F]`}
        >
          <div className="flex felx-row items-center gap-2 text-sm text-black">
            <RiUserAddLine size={15} />
            <div className="text-slate-500">Admission</div>
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
        {/* <AccordionContent className="flex flex-row gap-2 items-center justify-start p-2 mb-2 h-12 border-t border-b  text-slate-400 hover:bg-[#F0F2F5] text-sm">
          Application Portal <FaExternalLinkAlt size={11} />
        </AccordionContent> */}
      </AccordionItem>
    </Accordion>
  );
}

export default AdmissionSubComponent;
