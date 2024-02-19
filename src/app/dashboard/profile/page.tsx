"use client";
import Image from "next/image";
import { SubTitleComponent } from "../page";
import passport from "@/assets/profileImg.jpeg";
import { useSelector } from "react-redux";

function AdminProfileComponent() {
  const userDetails = useSelector(
    (store: any) => store.currentUserGetter.currentUser
  );

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier=">My Profile"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <div className="flex flex-col justify-start items-start w-[97%] mx-auto gap-4">
        <div className="flex flex-row gap-4 items-center justify-start"></div>
        <div className="flex flex-row items-center justify-start gap-5">
          <div className="relative ">
            <Image
              src={passport}
              height={120}
              width={120}
              alt="admin passport "
            />
            <span className="absolute bottom-0  right-0 bg-blue-200 p-1 text-sm font-normal">
              {userDetails.role}
            </span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h6 className="text-xl font-bold text-slate-700 ">
              {userDetails.first_name}
            </h6>
            <h6 className="text-xs font-normal text-slate-600">
              {userDetails.email}
            </h6>
          </div>
        </div>
        <div
          className="flex flex-col w-full"
          style={{ border: "1px solid black" }}
        >
          <div className="flex flex-row w-[100%] bg-gray-400 px-2">
            <h5 className="w-[160px] font-semibold">Email:</h5>
            <span>{userDetails.email}</span>
          </div>
          <div className="flex flex-row w-[100%] px-2">
            <h5 className="w-[160px] font-semibold">Phone Number:</h5>
            <span>{userDetails.phone}</span>
          </div>
          <div className="flex flex-row w-[100%] bg-gray-400 px-2">
            <h5 className="w-[160px] font-semibold">Nationality:</h5>
            <span>{userDetails.nationality}</span>
          </div>
          <div className="flex flex-row w-[100%] px-2">
            <h5 className="w-[160px] font-semibold">Gender:</h5>
            <span>{userDetails.gender}</span>
          </div>
          <div className="flex flex-row w-[100%] bg-gray-400 px-2">
            <h5 className="w-[160px] font-semibold">Residential Address:</h5>
            <span>{userDetails.home_address}</span>
          </div>
          <div className="flex flex-row w-[100%] px-2">
            <h5 className="w-[160px] font-semibold">Religion:</h5>
            <span>{userDetails.religion}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileComponent;
