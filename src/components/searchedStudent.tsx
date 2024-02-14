import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import image from "@/assets/profileImg.jpeg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type searchedStudentAliese = {
  imgSrc: string;
  userName: string;
  regNumber: string;
  link: string;
  currectLevel : number | string;
  program : string
};

function SearchedStudentComponent() {
  const [searchedStudentData, _setSearchedStudentData] = useState<
    searchedStudentAliese[]
  >([
    {
      imgSrc: image.src,
      link: "#",
      regNumber: "18/LW/18279",
      userName: "David Jonas",
      currectLevel: 300,
      program: "Under-graduate"
    },
    {
      imgSrc: image.src,
      link: "#",
      regNumber: "17/LW/189",
      userName: "Musa Musa",
      currectLevel: 300,
      program: "Post-Graduate"
    },
    {
      imgSrc: image.src,
      link: "#",
      regNumber: "17/LW/189",
      userName: "Musa Samuel",
      currectLevel: 300,
      program: "Under-Graduate"
    },
  ]);
  return (
    <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto py-3 mb-3">
      {searchedStudentData.map((element, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center justify-between border-b border-slate-400 pb-2 mb-2  p-3 w-full"
          >
            <div className="flex flex-row items-center gap-6">
              <Image
                alt="student img"
                src={element.imgSrc}
                height={150}
                width={70}
                style={{ borderRadius: "5px" }}
              />
              <div className="flex flex-col items-start justify-start w-[180px]">
                <h4 className="text-lg font-semibold">{element.userName}</h4>
                <span className="text-sm">{element.regNumber}</span>
              </div>
              <div>
                <h5 className="font-semibold">
                  current Level : <span className="font-normal">{element.currectLevel}</span>{" "}
                </h5>{" "}
                <h5 className="font-semibold">
                  Program : <span  className="font-normal">{element.program}</span>
                </h5>
              </div>
            </div>
            <div>
              {" "}
              <Button className="cursor-pointer">View Details</Button>
            </div>{" "}
          </div>
        );
      })}
    </Card>
  );
}

export default SearchedStudentComponent;
