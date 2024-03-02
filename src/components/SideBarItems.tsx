"use client";

import { GoHome } from "react-icons/go";
import { ImUserPlus } from "react-icons/im";
import { MdPeople } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";

import React, { useEffect, useRef, useState } from "react";
import SubSideBarComponent from "./subSideBar";
// import SubSideBarComponent from "";

type MenuItemAliases = {
  icon: React.ComponentType<{ size?: number | string }>;
  text: string;
  link: string;
};
// {React.createElement(menuItem.icon)}
function SideBarItemsComponent() {
  const [onSubIndex, onSetSubIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  useEffect(() => {
    const container = containerRef.current;
    setSelectedMenuIndex(0);

    if (container) {
      if (container.scrollHeight <= container.clientHeight) {
        container.classList.remove("overflow-y-scroll");
      } else {
        container.classList.add("overflow-y-scroll");
      }
    }
  }, []);

  const MenuItems: MenuItemAliases[] = [
    {
      icon: GoHome,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: ImUserPlus,
      text: "Admission",
      link: "#",
    },
    {
      icon: MdPeople,
      text: "People",
      link: "#",
    },
    {
      icon: GiNotebook,
      text: "Academics",
      link: "#",
    },
    {
      icon: AiOutlineLaptop,
      text: "LMS",
      link: "#",
    },
    {
      icon: TiContacts,
      text: "Results",
      link: "#",
    },
    {
      icon: GiTakeMyMoney,
      text: "Finance",
      link: "#",
    },
    {
      icon: BsThreeDots,
      text: "Admin",
      link: "#",
    },
    // Add more menu items as needed
  ];

  function onItemIsClicked(index: number) {
    onSetSubIndex(index);
    setSelectedMenuIndex(index);
  }

  return (
    <div className="flex flex-row mt-2 h-[88%]">
      <div className="flex flex-col w-36 border border-gray-400 h-[90%] gap-2 400  overflow-y-scroll overflow-x-hidden custom-scrollbar">
        {MenuItems.map((value: MenuItemAliases, index: number) => {
          const isSelected = index === selectedMenuIndex;
          return (
            <div
              key={index}
              className={`flex flex-row justify-start items-center gap-1 cursor-pointer w-full border-b-2 border-gray-400 ${
                isSelected ? "bg-slate-400-200 text-indigo-400" : ""
              }`}
              onClick={() => onItemIsClicked(index)}
            >
              <span
                className={`h-14 w-1 ${
                  isSelected ? "bg-red-200" : "bg-indigo-300"
                } hover:bg-indigo-600`}
              />
              <div className="flex flex-col items-center w-20 text-sm text-gray-500 justify-center">
                {React.createElement(value.icon, { size: 20 })}
                {value.text}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="w-full box-border border-t border-b border-gray-400 h-[90%] overflow-x-hidden custom-scrollbar"
        ref={containerRef}
      >
        <SubSideBarComponent onSelectedIndex={onSubIndex} />
      </div>
    </div>
  );
}

export default SideBarItemsComponent;
