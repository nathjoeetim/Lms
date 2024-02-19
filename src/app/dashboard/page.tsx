"use client";
import DashBoardCard from "@/components/dashBoardItems/dashBoardCard";
import DashBoardSummaryCards from "@/components/dashBoardItems/dashBoardSummary";
import FeesTopComponent from "@/components/dashBoardItems/feesTopComponent";
import NewAndEventComponent from "@/components/dashBoardItems/new/newsContainer";
import OtherFeesCardComponent from "@/components/dashBoardItems/otherFeesCardComponent";
import PopulationDistributionComponent from "@/components/dashBoardItems/populationDistribution";
import { FetchData } from "@/redux/fetchCurrentUserData";

import { auth_token } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SubTitleComponent from "@/components/subTitle";

function DashBoardComponent() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(auth_token)) {
      console.log("auth_token exists");
      FetchData(dispatch);
      return;
    } else {
      console.log("auth_token does not exist");
      router.push("/login");
    }
  });

  return (
    <div className="w-full flex flex-col items-start   gap-4  overflow-y-scroll overflow-x-hidden custom-scrollbar  box-border">
      <SubTitleComponent
        pageIdentifier="Admin Dashboard"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <DashBoardSummaryCards />
      <DashBoardCard />
      <FeesTopComponent />
      <OtherFeesCardComponent />
      <NewAndEventComponent />
      <PopulationDistributionComponent />
    </div>
  );
}

export default DashBoardComponent;
