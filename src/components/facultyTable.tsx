"use client";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataTableDemo, TableContentAliese } from "@/components/selectableTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FaSquarePlus } from "react-icons/fa6";
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
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InnerOptions, OnSelectSectionComponent } from "@/app/dashboard/admission/page";
import useAxios from "@/hooks/useAxios";
import { FacultyType, PaginatedType } from "@/utils/types";
import { FacultiesUrl } from "@/utils/network";
import { auth_token } from "@/utils/constant";


const data: TableContentAliese[] = [
  {
    id: "m5gr84i9",
    number: 316,
    name: "Science",
    status: "Bsc",
    leader_name: "Jonas samuel",
  },
  {
    id: "3u1reuv4",
    number: 242,
    name: "Law",
    status: "Bsc",
    leader_name: "Dewen samuel",
  },
  {
    id: "derv1ws0",
    name: "Management Science",
    number: 837,
    status: "Bsc",

    leader_name: "Manny law",
  },
  {
    id: "5kma53ae",
    name: "Art",
    number: 874,
    status: "Bsc",

    leader_name: "Friday Sunday",
  },
  {
    id: "bhqecj4p",
    number: 721,
    name: "Social Science",
    status: "Bsc",

    leader_name: "David Rid",
  },
  {
    id: "jandajbjh",
    number: 4321,
    name: "Education",
    status: "Bsc",
    leader_name: "Etoro John",
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
          Faculty Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "leader_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dean
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
    header: () => <div className="text-left">No. of Lectures</div>,
    cell: ({ row }) => {
      const amount = row.getValue("number");

      // // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div className="text-left font-medium">
          {row.getValue("number")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const TableContentAliese = row.original;

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
                navigator.clipboard.writeText(TableContentAliese.leader_name)
              }
            >
              Copy Lectures Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Lectures</DropdownMenuItem>
            <DropdownMenuItem>View Department</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function FacultyComponent() {
  // const token = localStorage.getItem(auth_token)
  
  const { axiosHandler } = useAxios()

  const getFaculties = async () => {
  
    const response = await axiosHandler<PaginatedType<FacultyType>>(FacultiesUrl, "get", null, true)
    if (response) {
      console.log(response.results)
    }
  }

  useEffect(() => {
    getFaculties()
  
  }, [])
  

  return (
    <Card
      className={`flex flex-col justify-start items-start  w-[97%] mx-auto px-2 transition-height duration-300 mb-9 `}
    >
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {" "}
            <div className="flex flex-rol items-center gap-3 pb-1 w-full p-4 box-border justify-between">
              <h5 className="font-normal text-xl">Faculty</h5>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-rol items-center justify-end gap-3  w-full p-4 box-border">
              <h5 className="flex flex-row items-center justify-centerfont-normal text-sm bg-slate-600 p-1 text-slate-200 rounded-sm cursor-pointer hover:shadow-md ">
                <AddFacultyAlertDialog />
              </h5>
            </div>
            <div className="p-3 w-full">
              <DataTableDemo data={data} columns={columns} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default FacultyComponent;

export function AddFacultyAlertDialog() {
  const [onSelectedHOD, setSelectedDean] = useState<string>("");
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
      <AlertDialogTrigger>Add Faculty</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex felx-row gap-2 items-center ">
              <FaSquarePlus size={18} className="text-slate-700" />
              <h5 className="text-slate-700 font-medium ">Add Faculty</h5>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="p-1 ">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Faculty Name
                </h4>
                <Input placeholder="Faculty Name" />
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Dean
                </h4>
                <OnSelectSectionComponent
                  placeHolder="Select"
                  options={Staff}
                  onGetSelectedValueHandeler={setSelectedDean}
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