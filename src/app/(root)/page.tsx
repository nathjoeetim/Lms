"use client";
import HomeScreen from "@/screens/HomeScreen";
import LoginPage from "../(auth)/login/page";
import { useEffect } from "react";

import { DepartmentUrl } from "@/utils/network";

const Home = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Home;
