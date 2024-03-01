"use client";
import Login from "@/components/auth/Login";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex flex-col w-full fixed top-0 left-0 h-screen z-50  items-center justify-center">
      <Login />
    </div>
  );
};

export default LoginPage;
