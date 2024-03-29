"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "@/app/globals.css";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import HeaderDashboard from "../../components/dashBoardHeader";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { UserInterfaceActions } from "@/redux/ui";
import SideBarItemsComponent from "@/components/SideBarItems";
import { useRouter } from "next/navigation";
import LogoutButton from "@/hooks/useLogout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HashSpinner } from "@/components/loader";

export interface Metadata {
  title: string;
  // describe: string;
}

interface SideBarContainerProps {
  $isVisible: boolean;
}

const metadata: Metadata = {
  title: " Admin Sch DashBoard",
  // describe: 'user '
};

interface RootLayoutProps {
  children: ReactNode;
}

const DashBoardLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const sideBarState = useSelector((store: any) => store.ui.showSideBar);
  const User = useSelector((store: any) => store.currentUserGetter.currentUser);
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  // Effect to handle window resize and update sidebar visibility
  useEffect(() => {
    // this gets rid of hydration error waits for the component to mount
    setIsMounted(true);
    // Function to handle window resize
    function handleResize() {
      // Get the current screen width
      const screenWidth = window.innerWidth;

      // Adjust visibility based on screen width
      if (screenWidth >= 1264) {
        dispatch(UserInterfaceActions.onShowSideBar(true));
      } else {
        dispatch(UserInterfaceActions.onShowSideBar(false));
      }
    }

    // Initial setup on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, isMounted]);

  function hideSideBarHandeer() {
    dispatch(UserInterfaceActions.onTooggleSideBarMenu());
  }

  return (
    <>
      {isMounted ? (
        <div
          className={`flex flex-row bg-[#F0F2F5] w-full h-screen ${
            isMounted ? "loaded" : ""
          }`}
        >
          <SideBarContainer
            $isVisible={sideBarState}
            className={` flex flex-col gap-2 border-r border-solid border-gray-500 box-border bg-white ${
              sideBarState ? "min-w-72 max-w-72" : "w-0"
            }`}
          >
            <div className="flex flex-row items-center gap-1 w-full  justify-between p-2 transition duration-300 ease-in-out  shadow-sm ">
              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center rounded-full bg-blue-200 p-2">
                  <FaUser size={25} style={{ color: "white" }} />
                </div>
                <div className="flex flex-col gap-0">
                  <h4 className="text-black-400 text-base font-bold font-serif">
                    {User.first_name}
                  </h4>
                  <h6 className="text-gray-500 text-xs font-light font-serif">
                    {User.email}
                  </h6>
                </div>
              </div>
              <DropDownMenu />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-sm py-2 px-2 pl-10 focus:outline-none focus:ring focus:border-blue-100 transition duration-300 ease-in-out "
                />
                <div className="absolute left-2 top-2">
                  <FaSearch size={15} className="text-gray-500" />
                </div>
              </div>
            </div>
            <SideBarItemsComponent />
            <div
              onClick={hideSideBarHandeer}
              className="flex flex-row item-center h-12 w-11 absolute top-0 bg-[#66EECE] right-[-45px]"
            >
              <div className="flex flex-row items-center justify-center cursor-pointer border-r border-solid border-gray-500 h-full w-11">
                {sideBarState ? (
                  <MdOutlineKeyboardDoubleArrowLeft
                    size={26}
                    style={{ color: "gray" }}
                  />
                ) : (
                  <MdOutlineKeyboardDoubleArrowRight
                    size={26}
                    style={{ color: "gray" }}
                  />
                )}
              </div>
            </div>
          </SideBarContainer>
          <div className="absolute flex flex-col p-3 bg-slate-600 bottom-2 items-center justify-center right-[-1rem] transform -translate-x-1/2 rounded-lg opacity-75 z-50 cursor-pointer hover:opacity-100">
            <PiDesktopTowerDuotone size={23} color="white" />
            <h4 className="text-slate-50">E-class</h4>
          </div>
          <div className="flex flex-col flex-1">
            <HeaderDashboard />
            {children}
          </div>
        </div>
      ) : (
        <HashSpinner />
      )}
    </>
  );
};

export default DashBoardLayout;

export const DropDownMenu = () => {
  const render = useRouter();

  function onViewUserProfileFn() {
    render.push("/dashboard/profile");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MdOutlineKeyboardArrowDown
          style={{ color: "black" }}
          className="cursor-pointer "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={onViewUserProfileFn}
          className="flex row gap-2"
        >
          {" "}
          <FaUser size={11} style={{ color: "grey" }} />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="flex row gap-2">
          {" "}
          <GiPadlock size={11} style={{ color: "grey" }} />
          Lock Screen
        </DropdownMenuItem>
        <DropdownMenuItem className="mb-2 flex row gap-2">
          <LogoutButton />
        </DropdownMenuItem>
        <Button className="w-full">Setting</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SideBarContainer = styled.div<SideBarContainerProps>`
  height: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-80rem")});
  transition: opacity 1s ease-in-out, transform 0.3s ease-in-out, left 0.3s ease;

  @media screen and (max-width: 1264px) {
    z-index: 1000;
    position: absolute;
    left: 0;
  }
`;
