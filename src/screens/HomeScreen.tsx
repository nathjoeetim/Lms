import Header from "@/components/Layout/Header";
import Programs from "@/components/Programs";
import WelcomeDetails from "@/components/WelcomeDetails";
import React from "react";
import "@/app/globals.css";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <Header />
      <div className="flex h-[89vh] flex-col overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <WelcomeDetails />
        <div className="flex-grow overflow-y-auto">
          <Programs />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
