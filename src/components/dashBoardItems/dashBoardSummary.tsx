import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { BsPersonFillAdd } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBusAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
// import { FaHandHoldingUsd } from "react-icons/fa";
// import { RiLuggageCartFill } from "react-icons/ri";
import { BsSnow } from "react-icons/bs";
type CardContentAliases = {
  icon: React.ComponentType<{ size?: number | string; color?: string }>;
  header: string;
  amount: string;
  subText: string;
  paymentAmount: number | null;
  color: string;
};

function DashBoardSummaryCards() {
  const [allSummary, setSummary] = useState<CardContentAliases[]>([
    {
      icon: BsCashCoin,
      header: "Today's Transaction",
      paymentAmount: 0,
      amount: "₦50,000",
      subText: "Received Today",
      color: "green",
    },
    {
      icon: BsCashCoin,
      header: "Payment",
      paymentAmount: 0,
      amount: "₦100,040",
      subText: "Received in the last 30 days",
      color: "#D1F3FA",
    },
    {
      icon: FaGraduationCap,
      header: "Graduate",
      paymentAmount: 2540,
      amount: "20",
      subText: "View All Graduate",
      color: "#66EECE",
    },
    {
      icon: FaUserAlt,
      header: "Employees",
      paymentAmount: 129723,
      amount: "1",
      subText: "View Employees",
      color: "#B7C6C9",
    },
    {
      icon: GiSandsOfTime,
      header: "Courses",
      paymentAmount: null,
      amount: "5205",
      subText: "All Courses",
      color: "#66EE78",
    },
    {
      icon: BsPersonFillAdd,
      header: "Student",
      paymentAmount: null,
      amount: "128,373",
      subText: "View Student",
      color: "#86C716",
    },
    {
      icon: GiFamilyHouse,
      header: "Hostel Application",
      paymentAmount: null,
      amount: "20",
      subText: "Total Awaiting Approval",
      color: "#9CC2F4",
    },
    {
      icon: FaBusAlt,
      header: "Transport Application",
      paymentAmount: null,
      amount: "0",
      subText: "Total Awaiting Approval",
      color: "#A866EE",
    },
    {
      icon: FaBook,
      header: "Library Book Request",
      paymentAmount: null,
      amount: "0",
      subText: "Total In Queue",
      color: "#9CC2F4",
    },
    {
      icon: BsSnow,
      header: "Leave Application",
      paymentAmount: null,
      amount: "0",
      subText: "Total Pending Approval",
      color: "#D1F3FA",
    },
  ]);

  return (
    <div className="grid grid-cols-5 w-full p-3 sm:grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 box-border">
      {allSummary.map((element, index) => (
        <Card
          key={index}
          className="px-2 py-2 box-border flex flex-row max-w-[240px] items-center gap-2 align-middle"
        >
          <div
            className="flex flex-row items-center justify-center h-12 w-14 rounded-md p-3"
            style={{ backgroundColor: element.color }}
          >
            {React.createElement(element.icon, { size: 20, color: "white" })}
          </div>
          <div className="flex w-full flex-col items-start gap-1 justify-start">
            <h5 className="text-[.73rem] font-bold">{element.header}</h5>
            <span className="text-[1rem] font-bold">{element.amount}</span>
            <h6 className="w-full flex flex-row justify-end text-[.6rem] font-medium text-blue-400 cursor-pointer">
              {element.subText}
            </h6>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default DashBoardSummaryCards;
