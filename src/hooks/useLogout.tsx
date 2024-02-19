"use client";
import { Button } from "@/components/ui/button";
import { auth_token } from "@/utils/constant";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

// Define your functional component

export const HandleLogOut = (router: any) => {
  localStorage.removeItem(auth_token);
  router.replace("/login");
};
const LogoutButton = () => {
  const router = useRouter();

  return (
    <Button
      className="rounded-full"
      size="icon"
      variant="ghost"
      onClick={() => HandleLogOut(router)}
    >
      <LogOutIcon className="w-6 h-6" />
      <span className="sr-only">LogOut</span>
    </Button>
  );
};

export default LogoutButton; // Export your component
