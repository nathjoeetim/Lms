"use client";
import { Card } from "@/components/ui/card";
import {
  DataTableDemo,
  TableContentAliese,
} from "@/components/selectableTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaSquarePlus } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { InnerOptions, OnSelectSectionComponent } from "../admission/page";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SubTitleComponent } from "../page";
import FacultyComponent from "@/components/facultyTable";

const data: TableContentAliese[] = [
  {
    id: "m5gr84i9",
    number: 316,
    name: "Clinical Sci",
    status: "Bsc",
    leader_name: "Sifon David",
  },
  {
    id: "3u1reuv4",
    number: 242,
    name: "Law",
    status: "Bsc",
    leader_name: "Uwana David",
  },
  {
    id: "derv1ws0",
    name: "Buiness Mgt",
    number: 837,
    status: "Bsc",
    leader_name: "Richard Friday",
  },
  {
    id: "5kma53ae",
    name: "Agric Sci",
    number: 874,
    status: "Bsc",
    leader_name: "Solomon Samuel",
  },
  {
    id: "bhqecj4p",
    number: 721,
    name: "Med Lab",
    status: "Bsc",
    leader_name: "Nse-Obong Friday",
  },
];

const columns: ColumnDef<TableContentAliese>[] = [
  {
    id: "select",
    // useServer
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Qualification",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "leader_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Head Of Dept
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("leader_name")}</div>
    ),
  },
  {
    accessorKey: "number",
    header: () => <div className="text-left">No. of Student</div>,
    cell: ({ row }) => {
      const amount = row.getValue("number");

      // // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div className="text-left font-medium">{row.getValue("number")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const TableContentAlieses = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(TableContentAlieses.leader_name)
              }
            >
              Copy HOD name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Students</DropdownMenuItem>
            <DropdownMenuItem>View Courses</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function DepartmentComponent() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier="> Departments & Faculties"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card
        className={`flex flex-col justify-start items-start  w-[97%] mx-auto px-2 transition-height duration-300 `}
      >
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {" "}
              <div className="flex flex-rol items-center gap-3 pb-1 w-full p-4 box-border justify-between">
                <h5 className="font-normal text-xl">Departments</h5>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-rol items-center justify-end gap-3  w-full p-4 box-border">
                <h5 className="flex flex-row items-center justify-centerfont-normal text-sm bg-slate-600 p-1 text-slate-200 rounded-sm cursor-pointer hover:shadow-md ">
                  <AddDepartmentAlertDialog />
                </h5>
              </div>
              <div className="p-3 w-full">
                <DataTableDemo columns={columns} data={data} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
      <FacultyComponent />
    </div>
  );
}

export default DepartmentComponent;

export function AddDepartmentAlertDialog() {
  const [onSelectedFaculty, setSelectedFaculty] = useState<string>("");
  const [onSelectedHOD, setSelectedHOD] = useState<string>("");
  const facultyOption: InnerOptions[] = [
    {
      content: "Management Science",
    },
    {
      content: "Law",
    },
    {
      content: "Clinical Science",
    },
  ];  
  const Staff: InnerOptions[] = [
    {
      content: "SAMUEL",
    },
    {
      content: "Ubong",
    },
 
  ];
  return (
    <AlertDialog>
      <AlertDialogTrigger>Add Department</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex felx-row gap-2 items-center ">
              <FaSquarePlus size={18} className="text-slate-700" />
              <h5 className="text-slate-700 font-medium ">Add Department</h5>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="p-1 ">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Faculty
                </h4>
                <OnSelectSectionComponent
                  placeHolder="Select Faculty"
                  options={facultyOption}
                  onGetSelectedValueHandeler={setSelectedFaculty}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Name Of Department
                </h4>
                <Input placeholder="Department name" />
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="flex flex-col items-start justify-start w-[30%] gap-0">
                  <h4 className="text-base font-semibold text-gray-800">
                    Level
                  </h4>
                  <Input
                    placeholder="100 Level"
                    className="bg-transparent text-slate-700 cursor-not-allowed outline-none focus:outline-none"
                    readOnly
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[50%] gap-0">
                  <h4 className="text-base font-semibold text-gray-800">
                    Program Duration
                  </h4>
                  <Input
                    placeholder="E.g. 4 Years"
                    className="bg-transparent text-slate-700 outline-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Qualification
                </h4>
                <Input placeholder="E.g. Bachelor of Science (Bsc)" />
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Head of Department
                </h4>
                <OnSelectSectionComponent
                  placeHolder="Select Staff"
                  options={Staff}
                  onGetSelectedValueHandeler={setSelectedHOD}
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
