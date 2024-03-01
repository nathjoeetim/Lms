"use client";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";
import { GiNotebook } from "react-icons/gi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { UserInterfaceActions } from "@/redux/ui";

function HeaderDashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const sideBarState = useSelector((store: any) => store.ui.showSideBar);

  // State to manage sidebar visibility
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  // Effect to handle window resize and update sidebar visibility
  useEffect(() => {
    // Function to handle window resize
    function handleResize() {
      // Get the current screen width
      const screenWidth = window.innerWidth;

      // Adjust visibility based on screen width
      setSidebarVisibility(screenWidth <= 730);
      dispatch(UserInterfaceActions.onShowSideBar(true));
    }

    // Initial setup on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]); // Empty dependency array ensures the effect runs only once on mount

  function ontoggleMenu() {
    dispatch(UserInterfaceActions.onTooggleSideBarMenu());
  }

  return (
    <div className="flex flex-row items-center gap-3 w-full bg-white transition duration-300 ease-in-out shadow-lg">
      <div className="flex flex-row items-center justify-center cursor-pointer border-r border-solid border-gray-500 h-full w-11 bg-[#66EECE] ">
        {sideBarState ? (
          <MdOutlineKeyboardDoubleArrowLeft
            size={26}
            style={{ color: "gray" }}
            onClick={ontoggleMenu}
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowRight
            size={26}
            style={{ color: "gray" }}
            onClick={ontoggleMenu}
          />
        )}
      </div>
      <div className="flex flex-row items-center h-full  px-4 justify-between w-full">
        <div className="flex flex-row items-center justify-between gap-5 p-2">
          <span className="text-[1.3rem] font-bold uppercase text-gray-700	 cursor-pointer hover:text-slate-500 overflow-hidden overflow-ellipsis max-w-[20rem] truncate">
            {" "}
            ST. David University
          </span>
          {/* <GoHome size={20} style={{ color: "gray" }} /> */}
        </div>
        <div className="flex felx-row items-center w-[14rem] h-full p-2 box-border justify-evenly">
          <NotificationIcon />
          <QUESTIONIcon />
          <ToolTipFunction />
        </div>
      </div>
    </div>
  );
}

export default HeaderDashboard;

function ToolTipFunction() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <IoIosSearch
            size={18}
            className="cursor-pointer transition-colors duration-300 hover:text-slate-500"
            style={{ color: "black" }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Search...</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function QUESTIONIcon() {
  return (
    <HoverCard>
      <HoverCardTrigger className="w-9 h-full flex justify-center items-center">
        <div className="w-9 h-full flex justify-center items-center bg-transparent rounded-sm hover:bg-slate-400 cursor-pointer ">
          <FaRegQuestionCircle
            size={18}
            style={{ color: "black" }}
            className="cursor-pointer transition-colors duration-300"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-end justify-center pt-6 pb-3 bg-blue-600 font-semibold text-sm text-white">
            Need Help / Support ?
          </div>
          <div className="flex flex-col items-start gap-3 p-3">
            <span className="text-sm text-grey">
              For technical support / help on how to use the school portal:
            </span>
            <Button className="gap-2 rounded-lg w-full p-2 cursor-pointer bg-transparent bg-slate-400 hover:text-slate-200">
              <HiInformationCircle />
              Get Support
            </Button>
          </div>
          <div className="flex flex-col items-start gap-3 p-3">
            <span className="text-sm text-grey">
              For inquries, suggestions, complaints etc. relating to the school:
            </span>
            <Button className="gap-2 rounded-lg w-full p-2 cursor-pointer bg-transparent bg-slate-400 hover:text-slate-200">
              <GiNotebook />
              Send a Message To School
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function NotificationIcon() {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger className="w-9 h-full flex justify-center items-center">
        <div className="w-9 h-full flex justify-center items-center bg-transparent rounded-sm hover:bg-slate-400 cursor-pointer ">
          <FaRegBell
            size={18}
            style={{ color: "black" }}
            className="cursor-pointer transition-colors duration-300"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-start pt-6  pl-4 gap-2 pb-2 bg-blue-600 font-light text-xs text-white">
            <FaRegEnvelope size={16} style={{ color: "white" }} />
            Message
          </div>
          <div className="flex flex-col items-start gap-3 p-3">
            <span className="flex flex-row items-center justify-center text-xs w-full text-grey border-b-[100%] border-b border-gray-300 leading-6">
              No Unread Messages
            </span>
            <div className=" flex flex-row items-end justify-end gap-2  w-full cursor-pointer bg-transparent text-xs text-black">
              Go To Messages
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-row w-full items-center justify-start pt-6  pl-4 gap-2 pb-2 bg-blue-600 font-light text-xs text-white">
              <FaRegEnvelope size={16} style={{ color: "white" }} />
              E-learning
            </div>
            <div className="flex flex-col items-start gap-3 p-2 w-full">
              <span className="flex flex-row  items-center justify-center text-xs w-full text-grey border-b-[100%] border-b border-gray-300 leading-6">
                No unread Classroom Discussions
              </span>
              <div className=" flex flex-row items-end justify-end gap-2  w-full cursor-pointer bg-transparent text-xs text-black">
                Go To E-learning room
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
