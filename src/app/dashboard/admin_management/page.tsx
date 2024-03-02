"use client";
import SubTitleComponent from "@/components/subTitle";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "@/app/globals.css";
import { useState } from "react";
import OnSelectSectionComponent from "@/components/selectedSection";

function ManageAdminComponent() {
  const [admin, setAdmin] = useState([
    {
      name: "Jonas Samuel",
      title: "Dean",
    },
    {
      name: "Samuel David",
      title: "PHD",
    },
    {
      name: "Bassey Udo",
      title: "Dean",
    },
  ]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier=" > Manage Admin"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <div className="flex flex-row  w-[97%] mx-auto mb-[20px] gap-4">
        <Card className="flex flex-col items-start p-2 justify-start font-bold text-xl text-slate-500 w-[50%] max-h-[380px]  overflow-y-scroll overflow-x-hidden custom-scrollbar">
          {" "}
          <h4 className="flex felx-row items-center justify-center w-full mb-3">
            School Admin{" "}
          </h4>
          {admin.map((element, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-between w-full gap-2 mt-4 cursor-pointer hover:bg-slate-300 p-3 rounded-sm"
              >
                <div className="flex flex-row items-center justify-start w-full gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col w-[180px]">
                    <h4 className="text-lg font-semibold m-0 p-0">
                      {element.name}
                    </h4>
                    <h6 className="text-sm font-normal m-0 p-0">
                      {element.title}
                    </h6>
                  </div>
                </div>
                <Edit />
              </div>
            );
          })}
        </Card>
        <Card className="flex flex-col items-center justify-start text-slate-500 w-[50%] gap-5">
          {" "}
          <h4 className="text-xl text-slate-500 font-semibold mt-2 mb-5">
            Choose Admin{" "}
          </h4>
          <div className="flex flex-col w-[160px]">
            <h5>Select Department</h5>
            <OnSelectSectionComponent
              onGetSelectedValueHandeler={setSelectedDepartment}
              options={["English", "French"]}
              placeHolder="Select Department"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ManageAdminComponent;

function Edit() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Edit Status</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Contact users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Phone call</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
