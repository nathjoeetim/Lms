"use client";
import OnSelectSectionComponent from "@/components/selectedSection";
import SubTitleComponent from "@/components/subTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function GraduateComponent() {
  const [selectedSection, setSelectedSection] = useState<String>("");
  const [options, setOptions] = useState<string[]>(["2019/2020", "2020/2021"]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    FetchData(dispatch, router);
  }, [dispatch, router]);

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier=" > Graduate"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto px-2 transition-height duration-300">
        <div className="flex flex-row items-center gap-3 border-b border-b-slate-400 pb-1 w-full p-4 h-[50px] box-border">
          <h5 className="font-normal text-xl">Upload student</h5>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-[200px] gap-9">
          <div className="flex flex-col items-center justify-center w-[200px]">
            <h4 className="text-sm font-semibold text-slate-500">
              Graduation Year / Session
            </h4>
            <OnSelectSectionComponent
              placeHolder="Select Section"
              onGetSelectedValueHandeler={setSelectedSection}
              options={options}
            />
          </div>
          <Button className="w-[150px]">Search</Button>
        </div>
      </Card>
    </div>
  );
}

export default GraduateComponent;
