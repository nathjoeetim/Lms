import ResetPassword from "@/components/auth/ResetPassword";
import React from "react";

// type Props = {
//   searchParams: {
//     [key: string]: string | string[] | undefined;
//   };
// };

const ResetPasswordPage = () => {
  //   const activationToken = searchParams["verify"] ?? "";

  return (
    <div className="w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center">
      <div>{/* <ResetPassword activationToken={activationToken} /> */}</div>
    </div>
  );
};

export default ResetPasswordPage;
