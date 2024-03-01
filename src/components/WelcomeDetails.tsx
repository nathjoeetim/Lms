import React from "react";
import Lottie from "lottie-react";
import { BiConfused } from "react-icons/bi";
import lottieData from "@/assets/Animation - 1709037587820.json";
import lottieWhyUs from "@/assets/Animation-whyus.json";
import lottieSignup from "@/assets/Animation - login.json";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";

type Props = {};

const WelcomeDetails = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="bg-[#AD7DF9] flex flex-row items-center p-4 max-md:flex-col">
        <Lottie
          animationData={lottieData}
          className="w-[60%]"
          loop={false}
          width={250}
          height={300}
          classID="z-1"
        />
        <div className="flex flex-col justify-end items-center bg-white w-[50%] p-4 rounded-lg max-md:w-[90%]">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
            St. David
          </h4>
          <span className="text-2xl md:text-3xl italic text-gray-600">
            University
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-9 p-4 w-full items-center">
        <div className="flex flex-col items-start justify-start gap-2 w-[98%] mx-auto mt-3 mb-5 ">
          <h3 className="text-2xl mb-4">Featured Links</h3>
          <ul className=" flex flex-row gap-7 ite-center mspace-y-4 list-none cursor-pointer max-sm:flex-col">
            <li className="flex items-center space-x-3 border-b border-gray-300 text-red-500 pb-2 ">
              <PlayCircle className="w-4 h-4" />
              <Link href="#" className="text-sm">
                Undergraduate Portal
              </Link>
            </li>
            <li className="flex items-center space-x-3 border-b border-gray-300 text-blue-500 pb-2 ">
              <PlayCircle className="w-4 h-4" />
              <p className="text-sm">E- Transcript</p>
            </li>
            <li className="flex items-center space-x-3 border-b border-gray-300 hover:text-blue-500 pb-2">
              <PlayCircle className="w-4 h-4" />
              <p className="text-sm">Result Verification</p>
            </li>
            <Link
              href="/login"
              className="flex items-center space-x-3 border-b border-gray-300 hover:text-blue-500 pb-2"
            >
              <PlayCircle className="w-4 h-4" />
              <p className="text-sm">Staff Portal</p>
            </Link>
          </ul>
        </div>
        <div className="hidden flex-col max-md:w-[40%] max-sm:flex">
          {/* <h4>Click on A Link to Get Started</h4> */}
          <Lottie
            animationData={lottieSignup}
            className="w-[90%]"
            loop={true}
            width={200}
            height={300}
            classID="z-1"
          />
        </div>
      </div>
      <h4 className="flex flex-row w-full items-center justify-center p-3 text-slate-500 font-bold text-5xl gap-2 underline">
        Why Us ? <BiConfused />{" "}
      </h4>
      <Card className="flex flex-col items-center justify-between gap-2 p-3   w-[97%] mx-auto mt-3 ">
        <div className="flex flex-row items-center justify-between gap-2 max-md:flex-col ">
          <p className="w-[50%] p-2 font-medium text-lg text-center  max-md:w-[95%]  max-md:text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quia veniam quidem vel corrupti eveniet aliquid saepe adipisci
            placeat, qui exercitationem non, doloremque voluptatum cupiditate.
            Eveniet reprehenderit praesentium doloribus pariatur quod, ex iusto
            cumque suscipit vero error excepturi quisquam nesciunt!
          </p>
          <Lottie
            animationData={lottieWhyUs}
            className="w-[60%]"
            loop={true}
            width={250}
            height={300}
            classID="z-1"
          />
        </div>
      </Card>
    </div>
  );
};

export default WelcomeDetails;
