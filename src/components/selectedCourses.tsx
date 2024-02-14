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
import {
  DataTableDemo,
  TableContentAliese,
} from "@/components/selectableTable";

const data: TableContentAliese[] = [
  {
    id: "29372863",
    name: "Introduction To Clinical Sci (CS102)",
    status: 70,
    number: 2,
    leader_name: "Sam David",
  },
  {
    id: "29363",
    name: "Clinical Sci (FCS111)",
    status: 70,
    number: 100,
    leader_name: "Musa Stally",
  },
  {
    id: "29369343",
    name: "Clinical Statistics (FCS203)",
    status: 100,
    number: 4,
    leader_name: "Stanly David",
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

      // // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

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
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Acridation Number
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Students</DropdownMenuItem>
            <DropdownMenuItem>View Courses Outline</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function SelectedDepartmentCourse() {
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
          Clinical Science
        </h4>
        <DataTableDemo columns={columns} data={data} />
      </div>
    </Card>
  );
}

export default SelectedDepartmentCourse;
