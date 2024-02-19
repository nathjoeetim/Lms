import { Card } from "@/components/ui/card";
import { IoFilterOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
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
import DataTableDemo from "@/components/selectableTable";
import { DepartmentType } from "@/utils/types";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

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
    accessorKey: "status",
    header: "Pass Mark",
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
          Course Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "leader_name",
    header: ({ column }) => {
      return <div className="text-right">Course Lecturer</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("leader_name")}</div>
    ),
  },
  {
    accessorKey: "number",
    header: () => <div className="text-right">Credit Unit</div>,
    cell: ({ row }) => {
      const amount = row.getValue("number");
      return (
        <div className="text-right font-medium">{row.getValue("number")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Students</DropdownMenuItem>
            <DropdownMenuItem>View Courses Outline</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function SelectedDepartmentCourse(props: { deptCourse: DepartmentType }) {
  const { deptCourse } = props;
  const selectedCourseName = deptCourse?.courses;

  return (
    <Card className="flex flex-col justify-start items-start  w-[97%] mx-auto p-3">
      <div className="flex flex-rol items-center gap-3 w-full p-2 box-border">
        <TfiMenuAlt size={18} />
        <h5 className="font-normal text-lg">Courses</h5>
      </div>
      <div className="flex flex-col gap-2 w-full ">
        <div className="flex flex-row items-center gap-3 justify-end">
          <div className="flex flex-row items-center justify-centerfont-normal text-sm bg-slate-600 p-1 text-slate-200 rounded-sm cursor-pointer hover:shadow-md ">
            Add Course{" "}
          </div>
          <div className="flex flex-row items-center justify-centerfont-normal text-sm bg-slate-600 p-1 text-slate-200 rounded-sm cursor-pointer hover:shadow-md ">
            Manage Course{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full my-2 gap-4">
        <h4 className="flex flex-row w-full items-center justify-start text-xl font-semibold">
          {deptCourse?.name}
        </h4>
        <DataTableDemo columns={columns} data={selectedCourseName} />
      </div>
    </Card>
  );
}

export default SelectedDepartmentCourse;
