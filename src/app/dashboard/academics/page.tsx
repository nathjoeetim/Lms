"use client";
import { Card } from "@/components/ui/card";
import DataTableDemo from "@/components/selectableTable";
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
import OnSelectSectionComponent from "@/components/selectedSection";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { SubTitleComponent } from "../page";
import FacultyComponent from "@/components/facultyTable";
import { useDispatch } from "react-redux";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useSelector } from "react-redux";
import { DepartmentType, FacultyType, LecturerType } from "@/utils/types";
import useInputValidator, { isNotEmpty } from "@/screens/inputAuth";
import { auth_token } from "@/utils/constant";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import { AddDepartmentURL } from "@/utils/network";

const columns: ColumnDef<DepartmentType>[] = [
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
    accessorKey: "qualification",
    header: "Qualification",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("qualification")}</div>
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
    accessorKey: "department_head",
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
      <div className="lowercase">{row.getValue("department_head")}</div>
    ),
  },
  {
    accessorKey: "short_name",
    header: () => <div className="text-left">No. of Student</div>,
    cell: ({ row }) => {
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
              onClick={() =>
                navigator.clipboard.writeText(row.original.department_head)
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
  const dispatch = useDispatch();
  const router = useRouter();
  const allDepartmentData = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const [department, setDepartment] = useState<DepartmentType[]>([]);

  useEffect(() => {
    if (localStorage.getItem(auth_token)) {
      FetchData(dispatch).then(() => setDepartment(allDepartmentData));
    } else {
      router.push("/login");
    }
  });

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
                <DataTableDemo columns={columns} data={department} />
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

function AddDepartmentAlertDialog() {
  const { axiosHandler } = useAxios();
  const dispatch = useDispatch();
  const allFaculties: FacultyType[] = useSelector(
    (store: any) => store.currentUserGetter.allFaculties
  );

  const allLecturers: LecturerType[] = useSelector(
    (store: any) => store.currentUserGetter.allLectures
  );

  const [inSelectedFaculty, setSelectedFaculty] = useState<string>("All");
  const [faulty, setFaulty] = useState<string[]>([]);
  const [onSelectedHOD, setSelectedHOD] = useState<string>("");
  const [hodOption, setHodOption] = useState<string[]>([]);
  useEffect(() => {
    FetchData(dispatch);
    const allFacultiesName = allFaculties.map((data: FacultyType) => data.name);
    const allDepartmentLecturerName = allLecturers.map(
      (data: LecturerType) => data.user
    );
    setHodOption(allDepartmentLecturerName);
    setFaulty(allFacultiesName);
  }, [allFaculties, allLecturers, dispatch]);

  const {
    inputState: deparetmentInputValue,
    onChangeHandlerFn: departmentHandelerFn,
    inputIsBlur: departmentIsTouched,
    inputIsBlurFn: departmentIsBluredHanderFn,
    inputIsValid: departmentIsValid,
    hasNoError: departmentHasNoError,
    clearInputValue: onClearDepartmentInputFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: durationInputValue,
    onChangeHandlerFn: durationHandelerFn,
    inputIsBlur: durationIsTouched,
    inputIsBlurFn: durationIsBluredHanderFn,
    inputIsValid: durationIsValid,
    hasNoError: durationHasNoError,
    clearInputValue: onCleardurationInputFn,
  } = useInputValidator(isNotEmpty);

  const {
    inputState: qualificationInputValue,
    onChangeHandlerFn: qualificationHandelerFn,
    inputIsBlur: qualificationIsTouched,
    inputIsBlurFn: qualificationIsBluredHanderFn,
    inputIsValid: qualificationIsValid,
    hasNoError: qualificationHasNoError,
    clearInputValue: onClearqualificationInputFn,
  } = useInputValidator(isNotEmpty);

  type addDepartmentSheme = {
    faculty_name: string;
    duration: string;
    deparment: string;
    department_head: string;
    qualification: string;
    level: string;
  };

  const CreateDepartmentData: addDepartmentSheme = {
    deparment: deparetmentInputValue,
    department_head: onSelectedHOD,
    duration: durationInputValue,
    faculty_name: inSelectedFaculty,
    qualification: qualificationInputValue,
    level: "400 Level",
  };

  async function onSubmit(data: addDepartmentSheme) {
    const isValid =
      departmentIsValid &&
      durationIsValid &&
      qualificationIsValid &&
      inSelectedFaculty.trim() !== "" &&
      onSelectedHOD.trim() !== "";

    if (isValid) {
      console.log("form is valid");
    }
  }

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
                  options={faulty}
                  onGetSelectedValueHandeler={setSelectedFaculty}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Name Of Department
                </h4>
                <Input
                  placeholder="Department name"
                  value={deparetmentInputValue}
                  onChange={departmentHandelerFn}
                  onBlur={departmentIsBluredHanderFn}
                />
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
                    value={durationInputValue}
                    onChange={durationHandelerFn}
                    onBlur={durationIsBluredHanderFn}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Qualification
                </h4>
                <Input
                  placeholder="E.g. Bachelor of Science (Bsc)"
                  value={qualificationInputValue}
                  onChange={qualificationHandelerFn}
                  onBlur={qualificationIsBluredHanderFn}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[90%] gap-0">
                <h4 className="text-base font-semibold text-gray-800">
                  Head of Department
                </h4>
                <OnSelectSectionComponent
                  placeHolder="Select Staff"
                  options={hodOption}
                  onGetSelectedValueHandeler={setSelectedHOD}
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(CreateDepartmentData)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
