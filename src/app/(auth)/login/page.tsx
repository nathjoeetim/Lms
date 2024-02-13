"use client";
import Login from "@/components/Login";
import AuthScreen from "@/screens/AuthScreen";
import React, { useState } from "react";
import RegistrationForm from "../signup/registrationForm";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center">
      <div>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
