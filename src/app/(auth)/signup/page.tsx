"use client";
import React from "react";
import RegistrationForm from "./registrationForm";
import Link from "next/link";

type Props = {};

const SignupComponent = (props: Props) => {

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar  box-border">
      <div className="flex flex-col h-[100%] mt-3 mb-3">
          <RegistrationForm />
					<Link href="/login" className="flex felx-row w-[90%] mx-auto text-sm underline cursor-pointer text-blue-500">
						Have An Account ? Login
					</Link>
      </div>
    </div>
  );
};

export default SignupComponent;
