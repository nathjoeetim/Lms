import { Card } from "@/components/ui/card";
import { BsCashCoin } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiFilter } from "react-icons/ci";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CardContentAliases } from "./otherFeesCardComponent";

function FeesTopComponent() {
  const [CardContentModel, setCardContentModel] = useState<
    CardContentAliases[]
  >([
    {
      icon: BsCashCoin,
      header: "Mandatory General Fees",
      titalInvoice: 150000,
      paidAmount: 50000,
      dueAmount: 0,
      selectedSection: null,
      selectedSemester: null,
      viewMore: false, // Initialize viewMore as false
      toggleViewMore: function () {
        // Toggle the viewMore boolean
        this.viewMore = !this.viewMore;
        setCardContentModel([...CardContentModel]);
      },
    },
    {
      icon: BsCashCoin,
      header: "On Demand General Fees",
      titalInvoice: 55000,
      paidAmount: 20000,
      dueAmount: 0,
      selectedSection: null,
      selectedSemester: null,
      viewMore: false, // Initialize viewMore as false
      toggleViewMore: function () {
        // Toggle the viewMore boolean
        this.viewMore = !this.viewMore;
        setCardContentModel([...CardContentModel]);
      },
    },
  ]);

  return (
    <div className="flex flex-row p-4 justify-evenly gap-3 w-full">
      {CardContentModel.map((element, index) => {
        return (
          <Card
            key={index}
            className="flex flex-col w-[85%] items-start p-4 gap-4 max-md:w-[90%] max-xl:w-[450px] max-lg:w-[450px] h-[243px]"
          >
            <div className="flex flex-row gap-2 border-b border-b-slate-400 pb-2 w-full">
              <div className="flex flex-row items-center justify-center  bg-[#0d6efd] h-12 w-12 rounded-md p-3">
                {React.createElement(element.icon, {
                  size: 20,
                  color: "white",
                })}
              </div>
              <div className="flex flex-row items-start justify-between w-[90%]">
                <div
                  className={`${
                    element.viewMore ? "h-20" : "h-11"
                  } flex flex-col items-start justify-start gap-1 overflow-hidden`}
                >
                  <h5 className="text-[.8rem] font-semibold">
                    {element.header}
                  </h5>
                  <div className="flex flex-row items-center gap-3">
                    <OnSelectSectionComponent />
                    <OnSelectSemesterComponent />
                  </div>

                  <div className="flex flex-row items-center gap-3 transition-all">
                    <OnSelectDepartmentComponent />
                    <OnSelectSchoolLevel />
                  </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start cursor-pointer w-[63px]"
                  onClick={() => element.toggleViewMore()}
                >
                  <CiFilter size={12} />
                  <h5 className="text-[.6rem] text-slate-500">
                    {element.viewMore ? "Less" : "More"} Filter
                  </h5>
                </div>
              </div>
            </div>
            {/* bottom item */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-row justify-between items-center">
                <h5 className="text-[.7rem] font-medium">Total Invoice</h5>
                <span className="text-[.8rem]">₦ {element.titalInvoice}</span>
              </div>
              <div className="flex flex-col justify-between items-center w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <h5 className="text-[.7rem] font-medium">Paid</h5>
                  <span className="text-[.8rem]">₦ {element.paidAmount}</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Progress
                    value={(element.paidAmount / element.titalInvoice) * 100}
                    className="h-2 w-40"
                  />
                  <span className="text-[.5rem] text-green-500">
                    (
                    {(
                      ((element.paidAmount as number) /
                        (element.titalInvoice as number)) *
                      100
                    ).toFixed(1)}
                    %)
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <h5 className="text-[.7rem] font-medium">Due</h5>
                  <span className="text-[.8rem]">
                    ₦ {element.titalInvoice - element.paidAmount}
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Progress
                    value={
                      100 - (element.paidAmount / element.titalInvoice) * 100
                    }
                    color="red"
                    className="h-2 w-40"
                  />
                  <span className="text-[.5rem] text-green-500">
                    {" "}
                    ({" "}
                    {(
                      100 -
                      ((element.paidAmount as number) /
                        (element.titalInvoice as number)) *
                        100
                    ).toFixed(2)}
                    %)
                  </span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default FeesTopComponent;

export function OnSelectSectionComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[80px] h-[1.2rem] text-[.6rem] flex flex-row items-center">
        <SelectValue placeholder="2018-2019" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2019-2020">2019-2020</SelectItem>
        <SelectItem value="2020-2021">2020-2021</SelectItem>
        <SelectItem value="2021-2022">2021-2022</SelectItem>
        <SelectItem value="2023-2024">2023-2024</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function OnSelectSemesterComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[100px] h-[1.2rem] text-[.6rem] flex flex-row items-center">
        <SelectValue placeholder="Section" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="First Semester">First Semester</SelectItem>
        <SelectItem value="Second Semester">Second Semester</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function OnSelectDepartmentComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[130px] h-[1.2rem] text-[.5rem] flex flex-row items-center">
        <SelectValue placeholder="All Department" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Business Administration">
          Business Administration
        </SelectItem>
        <SelectItem value="Law">Law</SelectItem>
        <SelectItem value="Social Science">Social Science</SelectItem>
        <SelectItem value="Education">Education</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function OnSelectSchoolLevel() {
  return (
    <Select>
      <SelectTrigger className="w-[70px] h-[1.2rem] text-[.5rem] flex flex-row items-center">
        <SelectValue placeholder="All Level" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="100">100</SelectItem>
        <SelectItem value="Law">200</SelectItem>
        <SelectItem value="300">300</SelectItem>
        <SelectItem value="400">400</SelectItem>
        <SelectItem value="500">500</SelectItem>
      </SelectContent>
    </Select>
  );
}
