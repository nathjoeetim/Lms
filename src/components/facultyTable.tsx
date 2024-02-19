"use client";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DataTableDemo from "@/components/selectableTable";
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
import useAxios from "@/hooks/useAxios";
import { FacultyType } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import useInputValidator, { isNotEmpty } from "@/screens/inputAuth";

const columns: ColumnDef<FacultyType>[] = [
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
    accessorKey: "departments",
    header: "No. of Department",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("departments").length}</div>
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
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "dean",
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
    cell: ({ row }) => <div className="lowercase">{row.getValue("dean")}</div>,
  },
  {
    accessorKey: "short_name",
    header: () => <div className="text-left">Short Name</div>,
    cell: ({ row }) => {
      // // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return (
        <div className="text-left font-medium">
          {row.getValue("short_name")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
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
              onClick={() => navigator.clipboard.writeText(row.original.name)}
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
  const onGetAllFaculties = useSelector(
    (store: any) => store.currentUserGetter.allFaculties
  );
  const dispatch = useDispatch();
  const [faculties, setFaculty] = useState<FacultyType[]>([]);

  useEffect(() => {
    setFaculty(onGetAllFaculties);
  }, [onGetAllFaculties]);

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
              <DataTableDemo data={faculties} columns={columns} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default FacultyComponent;

export function AddFacultyAlertDialog() {
  const {
    inputState: facultyInputValue,
    inputIsBlur: facultyInputIsBlur,
    inputIsValid: facultyInputIsVaid,
    inputIsBlurFn: OnFacultyInoutIsBlurFn,
    onChangeHandlerFn: onFacultyNameInputHandelerFn,
    hasNoError: facultyNameHasNoError,
    clearInputValue: onClearFacultyInput,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: shortNameInputValue,
    inputIsBlur: shortNameIsBlur,
    inputIsBlurFn: shortNameIsBluredFn,
    hasNoError: shortNameHasNoError,
    inputIsValid: shortNameIsValid,
    onChangeHandlerFn: onShortNameChangrHandelerFn,
    clearInputValue: onClearShoerNameFunction,
  } = useInputValidator(isNotEmpty);

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
                <Input
                  placeholder="Faculty Name"
                  value={facultyInputValue}
                  onChange={onFacultyNameInputHandelerFn}
                  onBlur={OnFacultyInoutIsBlurFn}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Short Name
                </h4>
                <Input
                  placeholder="Faculty Name"
                  value={shortNameInputValue}
                  onChange={onShortNameChangrHandelerFn}
                  onBlur={shortNameIsBluredFn}
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
