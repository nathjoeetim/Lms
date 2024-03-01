"use client";
import DataTableDemo from "@/components/selectableTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DepartmentType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { FetchData } from "@/redux/fetchCurrentUserData";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

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
          Lecturer Name
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
          Staff Id
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
    header: () => <div className="text-left">designation</div>,
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
              lecturer ID
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

function AllLecturersListComponent() {
  const allDepartmentData = useSelector(
    (store: any) => store.currentUserGetter.allDepartment
  );
  const [department, setDepartment] = useState<DepartmentType[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    FetchData(dispatch, router);
    setDepartment(allDepartmentData);
  }, [allDepartmentData, dispatch, router]);

  return (
    <div className="p-3 w-full">
      <DataTableDemo columns={columns} data={department} />
    </div>
  );
}

export default AllLecturersListComponent;
